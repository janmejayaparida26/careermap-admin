import { Bell, Search, Settings, ChevronDown, Sparkles, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../../features/auth/authStorage";

export default function Header({ activePage }) {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  const handleLogout = () => {
    logoutUser();
    navigate("/login", { replace: true });
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/5 bg-[#ffffff] px-6 backdrop-blur-md">
      <div>
        <h1 className="font-display text-lg font-bold tracking-tight text-black">{activePage}</h1>
        <p className="mt-0.5 text-[11px] tracking-wide text-slate-600">Overview & Analytics</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative hidden items-center md:flex">
          <Search size={13} className="absolute left-3 text-slate-600" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-52 rounded-xl border border-white/8 bg-white/5 py-2 pl-8 pr-4 text-xs text-slate-500 placeholder-slate-400 focus:border-[#9a2119]/40 focus:outline-none transition-all"
          />
          <kbd className="absolute right-3 rounded bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-slate-500">Ctrl K</kbd>
        </div>
        <button className="hidden items-center gap-1.5 rounded-lg border border-teal-500/20 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 px-3 py-1.5 text-xs font-medium text-teal-300 transition-all hover:border-teal-400/40 md:flex">
          <Sparkles size={11} /> AI Insights
        </button>
        <button className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-white/8 bg-white/5 text-slate-400 transition-all hover:text-teal-300">
          <Bell size={14} />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_6px_rgba(45,212,191,0.8)]" />
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/8 bg-white/5 text-slate-400 transition-all hover:text-teal-300">
          <Settings size={14} />
        </button>
        <button
          onClick={handleLogout}
          className="hidden items-center gap-2 rounded-xl border border-[#9a2119]/20 bg-[#fff7f5] px-3 py-2 text-xs font-semibold text-[#9a2119] transition hover:border-[#9a2119]/40 hover:bg-[#fdf2f1] md:flex"
        >
          <LogOut size={13} />
          Logout
        </button>
        <button className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/5 py-1.5 pl-2 pr-3 transition-all hover:border-teal-500/30">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-cyan-600 text-xs font-bold text-white">
            {currentUser?.name?.charAt(0)?.toUpperCase() || "A"}
          </div>
          <span className="text-xs font-medium text-slate-500">{currentUser?.name || "Admin"}</span>
          <ChevronDown size={11} className="text-slate-500" />
        </button>
      </div>
    </header>
  );
}
