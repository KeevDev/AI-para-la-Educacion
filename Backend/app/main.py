# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Si ya creaste estos módulos, se usarán; si no, coméntalos de momento.
try:
    from app.core.config import settings  # APP_NAME, DEBUG, etc.
except Exception:
    # Fallback simple para correr sin config aún
    class _Settings:
        APP_NAME = "Eduverse API"
        DEBUG = True
    settings = _Settings()  # type: ignore

# DB (crea tablas al iniciar si usas SQLAlchemy)
try:
    from app.db import Base, engine  # Base declarative, engine
except Exception:
    Base = None
    engine = None

# Routers (inclúyelos a medida que los vayas creando)
# from app.routers import auth, users, courses, practices, tutor, analytics

app = FastAPI(
    title=getattr(settings, "APP_NAME", "Eduverse API"),
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc",
    swagger_ui_parameters={"defaultModelsExpandDepth": -1},
)

# ---- CORS (ajusta origins en prod) ----
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],        # en prod: ["https://tu-dominio.com"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---- Startup: crea tablas si hay Base/engine definidos ----
@app.on_event("startup")
def on_startup():
    if Base is not None and engine is not None:
        try:
            Base.metadata.create_all(bind=engine)
        except Exception as e:
            # No rompas el arranque si aún no definiste modelos
            print(f"[WARN] No se pudo crear tablas: {e}")

# ---- Healthcheck ----
@app.get("/healthz", tags=["_internal"])
def healthcheck():
    return {"status": "ok"}

# ---- Root (opcional) ----
@app.get("/", tags=["_internal"])
def root():
    return {
        "name": getattr(settings, "APP_NAME", "Eduverse API"),
        "version": "0.1.0",
        "docs": "/docs",
        "health": "/healthz",
    }

# ---- Incluye routers cuando los tengas listos ----
# app.include_router(auth.router, prefix="/auth", tags=["auth"])
# app.include_router(users.router, prefix="/users", tags=["users"])
# app.include_router(courses.router, prefix="/courses", tags=["courses"])
# app.include_router(practices.router, prefix="/practices", tags=["practices"])
# app.include_router(tutor.router, prefix="/tutor", tags=["tutor-ia"])
# app.include_router(analytics.router, prefix="/analytics", tags=["analytics"])
