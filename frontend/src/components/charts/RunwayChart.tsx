// @ts-nocheck
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
// FIXED: Using relative path to avoid Alias issues in Docker environment
import { useNextPayStore } from '../../store/useNextPayStore';

export const RunwayChart = ({ data }: { data: any[] }) => {
  // FIXED: Using a selector function to avoid the "Type 'Boolean' has no call signatures" error
  const breachCauseUuid = useNextPayStore((state) => state.breachCauseUuid);

  return (
    <div className="h-64 w-full bg-slate-900 p-4 rounded-xl border border-slate-800">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis 
            dataKey="date" 
            stroke="#94a3b8" 
            fontSize={12}
            tickFormatter={(str) => {
              const date = new Date(str);
              return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            }}
          />
          <YAxis 
            stroke="#94a3b8" 
            fontSize={12}
            tickFormatter={(val) => `$${val}`}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
            itemStyle={{ color: '#10b981' }}
          />
          <ReferenceLine 
            y={0} 
            stroke="#ef4444" 
            strokeDasharray="5 5" 
            label={{ value: 'Liquidity Breach', position: 'top', fill: '#ef4444', fontSize: 10 }} 
          />
          <Line 
            type="monotone" 
            dataKey="balance" 
            stroke="#10b981" 
            strokeWidth={3} 
            dot={(props) => {
              const { payload, cx, cy } = props;
              // Highlight the specific transaction causing the breach in RED
              if (payload.id === breachCauseUuid) {
                return (
                  <circle key={payload.id} cx={cx} cy={cy} r={6} fill="#ef4444" stroke="white" strokeWidth={2} />
                );
              }
              return false;
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};