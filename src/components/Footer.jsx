// Footer.jsx
import { Link } from "react-router-dom";
import { GYM } from "../data";
import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-black text-xl sm:text-2xl tracking-[0.12em] sm:tracking-widest text-yellow-400 mb-3 break-words" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {GYM.name}
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4">{GYM.address}</p>
            <div className="flex gap-3">
              <a href={GYM.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 border border-white/10 hover:border-yellow-400 hover:text-yellow-400 text-white/30 flex items-center justify-center rounded transition-all duration-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={GYM.facebook} target="_blank" rel="noreferrer" className="w-9 h-9 border border-white/10 hover:border-yellow-400 hover:text-yellow-400 text-white/30 flex items-center justify-center rounded transition-all duration-200">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={GYM.youtube} target="_blank" rel="noreferrer" className="w-9 h-9 border border-white/10 hover:border-yellow-400 hover:text-yellow-400 text-white/30 flex items-center justify-center rounded transition-all duration-200" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-4">Quick Links</p>
            <div className="flex flex-col gap-2">
              {["/", "/programs", "/trainers", "/pricing", "/gallery", "/blog"].map((to) => (
                <Link key={to} to={to} className="text-white/40 hover:text-white text-sm transition-colors capitalize">
                  {to === "/" ? "Home" : to.slice(1)}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-4">Programs</p>
            <div className="flex flex-col gap-2">
              {["Strength Training", "HIIT & Cardio", "CrossFit WODs", "Yoga & Mobility", "Boxing & MMA", "Functional Fitness"].map((p) => (
                <Link key={p} to="/programs" className="text-white/40 hover:text-white text-sm transition-colors">{p}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-4">Contact</p>
            <div className="flex flex-col gap-3">
              <div><p className="text-xs text-white/30 uppercase tracking-wider mb-0.5">Phone</p><p className="text-white/60 text-sm">{GYM.phone}</p></div>
              <div><p className="text-xs text-white/30 uppercase tracking-wider mb-0.5">Email</p><p className="text-white/60 text-sm">{GYM.email}</p></div>
              <div><p className="text-xs text-white/30 uppercase tracking-wider mb-0.5">Hours</p><p className="text-white/60 text-sm">Mon–Sat: {GYM.hours.weekday}</p><p className="text-white/60 text-sm">Sun: {GYM.hours.sunday}</p></div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-sm">© 2025 {GYM.name}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
            <Link to="/privacy" className="text-white/20 hover:text-white/50 text-xs uppercase tracking-widest transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/20 hover:text-white/50 text-xs uppercase tracking-widest transition-colors">Terms of Service</Link>
            <Link to="/refund" className="text-white/20 hover:text-white/50 text-xs uppercase tracking-widest transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// ── WhatsApp Float Button ─────────────────────────────────────────────────────
export function WhatsAppFloat() {
  const { GYM: gym } = require("../data");
  return null; // Imported separately
}
