from pydantic import BaseModel
import os

class Settings(BaseModel):
    APP_NAME: str = "Eduverse API"
    DEBUG: bool = True
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./eduverse.db")
    DUMMY_TOKEN: str = os.getenv("DUMMY_TOKEN", "secret-token")
    OPENAI_API_KEY: str | None = os.getenv("OPENAI_API_KEY")
    EMBEDDINGS_MODEL: str = "all-MiniLM-L6-v2"

settings = Settings()
