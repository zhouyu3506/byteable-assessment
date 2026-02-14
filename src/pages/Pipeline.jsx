import React from 'react';
import { MoreVertical, Plus, DollarSign, Calendar } from 'lucide-react';

const columns = [
  { id: 'intake', title: 'Intake', color: 'border-blue-500' },
  { id: 'discovery', title: 'Discovery', color: 'border-purple-500' },
  { id: 'negotiation', title: 'Negotiation', color: 'border-amber-500' },
  { id: 'settled', title: 'Settled', color: 'border-emerald-500' },
];

const deals = [
  { id: 1, title: 'TechCorp Merger', client: 'Harvey Specter', value: '$2.5M', stage: 'negotiation', priority: 'High' },
  { id: 2, title: 'Class Action Suit', client: 'Jessica Pearson', value: '$12M', stage: 'discovery', priority: 'Medium' },
  { id: 3, title: 'Estate Planning', client: 'Louis Litt', value: '$450k', stage: 'intake', priority: 'Low' },
  { id: 4, title: 'IP Infringement', client: 'Mike Ross', value: '$1.2M', stage: 'discovery', priority: 'High' },
  { id: 5, title: 'Real Estate Closing', client: 'Rachel Zane', value: '$800k', stage: 'settled', priority: 'Medium' },
];

export default function Pipeline() {
  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Case Pipeline</h1>
          <p className="text-textSecondary">Track case progress from intake to settlement.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-border rounded-xl hover:bg-white/5 transition-colors">
            View Analytics
          </button>
          <button className="bg-primary text-white px-6 py-2 rounded-xl font-semibold flex items-center gap-2">
            <Plus size={18} /> New Case
          </button>
        </div>
      </div>

      <div className="flex-1 flex gap-6 overflow-x-auto pb-4">
        {columns.map((column) => (
          <div key={column.id} className="flex-shrink-0 w-80 flex flex-col gap-4">
            <div className={`flex justify-between items-center p-3 bg-surface rounded-xl border-l-4 ${column.color} border-y border-r border-border`}>
              <h3 className="font-bold flex items-center gap-2">
                {column.title}
                <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-textSecondary">
                  {deals.filter(d => d.stage === column.id).length}
                </span>
              </h3>
              <button className="p-1 hover:bg-white/10 rounded">
                <Plus size={16} className="text-textSecondary" />
              </button>
            </div>

            <div className="flex-1 space-y-4">
              {deals.filter(d => d.stage === column.id).map((deal) => (
                <div key={deal.id} className="bg-surface p-4 rounded-2xl border border-border hover:border-primary/50 transition-all cursor-grab active:cursor-grabbing group">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded ${
                      deal.priority === 'High' ? 'bg-error/10 text-error' : 
                      deal.priority === 'Medium' ? 'bg-warning/10 text-warning' : 'bg-success/10 text-success'
                    }`}>
                      {deal.priority}
                    </span>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical size={16} className="text-textSecondary" />
                    </button>
                  </div>
                  <h4 className="font-bold mb-1">{deal.title}</h4>
                  <p className="text-sm text-textSecondary mb-4">{deal.client}</p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <div className="flex items-center gap-1 text-primary font-semibold text-sm">
                      <DollarSign size={14} />
                      {deal.value}
                    </div>
                    <div className="flex items-center gap-1 text-textSecondary text-xs">
                      <Calendar size={14} />
                      12d left
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
