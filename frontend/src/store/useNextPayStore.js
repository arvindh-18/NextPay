import { create } from 'zustand';

export interface Transaction {
  id: string;
  vendor_id: number;
  amount_total: number;
  amount_remaining: number;
  due_date: string;
  status: 'PENDING' | 'PARTIAL' | 'PAID';
  vendor?: Vendor;
}

export interface Vendor {
  id: number;
  name: string;
  criticality_score: number; // 0.0 - 1.0
  flexibility_index: number;
}

interface NextPayState {
  availableCash: number;
  dtz: number;
  isCritical: boolean;
  breachCauseUuid: string | null;
  setLiquidityData: (data: any) => void;
}

export const useNextPayStore = create<NextPayState>((set) => ({
  availableCash: 0,
  dtz: 0,
  isCritical: false,
  breachCauseUuid: null,
  setLiquidityData: (data) => set({
    dtz: data.dtz,
    isCritical: data.is_critical,
    breachCauseUuid: data.breach_cause_uuid,
    availableCash: data.current_cash
  }),
}));