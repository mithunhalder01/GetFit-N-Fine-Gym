import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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

function AdminGuard({ children }) {
  const isAuth = localStorage.getItem("gym_admin_auth") === "true";
  return isAuth ? children : <Navigate to="/admin/login" replace />;
}

function PublicLayout({ children }) {
  return (
    <div className="bg-black min-h-screen">
      <Seo />
      <Navbar />
      {children}
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function AdminLayout({ children }) {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Seo noIndex />
      {children}
    </div>
  );
}

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
    localStorage.setItem("gym_theme", "dark");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/programs" element={<PublicLayout><Programs /></PublicLayout>} />
        <Route path="/trainers" element={<PublicLayout><Trainers /></PublicLayout>} />
        <Route path="/pricing" element={<PublicLayout><Pricing /></PublicLayout>} />
        <Route path="/gallery" element={<PublicLayout><Gallery /></PublicLayout>} />
        <Route path="/blog" element={<PublicLayout><Blog /></PublicLayout>} />
        <Route path="/blog/:id" element={<PublicLayout><BlogPost /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
        <Route path="/privacy" element={<PublicLayout><PrivacyPolicy /></PublicLayout>} />
        <Route path="/terms" element={<PublicLayout><TermsOfService /></PublicLayout>} />
        <Route path="/refund" element={<PublicLayout><RefundPolicy /></PublicLayout>} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLayout><AdminLogin /></AdminLayout>} />
        <Route path="/admin" element={<AdminGuard><AdminLayout><AdminDashboard /></AdminLayout></AdminGuard>} />
        <Route path="/admin/members" element={<AdminGuard><AdminLayout><AdminMembers /></AdminLayout></AdminGuard>} />
        <Route path="/admin/schedule" element={<AdminGuard><AdminLayout><AdminSchedule /></AdminLayout></AdminGuard>} />
        <Route path="/admin/festival" element={<AdminGuard><AdminLayout><AdminFestival /></AdminLayout></AdminGuard>} />
      </Routes>
    </BrowserRouter>
  );
}
