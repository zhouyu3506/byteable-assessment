import React from 'react';
import { Search, Filter, MoreHorizontal, Mail, Phone } from 'lucide-react';

const clients = [
  { id: 1, name: 'Harvey Specter', email: 'harvey@pearsonhardman.com', phone: '+1 555-0123', type: 'Corporate', status: 'Active', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100' },
  { id: 2, name: 'Jessica Pearson', email: 'jessica@pearsonhardman.com', phone: '+1 555-0124', type: 'Litigation', status: 'Active', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100' },
  { id: 3, name: 'Mike Ross', email: 'mike@rosslaw.com', phone: '+1 555-0125', type: 'Criminal', status: 'Pending', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100' },
  { id: 4, name: 'Louis Litt', email: 'louis@litt.com', phone: '+1 555-0126', type: 'Finance', status: 'Active', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100' },
];

export default function Contacts() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">Client Directory</h1>
          <p className="text-textSecondary">Manage your firm's relationships and case contacts.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-xl font-semibold transition-all shadow-lg shadow-primary/20">
          Add New Client
        </button>
      </div>

      <div className="flex gap-4 items-center bg-surface p-4 rounded-2xl border border-border">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary" size={18} />
          <input 
            type="text" 
            placeholder="Search clients, emails, or case types..." 
            className="w-full bg-background border border-border rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-xl hover:bg-white/5 transition-colors">
          <Filter size={18} />
          <span>Filters</span>
        </button>
      </div>

      <div className="bg-surface rounded-2xl border border-border overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border bg-white/5">
              <th className="px-6 py-4 font-semibold text-sm">Client</th>
              <th className="px-6 py-4 font-semibold text-sm">Type</th>
              <th className="px-6 py-4 font-semibold text-sm">Contact</th>
              <th className="px-6 py-4 font-semibold text-sm">Status</th>
              <th className="px-6 py-4 font-semibold text-sm"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-white/5 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={client.avatar} alt="" className="w-10 h-10 rounded-full object-cover border-2 border-border" />
                    <span className="font-medium">{client.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs border border-border">
                    {client.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-sm text-textSecondary">
                      <Mail size={14} /> {client.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-textSecondary">
                      <Phone size={14} /> {client.phone}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    client.status === 'Active' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                  }`}>
                    {client.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <MoreHorizontal size={18} className="text-textSecondary" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
