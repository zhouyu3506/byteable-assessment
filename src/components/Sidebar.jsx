import React from 'react';
import { LayoutDashboard, Users, Kanban, CheckSquare, Settings, Gavel } from 'lucide-react';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'contacts', label: 'Clients', icon: Users },
  { id: 'pipeline', label: 'Case Pipeline', icon: Kanban },
  { id: 'tasks', label: 'Tasks & Notes', icon: CheckSquare },
];

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="w-64 bg-surface border-r border-border flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
          <Gavel size={24} className="text-white" />
        </div>
        <span className="font-bold text-xl tracking-tight">LegalCase</span>
      </div>
      
      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              activeTab === item.id 
                ? 'bg-primary/10 text-primary border border-primary/20' 
                : 'text-textSecondary hover:bg-white/5 hover:text-text'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-textSecondary hover:text-text transition-colors">
          <Settings size={20} />
          <span className="font-medium">Settings</span>
        </button>
      </div>
    </aside>
  );
}
