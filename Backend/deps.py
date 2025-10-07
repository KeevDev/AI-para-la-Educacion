from fastapi import Depends, HTTPException, Header
from sqlalchemy.orm import Session
from app.db import SessionLocal
from app.core.config import settings
from app import models

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

async def get_current_user(authorization: str | None = Header(default=None), db: Session = Depends(get_db)):
    """
    Hackathon auth: usa un header Authorization: Bearer <token>
    y un query param ?user_id=1 para simular login.
    """
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing Bearer token")
    token = authorization.split(" ", 1)[1].strip()
    if token != settings.DUMMY_TOKEN:
        raise HTTPException(status_code=401, detail="Invalid token")

    # Usuario por defecto (id=1) si no existe
    user = db.query(models.User).first()
    if not user:
        user = models.User(name="Demo User", email="demo@eduverse.local", role="student", grade="Universitario")
        db.add(user); db.commit(); db.refresh(user)
    return user
