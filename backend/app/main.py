from fastapi import FastAPI
from .api import ingestion, analytics, optimizer, communications

app = FastAPI()

app.include_router(ingestion.router, prefix="/ingestion")
app.include_router(analytics.router, prefix="/analytics")
app.include_router(optimizer.router, prefix="/optimizer")
app.include_router(communications.router, prefix="/comms")