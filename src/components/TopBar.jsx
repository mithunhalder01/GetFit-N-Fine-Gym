import { X } from "lucide-react";
import { useState, useEffect } from "react";

export default function TopBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-black py-2 px-3 sm:px-4 relative z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0 overflow-hidden">
          <span className="text-sm sm:text-lg md:text-xl flex-shrink-0">💪</span>
          <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1">
            <span className="font-bold text-xs sm:text-sm md:text-base whitespace-nowrap">Gym of Haryana</span>
            <span className="text-black/60 flex-shrink-0 hidden xs:inline">•</span>
            <span className="text-xs sm:text-xs md:text-sm font-medium whitespace-nowrap hidden xs:inline">Special:</span>
            <span className="text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-wide truncate">Get 1 Year Membership + 1 Month FREE</span>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-black/60 hover:text-black transition-colors p-1 rounded hover:bg-black/10 flex-shrink-0 ml-2"
          aria-label="Close announcement"
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
}
