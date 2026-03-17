import { useState, useEffect } from "react";
import { getMembers, FESTIVAL_TEMPLATES, GYM, whatsappLink } from "../../data";
import { AdminWrapper } from "../../components/UI";
import { CheckCircle2, Image, Info, MessageCircle, Sparkles } from "lucide-react";

export default function AdminFestival() {
  const [members, setMembers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [customMessage, setCustomMessage] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [sending, setSending] = useState(false);
  const [sentCount, setSentCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [bannerUrl, setBannerUrl] = useState("");
  const [selectAll, setSelectAll] = useState(true);

  useEffect(() => {
    const m = getMembers().filter(m => m.active);
    setMembers(m);
    setSelectedMembers(m.map(mm => mm.id));
  }, []);

  const template = FESTIVAL_TEMPLATES.find(t => t.id === selected);

  const getMessage = (member) => {
    let msg = selected === "custom" ? customMessage : template?.message(GYM.name, member.name) || "";
    if (bannerUrl) msg += `\n\n${bannerUrl}`;
    return msg;
  };

  const toggleMember = (id) => {
    setSelectedMembers(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const handleSelectAll = () => {
    if (selectAll) { setSelectedMembers([]); setSelectAll(false); }
    else { setSelectedMembers(members.map(m => m.id)); setSelectAll(true); }
  };

  const startSending = async () => {
    if (!selected || selectedMembers.length === 0) return;
    setSending(true);
    setSentCount(0);
    setCompleted(false);
    const targets = members.filter(m => selectedMembers.includes(m.id));
    setTotalCount(targets.length);

    for (let i = 0; i < targets.length; i++) {
      const m = targets[i];
      const link = whatsappLink(m.phone, getMessage(m));
      window.open(link, "_blank");
      setSentCount(i + 1);
      await new Promise(r => setTimeout(r, 1200)); // 1.2s delay between each
    }
    setSending(false);
    setCompleted(true);
  };

  const reset = () => { setSending(false); setSentCount(0); setTotalCount(0); setCompleted(false); };

  return (
    <AdminWrapper title="FESTIVAL WISHES">
      <p className="text-white/40 text-sm mb-8 -mt-4">Send personalized festival wishes to all 90 members via WhatsApp in one click.</p>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: Template picker */}
        <div>
          <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4">1. Choose Festival</h3>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {FESTIVAL_TEMPLATES.map(t => (
              <button key={t.id} onClick={() => { setSelected(t.id); setCustomMessage(t.message(GYM.name, "{{member}}")); }}
                className={`text-left p-4 rounded-xl border transition-all ${selected === t.id ? "border-yellow-400 bg-yellow-400/10" : "border-white/10 bg-gray-900 hover:border-white/20"}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-9 h-9 rounded-xl border flex items-center justify-center ${selected === t.id ? "border-yellow-400/30 bg-yellow-400/10 text-yellow-300" : "border-white/10 bg-white/5 text-white/60"}`}>
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <span className={`text-sm font-bold ${selected === t.id ? "text-yellow-400" : "text-white"}`}>{t.name}</span>
                </div>
                <p className="text-white/30 text-xs">{t.date}</p>
              </button>
            ))}
          </div>

          {/* Banner URL */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-3">2. Banner Image (Optional)</h3>
            <div className="relative">
              <Image className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input value={bannerUrl} onChange={e => setBannerUrl(e.target.value)} placeholder="Paste an image URL (optional)"
                className="w-full bg-gray-900 border border-white/10 focus:border-yellow-400/50 outline-none text-white placeholder-white/30 pl-10 pr-4 py-3 rounded-xl text-sm" />
            </div>
            <p className="text-white/25 text-xs mt-2">Tip: Upload image to imgur.com or cloudinary.com and paste the link here. It'll be added to the message.</p>
          </div>

          {/* Message preview */}
          {selected && (
            <div className="mb-6">
              <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-3">3. Message Preview / Edit</h3>
              <textarea value={selected === "custom" ? customMessage : template?.message(GYM.name, "[Member Name]") + (bannerUrl ? `\n\n${bannerUrl}` : "")}
                onChange={e => setCustomMessage(e.target.value)}
                rows={8} readOnly={selected !== "custom"}
                className={`w-full bg-gray-900 border border-white/10 text-white/70 px-4 py-3 rounded-xl text-sm resize-none font-mono leading-relaxed ${selected !== "custom" ? "opacity-70 cursor-default" : "focus:border-yellow-400/50 outline-none"}`} />
              <p className="text-white/25 text-xs mt-1">Each member's name is auto-personalized when sending.</p>
            </div>
          )}
        </div>

        {/* Right: Member selector + Send */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest">4. Select Members</h3>
            <button onClick={handleSelectAll} className="text-yellow-400 text-xs uppercase tracking-widest hover:underline">
              {selectAll ? "Deselect All" : "Select All"}
            </button>
          </div>

          <div className="bg-gray-900 border border-white/5 rounded-xl overflow-hidden mb-6" style={{ maxHeight: "380px", overflowY: "auto" }}>
            {members.length === 0 ? (
              <p className="text-white/30 text-sm text-center py-8">No active members found.</p>
            ) : (
              members.map(m => (
                <label key={m.id} className="flex items-center gap-3 px-4 py-3 hover:bg-white/[0.02] cursor-pointer border-b border-white/5 last:border-0 transition-colors">
                  <input type="checkbox" checked={selectedMembers.includes(m.id)} onChange={() => toggleMember(m.id)}
                    className="w-4 h-4 accent-yellow-400 cursor-pointer" />
                  <div className="w-8 h-8 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 text-xs font-black flex-shrink-0">
                    {m.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">{m.name}</p>
                    <p className="text-white/30 text-xs">{m.phone}</p>
                  </div>
                  <span className="text-white/20 text-xs">{m.plan}</span>
                </label>
              ))
            )}
          </div>

          {/* Send section */}
          <div className="bg-gray-900 border border-white/5 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white font-bold">{selectedMembers.length} members selected</p>
                <p className="text-white/30 text-xs mt-0.5">Each will open in WhatsApp individually</p>
              </div>
              <div className="text-right">
                <p className="text-yellow-400 font-black text-2xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{selectedMembers.length}</p>
                <p className="text-white/30 text-xs">messages</p>
              </div>
            </div>

            {/* Progress */}
            {(sending || completed) && (
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-white/50 text-xs">
                    {sending ? `Sending... ${sentCount}/${totalCount}` : `${sentCount}/${totalCount} sent`}
                  </span>
                  <span className="text-yellow-400 text-xs font-bold">{totalCount > 0 ? Math.round((sentCount / totalCount) * 100) : 0}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-500 ${completed ? "bg-green-400" : "bg-yellow-400"}`}
                    style={{ width: `${totalCount > 0 ? (sentCount / totalCount) * 100 : 0}%` }} />
                </div>
                {completed && (
                  <p className="text-green-400 text-xs mt-2 text-center inline-flex items-center justify-center gap-2 w-full">
                    <CheckCircle2 className="w-4 h-4" /> All messages sent successfully
                  </p>
                )}
              </div>
            )}

            {!sending && !completed ? (
              <button onClick={startSending} disabled={!selected || selectedMembers.length === 0}
                className="w-full bg-green-500 text-white font-black uppercase text-sm tracking-widest py-4 rounded-xl hover:bg-green-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Send to {selectedMembers.length} Members via WhatsApp
              </button>
            ) : completed ? (
              <button onClick={reset} className="w-full bg-gray-800 text-white font-black uppercase text-sm tracking-widest py-4 rounded-xl hover:bg-gray-700 transition-colors">
                Send Another Campaign
              </button>
            ) : (
              <div className="w-full bg-green-500/20 text-green-400 font-bold text-sm py-4 rounded-xl text-center">
                Sending... ({sentCount}/{totalCount}) — Allow popups if prompted
              </div>
            )}

            <div className="mt-3 p-3 bg-black/30 rounded-lg">
              <p className="text-white/30 text-xs leading-relaxed">
                <span className="inline-flex items-start gap-2">
                  <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/30" />
                  <span>
                    Each member's WhatsApp will open with a personalized message. Allow browser popups when prompted. Messages open {selectedMembers.length > 5 ? "in batches with a 1.2s delay" : "one by one"}.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </AdminWrapper>
  );
}
