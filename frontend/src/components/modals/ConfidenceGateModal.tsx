export const ConfidenceGateModal = ({ rawData, confidenceScore }: any) => {
  if (confidenceScore >= 0.80) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-slate-900 border border-red-500 w-3/4 max-w-4xl p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">High Risk Extraction Detected</h2>
        <p className="text-slate-400 mb-6">Confidence Score: {(confidenceScore * 100).toFixed(2)}%. Please verify the ledger data.</p>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="aspect-[3/4] bg-slate-800 rounded flex items-center justify-center text-slate-500">
            [Invoice PDF View]
          </div>
          <div className="space-y-4">
            <label className="block text-slate-300">Amount Total</label>
            <input className="w-full bg-slate-950 border border-slate-700 p-2 text-white" defaultValue={rawData.amount_total} />
            <label className="block text-slate-300">Due Date</label>
            <input className="w-full bg-slate-950 border border-slate-700 p-2 text-white" defaultValue={rawData.due_date} />
            <button className="w-full bg-emerald-600 py-3 rounded font-bold text-white">Approve & Post to Ledger</button>
          </div>
        </div>
      </div>
    </div>
  );
};