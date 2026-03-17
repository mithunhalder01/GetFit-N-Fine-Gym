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
  const [scrolled, setScrolled] = useState(false); // Scroll state
  const location = useLocation();

  // Scroll effect to track window position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const isActive = (to) => location.pathname === to;
  const isAnyActive = (children) => children?.some((c) => isActive(c.to));

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-gray-950/90 backdrop-blur-md border-b border-white/10 py-0 shadow-lg" 
          : "bg-transparent border-b border-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-black text-2xl tracking-widest text-yellow-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {GYM.name.split(" ")[0]}<span className="text-gray-100 text-xl">{GYM.name.split(" ").slice(1).join(" ")}</span>
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
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden lg:block bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5">
            Join Now
          </Link>

          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="lg:hidden text-gray-100 text-xl w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-950/98 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((item) => (
            <div key={item.label} className="flex flex-col gap-3 border-b border-gray-800 pb-3 last:border-b-0">
              {item.children ? (
                <>
                  <div className="text-xs uppercase tracking-widest font-bold text-gray-400 px-1">{item.label}</div>
                  <div className="flex flex-col gap-2 pl-3">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className={`text-base font-medium transition-colors py-2 px-3 rounded-lg text-gray-200 hover:bg-gray-800 hover:text-yellow-400 ${
                          isActive(c.to) ? "bg-yellow-400/20 text-yellow-500 font-bold" : ""
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
                  className={`text-base font-medium transition-colors py-3 px-3 rounded-lg text-gray-200 hover:bg-gray-800 hover:text-yellow-400 ${
                    isActive(item.to) ? "bg-yellow-400/20 text-yellow-400 font-bold" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 mt-2 border-t border-white/10">
            <Link to="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-black uppercase tracking-widest px-6 py-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 text-center block">
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}