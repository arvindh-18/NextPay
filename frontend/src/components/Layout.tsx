import React from 'react';
import { LayoutDashboard, Users, Receipt, Settings, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-50">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 p-6 flex flex-col">
        <div className="text-2xl font-bold text-emerald-500 mb-10 flex items-center gap-2">
          <ShieldAlert size={28} /> NextPay
        </div>
        <nav className="space-y-2 flex-1">
          <Link href="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-900 transition text-slate-400 hover:text-white">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="/vendors" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-900 transition text-slate-400 hover:text-white">
            <Users size={20} /> Vendor CRM
          </Link>
          <Link href="/invoices" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-900 transition text-slate-400 hover:text-white">
            <Receipt size={20} /> Ledger
          </Link>
        </nav>
        <div className="pt-6 border-t border-slate-800">
          <button className="flex items-center gap-3 p-3 text-slate-400 hover:text-white w-full">
            <Settings size={20} /> Settings
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
};