import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages - Public
import Home from "./pages/Home";
import { Programs, Trainers, Pricing, Gallery, Blog, Contact } from "./pages/PublicPages";
import { PrivacyPolicy, RefundPolicy, TermsOfService } from "./pages/Legal";
import BlogPost from "./pages/BlogPost";

// Components
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Seo from "./components/Seo";

function PublicLayout({ children }) {
  return (
    <div className="bg-black min-h-screen">
      <Seo />
      <TopBar />
      <Navbar />
      {children}
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function AdminRedirect() {
  useEffect(() => {
    window.location.replace("https://fitflow-gms-v1.vercel.app/");
  }, []);

  return null;
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
        {/* Public routes */}
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

        {/* The external admin app already handles authentication. */}
        <Route path="/admin/*" element={<AdminRedirect />} />

        {/* Unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
