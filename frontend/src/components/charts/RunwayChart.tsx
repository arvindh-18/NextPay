import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { useNextPayStore } from '@/store/useNextPayStore';

export const RunwayChart = ({ data }: { data: any[] }) => {
  const { breachCauseUuid } = useNextPayStore();

  return (
    <div className="h-64 w-full bg-slate-900 p-4 rounded-xl border border-slate-800">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="date" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
            itemStyle={{ color: '#10b981' }}
          />
          <ReferenceLine y={0} stroke="#ef4444" strokeDasharray="5 5" label="Liquidity Breach" />
          <Line 
            type="monotone" 
            dataKey="balance" 
            stroke="#10b981" 
            strokeWidth={3} 
            dot={(props) => props.payload.id === breachCauseUuid ? { r: 8, fill: '#ef4444' } : false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};