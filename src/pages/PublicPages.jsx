// ── PROGRAMS PAGE ─────────────────────────────────────────────────────────────
import { useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES, PROGRAMS, SCHEDULE, TRAINERS, PLANS, BLOGS, GYM } from "../data";
import { PageHero, FadeIn, BMICalculator, Stars } from "../components/UI";
import { BlogCategoryIcon, FacilityIcon, ProgramIcon } from "../components/Icons";
import { Check, ChevronRight, MessageCircle, Plus, X } from "lucide-react";

export function Programs() {
  const [day, setDay] = useState("All");
  const days = ["All", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const filtered = day === "All" ? SCHEDULE : SCHEDULE.filter(s => s.days.includes(day));
  const levelColor = { Beginner: "text-blue-400 bg-blue-400/10", Intermediate: "text-orange-400 bg-orange-400/10", Advanced: "text-yellow-400 bg-yellow-400/10", "All Levels": "text-green-400 bg-green-400/10" };

  return (
    <>
      <PageHero tag="What We Offer" title="OUR" highlight="PROGRAMS" subtitle="8 world-class training programs designed for all levels — beginner to elite." />
      <section className="bg-black py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
            {PROGRAMS.map((p, i) => (
              <FadeIn key={p.id} delay={i * 60}>
                <Link to="/contact" className="bg-[#0a0a0a] p-6 sm:p-8 group hover:bg-[#111] transition-colors h-full block">
                  <div className="text-yellow-400 mb-5 group-hover:scale-110 transition-transform duration-300 origin-left">
                    <ProgramIcon name={p.icon} className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-5">{p.desc}</p>
                  <div className="space-y-1.5 mb-5">
                    <p className="text-xs text-white/30"><span className="text-white/50">Duration:</span> {p.duration}</p>
                    <p className="text-xs text-white/30"><span className="text-white/50">Days:</span> {p.days}</p>
                  </div>
                  <span className="border border-white/10 group-hover:border-yellow-400 group-hover:text-yellow-400 text-white/30 text-xs uppercase tracking-widest px-3 py-1.5 transition-all">{p.level}</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-[#0d0d0d] py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">Weekly Timetable</p>
          <h2 className="font-black leading-[0.9] text-white mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px,9vw,80px)" }}>
            CLASS <span className="text-yellow-400">SCHEDULE</span>
          </h2>
          <div className="flex gap-2 flex-wrap mb-8">
            {days.map(d => (
              <button key={d} onClick={() => setDay(d)} className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded transition-all ${d === day ? "bg-yellow-400 text-black" : "border border-white/10 text-white/40 hover:border-yellow-400/50 hover:text-white/70"}`}>{d}</button>
            ))}
          </div>
          <div className="space-y-3 md:hidden">
            {filtered.map((s, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-yellow-400 text-[11px] font-black uppercase tracking-[0.22em]">{s.time}</p>
                    <h3 className="mt-2 text-white text-lg font-semibold">{s.name}</h3>
                  </div>
                  <span className={`text-[10px] uppercase tracking-[0.18em] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${levelColor[s.level] || "bg-white/10 text-white/40"}`}>
                    {s.level}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-white/[0.03] border border-white/5 px-3 py-2">
                    <p className="text-white/30 text-[10px] uppercase tracking-[0.18em] mb-1">Trainer</p>
                    <p className="text-white/70">{s.trainer}</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] border border-white/5 px-3 py-2">
                    <p className="text-white/30 text-[10px] uppercase tracking-[0.18em] mb-1">Duration</p>
                    <p className="text-white/70">{s.duration}</p>
                  </div>
                </div>
                <p className="mt-3 text-white/35 text-[11px] uppercase tracking-[0.18em]">
                  Days: {s.days.join(" • ")}
                </p>
              </div>
            ))}
          </div>
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead><tr className="border-b border-white/10">{["Time", "Class", "Trainer", "Duration", "Days", "Level"].map(h => <th key={h} className="text-left py-3 px-4 text-yellow-400 text-xs uppercase tracking-widest font-bold">{h}</th>)}</tr></thead>
              <tbody>
                {filtered.map((s, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 text-white/40 text-sm font-mono">{s.time}</td>
                    <td className="py-4 px-4 text-white font-medium">{s.name}</td>
                    <td className="py-4 px-4 text-white/50 text-sm">{s.trainer}</td>
                    <td className="py-4 px-4 text-white/40 text-sm">{s.duration}</td>
                    <td className="py-4 px-4 text-white/30 text-xs">{s.days.join(", ")}</td>
                    <td className="py-4 px-4"><span className={`text-xs uppercase tracking-widest font-bold px-2.5 py-1 rounded-full ${levelColor[s.level] || "bg-white/10 text-white/40"}`}>{s.level}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BMI */}
      <section className="bg-black py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto"><BMICalculator /></div>
      </section>
    </>
  );
}

// ── TRAINERS PAGE ─────────────────────────────────────────────────────────────
export function Trainers() {
  return (
    <>
      <PageHero tag="Expert Coaching" title="MEET THE" highlight="TEAM" subtitle="Certified professionals dedicated to your transformation. Every trainer is handpicked for expertise, passion, and results." />
      <section className="bg-black py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
          {TRAINERS.map((t, i) => (
            <FadeIn key={t.id} delay={i * 80}>
              <div className="bg-[#0a0a0a] p-6 sm:p-9 group hover:bg-[#111] transition-colors h-full">
                <div className="w-20 h-20 rounded-full mb-5 overflow-hidden border border-white/10">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.name}</h3>
                <p className="text-yellow-400 text-xs uppercase tracking-widest font-bold mt-1 mb-3">{t.role}</p>
                <p className="text-white/40 text-sm leading-relaxed mb-5">{t.bio}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {t.specialties.map(s => <span key={s} className="text-xs bg-white/5 border border-white/10 text-white/50 px-2.5 py-1 rounded-full">{s}</span>)}
                </div>
                <div className="flex gap-4 text-xs text-white/30">
                  <span><span className="text-white/50">Exp:</span> {t.exp}</span>
                  <span><span className="text-white/50">Cert:</span> {t.cert}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}

// ── PRICING PAGE ──────────────────────────────────────────────────────────────
export function Pricing() {
  const [annual, setAnnual] = useState(false);
  const price = (p) => annual ? Math.round(p * 10) : p;

  const faq = [
    { q: "Can I freeze my membership?", a: "Yes, you can freeze your membership for up to 2 months per year. Contact us at the front desk." },
    { q: "Is there a joining fee?", a: "No joining fee on any plan. You only pay the monthly or annual membership fee." },
    { q: "Can I upgrade my plan?", a: "Absolutely! You can upgrade at any time. We'll adjust the billing on a pro-rata basis." },
    { q: "What if I'm not satisfied?", a: "We offer a 7-day money-back guarantee for new members. No questions asked." },
    { q: "Do you offer student discounts?", a: "Yes! Show your student ID for 20% off the Starter or Pro plan." },
    { q: "Is there a family plan?", a: "Yes, families of 3+ get 15% off on individual plans. Contact us for details." },
  ];

  return (
    <>
      <PageHero tag="Membership" title="SIMPLE" highlight="PRICING" subtitle="No hidden fees. No lock-ins. Just results. Choose the plan that fits your goals." />

      <section className="bg-black py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Toggle */}
          <div className="flex flex-col min-[420px]:flex-row items-center justify-center gap-3 min-[420px]:gap-4 mb-10 sm:mb-14 text-center">
            <span className={`text-sm font-bold uppercase tracking-widest ${!annual ? "text-yellow-400" : "text-white/30"}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-14 h-7 rounded-full transition-colors duration-300 relative ${annual ? "bg-yellow-400" : "bg-white/10"}`}>
              <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all duration-300 ${annual ? "left-8" : "left-1"}`} />
            </button>
            <span className={`text-sm font-bold uppercase tracking-widest ${annual ? "text-yellow-400" : "text-white/30"}`}>Annual <span className="text-green-400 text-xs ml-1">Save 2 months</span></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
            {PLANS.map((p, i) => (
              <FadeIn key={p.name} delay={i * 100}>
                <div className={`relative flex flex-col p-6 sm:p-10 h-full ${p.featured ? "bg-[#111] border-t-2 border-yellow-400" : "bg-[#0a0a0a]"}`}>
                  {p.featured && <span className="absolute -top-px right-4 sm:right-8 bg-yellow-400 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1">Most Popular</span>}
                  <div className={`text-xs font-bold uppercase tracking-[0.3em] mb-2 ${p.featured ? "text-yellow-400" : "text-white/30"}`}>{p.name}</div>
                  <div className="text-4xl sm:text-5xl font-black text-white leading-none mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>₹{price(p.price).toLocaleString()}</div>
                  <p className="text-white/30 text-sm mb-8">/{annual ? "year" : "month"}</p>
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {p.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/60">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />{f}
                      </li>
                    ))}
                    {p.notIncluded.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/20">
                        <X className="w-4 h-4 mt-0.5 flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`w-full py-3.5 text-sm font-black uppercase tracking-widest text-center block rounded transition-all duration-200 ${p.featured ? "bg-yellow-400 text-black hover:bg-yellow-300" : "border border-white/20 text-white/60 hover:border-yellow-400 hover:text-yellow-400"}`}>
                    Get Started
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0d0d0d] py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.3em] mb-3 text-center">Got Questions?</p>
          <h2 className="font-black text-white text-center mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(34px,9vw,64px)" }}>
            FAQ<span className="text-yellow-400">s</span>
          </h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-4 sm:px-6 py-4 text-left group hover:bg-white/[0.02] transition-colors">
        <span className="text-white font-medium text-sm pr-4">{q}</span>
        <span className={`text-yellow-400 transition-transform duration-200 flex-shrink-0 ${open ? "rotate-45" : ""}`}>
          <Plus className="w-4 h-4" />
        </span>
      </button>
      {open && <div className="px-4 sm:px-6 pb-5 text-white/50 text-sm leading-relaxed border-t border-white/5 pt-4">{a}</div>}
    </div>
  );
}

// ── GALLERY PAGE ──────────────────────────────────────────────────────────────
export function Gallery() {
  const items = [
    { label: "Main Floor", icon: "floor", image: IMAGES.gym1 },
    { label: "Cardio Zone", icon: "cardio", image: IMAGES.gym2 },
    { label: "CrossFit Box", icon: "crossfit", image: IMAGES.gym3 },
    { label: "Yoga Studio", icon: "yoga", image: IMAGES.gym4 },
    { label: "Boxing Ring", icon: "boxing", image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1600&q=80" },
    { label: "Locker Room", icon: "locker", image: "https://images.unsplash.com/photo-1554344058-3d2c9c5bbd5d?auto=format&fit=crop&w=1600&q=80" },
    { label: "Recovery Zone", icon: "recovery", image: "https://images.unsplash.com/photo-1540558870477-e8c59f3bb32f?auto=format&fit=crop&w=1600&q=80" },
    { label: "Juice Bar", icon: "juice", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1600&q=80" },
    { label: "Member Wall", icon: "wall", image: "https://images.unsplash.com/photo-1526404801122-9c1a8b3c1d19?auto=format&fit=crop&w=1600&q=80" },
  ];
  return (
    <>
      <PageHero tag={`Inside ${GYM.name}`} title="PHOTO" highlight="GALLERY" subtitle="Get a look at the facilities, equipment, and atmosphere that makes our gym different." />
      <section className="bg-black py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[220px] min-[420px]:auto-rows-[170px] md:auto-rows-[200px]">
            {items.map((item, i) => (
              <FadeIn key={i} delay={i * 60}>
                {(() => {
                  const spans = [
                    "col-span-1 row-span-1 min-[420px]:col-span-2 min-[420px]:row-span-2 md:col-span-2 md:row-span-2",
                    "col-span-1 row-span-1 min-[420px]:col-span-1 min-[420px]:row-span-2 md:col-span-1 md:row-span-2",
                    "col-span-1 row-span-1 min-[420px]:col-span-1 min-[420px]:row-span-1 md:col-span-1 md:row-span-1",
                    "col-span-1 row-span-1 min-[420px]:col-span-2 min-[420px]:row-span-1 md:col-span-2 md:row-span-2",
                    "col-span-1 row-span-1 min-[420px]:col-span-1 min-[420px]:row-span-1 md:col-span-1 md:row-span-1",
                    "col-span-1 row-span-1 min-[420px]:col-span-1 min-[420px]:row-span-1 md:col-span-1 md:row-span-1",
                    "col-span-1 row-span-1 min-[420px]:col-span-2 min-[420px]:row-span-1 md:col-span-2 md:row-span-1",
                    "col-span-1 row-span-1 min-[420px]:col-span-1 min-[420px]:row-span-1 md:col-span-1 md:row-span-1",
                    "col-span-1 row-span-1 min-[420px]:col-span-1 min-[420px]:row-span-1 md:col-span-1 md:row-span-1",
                  ];

                  return (
                    <a
                      href={item.image}
                      target="_blank"
                      rel="noreferrer"
                      className={`relative h-full rounded-2xl overflow-hidden border border-white/10 cursor-pointer group block ${spans[i] || "col-span-2 row-span-1"}`}
                      aria-label={`Open ${item.label} image`}
                    >
                  <img src={item.image} alt={item.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: "radial-gradient(600px 240px at 20% 90%, rgba(232,255,0,0.18), transparent 55%)" }} />

                  <div className="relative h-full p-4 md:p-5 flex items-end justify-between gap-4">
                    <div className="min-w-0">
                      <span className="text-white/95 text-sm font-semibold tracking-wide block truncate">{item.label}</span>
                      <div className="text-white/50 text-xs mt-1">Gym Facility</div>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 backdrop-blur flex items-center justify-center text-yellow-300 flex-shrink-0 group-hover:scale-105 transition-transform">
                      <FacilityIcon name={item.icon} className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-yellow-400/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                  );
                })()}
              </FadeIn>
            ))}
          </div>
          <p className="text-white/30 text-center text-sm mt-8">You can replace these with your real gym photos anytime.</p>
        </div>
      </section>
    </>
  );
}

// ── BLOG PAGE ─────────────────────────────────────────────────────────────────
export function Blog() {
  const catColors = { Nutrition: "bg-green-400/10 text-green-400", Training: "bg-yellow-400/10 text-yellow-400", Lifestyle: "bg-blue-400/10 text-blue-400", Recovery: "bg-purple-400/10 text-purple-400" };
  return (
    <>
      <PageHero tag="Knowledge Hub" title="FITNESS" highlight="BLOG" subtitle="Expert tips, training guides, and nutrition advice from our certified coaches." />
      <section className="bg-black py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOGS.map((b, i) => (
            <FadeIn key={b.id} delay={i * 80}>
              <Link to={`/blog/${b.id}`} className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden group hover:border-yellow-400/20 transition-colors cursor-pointer h-full flex flex-col">
                <div className="h-44 relative">
                  <img src={b.image} alt={b.title} className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/10" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/10 border border-white/15 backdrop-blur flex items-center justify-center text-white/90">
                    <BlogCategoryIcon category={b.category} className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${catColors[b.category] || "bg-white/10 text-white/50"}`}>{b.category}</span>
                    <span className="text-white/30 text-xs">{b.readTime} read</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{b.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed flex-1">{b.excerpt}</p>
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/5">
                    <span className="text-white/25 text-xs">{b.date}</span>
                    <span className="text-yellow-400 text-xs font-bold inline-flex items-center gap-1">Read More <ChevronRight className="w-4 h-4" /></span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}

// ── CONTACT PAGE ──────────────────────────────────────────────────────────────
export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", plan: "Pro", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi ${GYM.name}!\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterested in: ${form.plan} Plan\n\nMessage: ${form.message}`;
    window.open(`https://wa.me/${GYM.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", plan: "Pro", message: "" });
  };

  const f = (k) => (v) => setForm(prev => ({ ...prev, [k]: v }));

  return (
    <>
      <PageHero tag="Get Started" title="JOIN" highlight="TODAY" subtitle="Your first session is FREE. Fill in your details and we'll get back to you within 2 hours." />
      <section className="bg-black py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Info */}
          <FadeIn>
            <div className="space-y-6 sm:space-y-8">
              {[
                { label: "Address", val: GYM.address },
                { label: "Hours (Mon–Sat)", val: GYM.hours.weekday },
                { label: "Sunday Hours", val: GYM.hours.sunday },
                { label: "Phone", val: GYM.phone },
                { label: "Email", val: GYM.email },
              ].map(item => (
                <div key={item.label}>
                  <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.3em] mb-1">{item.label}</p>
                  <p className="text-white/60 text-base">{item.val}</p>
                </div>
              ))}
              <div>
                <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">Follow Us</p>
                <div className="flex flex-wrap gap-3">
                  <a href={GYM.instagram} target="_blank" rel="noreferrer" className="px-4 py-2 border border-white/10 hover:border-yellow-400 text-white/40 hover:text-yellow-400 text-xs uppercase tracking-widest rounded transition-all">Instagram</a>
                  <a href={GYM.facebook} target="_blank" rel="noreferrer" className="px-4 py-2 border border-white/10 hover:border-yellow-400 text-white/40 hover:text-yellow-400 text-xs uppercase tracking-widest rounded transition-all">Facebook</a>
                  <a href={GYM.youtube} target="_blank" rel="noreferrer" className="px-4 py-2 border border-white/10 hover:border-yellow-400 text-white/40 hover:text-yellow-400 text-xs uppercase tracking-widest rounded transition-all">YouTube</a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={200}>
            <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-white/10 bg-[#0a0a0a] p-5 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>BOOK A FREE TRIAL</h3>
              {[{ k: "name", label: "Full Name *", type: "text" }, { k: "email", label: "Email Address", type: "email" }, { k: "phone", label: "WhatsApp Number *", type: "tel" }].map(({ k, label, type }) => (
                <div key={k}>
                  <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">{label}</label>
                  <input type={type} required={label.includes("*")} value={form[k]} onChange={e => f(k)(e.target.value)}
                    className="w-full bg-[#111] border border-white/10 focus:border-yellow-400/50 outline-none text-white placeholder-white/20 px-4 py-3.5 rounded-lg text-sm transition-colors" />
                </div>
              ))}
              <div>
                <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Interested Plan</label>
                <select value={form.plan} onChange={e => f("plan")(e.target.value)} className="w-full bg-[#111] border border-white/10 focus:border-yellow-400/50 outline-none text-white px-4 py-3.5 rounded-lg text-sm">
                  {["Starter", "Pro", "Elite", "Not sure yet"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Your Fitness Goals</label>
                <textarea rows={4} value={form.message} onChange={e => f("message")(e.target.value)} placeholder="Tell us about your goals, current fitness level, or any questions..."
                  className="w-full bg-[#111] border border-white/10 focus:border-yellow-400/50 outline-none text-white placeholder-white/20 px-4 py-3.5 rounded-lg text-sm resize-none transition-colors" />
              </div>
              <button type="submit" className="w-full bg-yellow-400 text-black font-black uppercase text-sm tracking-widest py-4 rounded-lg hover:bg-yellow-300 transition-all hover:scale-[1.02] duration-200">
                {sent ? (
                  <span className="inline-flex items-center justify-center gap-2">
                    <Check className="w-4 h-4" /> Redirecting to WhatsApp...
                  </span>
                ) : (
                  <span className="inline-flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" /> Send via WhatsApp
                  </span>
                )}
              </button>
              <p className="text-white/20 text-xs text-center">Clicking above will open WhatsApp with your details pre-filled.</p>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
