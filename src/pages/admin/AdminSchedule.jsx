import { useState } from "react";
import { SCHEDULE as DEFAULT_SCHEDULE, TRAINERS } from "../../data";
import { AdminWrapper } from "../../components/UI";
import { Pencil, Plus, Trash2 } from "lucide-react";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const LEVELS = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function AdminSchedule() {
  const stored = localStorage.getItem("gym_schedule");
  const [schedule, setSchedule] = useState(stored ? JSON.parse(stored) : DEFAULT_SCHEDULE);
  const [selectedDay, setSelectedDay] = useState("All");
  const [editing, setEditing] = useState(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ time: "", name: "", trainer: "", duration: "45 min", level: "All Levels", days: [] });

  const save = (s) => { setSchedule(s); localStorage.setItem("gym_schedule", JSON.stringify(s)); };

  const filtered = selectedDay === "All" ? schedule : schedule.filter(s => s.days.includes(selectedDay));

  const f = (k) => (v) => setForm(prev => ({ ...prev, [k]: v }));
  const toggleDay = (d) => setForm(prev => ({ ...prev, days: prev.days.includes(d) ? prev.days.filter(x => x !== d) : [...prev.days, d] }));

  const handleSave = () => {
    if (!form.name || !form.time) return;
    if (editing !== null) {
      save(schedule.map((s, i) => i === editing ? { ...form } : s));
    } else {
      save([...schedule, { ...form }]);
    }
    setEditing(null); setAdding(false);
    setForm({ time: "", name: "", trainer: "", duration: "45 min", level: "All Levels", days: [] });
  };

  const handleEdit = (i) => { setForm({ ...schedule[i] }); setEditing(i); setAdding(false); };
  const handleDelete = (i) => save(schedule.filter((_, idx) => idx !== i));

  const levelColor = { Beginner: "text-blue-400 bg-blue-400/10", Intermediate: "text-orange-400 bg-orange-400/10", Advanced: "text-yellow-400 bg-yellow-400/10", "All Levels": "text-green-400 bg-green-400/10" };

  return (
    <AdminWrapper title="CLASS SCHEDULE">
      <div className="flex gap-2 flex-wrap mb-6">
        {["All", ...DAYS].map(d => (
          <button key={d} onClick={() => setSelectedDay(d)} className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-lg transition-all ${d === selectedDay ? "bg-yellow-400 text-black" : "border border-white/10 text-white/40 hover:border-yellow-400/30 hover:text-white/70"}`}>{d}</button>
        ))}
        <button onClick={() => { setAdding(true); setEditing(null); }} className="w-full sm:w-auto sm:ml-auto bg-yellow-400 text-black font-black text-xs uppercase tracking-widest px-5 py-2 rounded-lg hover:bg-yellow-300 transition-colors">
          <span className="inline-flex items-center gap-2"><Plus className="w-4 h-4" /> Add Class</span>
        </button>
      </div>

      {/* Add/Edit form */}
      {(adding || editing !== null) && (
        <div className="bg-gray-900 border border-yellow-400/20 rounded-2xl p-6 mb-6">
          <h3 className="text-lg font-black text-white mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {editing !== null ? "EDIT CLASS" : "ADD NEW CLASS"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Time *</label>
              <input type="time" value={form.time} onChange={e => f("time")(e.target.value)} className="w-full bg-gray-800 border border-white/10 focus:border-yellow-400/50 outline-none text-white px-4 py-3 rounded-xl text-sm" />
            </div>
            <div>
              <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Class Name *</label>
              <input value={form.name} onChange={e => f("name")(e.target.value)} placeholder="e.g. Morning HIIT" className="w-full bg-gray-800 border border-white/10 focus:border-yellow-400/50 outline-none text-white placeholder-white/20 px-4 py-3 rounded-xl text-sm" />
            </div>
            <div>
              <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Trainer</label>
              <select value={form.trainer} onChange={e => f("trainer")(e.target.value)} className="w-full bg-gray-800 border border-white/10 outline-none text-white px-4 py-3 rounded-xl text-sm">
                <option value="">Select trainer</option>
                {TRAINERS.map(t => <option key={t.id} value={t.name}>{t.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Duration</label>
              <select value={form.duration} onChange={e => f("duration")(e.target.value)} className="w-full bg-gray-800 border border-white/10 outline-none text-white px-4 py-3 rounded-xl text-sm">
                {["30 min", "45 min", "60 min", "75 min", "90 min"].map(d => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Level</label>
              <select value={form.level} onChange={e => f("level")(e.target.value)} className="w-full bg-gray-800 border border-white/10 outline-none text-white px-4 py-3 rounded-xl text-sm">
                {LEVELS.map(l => <option key={l}>{l}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Days</label>
              <div className="flex flex-wrap gap-1.5">
                {DAYS.map(d => (
                  <button key={d} type="button" onClick={() => toggleDay(d)} className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${form.days.includes(d) ? "bg-yellow-400 text-black" : "bg-gray-800 border border-white/10 text-white/40"}`}>{d}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={handleSave} className="bg-yellow-400 text-black font-black text-xs uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-yellow-300 transition-colors">Save Class</button>
            <button onClick={() => { setAdding(false); setEditing(null); }} className="border border-white/10 text-white/50 px-6 py-3 rounded-xl hover:bg-white/5 transition-colors text-sm">Cancel</button>
          </div>
        </div>
      )}

      {/* Schedule table */}
      <div className="bg-gray-900 border border-white/5 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-white/5">
                {["Time", "Class", "Trainer", "Duration", "Level", "Days", "Actions"].map(h => (
                  <th key={h} className="text-left py-3.5 px-4 text-white/30 text-xs uppercase tracking-widest font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.sort((a, b) => a.time.localeCompare(b.time)).map((s, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 text-white/50 text-sm font-mono">{s.time}</td>
                  <td className="py-3.5 px-4 text-white font-medium">{s.name}</td>
                  <td className="py-3.5 px-4 text-white/50 text-sm">{s.trainer || "—"}</td>
                  <td className="py-3.5 px-4 text-white/40 text-sm">{s.duration}</td>
                  <td className="py-3.5 px-4"><span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${levelColor[s.level] || "bg-white/10 text-white/40"}`}>{s.level}</span></td>
                  <td className="py-3.5 px-4 text-white/30 text-xs">{s.days?.join(", ") || "—"}</td>
                  <td className="py-3.5 px-4">
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(schedule.indexOf(s))} className="text-white/40 hover:text-yellow-400 hover:bg-yellow-400/10 text-xs px-2.5 py-1.5 rounded-lg transition-all inline-flex items-center gap-1.5" aria-label="Edit class">
                        <Pencil className="w-4 h-4" /> Edit
                      </button>
                      <button onClick={() => handleDelete(schedule.indexOf(s))} className="text-white/40 hover:text-red-400 hover:bg-red-400/10 text-xs px-2.5 py-1.5 rounded-lg transition-all inline-flex items-center gap-1.5" aria-label="Delete class">
                        <Trash2 className="w-4 h-4" /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && <p className="text-white/30 text-center py-8 text-sm">No classes scheduled for {selectedDay}.</p>}
      </div>
    </AdminWrapper>
  );
}
