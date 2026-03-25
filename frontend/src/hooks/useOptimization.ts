import { useQuery, useMutation } from '@tanstack/react-query';
import { useNextPayStore } from '@/store/useNextPayStore';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const useOptimization = () => {
  const setLiquidityData = useNextPayStore((state) => state.setLiquidityData);

  // Fetch the full optimization payload (Runway + Math Solver + LLM Drafts)
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['optimization'],
    queryFn: async () => {
      const response = await fetch(`${API_BASE}/api/optimizer/run`);
      if (!response.ok) {
        const errorData = await response.json();
        // Handle the custom LiquidityCrisisException from FastAPI
        throw new Error(errorData.detail || 'Liquidity Engine Failure');
      }
      const result = await response.json();
      
      // Update global Zustand store with the deterministic results
      setLiquidityData({
        dtz: result.dtz,
        is_critical: result.is_critical,
        breach_cause_uuid: result.breach_cause_uuid,
        current_cash: result.available_cash
      });
      
      return result;
    },
  });

  return { data, isLoading, error, runOptimization: refetch };
};