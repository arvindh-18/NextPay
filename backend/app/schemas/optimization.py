from pydantic import BaseModel
from typing import List

class FractionalPayment(BaseModel):
    vendor_name: str
    original_amount: float
    recommended_payment: float
    flexibility_index: float

class OptimizationResponse(BaseModel):
    payments: List[FractionalPayment]