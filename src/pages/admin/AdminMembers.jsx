import { useState, useEffect } from "react";
import { getMembers, saveMembers, isBirthdayToday, isFeeOverdue, isFeeDueSoon, whatsappLink, GYM, FESTIVAL_TEMPLATES } from "../../data";
import { AdminWrapper, Modal, FormInput, FormSelect, PlanBadge, StatusBadge, StatCard } from "../../components/UI";
import { Cake, Check, Circle, CircleDot, Download, MessageCircle, Pencil, Plus, Search, Trash2, Users } from "lucide-react";

const EMPTY = { name: "", phone: "", plan: "Pro", joinDate: "", feeAmount: 2999, feeDueDate: "", birthday: "", notes: "", active: true };

export default function AdminMembers() {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [filterPlan, setFilterPlan] = useState("All");
  const [filterFee, setFilterFee] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [editMember, setEditMember] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [deleteId, setDeleteId] = useState(null);
  const [attendanceId, setAttendanceId] = useState(null);

  useEffect(() => { setMembers(getMembers()); }, []);

  const save = (list) => { setMembers(list); saveMembers(list); };

  const feeStatus = (m) => isFeeOverdue(m.feeDueDate) ? "overdue" : isFeeDueSoon(m.feeDueDate) ? "due_soon" : "paid";

  const filtered = members.filter(m => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.phone.includes(search);
    const matchPlan = filterPlan === "All" || m.plan === filterPlan;
    const matchFee = filterFee === "All" || (filterFee === "overdue" && isFeeOverdue(m.feeDueDate)) || (filterFee === "due_soon" && isFeeDueSoon(m.feeDueDate)) || (filterFee === "paid" && !isFeeOverdue(m.feeDueDate) && !isFeeDueSoon(m.feeDueDate));
    return matchSearch && matchPlan && matchFee;
  });

  const openAdd = () => { setForm(EMPTY); setEditMember(null); setModalOpen(true); };
  const openEdit = (m) => { setForm({ ...m }); setEditMember(m.id); setModalOpen(true); };

  const handleSave = () => {
    if (!form.name || !form.phone) return;
    let updated;
    if (editMember) {
      updated = members.map(m => m.id === editMember ? { ...form, id: editMember } : m);
    } else {
      const newId = Math.max(0, ...members.map(m => m.id)) + 1;
      updated = [...members, { ...form, id: newId, attendance: [] }];
    }
    save(updated);
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    save(members.filter(m => m.id !== id));
    setDeleteId(null);
  };

  const markAttendance = (id) => {
    const today = new Date().toISOString().split("T")[0];
    const updated = members.map(m => {
      if (m.id !== id) return m;
      const att = m.attendance || [];
      if (att.includes(today)) return m;
      return { ...m, attendance: [...att, today] };
    });
    save(updated);
    setAttendanceId(null);
  };

  const toggleActive = (id) => {
    save(members.map(m => m.id === id ? { ...m, active: !m.active } : m));
  };

  const feeMsg = FESTIVAL_TEMPLATES.find(t => t.id === "feereminder");

  const f = (k) => (v) => setForm(prev => ({ ...prev, [k]: v }));

  return (
    <AdminWrapper title="MEMBERS">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard icon={<Users className="w-5 h-5" />} label="Total Members" value={members.length} />
        <StatCard icon={<Check className="w-5 h-5" />} label="Active" value={members.filter(m => m.active).length} color="text-green-400" />
        <StatCard icon={<CircleDot className="w-5 h-5" />} label="Fee Overdue" value={members.filter(m => isFeeOverdue(m.feeDueDate)).length} color="text-red-400" />
        <StatCard icon={<Cake className="w-5 h-5" />} label="Birthdays Today" value={members.filter(m => isBirthdayToday(m.birthday)).length} color="text-yellow-400" />
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name or phone..."
            className="w-full bg-gray-900 border border-white/10 focus:border-yellow-400/50 outline-none text-white placeholder-white/30 pl-10 pr-4 py-2.5 rounded-xl text-sm" />
        </div>
        <select value={filterPlan} onChange={e => setFilterPlan(e.target.value)} className="bg-gray-900 border border-white/10 text-white/70 px-4 py-2.5 rounded-xl text-sm outline-none">
          {["All", "Starter", "Pro", "Elite"].map(p => <option key={p}>{p}</option>)}
        </select>
        <select value={filterFee} onChange={e => setFilterFee(e.target.value)} className="bg-gray-900 border border-white/10 text-white/70 px-4 py-2.5 rounded-xl text-sm outline-none">
          {[["All", "All Fees"], ["paid", "Fee Paid"], ["due_soon", "Due Soon"], ["overdue", "Overdue"]].map(([v, l]) => <option key={v} value={v}>{l}</option>)}
        </select>
        <button onClick={openAdd} className="bg-yellow-400 text-black font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-xl hover:bg-yellow-300 transition-colors whitespace-nowrap">
          <span className="inline-flex items-center gap-2"><Plus className="w-4 h-4" /> Add Member</span>
        </button>
      </div>

      {/* Export */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
        <p className="text-white/30 text-sm">{filtered.length} of {members.length} members</p>
        <button onClick={() => {
          const csv = ["Name,Phone,Plan,Fee,Due Date,Status,Birthday,Notes",
            ...filtered.map(m => `${m.name},${m.phone},${m.plan},${m.feeAmount},${m.feeDueDate},${feeStatus(m)},${m.birthday || ""},${m.notes || ""}`)
          ].join("\n");
          const a = document.createElement("a"); a.href = "data:text/csv," + encodeURIComponent(csv);
          a.download = "members.csv"; a.click();
        }} className="text-white/40 hover:text-white text-xs uppercase tracking-widest border border-white/10 hover:border-white/30 px-4 py-2 rounded-lg transition-all">
          <span className="inline-flex items-center gap-2"><Download className="w-4 h-4" /> Export CSV</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-gray-900 border border-white/5 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-white/5">
                {["#", "Name", "Phone", "Plan", "Fee", "Due Date", "Fee Status", "Actions"].map(h => (
                  <th key={h} className="text-left py-3.5 px-4 text-white/30 text-xs uppercase tracking-widest font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((m, i) => (
                <tr key={m.id} className={`border-b border-white/5 hover:bg-white/[0.02] transition-colors ${!m.active ? "opacity-40" : ""}`}>
                  <td className="py-3.5 px-4 text-white/30 text-sm">{i + 1}</td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-xs font-black flex-shrink-0">
                        {m.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{m.name}</p>
                        {isBirthdayToday(m.birthday) && <span className="text-yellow-400 text-xs inline-flex items-center gap-1.5"><Cake className="w-3.5 h-3.5" /> Birthday today</span>}
                        {m.notes && <p className="text-white/30 text-xs truncate max-w-[120px]">{m.notes}</p>}
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-white/60 text-sm font-mono">{m.phone}</td>
                  <td className="py-3.5 px-4"><PlanBadge plan={m.plan} /></td>
                  <td className="py-3.5 px-4 text-white/70 text-sm font-bold">₹{m.feeAmount?.toLocaleString()}</td>
                  <td className="py-3.5 px-4 text-white/50 text-xs">{m.feeDueDate ? new Date(m.feeDueDate).toLocaleDateString("en-IN") : "—"}</td>
                  <td className="py-3.5 px-4"><StatusBadge status={feeStatus(m)} /></td>
                  <td className="py-3.5 px-4">
                    <div className="flex gap-1.5 flex-wrap">
                      <button onClick={() => openEdit(m)} className="text-white/40 hover:text-white hover:bg-white/10 text-xs px-2.5 py-1.5 rounded-lg transition-all" title="Edit" aria-label="Edit">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button onClick={() => markAttendance(m.id)} className="text-white/40 hover:text-green-400 hover:bg-green-400/10 text-xs px-2.5 py-1.5 rounded-lg transition-all" title="Mark attendance" aria-label="Mark attendance">
                        <Check className="w-4 h-4" />
                      </button>
                      <a href={whatsappLink(m.phone, feeMsg.message(GYM.name, m.name))} target="_blank" rel="noreferrer"
                        className="text-white/40 hover:text-green-400 hover:bg-green-400/10 text-xs px-2.5 py-1.5 rounded-lg transition-all" title="Send fee reminder" aria-label="Send fee reminder">
                        <MessageCircle className="w-4 h-4" />
                      </a>
                      <button onClick={() => toggleActive(m.id)} className="text-white/40 hover:text-yellow-400 hover:bg-yellow-400/10 text-xs px-2.5 py-1.5 rounded-lg transition-all" title={m.active ? "Deactivate" : "Activate"} aria-label={m.active ? "Deactivate" : "Activate"}>
                        {m.active ? <CircleDot className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                      </button>
                      <button onClick={() => setDeleteId(m.id)} className="text-white/40 hover:text-red-400 hover:bg-red-400/10 text-xs px-2.5 py-1.5 rounded-lg transition-all" title="Delete" aria-label="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="text-center py-12 text-white/30">No members found. <button onClick={openAdd} className="text-yellow-400 hover:underline">Add one?</button></div>
          )}
        </div>
      </div>

      {/* Add/Edit Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editMember ? "EDIT MEMBER" : "ADD NEW MEMBER"}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput label="Full Name" value={form.name} onChange={f("name")} placeholder="Rahul Sharma" required />
            <FormInput label="Phone (10 digits)" type="tel" value={form.phone} onChange={f("phone")} placeholder="9876543210" required />
          </div>
          <FormSelect label="Membership Plan" value={form.plan} onChange={f("plan")} options={[{value:"Starter",label:"Starter — ₹1,499/mo"},{value:"Pro",label:"Pro — ₹2,999/mo"},{value:"Elite",label:"Elite — ₹5,999/mo"}]} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput label="Fee Amount (₹)" type="number" value={form.feeAmount} onChange={v => f("feeAmount")(+v)} />
            <FormInput label="Fee Due Date" type="date" value={form.feeDueDate} onChange={f("feeDueDate")} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput label="Join Date" type="date" value={form.joinDate} onChange={f("joinDate")} />
            <FormInput label="Birthday" type="date" value={form.birthday} onChange={f("birthday")} />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-1.5">Notes</label>
            <textarea value={form.notes} onChange={e => f("notes")(e.target.value)} placeholder="Any special notes..."
              className="w-full bg-gray-800 border border-white/10 focus:border-yellow-400/50 outline-none text-white placeholder-white/20 px-4 py-3 rounded-xl text-sm resize-none" rows={2} />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button onClick={handleSave} className="flex-1 bg-yellow-400 text-black font-black uppercase text-sm tracking-widest py-3 rounded-xl hover:bg-yellow-300 transition-colors">
              {editMember ? "Save Changes" : "Add Member"}
            </button>
            <button onClick={() => setModalOpen(false)} className="px-6 border border-white/10 text-white/50 rounded-xl hover:bg-white/5 transition-colors">Cancel</button>
          </div>
        </div>
      </Modal>

      {/* Delete confirm */}
      <Modal open={!!deleteId} onClose={() => setDeleteId(null)} title="DELETE MEMBER">
        <p className="text-white/60 text-sm mb-6">This will permanently remove this member and all their data. This action cannot be undone.</p>
        <div className="flex gap-3">
          <button onClick={() => handleDelete(deleteId)} className="flex-1 bg-red-500 text-white font-black uppercase text-sm tracking-widest py-3 rounded-xl hover:bg-red-600 transition-colors">Delete Permanently</button>
          <button onClick={() => setDeleteId(null)} className="px-6 border border-white/10 text-white/50 rounded-xl hover:bg-white/5 transition-colors">Cancel</button>
        </div>
      </Modal>
    </AdminWrapper>
  );
}
