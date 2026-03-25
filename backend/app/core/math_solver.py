import numpy as np
from scipy.optimize import linprog

def solve_fractional_payments(available_cash: float, transactions: list):
    n = len(transactions)
    # Objective: Maximize weighted payment to high-penalty vendors
    c = [-tx['penalty_rate'] for tx in transactions]
    
    # sum(payments) <= available_cash
    A_ub = [np.ones(n)]
    b_ub = [available_cash]
    
    bounds = []
    for tx in transactions:
        # Hard Constraints for Criticality
        lower = tx['amount_remaining'] if tx['criticality'] >= 1.0 else tx['amount_remaining'] * 0.1
        upper = tx['amount_remaining']
        bounds.append((min(lower, available_cash), upper))
        
    res = linprog(c, A_ub=A_ub, b_ub=b_ub, bounds=bounds, method='highs')
    
    if not res.success:
        return []
        
    return [{"id": transactions[i]['id'], "payment": round(float(res.x[i]), 2)} for i in range(n)]