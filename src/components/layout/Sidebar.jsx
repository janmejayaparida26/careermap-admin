import {
  Award,
  Bell,
  BellIcon,
  BookOpen,
  Briefcase,
  Building2,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  CreditCard,
  DollarSign,
  FileText,
  GalleryVerticalIcon,
  GitBranch,
  Globe2,
  GraduationCap,
  HelpCircle,
  IndianRupeeIcon,
  Languages,
  Layers,
  LayoutDashboard,
  ListChecks,
  LogInIcon,
  MapPin,
  MessageSquare,
  Repeat,
  Search,
  Settings2,
  Tag,
  Tags,
  Users,
  Wrench,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import logoFull from "../../assets/logo_white.png";
import logoCompact from "../../assets/logo_white_small.png";

const navSections = [
  {
    label: "MAIN",
    items: [{ icon: LayoutDashboard, name: "Dashboard", path: "/dashboard" }],
  },
  {
    label: "USERS",
    items: [
      { icon: GraduationCap, name: "Mentors", path: "/mentor" },
      { icon: Users, name: "All Users", path: "/all_users" },
    ],
  },
  {
    label: "CONTENT",
    items: [
      { icon: BookOpen, name: "Modules", path: "/modules" },
      { icon: Layers, name: "Stream", path: "/stream" },
      { icon: Tag, name: "Categories", path: "/categories" },
      { icon: Tags, name: "2nd Categories", path: "/2ndcategories" },
      { icon: Tags, name: "Subcategories", path: "/subcategories" },
    ],
  },
  {
    label: "CAREER",
    items: [
      { icon: DollarSign, name: "Salary Range", path: "/salary" },
      { icon: Briefcase, name: "Job Scope", path: "/jobscope" },
      { icon: GitBranch, name: "Path Type", path: "/pathtype" },
      { icon: MapPin, name: "Career Path", path: "/careerpath" },
      { icon: ClipboardList, name: "Entrance Exam", path: "/entranceexam" },
      { icon: Building2, name: "Institution", path: "/institution" },
      { icon: Award, name: "Scholarship", path: "/scholarship" },
    ],
  },
  {
    label: "MANAGEMENT",
    items: [
      { icon: MapPin, name: "Career Plan", path: "/careerplan" },
      { icon: Bell, name: "Subscribers", path: "/all_users/subscribers" },
      { icon: CalendarCheck, name: "Bookings", path: "/bookings" },
      { icon: CreditCard, name: "Plans", path: "/plans" },
      { icon: HelpCircle, name: "Quiz", path: "/quiz" },
      { icon: Repeat, name: "Subscriptions" },
      { icon: Wrench, name: "Services", path: "/services" },
    ],
  },
  {
    label: "COUNTRIES",
    items: [
      { icon: Globe2, name: "All Countries", path: "/allcountries" },
      { icon: MapPin, name: "States", path: "/states" },
      { icon: MapPin, name: "Districts", path: "/districts" },
    ],
  },
  {
    label: "REPORT",
    items: [
      { icon: IndianRupeeIcon, name: "Transactions", path: "/transactions" },
      { icon: LogInIcon, name: "Login Activities", path: "/loginactivities" },
      { icon: BellIcon, name: "Notifications", path: "/notifications" },
    ],
  },
  {
    label: "ORDERS",
    items: [{ icon: ListChecks, name: "All Orders", path: "/all_orders" }],
  },
  {
    label: "JOB MANAGEMENT",
    items: [
      { icon: Briefcase, name: "Job", path: "/jobs" },
      { icon: FileText, name: "Job Application", path: "/job-applications" },
    ],
  },
  {
    label: "SUPPORT",
    items: [{ icon: MessageSquare, name: "Support Tickets", path: "/support_tickets" }],
  },
  {
    label: "SETTINGS",
    items: [
      { icon: Settings2, name: "Global Settings", path: "/globalsettings" },
      { icon: GalleryVerticalIcon, name: "Logo & Favicon", path: "/logo&favicon"},
      { icon: Languages, name: "Language", path: "/language" },
      { icon: Search, name: "SEO", path: "/seo" },
      { icon: Settings2, name: "Social Credential", path: "/social-credential" },
    ],
  },
];

export default function Sidebar({ activePage, setActivePage, collapsed, setCollapsed }) {
  const navigate = useNavigate();

  return (
    <aside
      className={`fixed top-0 left-0 z-40 flex h-full flex-col transition-all duration-300 ${
        collapsed ? "w-[72px]" : "w-[240px]"
      }`}
      style={{ background: "#fff", borderRight: "1px solid #eee" }}
    >
      <div
        className={`flex h-20 items-center gap-3 border-b px-4 ${
          collapsed ? "justify-between" : ""
        }`}
      >
        <div
          className={`overflow-hidden transition-all duration-300 ${
            collapsed ? "h-16 w-[50px]" : "h-12 w-[150px]"
          }`}
        >
          <img
            src={collapsed ? logoCompact : logoFull}
            alt="Career Map"
            className={`h-full transition-all duration-300 ${
              collapsed ? "w-full object-contain" : "w-full object-contain object-left"
            }`}
          />
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`${collapsed ? "" : "ml-auto"} flex h-6 w-6 items-center justify-center rounded-md`}
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      <nav className="scrollbar-hide flex-1 overflow-y-auto py-4">
        {navSections.map((section) => (
          <div key={section.label} className="mb-3">
            {!collapsed && (
              <p className="mb-2 px-4 text-[10px] font-semibold tracking-widest text-slate-500">
                {section.label}
              </p>
            )}

            {section.items.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActivePage(item.name);
                    if (item.path) navigate(item.path);
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-2 text-sm transition ${
                    isActive
                      ? "text-[#9a2119]"
                      : "text-gray-600 hover:text-[#9a2119]"
                  }`}
                >
                  <span className="flex h-6 w-6 items-center justify-center">
                    <Icon size={15} />
                  </span>
                  {!collapsed && <span>{item.name}</span>}
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      {!collapsed && (
        <div className="border-t p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[#9a2119] text-white">
              A
            </div>
            <div>
              <p className="text-sm font-semibold">Admin</p>
              <p className="text-xs text-gray-400">admin@careermap.io</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
