from pydantic import BaseModel
from datetime import datetime

class InvoiceOCR(BaseModel):
    vendor_name: str
    total_amount: float
    due_date: datetime
    confidence_score: float