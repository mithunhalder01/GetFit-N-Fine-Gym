import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES, PLANS, PROGRAMS, TRAINERS } from "../data";
import { FadeIn, Stars } from "../components/UI";
import { ProgramIcon } from "../components/Icons";
import { Check, ChevronRight } from "lucide-react";

// ── HERO ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-[78svh] sm:min-h-[72vh] lg:min-h-[88vh] flex items-center bg-black overflow-hidden">
      {/* Image */}
      <img
        src={IMAGES.hero}
        alt="Gym training"
        className="absolute inset-0 w-full h-full object-cover  opacity-25"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
      {/* Grid */}
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 60px,#1f1f1f 60px,#1f1f1f 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,#1f1f1f 60px,#1f1f1f 61px)" }} />
      {/* Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-400/5 pointer-events-none" style={{ filter: "blur(100px)" }} />
      {/* Big number */}
      <span className="absolute right-4 top-1/2 -translate-y-1/2 font-black text-yellow-400/[0.03] leading-none select-none pointer-events-none hidden xl:block" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "18vw" }}>99</span>

      <div className="relative z-10 max-w-7xl mt-4 sm:mt-10 mx-auto px-4 sm:px-6 pt-20 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 w-full">
        <FadeIn>
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-block bg-yellow-400 text-black text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.28em] px-3 sm:px-4 py-1.5 mb-5">Est. 2019 · Noida, UP</div>
              
              {/* Responsive Heading: Mobile pe text chota, Desktop pe 85px */}
              <h1 className="font-black text-white mb-4 leading-[0.95] text-[clamp(2.7rem,12vw,4.75rem)] sm:text-6xl lg:text-[85px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                FORGE YOUR<br /><span className="text-yellow-400">LEGEND</span>
              </h1>
              
              <p className="text-white/70 text-[15px] sm:text-base max-w-xl leading-relaxed mb-6 font-light">
                A modern performance gym built for real results. Train smarter with elite coaching, high-end equipment, and a community that keeps you consistent.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6 max-w-xl">
                {[
                  "Goal-based training plans",
                  "Certified coaches + form-first",
                  "Strength, HIIT, & Boxing",
                  "Progress tracking",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2.5 text-white/65 text-[13px] leading-relaxed">
                    <span className="mt-0.5 w-5 h-5 rounded-lg bg-yellow-400/15 border border-yellow-400/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-yellow-300" />
                    </span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>

              {/* Stats: Mobile pe wrapping achhi dikhegi */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur px-3 py-1.5">
                  <Stars count={5} />
                  <span className="text-white/60 text-[10px] font-semibold uppercase tracking-wider">4.9+ rated</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur px-3 py-1.5">
                  <span className="text-white font-black text-xs tabular-nums">2500+</span>
                  <span className="text-white/60 text-[10px] font-semibold uppercase tracking-wider">members</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="w-full sm:w-auto text-center bg-yellow-400 text-black font-black uppercase text-[11px] tracking-widest px-6 sm:px-8 py-4 rounded-lg hover:bg-yellow-300 transition-all duration-200">
                  Book Free Trial
                </Link>
                <Link to="/pricing" className="w-full sm:w-auto text-center border border-yellow-400 text-yellow-400 font-black uppercase text-[11px] tracking-widest px-6 sm:px-8 py-4 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-200">
                  See Pricing
                </Link>
              </div>
            </div>

            {/* Right side Images: Tablet/Mobile pe hide hi rakha hai kyunki space kam hoti hai */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                <img
                  src={IMAGES.gym1}
                  alt="Gym floor"
                  className="w-full h-[420px] object-cover opacity-90"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                  <div className="bg-black/40 border border-white/10 backdrop-blur rounded-2xl px-4 py-3">
                    <div className="text-white font-semibold text-sm">Personal Coaching</div>
                    <div className="text-white/50 text-xs mt-0.5">Strength • HIIT • Mobility</div>
                  </div>
                  <div className="bg-yellow-400 text-black font-black uppercase text-xs tracking-widest rounded-2xl px-4 py-3">
                    Free Trial
                  </div>
                </div>
              </div>

              <div className="absolute -left-10 top-10 w-44 rounded-2xl overflow-hidden border border-white/10 bg-white/5 rotate-[-6deg] shadow-2xl shadow-black/40">
                <img src={IMAGES.gym3} alt="Training session" className="w-full h-28 object-cover" loading="lazy" />
              </div>
              <div className="absolute -right-8 bottom-10 w-48 rounded-2xl overflow-hidden border border-white/10 bg-white/5 rotate-[7deg] shadow-2xl shadow-black/40">
                <img src={IMAGES.gym2} alt="Cardio zone" className="w-full h-32 object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
// ── STATS BAR ─────────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = useMemo(
    () => [
      { value: 2500, suffix: "+", decimals: 0, label: "Active Members" },
      { value: 18, suffix: "", decimals: 0, label: "Expert Trainers" },
      { value: 40, suffix: "+", decimals: 0, label: "Weekly Classes" },
      { value: 5, suffix: ".0", decimals: 0, label: "Average Rating" },
    ],
    []
  );

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [shown, setShown] = useState(() => stats.map((s) => s.value));

  useEffect(() => {
    if (prefersReducedMotion) {
      setShown(stats.map((s) => s.value));
      return;
    }

    const start = performance.now();
    const durationMs = 1100;
    const from = stats.map(() => 0);

    let raf = 0;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(stats.map((s, i) => Math.round(from[i] + (s.value - from[i]) * eased)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [prefersReducedMotion, stats]);

  return (
    <div className="bg-yellow-400 grid grid-cols-2 md:grid-cols-4">
      {stats.map((s, i) => (
        <div key={i} className="text-center py-4 sm:py-5 px-3 sm:px-4 border-r border-black/10 last:border-0">
          <div className="text-3xl sm:text-4xl font-black text-black tabular-nums" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {shown[i].toLocaleString()}
            {s.suffix}
          </div>
          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-widest text-black/60">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

// ── PROGRAMS PREVIEW ──────────────────────────────────────────────────────────
function ProgramsPreview() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">What We Offer</p>
            <h2 className="font-black leading-[0.9] text-white" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 9vw, 80px)" }}>
              OUR <span className="text-yellow-400">PROGRAMS</span>
            </h2>
          </div>
          <Link to="/programs" className="text-yellow-400 text-sm uppercase tracking-widest font-bold hover:underline inline-flex items-center gap-1">
            View All Programs <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
          {PROGRAMS.slice(0, 4).map((p, i) => (
            <FadeIn key={p.id} delay={i * 80}>
              <Link to="/programs" className="bg-[#0a0a0a] p-6 sm:p-7 group hover:bg-[#111] transition-colors h-full block">
                <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                  <ProgramIcon name={p.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{p.desc}</p>
                <span className="border border-white/10 group-hover:border-yellow-400 group-hover:text-yellow-400 text-white/30 text-xs uppercase tracking-widest px-3 py-1.5 transition-all duration-300">{p.level}</span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── TRANSFORMATION CARDS ───────────────────────────────────────────────────────
function Transformations() {
  const cards = [
    {
      title: "Weight Loss",
      subtitle: "Fat loss, stamina, and a plan you can stick to.",
      image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=1800&q=80",
      tag: "HIIT • Cardio • Nutrition",
    },
    {
      title: "Muscle Build",
      subtitle: "Progressive overload with expert coaching.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1800&q=80",
      tag: "Strength • Hypertrophy",
    },
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">Choose Your Goal</p>
            <h2 className="font-black leading-[0.9] text-white" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 8vw, 76px)" }}>
              TRANSFORM <span className="text-yellow-400">FASTER</span>
            </h2>
          </div>
          <Link to="/contact" className="text-yellow-400 text-sm uppercase tracking-widest font-bold hover:underline inline-flex items-center gap-1">
            Get a free assessment <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <FadeIn key={c.title} delay={i * 80}>
              <Link to="/contact" className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 group block">
                <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-90 transition-opacity" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
                <div className="relative p-6 sm:p-8 min-h-[260px] flex flex-col justify-end">
                  <div className="inline-block bg-yellow-400 text-black text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-full w-fit mb-4">
                    {c.tag}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
                    <div>
                      <div className="text-white text-3xl font-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{c.title}</div>
                      <div className="text-white/60 text-sm mt-2 max-w-md">{c.subtitle}</div>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 backdrop-blur flex items-center justify-center text-yellow-300">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── TRAINERS PREVIEW ──────────────────────────────────────────────────────────
function TrainersPreview() {
  return (
    <section className="bg-[#0d0d0d] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">Expert Coaching</p>
            <h2 className="font-black leading-[0.9] text-white" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 9vw, 80px)" }}>
              MEET THE <span className="text-yellow-400">TEAM</span>
            </h2>
          </div>
          <Link to="/trainers" className="text-yellow-400 text-sm uppercase tracking-widest font-bold hover:underline inline-flex items-center gap-1">
            All Trainers <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRAINERS.slice(0, 4).map((t, i) => (
            <FadeIn key={t.id} delay={i * 80}>
              <Link to="/trainers" className="relative bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden group hover:border-yellow-400/20 transition-colors h-full block">
                <div className="relative">
                  <img src={t.image} alt={t.name} className="w-full h-52 object-cover opacity-90 group-hover:opacity-100 transition-opacity" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-2xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.name}</h3>
                  <p className="text-yellow-400 text-xs uppercase tracking-widest font-bold mt-1 mb-3">{t.role}</p>

                  {/* Glassy mini card */}
                  <div className="mt-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur px-4 py-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-white/70 text-xs uppercase tracking-widest font-bold">Trainer Profile</p>
                        <p className="text-white/45 text-xs mt-2">
                          <span className="text-white/60">Experience:</span> {t.exp}
                        </p>
                        <p className="text-white/45 text-xs mt-1 truncate">
                          <span className="text-white/60">Specialty:</span> {t.role.split("·")[0].trim()}
                        </p>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <Stars count={5} />
                        <p className="text-white/30 text-[11px] mt-1">Top rated</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── PRICING PREVIEW ────────────────────────────────────────────────────────────
function PricingPreview() {
  const topFeatures = (p) => (p.features || []).slice(0, 4);

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">Membership</p>
            <h2 className="font-black leading-[0.9] text-white" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 9vw, 80px)" }}>
              SIMPLE <span className="text-yellow-400">PRICING</span>
            </h2>
          </div>
          <Link to="/pricing" className="text-yellow-400 text-sm uppercase tracking-widest font-bold hover:underline inline-flex items-center gap-1">
            View full pricing <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PLANS.map((p, i) => (
            <FadeIn key={p.name} delay={i * 80}>
              <div className={`relative rounded-3xl border h-full p-6 sm:p-8 ${p.featured ? "bg-[#111] border-yellow-400/25" : "bg-[#0a0a0a] border-white/5"}`}>
                {p.featured && <span className="absolute -top-px right-8 bg-yellow-400 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-b">Most Popular</span>}
                <div className={`text-xs font-bold uppercase tracking-[0.3em] mb-2 ${p.featured ? "text-yellow-400" : "text-white/30"}`}>{p.name}</div>
                <div className="text-4xl sm:text-5xl font-black text-white leading-none mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>₹{p.price.toLocaleString()}</div>
                <p className="text-white/30 text-sm mb-6">/month</p>

                <div className="space-y-3 mb-8">
                  {topFeatures(p).map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-sm text-white/60">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className={`w-full py-3.5 text-sm font-black uppercase tracking-widest text-center block rounded-xl transition-all duration-200 ${p.featured ? "bg-yellow-400 text-black hover:bg-yellow-300" : "border border-white/15 text-white/60 hover:border-yellow-400 hover:text-yellow-400"}`}>
                  Get Started
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA BANNER ────────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="bg-yellow-400 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-black text-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(34px, 9vw, 80px)" }}>
          READY TO START YOUR JOURNEY?
        </h2>
        <p className="text-black/60 text-base sm:text-lg mb-8">Join 2500+ members who've already transformed their lives. Your first session is FREE.</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link to="/contact" className="w-full sm:w-auto bg-black text-yellow-400 font-black uppercase text-sm tracking-widest px-6 sm:px-8 py-4 rounded hover:bg-gray-900 transition-colors">
            Book Free Trial
          </Link>
          <Link to="/pricing" className="w-full sm:w-auto border-2 border-black text-black font-black uppercase text-sm tracking-widest px-6 sm:px-8 py-4 rounded hover:bg-black hover:text-yellow-400 transition-all">
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProgramsPreview />
      <Transformations />
      <TrainersPreview />
      <PricingPreview />
      <CTABanner />
    </>
  );
}
