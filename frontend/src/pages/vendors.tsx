import { useQuery } from '@tanstack/react-query';
import { getCriticalityColor, formatCurrency } from '@/utils/formatters';

export default function VendorCRM() {
  const { data: vendors } = useQuery({ queryKey: ['vendors'], queryFn: fetchVendors });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Vendor Risk Matrix</h1>
      <table className="w-full border-collapse bg-slate-900 rounded-lg overflow-hidden">
        <thead className="bg-slate-800 text-slate-400 text-sm uppercase">
          <tr>
            <th className="p-4 text-left">Vendor Name</th>
            <th className="p-4 text-left">Criticality</th>
            <th className="p-4 text-left">Flexibility</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendors?.map((vendor: any) => (
            <tr key={vendor.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition">
              <td className="p-4 font-medium">{vendor.name}</td>
              <td className={`p-4 ${getCriticalityColor(vendor.criticality_score)}`}>
                {(vendor.criticality_score * 100).toFixed(0)}%
              </td>
              <td className="p-4 text-slate-300">{vendor.flexibility_index.toFixed(2)}</td>
              <td className="p-4">
                <button className="text-indigo-400 text-sm hover:underline">Adjust Rules</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}