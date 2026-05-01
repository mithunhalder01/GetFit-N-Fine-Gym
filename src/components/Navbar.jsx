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
  const [topBarVisible, setTopBarVisible] = useState(true);
  const location = useLocation();
  const [brandFirst, ...brandRest] = GYM.name.split(" ");
  const brandRestText = brandRest.join(" ");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      setTopBarVisible(scrollY <= 50);
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
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          topBarVisible 
            ? "top-10 sm:top-12" 
            : "top-0"
        } ${
          scrolled || menuOpen
            ? "bg-gray-950/90 backdrop-blur-md border-b border-white/10 py-0 shadow-lg" 
            : "bg-transparent border-b border-transparent py-2"
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">
{/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 relative z-50"
        >
          <img 
            src="/navlogo.png" 
            alt={GYM.name}
className="h-14 sm:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-6 list-none items-center">
          {NAV_LINKS.map((item) => (
            <li key={item.label} className="relative">
              {item.children ? (
                <div className="group">
                  <Link
                    to={item.to || item.children[0]?.to || "/"}
                    className={`text-sm uppercase tracking-widest font-medium transition-colors duration-200 inline-flex items-center gap-1 text-gray-200 hover:text-orange-500 ${
                      (item.to && isActive(item.to)) || isAnyActive(item.children)
                        ? "text-orange-500 font-bold"
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
                                ? "bg-orange-500/20 text-orange-600 font-bold"
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
                  className={`text-sm uppercase tracking-widest font-medium transition-colors duration-200 text-gray-200 hover:text-orange-500 ${
                    isActive(item.to) ? "text-orange-500 font-bold" : ""
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
          <Link to="/contact" className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-black text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg transition-all duration-200">
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
        <div className="flex flex-col gap-3 px-5 sm:px-6 pt-20 pb-8">
          {NAV_LINKS.map((item) => (
            <div key={item.label} className="flex flex-col gap-2 border-b border-white/5 pb-3 last:border-b-0">
              {item.children ? (
                <>
                  <div className="text-[9px] uppercase tracking-[0.18em] font-black text-gray-500 px-1">
                    {item.label}
                  </div>
                  <div className="flex flex-col gap-2 pl-3">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className={`text-base sm:text-lg font-bold transition-colors ${
                          isActive(c.to) ? "text-orange-500" : "text-gray-200"
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
                  className={`text-lg sm:text-xl font-black uppercase tracking-tight transition-colors ${
                    isActive(item.to) ? "text-orange-500" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-3">
            <Link 
              to="/contact" 
              onClick={() => setMenuOpen(false)}
              className="bg-orange-500 text-black text-sm font-black uppercase tracking-widest py-3.5 rounded-xl text-center block shadow-lg active:scale-95 transition-transform"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}