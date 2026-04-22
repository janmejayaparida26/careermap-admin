import { Bell, Search, Settings, ChevronDown, Sparkles } from "lucide-react";

export default function Header({ activePage }) {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-[#ffffff] backdrop-blur-md sticky top-0 z-30">
      <div>
        <h1 className="text-black font-display font-bold text-lg tracking-tight">{activePage}</h1>
        <p className="text-slate-600 text-[11px] mt-0.5 tracking-wide">Overview & Analytics</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative hidden md:flex items-center">
          <Search size={13} className="absolute left-3 text-slate-600" />
          <input type="text" placeholder="Search anything…"
            className="w-52 pl-8 pr-4 py-2 text-xs bg-white/5 border border-white/8 rounded-xl text-slate-300 placeholder-slate-600 focus:outline-none focus:border-teal-500/40 transition-all" />
          <kbd className="absolute right-3 text-[10px] text-slate-600 bg-white/5 px-1.5 py-0.5 rounded font-mono">⌘K</kbd>
        </div>
        <button className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/20 text-teal-300 text-xs font-medium hover:border-teal-400/40 transition-all">
          <Sparkles size={11} /> AI Insights
        </button>
        <button className="relative w-8 h-8 rounded-xl flex items-center justify-center bg-white/5 border border-white/8 text-slate-400 hover:text-teal-300 transition-all">
          <Bell size={14} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_6px_rgba(45,212,191,0.8)]" />
        </button>
        <button className="w-8 h-8 rounded-xl flex items-center justify-center bg-white/5 border border-white/8 text-slate-400 hover:text-teal-300 transition-all">
          <Settings size={14} />
        </button>
        <button className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl bg-white/5 border border-white/8 hover:border-teal-500/30 transition-all">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center text-white font-bold text-xs">A</div>
          <span className="text-slate-300 text-xs font-medium">Admin</span>
          <ChevronDown size={11} className="text-slate-500" />
        </button>
      </div>
    </header>
  );
}