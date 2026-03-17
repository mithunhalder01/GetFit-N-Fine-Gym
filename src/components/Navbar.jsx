import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../App";
import { GYM } from "../data";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  {
    to: "/programs",
    label: "Programs",
    children: [
      { to: "/programs", label: "All Programs" },
      { to: "/pricing", label: "Pricing" },
    ],
  },
  { to: "/trainers", label: "Trainers" },
  { to: "/pricing", label: "Pricing" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  {
    label: "More",
    children: [
      { to: "/contact", label: "Contact" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const isActive = (to) => location.pathname === to;
  const isAnyActive = (children) => children?.some((c) => isActive(c.to));

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-white/10" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-black text-2xl tracking-widest text-yellow-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {GYM.name.split(" ")[0]}<span className="text-white dark:text-white text-xl">{GYM.name.split(" ").slice(1).join(" ")}</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-6 list-none items-center">
          {NAV_LINKS.map((item) => (
            <li key={item.label} className="relative">
              {item.children ? (
                <div className="group">
                  <Link
                    to={item.to || item.children[0]?.to || "/"}
                    className={`text-sm uppercase tracking-widest font-medium transition-colors duration-200 inline-flex items-center gap-1 ${
                      (item.to && isActive(item.to)) || isAnyActive(item.children)
                        ? "text-yellow-400"
                        : "text-gray-700 dark:text-white/60 hover:text-yellow-400 dark:hover:text-yellow-400"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </Link>

                  <div className="absolute left-0 top-full pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity">
                    <div className="w-56 rounded-2xl border border-white/10 bg-white/95 dark:bg-black/95 backdrop-blur shadow-xl overflow-hidden">
                      <div className="p-2">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className={`block px-3 py-2.5 rounded-xl text-xs uppercase tracking-widest font-semibold transition-colors ${
                              isActive(c.to)
                                ? "bg-yellow-400/15 text-yellow-500 dark:text-yellow-400"
                                : "text-gray-700/80 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white"
                            }`}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={item.to}
                  className={`text-sm uppercase tracking-widest font-medium transition-colors duration-200 ${
                    isActive(item.to) ? "text-yellow-400" : "text-gray-700 dark:text-white/60 hover:text-yellow-400 dark:hover:text-yellow-400"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* CTA */}
          <Link to="/contact" className="hidden lg:block bg-yellow-400 text-black text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded hover:bg-yellow-300 transition-colors">
            Join Now
          </Link>

          {/* Mobile burger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-gray-700 dark:text-white text-xl w-9 h-9 flex items-center justify-center">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              {item.children ? (
                <>
                  <div className="text-xs uppercase tracking-widest font-bold text-gray-500 dark:text-white/30">{item.label}</div>
                  <div className="flex flex-col gap-2 pl-3">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className={`text-sm uppercase tracking-widest font-medium transition-colors ${
                          isActive(c.to) ? "text-yellow-400" : "text-gray-700 dark:text-white/60"
                        }`}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.to}
                  className={`text-sm uppercase tracking-widest font-medium transition-colors ${
                    isActive(item.to) ? "text-yellow-400" : "text-gray-700 dark:text-white/60"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="flex gap-3 pt-2 border-t border-gray-200 dark:border-white/10">
            <Link to="/contact" className="bg-yellow-400 text-black text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded flex-1 text-center">Join Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
