import { Layout } from '@/components/Layout';
import { RunwayChart } from '@/components/charts/RunwayChart';
import { DraftEditor } from '@/components/actions/DraftEditor';
import { useOptimization } from '@/hooks/useOptimization';
import { formatCurrency } from '@/utils/formatters';

export default function Home() {
  const { data, isLoading } = useOptimization();

  if (isLoading) return <div className="p-10 text-emerald-500 animate-pulse">Initializing LDE...</div>;

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
          <p className="text-slate-400 text-sm mb-1">Days to Zero (DTZ)</p>
          <h2 className={`text-4xl font-bold ${data?.is_critical ? 'text-red-500' : 'text-emerald-500'}`}>
            {data?.dtz} Days
          </h2>
        </div>
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
          <p className="text-slate-400 text-sm mb-1">Available Cash</p>
          <h2 className="text-4xl font-bold text-white">{formatCurrency(data?.available_cash)}</h2>
        </div>
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
          <p className="text-slate-400 text-sm mb-1">Shortfall Risk</p>
          <h2 className="text-4xl font-bold text-amber-500">{formatCurrency(data?.shortfall_amount || 0)}</h2>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Liquidity Forecast</h3>
        <RunwayChart data={data?.chart_data || []} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Optimized Payment Actions</h3>
        {data?.optimized_results.map((res: any) => (
          <div key={res.id} className="mb-4">
            <DraftEditor 
              justification={res.penalty_avoided} 
              initialEmail={res.email_body} 
              vendorName={res.vendor_name} 
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}