import { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";

// Pages - Public
import Home from "./pages/Home";
import { Programs, Trainers, Pricing, Gallery, Blog, Contact } from "./pages/PublicPages";
import { PrivacyPolicy, RefundPolicy, TermsOfService } from "./pages/Legal";
import BlogPost from "./pages/BlogPost";

// Admin
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminMembers from "./pages/admin/AdminMembers";
import AdminSchedule from "./pages/admin/AdminSchedule";
import AdminFestival from "./pages/admin/AdminFestival";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Seo from "./components/Seo";

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

function AdminGuard({ children }) {
  const isAuth = localStorage.getItem("gym_admin_auth") === "true";
  return isAuth ? children : <Navigate to="/admin/login" replace />;
}

function PublicLayout({ children, dark }) {
  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-white dark:bg-black min-h-screen">
        <Seo />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </div>
    </div>
  );
}

function AdminLayout({ children, dark }) {
  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
        <Seo noIndex />
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("gym_theme") !== "light");

  useEffect(() => {
    localStorage.setItem("gym_theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/" element={<PublicLayout dark={dark}><Home /></PublicLayout>} />
          <Route path="/programs" element={<PublicLayout dark={dark}><Programs /></PublicLayout>} />
          <Route path="/trainers" element={<PublicLayout dark={dark}><Trainers /></PublicLayout>} />
          <Route path="/pricing" element={<PublicLayout dark={dark}><Pricing /></PublicLayout>} />
          <Route path="/gallery" element={<PublicLayout dark={dark}><Gallery /></PublicLayout>} />
          <Route path="/blog" element={<PublicLayout dark={dark}><Blog /></PublicLayout>} />
          <Route path="/blog/:id" element={<PublicLayout dark={dark}><BlogPost /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout dark={dark}><Contact /></PublicLayout>} />
          <Route path="/privacy" element={<PublicLayout dark={dark}><PrivacyPolicy /></PublicLayout>} />
          <Route path="/terms" element={<PublicLayout dark={dark}><TermsOfService /></PublicLayout>} />
          <Route path="/refund" element={<PublicLayout dark={dark}><RefundPolicy /></PublicLayout>} />

          {/* Admin */}
          <Route path="/admin/login" element={<AdminLayout dark={dark}><AdminLogin /></AdminLayout>} />
          <Route path="/admin" element={<AdminGuard><AdminLayout dark={dark}><AdminDashboard /></AdminLayout></AdminGuard>} />
          <Route path="/admin/members" element={<AdminGuard><AdminLayout dark={dark}><AdminMembers /></AdminLayout></AdminGuard>} />
          <Route path="/admin/schedule" element={<AdminGuard><AdminLayout dark={dark}><AdminSchedule /></AdminLayout></AdminGuard>} />
          <Route path="/admin/festival" element={<AdminGuard><AdminLayout dark={dark}><AdminFestival /></AdminLayout></AdminGuard>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
