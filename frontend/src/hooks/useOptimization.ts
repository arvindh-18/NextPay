import { useQuery } from '@tanstack/react-query';
// FIXED: Using relative path to find the store
import { useNextPayStore } from '../store/useNextPayStore';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const useOptimization = () => {
  const setLiquidityData = useNextPayStore((state) => state.setLiquidityData);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['optimization'],
    queryFn: async () => {
      const response = await fetch(`${API_BASE}/api/optimizer/run`);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Liquidity Engine Failure');
      }
      
      const result = await response.json();
      
      // Safety check for data structure before updating store
      if (result) {
        setLiquidityData({
          dtz: result.dtz || 0,
          is_critical: result.is_critical || false,
          breach_cause_uuid: result.breach_cause_uuid || null,
          current_cash: result.available_cash || 0
        });
      }
      
      return result;
    },
    // Don't refetch on window focus to keep the deterministic math stable
    refetchOnWindowFocus: false 
  });

  return { data, isLoading, error, runOptimization: refetch };
};