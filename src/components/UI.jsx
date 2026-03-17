import { useEffect, useRef, useState } from "react";
import { CalendarDays, Globe, LayoutDashboard, LogOut, Menu, PartyPopper, Star, Users, X } from "lucide-react";

// ── Fade-in on scroll ─────────────────────────────────────────────────────────
export function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.style.opacity = "1", el.style.transform = "translateY(0)";
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ opacity: 0, transform: "translateY(32px)", transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

// ── Section Header ────────────────────────────────────────────────────────────
export function SectionHeader({ tag, title, highlight, subtitle }) {
  return (
    <div className="mb-12">
      {tag && <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">{tag}</p>}
      <h2 className="font-black leading-[0.92] text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(48px, 7vw, 80px)" }}>
        {title}{" "}
        {highlight && <span className="text-yellow-400">{highlight}</span>}
      </h2>
      {subtitle && <p className="text-white/50 text-lg max-w-2xl leading-relaxed font-light">{subtitle}</p>}
    </div>
  );
}

// ── Page Hero Banner ──────────────────────────────────────────────────────────
export function PageHero({ tag, title, highlight, subtitle }) {
  return (
    <section className="relative bg-black pt-24 md:pt-28 pb-14 md:pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 60px,#1f1f1f 60px,#1f1f1f 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,#1f1f1f 60px,#1f1f1f 61px)" }} />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-400/5" style={{ filter: "blur(80px)" }} />
      <div className="relative max-w-7xl mx-auto">
        <FadeIn>
          {tag && <div className="inline-block bg-yellow-400 text-black text-xs font-black uppercase tracking-[0.3em] px-4 py-1.5 mb-6">{tag}</div>}
          <h1 className="font-black text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(44px, 7.8vw, 84px)", lineHeight: 0.95 }}>
            {title}{" "}{highlight && <span className="text-yellow-400">{highlight}</span>}
          </h1>
          {subtitle && <p className="text-white/50 text-base md:text-lg max-w-2xl leading-relaxed font-light">{subtitle}</p>}
        </FadeIn>
      </div>
    </section>
  );
}

// ── BMI Calculator ────────────────────────────────────────────────────────────
export function BMICalculator() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
  const category = bmi < 18.5 ? { label: "Underweight", color: "text-blue-400" }
    : bmi < 25 ? { label: "Normal Weight", color: "text-green-400" }
    : bmi < 30 ? { label: "Overweight", color: "text-yellow-400" }
    : { label: "Obese", color: "text-red-400" };
  const pct = Math.min(100, Math.max(0, ((bmi - 10) / 30) * 100));

  return (
    <div className="bg-[#111] border border-white/10 rounded-2xl p-8">
      <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.3em] mb-2">Free Tool</p>
      <h3 className="text-3xl font-black text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>BMI CALCULATOR</h3>

      <div className="space-y-5 mb-8">
        <div>
          <div className="flex justify-between mb-2"><label className="text-white/60 text-sm">Height</label><span className="text-yellow-400 font-bold text-sm">{height} cm</span></div>
          <input type="range" min="140" max="220" value={height} onChange={e => setHeight(+e.target.value)} className="w-full accent-yellow-400" />
        </div>
        <div>
          <div className="flex justify-between mb-2"><label className="text-white/60 text-sm">Weight</label><span className="text-yellow-400 font-bold text-sm">{weight} kg</span></div>
          <input type="range" min="30" max="150" value={weight} onChange={e => setWeight(+e.target.value)} className="w-full accent-yellow-400" />
        </div>
      </div>

      <div className="bg-black rounded-xl p-6 text-center">
        <p className="text-white/40 text-sm mb-1">Your BMI</p>
        <p className="text-6xl font-black text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{bmi}</p>
        <p className={`text-lg font-bold ${category.color}`}>{category.label}</p>
        <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-yellow-400 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
        <div className="flex justify-between mt-1 text-xs text-white/30">
          <span>10</span><span>18.5</span><span>25</span><span>30</span><span>40</span>
        </div>
      </div>
    </div>
  );
}

// ── Stars ─────────────────────────────────────────────────────────────────────
export function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
  );
}

// ── Plan Badge ────────────────────────────────────────────────────────────────
export function PlanBadge({ plan }) {
  const colors = { Starter: "bg-blue-500/10 text-blue-400", Pro: "bg-yellow-400/10 text-yellow-400", Elite: "bg-purple-500/10 text-purple-400" };
  return <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${colors[plan] || "bg-white/10 text-white/60"}`}>{plan}</span>;
}

// ── Status Badge ──────────────────────────────────────────────────────────────
export function StatusBadge({ status }) {
  const map = {
    paid: "bg-green-500/10 text-green-400 border border-green-500/20",
    overdue: "bg-red-500/10 text-red-400 border border-red-500/20",
    due_soon: "bg-yellow-400/10 text-yellow-400 border border-yellow-500/20",
    active: "bg-green-500/10 text-green-400",
    inactive: "bg-white/5 text-white/30",
  };
  const labels = { paid: "Paid", overdue: "Overdue", due_soon: "Due Soon", active: "Active", inactive: "Inactive" };
  return <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${map[status] || "bg-white/10 text-white/50"}`}>{labels[status] || status}</span>;
}

// ── Admin Sidebar ─────────────────────────────────────────────────────────────
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GYM } from "../data";

const ADMIN_LINKS = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin/members", icon: Users, label: "Members" },
  { to: "/admin/schedule", icon: CalendarDays, label: "Schedule" },
  { to: "/admin/festival", icon: PartyPopper, label: "Festival Wishes" },
];

export function AdminSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const logout = () => {
    localStorage.removeItem("gym_admin_auth");
    navigate("/admin/login");
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden sticky top-0 z-40 bg-gray-950/95 backdrop-blur border-b border-white/5">
        <div className="px-4 h-14 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-white/70 flex items-center justify-center"
            aria-label="Open admin menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="text-white/70 text-sm font-semibold">Admin</div>
          <div className="w-10 h-10" />
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <button
          type="button"
          className="md:hidden fixed inset-0 z-40 bg-black/60"
          onClick={() => setMobileOpen(false)}
          aria-label="Close admin menu overlay"
        />
      )}

      <aside
        className={[
          "bg-gray-950/80 backdrop-blur-xl border border-white/10 flex flex-col",
          "fixed left-0 top-0 z-50",
          "md:left-4 md:top-4 md:rounded-3xl md:shadow-2xl md:shadow-black/40",
          "h-screen md:h-[calc(100vh-2rem)]",
          "transform transition-transform duration-200 md:transition-[width] md:duration-200",
          "group",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0",
          mobileOpen ? "w-64" : "w-64",
          "md:w-16 md:hover:w-64",
        ].join(" ")}
      >
        {/* Mobile close */}
        <div className="md:hidden px-3 pt-3">
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-white/70 flex items-center justify-center"
            aria-label="Close admin menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      {/* Logo */}
      <div className="px-4 py-5 border-b border-white/5">
        <Link
          to="/"
          className="font-black text-xl tracking-widest text-yellow-400 whitespace-nowrap overflow-hidden flex items-center md:justify-center md:group-hover:justify-start"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="hidden md:group-hover:inline">{GYM.name}</span>
          <span className="hidden md:inline md:group-hover:hidden w-full text-center">IP</span>
          <span className="md:hidden">{GYM.name}</span>
        </Link>
        <p className="text-xs text-white/30 mt-0.5 whitespace-nowrap overflow-hidden md:text-center md:group-hover:text-left">
          <span className="hidden md:group-hover:inline">Admin Panel</span>
          <span className="md:hidden">Admin Panel</span>
        </p>
      </div>

      {/* Links */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {ADMIN_LINKS.map(({ to, icon, label }) => {
          const active = location.pathname === to;
          const Icon = icon;
          return (
            <Link
              key={to}
              to={to}
              className={`flex items-center px-2 py-3 rounded-xl text-sm font-medium transition-all duration-200 md:justify-center md:group-hover:justify-start md:gap-0 md:group-hover:gap-3 ${
              active ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20" : "text-white/50 hover:text-white hover:bg-white/5"
            }`}>
              <span className="w-12 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5" />
              </span>
              <span className="whitespace-nowrap overflow-hidden hidden md:group-hover:inline">
                {label}
              </span>
              <span className="whitespace-nowrap overflow-hidden md:hidden">
                {label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-2 py-4 border-t border-white/5 space-y-1">
        <Link
          to="/"
          className="flex items-center px-2 py-3 rounded-xl text-sm text-white/40 hover:text-white hover:bg-white/5 transition-all md:justify-center md:group-hover:justify-start md:gap-0 md:group-hover:gap-3"
        >
          <span className="w-12 flex items-center justify-center flex-shrink-0">
            <Globe className="w-5 h-5" />
          </span>
          <span className="whitespace-nowrap overflow-hidden hidden md:group-hover:inline">View Website</span>
          <span className="whitespace-nowrap overflow-hidden md:hidden">View Website</span>
        </Link>
        <button
          onClick={logout}
          className="w-full flex items-center px-2 py-3 rounded-xl text-sm text-red-400/70 hover:text-red-400 hover:bg-red-500/5 transition-all md:justify-center md:group-hover:justify-start md:gap-0 md:group-hover:gap-3"
        >
          <span className="w-12 flex items-center justify-center flex-shrink-0">
            <LogOut className="w-5 h-5" />
          </span>
          <span className="whitespace-nowrap overflow-hidden hidden md:group-hover:inline">Logout</span>
          <span className="whitespace-nowrap overflow-hidden md:hidden">Logout</span>
        </button>
      </div>
      </aside>
    </>
  );
}

// ── Admin Wrapper ─────────────────────────────────────────────────────────────
export function AdminWrapper({ title, children }) {
  return (
    <div className="min-h-screen bg-gray-950">
      <AdminSidebar />
      <main className="ml-0 md:ml-16 p-4 md:p-8 pt-20 md:pt-8">
        <div className="max-w-6xl mx-auto">
          {title && (
            <h1 className="text-3xl font-black text-white mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {title}
            </h1>
          )}
          {children}
        </div>
      </main>
    </div>
  );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────
export function StatCard({ icon, label, value, sub, color = "text-yellow-400" }) {
  return (
    <div className="bg-gray-900 border border-white/5 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-white/40">{icon}</span>
        <span className={`text-3xl font-black ${color}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{value}</span>
      </div>
      <p className="text-white/50 text-sm font-medium">{label}</p>
      {sub && <p className="text-white/30 text-xs mt-1">{sub}</p>}
    </div>
  );
}

// ── Modal ─────────────────────────────────────────────────────────────────────
export function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="bg-gray-900 border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h3 className="text-lg font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{title}</h3>
          <button onClick={onClose} className="text-white/40 hover:text-white w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10" aria-label="Close modal">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// ── Form Input ────────────────────────────────────────────────────────────────
export function FormInput({ label, type = "text", value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block text-sm text-white/60 mb-1.5">{label}{required && <span className="text-yellow-400 ml-1">*</span>}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} required={required}
        className="w-full bg-gray-800 border border-white/10 focus:border-yellow-400/50 outline-none text-white placeholder-white/20 px-4 py-3 rounded-xl text-sm transition-colors" />
    </div>
  );
}

export function FormSelect({ label, value, onChange, options, required }) {
  return (
    <div>
      <label className="block text-sm text-white/60 mb-1.5">{label}{required && <span className="text-yellow-400 ml-1">*</span>}</label>
      <select value={value} onChange={e => onChange(e.target.value)} required={required}
        className="w-full bg-gray-800 border border-white/10 focus:border-yellow-400/50 outline-none text-white px-4 py-3 rounded-xl text-sm transition-colors">
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}
