import React, { useState } from 'react';
import { CheckCircle2, Circle, Clock, StickyNote, Plus, Trash2 } from 'lucide-react';

const initialTasks = [
  { id: 1, text: 'Review TechCorp merger documents', completed: false, due: 'Today', category: 'Legal' },
  { id: 2, text: 'Call client regarding settlement offer', completed: true, due: 'Yesterday', category: 'Communication' },
  { id: 3, text: 'Draft motion for summary judgment', completed: false, due: 'Tomorrow', category: 'Drafting' },
];

const initialNotes = [
  { id: 1, title: 'Case Strategy: Ross vs. State', content: 'Focus on the lack of physical evidence and the inconsistent witness testimony...', date: 'Oct 24, 2025' },
  { id: 2, title: 'Meeting Notes: Pearson Hardman', content: 'Discussed the upcoming quarterly goals and the new associate hiring process.', date: 'Oct 22, 2025' },
];

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-700">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Tasks</h2>
          <button className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm font-semibold">
            <Plus size={18} /> Add Task
          </button>
        </div>

        <div className="bg-surface rounded-2xl border border-border divide-y divide-border">
          {tasks.map((task) => (
            <div key={task.id} className="p-4 flex items-center gap-4 group hover:bg-white/5 transition-colors">
              <button onClick={() => toggleTask(task.id)} className="text-primary">
                {task.completed ? <CheckCircle2 size={22} /> : <Circle size={22} className="text-textSecondary" />}
              </button>
              <div className="flex-1">
                <p className={`font-medium ${task.completed ? 'line-through text-textSecondary' : ''}`}>
                  {task.text}
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-textSecondary flex items-center gap-1">
                    <Clock size={12} /> {task.due}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded border border-border text-textSecondary">
                    {task.category}
                  </span>
                </div>
              </div>
              <button className="opacity-0 group-hover:opacity-100 p-2 text-error hover:bg-error/10 rounded-lg transition-all">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Quick Notes</h2>
          <button className="p-2 bg-white/5 hover:bg-white/10 rounded-xl border border-border transition-colors">
            <Plus size={18} />
          </button>
        </div>

        <div className="space-y-4">
          {initialNotes.map((note) => (
            <div key={note.id} className="bg-surface p-5 rounded-2xl border border-border hover:border-primary/30 transition-all group">
              <div className="flex items-center gap-2 text-primary mb-3">
                <StickyNote size={18} />
                <span className="text-xs font-semibold uppercase tracking-widest">Note</span>
              </div>
              <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{note.title}</h3>
              <p className="text-sm text-textSecondary line-clamp-3 mb-4 leading-relaxed">
                {note.content}
              </p>
              <div className="text-[10px] text-textSecondary font-medium">
                Last edited: {note.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
