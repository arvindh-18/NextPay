from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .deps import get_db
from ..core.math_solver import solve_fractional_payments
from ..models.transaction import Transaction

router = APIRouter()

@router.post("/solve")
async def run_fractional_optimization(current_cash: float, db: Session = Depends(get_db)):
    txs = db.query(Transaction).filter(Transaction.status != "PAID").all()
    solver_data = [
        {
            "id": t.id,
            "amount_remaining": t.amount_remaining,
            "penalty_rate": t.vendor.penalty_percentage_rate,
            "criticality": t.vendor.criticality_score
        } for t in txs
    ]
    results = solve_fractional_payments(current_cash, solver_data)
    return {"recommendations": results}