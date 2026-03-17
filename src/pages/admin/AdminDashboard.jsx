import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMembers, isBirthdayToday, isFeeOverdue, isFeeDueSoon, whatsappLink, GYM, FESTIVAL_TEMPLATES } from "../../data";
import { AdminWrapper, StatCard, PlanBadge, StatusBadge } from "../../components/UI";
import { AlertCircle, Cake, CalendarDays, CheckCircle2, Globe, IndianRupee, PartyPopper, Plus, TriangleAlert, Users } from "lucide-react";

export default function AdminDashboard() {
  const [members, setMembers] = useState([]);

  useEffect(() => { setMembers(getMembers()); }, []);

  const active = members.filter(m => m.active);
  const overdue = members.filter(m => isFeeOverdue(m.feeDueDate));
  const dueSoon = members.filter(m => !isFeeOverdue(m.feeDueDate) && isFeeDueSoon(m.feeDueDate));
  const birthdays = members.filter(m => isBirthdayToday(m.birthday));
  const totalRevenue = active.reduce((s, m) => s + (m.feeAmount || 0), 0);
  const planCount = { Starter: 0, Pro: 0, Elite: 0 };
  active.forEach(m => { if (planCount[m.plan] !== undefined) planCount[m.plan]++; });

  const feeStatus = (m) => isFeeOverdue(m.feeDueDate) ? "overdue" : isFeeDueSoon(m.feeDueDate) ? "due_soon" : "paid";

  const birthdayMsg = FESTIVAL_TEMPLATES.find(t => t.id === "birthday");
  const feeMsg = FESTIVAL_TEMPLATES.find(t => t.id === "feereminder");

  return (
    <AdminWrapper title="DASHBOARD">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={<Users className="w-5 h-5" />} label="Total Members" value={members.length} sub={`${active.length} active`} />
        <StatCard icon={<IndianRupee className="w-5 h-5" />} label="Monthly Revenue" value={`₹${(totalRevenue / 1000).toFixed(1)}K`} sub="All active plans" color="text-green-400" />
        <StatCard icon={<AlertCircle className="w-5 h-5" />} label="Fees Overdue" value={overdue.length} sub="Need attention" color="text-red-400" />
        <StatCard icon={<TriangleAlert className="w-5 h-5" />} label="Due in 7 Days" value={dueSoon.length} sub="Send reminders" color="text-yellow-400" />
      </div>

      {/* Plans breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {Object.entries(planCount).map(([plan, count]) => (
          <div key={plan} className="bg-gray-900 border border-white/5 rounded-2xl p-5 text-center">
            <PlanBadge plan={plan} />
            <p className="text-3xl font-black text-white mt-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{count}</p>
            <p className="text-white/30 text-xs mt-1">members</p>
          </div>
        ))}
      </div>

      {/* Birthday alerts */}
      {birthdays.length > 0 && (
        <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-300">
              <Cake className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-yellow-400 font-bold">Birthday{birthdays.length > 1 ? "s" : ""} Today!</h3>
              <p className="text-white/40 text-sm">Send them a special wish on WhatsApp</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {birthdays.map(m => (
              <div key={m.id} className="flex items-center justify-between bg-black/30 rounded-xl px-4 py-3">
                <div>
                  <p className="text-white font-medium text-sm">{m.name}</p>
                  <p className="text-white/40 text-xs">{m.phone} · {m.plan}</p>
                </div>
                <a href={whatsappLink(m.phone, birthdayMsg.message(GYM.name, m.name))} target="_blank" rel="noreferrer"
                  className="bg-yellow-400 text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors">
                  Wish Now
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Overdue fees */}
        <div className="bg-gray-900 border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Overdue Fees</h3>
            <Link to="/admin/members" className="text-yellow-400 text-xs uppercase tracking-widest hover:underline">View All</Link>
          </div>
          {overdue.length === 0 ? (
            <p className="text-white/30 text-sm text-center py-4 inline-flex items-center justify-center gap-2 w-full">
              <CheckCircle2 className="w-4 h-4 text-green-400" /> All fees are up to date
            </p>
          ) : (
            <div className="space-y-3">
              {overdue.slice(0, 5).map(m => (
                <div key={m.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm font-medium">{m.name}</p>
                    <p className="text-red-400 text-xs">Due: {new Date(m.feeDueDate).toLocaleDateString("en-IN")}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-white/50 text-sm font-bold">₹{m.feeAmount}</span>
                    <a href={whatsappLink(m.phone, feeMsg.message(GYM.name, m.name))} target="_blank" rel="noreferrer"
                      className="bg-green-500/20 text-green-400 border border-green-500/20 text-xs px-3 py-1 rounded-lg hover:bg-green-500/30 transition-colors">
                      Remind
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Due soon */}
        <div className="bg-gray-900 border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Due in 7 Days</h3>
            <Link to="/admin/festival" className="text-yellow-400 text-xs uppercase tracking-widest hover:underline">Festival Wishes</Link>
          </div>
          {dueSoon.length === 0 ? (
            <p className="text-white/30 text-sm text-center py-4 inline-flex items-center justify-center gap-2 w-full">
              <CheckCircle2 className="w-4 h-4 text-green-400" /> No fees due in the next 7 days
            </p>
          ) : (
            <div className="space-y-3">
              {dueSoon.slice(0, 5).map(m => (
                <div key={m.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm font-medium">{m.name}</p>
                    <p className="text-yellow-400 text-xs">Due: {new Date(m.feeDueDate).toLocaleDateString("en-IN")}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-white/50 text-sm font-bold">₹{m.feeAmount}</span>
                    <a href={whatsappLink(m.phone, feeMsg.message(GYM.name, m.name))} target="_blank" rel="noreferrer"
                      className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 text-xs px-3 py-1 rounded-lg hover:bg-yellow-400/20 transition-colors">
                      Remind
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick actions */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { to: "/admin/members", icon: Plus, label: "Add Member" },
          { to: "/admin/festival", icon: PartyPopper, label: "Send Festival Wish" },
          { to: "/admin/schedule", icon: CalendarDays, label: "Manage Schedule" },
          { to: "/", icon: Globe, label: "View Website" },
        ].map(({ to, icon: Icon, label }) => (
          <Link key={to} to={to} className="bg-gray-900 border border-white/5 hover:border-yellow-400/30 rounded-xl p-4 text-center group transition-all">
            <span className="w-11 h-11 mx-auto mb-2 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:scale-105 transition-transform">
              <Icon className="w-5 h-5" />
            </span>
            <span className="text-white/50 text-xs uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
          </Link>
        ))}
      </div>
    </AdminWrapper>
  );
}
