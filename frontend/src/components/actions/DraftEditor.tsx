import React, { useState } from 'react';

interface DraftProps {
  justification: string;
  initialEmail: string;
  vendorName: string;
}

export const DraftEditor = ({ justification, initialEmail, vendorName }: DraftProps) => {
  const [emailBody, setEmailBody] = useState(initialEmail);

  return (
    <div className="grid grid-cols-2 gap-4 h-[500px]">
      {/* Left: Chain of Thought Pane */}
      <div className="bg-slate-950 p-4 rounded border border-amber-500/30">
        <h3 className="text-amber-500 text-xs font-bold uppercase mb-2">Math Solver Justification</h3>
        <p className="text-slate-300 text-sm font-mono leading-relaxed">
          {justification}
        </p>
      </div>

      {/* Right: Action Editor */}
      <div className="flex flex-col bg-white rounded shadow-2xl">
        <div className="p-3 border-b bg-slate-50 flex justify-between items-center">
          <span className="text-sm font-semibold text-slate-700">Draft for {vendorName}</span>
          <button className="bg-indigo-600 text-white px-3 py-1 rounded text-sm">Send Email</button>
        </div>
        <textarea 
          className="flex-1 p-4 text-slate-800 text-sm focus:outline-none resize-none"
          value={emailBody}
          onChange={(e) => setEmailBody(e.target.value)}
        />
      </div>
    </div>
  );
};