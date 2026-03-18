import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [brandFirst, ...brandRest] = GYM.name.split(" ");
  const brandRestText = brandRest.join(" ");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (to) => location.pathname === to;
  const isAnyActive = (children) => children?.some((c) => isActive(c.to));

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-gray-950/90 backdrop-blur-md border-b border-white/10 py-0 shadow-lg" 
          : "bg-transparent border-b border-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link
          to="/"
          className="min-w-0 flex items-baseline gap-1 sm:gap-1.5 font-black text-yellow-400 leading-none relative z-50"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="text-lg sm:text-2xl tracking-[0.12em] sm:tracking-widest">
            {brandFirst}
          </span>
          <span className="text-[11px] sm:text-xl text-gray-100 tracking-[0.08em] sm:tracking-normal">
            {brandRestText}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-6 list-none items-center">
          {NAV_LINKS.map((item) => (
            <li key={item.label} className="relative">
              {item.children ? (
                <div className="group">
                  <Link
                    to={item.to || item.children[0]?.to || "/"}
                    className={`text-sm uppercase tracking-widest font-medium transition-colors duration-200 inline-flex items-center gap-1 text-gray-200 hover:text-yellow-400 ${
                      (item.to && isActive(item.to)) || isAnyActive(item.children)
                        ? "text-yellow-400 font-bold"
                        : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </Link>

                  <div className="absolute left-0 top-full pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity">
                    <div className="w-56 rounded-2xl border border-white/10 bg-gray-950/95 backdrop-blur shadow-xl overflow-hidden">
                      <div className="p-2">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className={`block px-3 py-2.5 rounded-xl text-xs uppercase tracking-widest font-semibold transition-colors text-gray-200 hover:bg-gray-800 hover:text-gray-50 ${
                              isActive(c.to)
                                ? "bg-yellow-400/20 text-yellow-500 font-bold"
                                : ""
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
                  className={`text-sm uppercase tracking-widest font-medium transition-colors duration-200 text-gray-200 hover:text-yellow-400 ${
                    isActive(item.to) ? "text-yellow-400 font-bold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 relative z-50">
          <Link to="/contact" className="hidden lg:block bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg transition-all duration-200">
            Join Now
          </Link>

          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="lg:hidden text-gray-100 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu - Fixed alignment & Blur */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-0 bg-gray-950/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out overflow-y-auto ${
          menuOpen ? "translate-y-0 opacity-100 visible max-h-screen" : "-translate-y-full opacity-0 invisible max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 pt-20 pb-8">
          {NAV_LINKS.map((item) => (
            <div key={item.label} className="flex flex-col gap-3 border-b border-white/5 pb-4 last:border-b-0">
              {item.children ? (
                <>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 px-1">
                    {item.label}
                  </div>
                  <div className="flex flex-col gap-3 pl-4">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className={`text-lg font-bold transition-colors ${
                          isActive(c.to) ? "text-yellow-400" : "text-gray-200"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.to}
                  className={`text-xl font-black uppercase tracking-tight transition-colors ${
                    isActive(item.to) ? "text-yellow-400" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Link 
              to="/contact" 
              onClick={() => setMenuOpen(false)}
              className="bg-yellow-400 text-black text-sm font-black uppercase tracking-widest py-4 rounded-xl text-center block shadow-lg active:scale-95 transition-transform"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}