import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GYM } from "../../data";

export default function AdminLogin() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      if (user === "admin" && pass === "gym123") {
        localStorage.setItem("gym_admin_auth", "true");
        navigate("/admin");
      } else {
        setError("Invalid credentials. Try admin / gym123");
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <div className="font-black text-3xl tracking-widest text-yellow-400 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {GYM.name}
          </div>
          <p className="text-white/30 text-sm">Admin Panel</p>
        </div>

        <div className="bg-gray-900 border border-white/10 rounded-2xl p-8">
          <h1 className="text-2xl font-black text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>SIGN IN</h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Username</label>
              <input type="text" value={user} onChange={e => setUser(e.target.value)} placeholder="admin" required
                className="w-full bg-gray-800 border border-white/10 focus:border-yellow-400/50 outline-none text-white placeholder-white/20 px-4 py-3 rounded-xl text-sm transition-colors" />
            </div>
            <div>
              <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Password</label>
              <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="••••••" required
                className="w-full bg-gray-800 border border-white/10 focus:border-yellow-400/50 outline-none text-white placeholder-white/20 px-4 py-3 rounded-xl text-sm transition-colors" />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">{error}</div>
            )}

            <button type="submit" disabled={loading}
              className="w-full bg-yellow-400 text-black font-black uppercase text-sm tracking-widest py-3.5 rounded-xl hover:bg-yellow-300 transition-all disabled:opacity-50">
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 p-4 bg-white/[0.03] rounded-xl border border-white/5">
            <p className="text-white/30 text-xs text-center mb-1">Default credentials</p>
            <p className="text-white/50 text-xs text-center font-mono">admin / gym123</p>
          </div>
        </div>

        <p className="text-center mt-6">
          <a href="/" className="text-white/30 text-sm hover:text-white transition-colors">← Back to Website</a>
        </p>
      </div>
    </div>
  );
}
