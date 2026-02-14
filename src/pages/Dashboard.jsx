import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, Briefcase, Clock } from 'lucide-react';

const data = [
  { name: 'Jan', cases: 40, revenue: 2400 },
  { name: 'Feb', cases: 30, revenue: 1398 },
  { name: 'Mar', cases: 20, revenue: 9800 },
  { name: 'Apr', cases: 27, revenue: 3908 },
  { name: 'May', cases: 18, revenue: 4800 },
  { name: 'Jun', cases: 23, revenue: 3800 },
];

const StatCard = ({ title, value, change, icon: Icon, color }) => (
  <div className="bg-surface p-6 rounded-2xl border border-border hover:border-primary/30 transition-all group">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
        <Icon className={color.replace('bg-', 'text-')} size={24} />
      </div>
      <span className="text-success text-sm font-medium flex items-center gap-1">
        {change} <TrendingUp size={14} />
      </span>
    </div>
    <h3 className="text-textSecondary text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold mt-1">{value}</p>
  </div>
);

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h1 className="text-3xl font-bold">Firm Overview</h1>
        <p className="text-textSecondary">Welcome back, Counselor. Here's what's happening today.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Active Cases" value="124" change="+12%" icon={Briefcase} color="bg-primary" />
        <StatCard title="New Leads" value="48" change="+5%" icon={Users} color="bg-secondary" />
        <StatCard title="Billable Hours" value="1,240" change="+18%" icon={Clock} color="bg-accent" />
        <StatCard title="Settlements" value="$2.4M" change="+24%" icon={TrendingUp} color="bg-success" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface p-6 rounded-2xl border border-border">
          <h3 className="text-lg font-semibold mb-6">Revenue Growth</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9E7FFF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#9E7FFF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2F2F2F" vertical={false} />
                <XAxis dataKey="name" stroke="#A3A3A3" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#A3A3A3" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#262626', border: '1px solid #2F2F2F', borderRadius: '8px' }}
                  itemStyle={{ color: '#FFFFFF' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#9E7FFF" fillOpacity={1} fill="url(#colorRev)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-surface p-6 rounded-2xl border border-border">
          <h3 className="text-lg font-semibold mb-6">Case Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2F2F2F" vertical={false} />
                <XAxis dataKey="name" stroke="#A3A3A3" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#A3A3A3" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#262626', border: '1px solid #2F2F2F', borderRadius: '8px' }}
                />
                <Bar dataKey="cases" fill="#38bdf8" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
