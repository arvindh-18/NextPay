from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "NextPay"
    GEMINI_API_KEY: str
    DATABASE_URL: str
    CONFIDENCE_THRESHOLD: float = 0.80
    
    class Config:
        env_file = ".env"

settings = Settings()