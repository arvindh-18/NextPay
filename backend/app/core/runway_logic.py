from datetime import datetime

def calculate_dtz(current_cash: float, transactions: list):
    sorted_tx = sorted(transactions, key=lambda x: x.due_date)
    balance = current_cash
    today = datetime.now()
    
    for tx in sorted_tx:
        balance -= tx.amount_remaining
        if balance < 0:
            return {
                "days_to_zero": (tx.due_date - today).days,
                "breach_tx_id": tx.id,
                "shortfall": abs(balance)
            }
    return {"days_to_zero": 365, "breach_tx_id": None}