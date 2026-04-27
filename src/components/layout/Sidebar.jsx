import {
  LayoutDashboard, Users, GraduationCap, BookOpen, Layers,
  Tag, Tags, DollarSign, Briefcase, GitBranch, MapPin,
  ClipboardList, Building2, Video, Award, Image, CreditCard,
  Bell, CalendarCheck, ListChecks, HelpCircle, Repeat, Wrench,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const navSections = [
  { label: "MAIN",       items: [{ icon: LayoutDashboard, name: "Dashboard",path:"/dashboard" }] },
  { label: "USERS",      items: [{ icon: GraduationCap, name: "Mentors", path:"/mentor" }, { icon: Users, name: "All Users", path:"/all_users" }] },
  { label: "CONTENT",    items: [{ icon: BookOpen, name: "Modules", path:"/modules" }, { icon: Layers, name: "Stream", path:"/stream" }, { icon: Tag, name: "Categories", path:"/categories" }, { icon: Tags, name: "2nd Categories", path:"/2ndcategories" }, { icon: Tags, name: "Subcategories", path:"/subcategories" }] },
  { label: "CAREER",     items: [{ icon: DollarSign, name: "Salary Range", path:"/salary" }, { icon: Briefcase, name: "Job Scope", path:"/jobscope" }, { icon: GitBranch, name: "Path Type", path:"/pathtype" }, { icon: MapPin, name: "Career Path", path:"/careerpath" }, { icon: ClipboardList, name: "Entrance Exam", path:"/entranceexam" }, { icon: Building2, name: "Institution", path:"/institution" }, { icon: Video, name: "Master Class" }, { icon: Award, name: "Scholarship", path:"/scholarship" }] },
  { label: "MANAGEMENT", items: [{ icon: Image, name: "Banner Slider" }, { icon: MapPin, name: "Career Plan", path:"/careerplan" }, { icon: Bell, name: "Subscribers" }, { icon: CalendarCheck, name: "Bookings", path:"/bookings" }, { icon: CreditCard, name: "Plans" }, { icon: HelpCircle, name: "Quiz" }, { icon: Repeat, name: "Subscriptions" }, { icon: Wrench, name: "Services" }] },
  { label: "USERS",      items: [{ icon: GraduationCap, name: "Mentors", path:"/mentor" }, { icon: Users, name: "All Users" }] },
  { label: "CONTENT",    items: [{ icon: BookOpen, name: "Modules", path:"/module" }, { icon: Layers, name: "Stream", path:"/stream" }, { icon: Tag, name: "Categories", path:"/categories" }, { icon: Tags, name: "2nd Categories", path:"/2ndcategories" }, { icon: Tags, name: "Subcategories", path:"/subcategories" }] },
  { label: "CAREER",     items: [{ icon: DollarSign, name: "Salary Range", path:"/salary" }, { icon: Briefcase, name: "Job Scope", path:"/jobscope" }, { icon: GitBranch, name: "Path Type" }, { icon: MapPin, name: "Career Path" }, { icon: ClipboardList, name: "Entrance Exam" }, { icon: Building2, name: "Institution" }, { icon: Video, name: "Master Class" }, { icon: Award, name: "Scholarship" }] },
];

export default function Sidebar({ activePage, setActivePage, collapsed, setCollapsed }) {
    const navigate = useNavigate();
  return (
    <aside className={`fixed top-0 left-0 h-full z-40 flex flex-col transition-all duration-300 ${collapsed ? "w-[72px]" : "w-[240px]"}`}
      style={{ background: "linear-gradient(#ffffff)", borderRight: "1px solid rgba(99,179,237,0.08)" }}>

      {/* Logo */}
      <div className="flex items-center h-24 w-42 px-4 gap-3 border-b border-white/5">
        {/* <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/30">
          <MapPin size={15} className="text-white" />
        </div> */}

        <img src="https://res.cloudinary.com/dcc7qgxmb/image/upload/v1776687674/logo_white_p86nub.png"></img>
        
        {/* {!collapsed && (
          <div>
            <span className="text-red-900 font-display font-bold text-sm tracking-wider">CAREER</span>
            <span className="text-grey-900 font-display font-bold text-sm tracking-wider"> MAP</span>
          </div>
          
        )} */}
        <button onClick={() => setCollapsed(!collapsed)}
          className={`ml-auto w-6 h-6 rounded-md flex items-center justify-center transition-all ${collapsed ? "mx-auto" : ""}`}>
          {collapsed ? <ChevronRight size={13} /> : <ChevronLeft size={13} />}
        </button>
      </div>

      {/* Nav */}
         {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 scrollbar-hide">
        {navSections.map((section) => (
          <div key={section.label} className="mb-2">
            {!collapsed && <p className="text-[10px] font-semibold text-slate-600 tracking-widest px-4 mb-1">{section.label}</p>}
            
            {section.items.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActivePage(item.name);
                    if (item.path) navigate(item.path); // 👈 THIS LINE IS IMPORTANT
                  }}
                  className={`relative flex items-center gap-3 w-full px-4 py-2 text-sm transition-all duration-200 group ${isActive 
    ? "text-[var(--brand-primary)]" 
    : "text-[var(--text-hint)] hover:text-[var(--brand-primary)]"
    }`}
                >
                  <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center">
                    <Icon size={15} />
                  </span>

                  {!collapsed && <span>{item.name}</span>}
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Admin pill */}
      {!collapsed && (
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center text-white font-bold text-xs">A</div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-semibold truncate">Admin</p>
              <p className="text-slate-500 text-[10px] truncate">admin@careermap.io</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}