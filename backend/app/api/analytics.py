from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .deps import get_db
from ..core.runway_logic import calculate_dtz
from ..models.transaction import Transaction

router = APIRouter()

@router.get("/runway")
async def get_runway_status(current_cash: float, db: Session = Depends(get_db)):
    transactions = db.query(Transaction).filter(Transaction.status != "PAID").all()
    analysis = calculate_dtz(current_cash, transactions)
    return analysis