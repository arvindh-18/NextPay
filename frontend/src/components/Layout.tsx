// @ts-nocheck
import React, { ReactNode } from 'react';
import { LayoutDashboard, Users, Receipt, Settings, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-50">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 p-6 flex flex-col">
        <div className="text-2xl font-bold text-emerald-500 mb-10 flex items-center gap-2">
          <ShieldAlert size={28} /> 
          <span>NextPay</span>
        </div>
        
        <nav className="space-y-2 flex-1">
          <Link href="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-900 transition text-slate-400 hover:text-white">
            <LayoutDashboard size={20} /> 
            <span>Dashboard</span>
          </Link>
          
          <Link href="/vendors" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-900 transition text-slate-400 hover:text-white">
            <Users size={20} /> 
            <span>Vendor CRM</span>
          </Link>
          
          <Link href="/invoices" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-900 transition text-slate-400 hover:text-white">
            <Receipt size={20} /> 
            <span>Ledger</span>
          </Link>
        </nav>

        <div className="pt-6 border-t border-slate-800">
          <button className="flex items-center gap-3 p-3 text-slate-400 hover:text-white w-full text-left">
            <Settings size={20} /> 
            <span>Settings</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};