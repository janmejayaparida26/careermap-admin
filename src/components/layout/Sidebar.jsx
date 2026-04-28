import {
  LayoutDashboard, Users, GraduationCap, BookOpen, Layers,
  Tag, Tags, DollarSign, Briefcase, GitBranch, MapPin,
  ClipboardList, Building2, Award,
  ChevronLeft, ChevronRight,
  Globe2,
  IndianRupeeIcon,
  LogInIcon,
  BellIcon,
  GlobeIcon,
  GalleryVerticalIcon,
  LanguagesIcon,
  UsersIcon,
  ProjectorIcon,
  ChevronRight as ArrowIcon
  Languages,
  Search,
  Settings2,
  FileText,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const navSections = [
  {
    label: "MAIN",
    items: [{ icon: LayoutDashboard, name: "Dashboard", path: "/dashboard" }]
  },
  {
    label: "USERS",
    items: [
      { icon: GraduationCap, name: "Mentors", path: "/mentor" },
      { icon: Users, name: "All Users", path: "/all_users" }
    ]
  },
  {
    label: "CONTENT",
    items: [
      { icon: BookOpen, name: "Modules", path: "/modules" },
      { icon: Layers, name: "Stream", path: "/stream" },
      { icon: Tag, name: "Categories", path: "/categories" },
      { icon: Tags, name: "2nd Categories", path: "/2ndcategories" },
      { icon: Tags, name: "Subcategories", path: "/subcategories" }
    ]
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
      { icon: Award, name: "Scholarship", path: "/scholarship" }
    ]
  },
  {
    label: "REPORT",
    items: [
      { icon: IndianRupeeIcon, name: "Transactions", path: "/transactions" },
      { icon: LogInIcon, name: "Login Activities", path: "/loginactivities" },
      { icon: BellIcon, name: "Notifications", path: "/notifications" }
    ]
  },
  {
    label: "GENERAL SETTINGS",
    items: [
      { icon: GlobeIcon, name: "Global Settings" },
      { icon: GalleryVerticalIcon, name: "Logo & Favicon", path: "/logo&favicon" },
      { icon: LanguagesIcon, name: "Languages" },

      {
        icon: BellIcon,
        name: "Email & Notification",
        children: [
          { name: "All Templates", path: "/email&notification/alltemplates" },
          { name: "Global Template", path: "/email&notification/globaltemplates" },
          { name: "Email Config", path: "/email&notification/emailconfig" },
          { name: "SMS Config", path: "/email&notification/smsconfig" },
        ]
      },

      { icon: UsersIcon, name: "Social Credentials" },
      { icon: ProjectorIcon, name: "SEO" }
    ]
  }
import logoFull from "../../assets/logo_white.png";
import logoCompact from "../../assets/logo_white_small.png";

const navSections = [
  { label: "MAIN", items: [{ icon: LayoutDashboard, name: "Dashboard", path: "/dashboard" }] },
  { label: "USERS", items: [{ icon: GraduationCap, name: "Mentors", path: "/mentor" }, { icon: Users, name: "All Users", path: "/all_users" }] },
  { label: "CONTENT", items: [{ icon: BookOpen, name: "Modules", path: "/modules" }, { icon: Layers, name: "Stream", path: "/stream" }, { icon: Tag, name: "Categories", path: "/categories" }, { icon: Tags, name: "2nd Categories", path: "/2ndcategories" }, { icon: Tags, name: "Subcategories", path: "/subcategories" }] },
  { label: "CAREER", items: [{ icon: DollarSign, name: "Salary Range", path: "/salary" }, { icon: Briefcase, name: "Job Scope", path: "/jobscope" }, { icon: GitBranch, name: "Path Type", path: "/pathtype" }, { icon: MapPin, name: "Career Path", path: "/careerpath" }, { icon: ClipboardList, name: "Entrance Exam", path: "/entranceexam" }, { icon: Building2, name: "Institution", path: "/institution" }, { icon: Award, name: "Scholarship", path: "/scholarship" }] },
  { label: "MANAGEMENT", items: [ { icon: MapPin, name: "Career Plan", path: "/careerplan" }, { icon: Bell, name: "Subscribers", path: "/all_users/subscribers" }, { icon: CalendarCheck, name: "Bookings", path: "/bookings" }, { icon: CreditCard, name: "Plans", path: "/plans" }, { icon: HelpCircle, name: "Quiz", path: "/quiz" }, { icon: Repeat, name: "Subscriptions" }, { icon: Wrench, name: "Services", path: "/services" }] },
  { label: "COUNTRIES", items: [{ icon: Globe2, name: "All Countries", path: "/allcountries" }, { icon: MapPin, name: "States", path: "/states" }, { icon: MapPin, name: "Districts", path: "/districts" }] },
  { label: "REPORT", items: [{ icon: IndianRupeeIcon, name: "Transactions", path: "/transactions" }, { icon: LogInIcon, name: "Login Activities", path: "/loginactivities" }, { icon: BellIcon, name: "Notifications", path: "/notifications" }] },
  { label: "ORDERS", items: [{ icon: ListChecks, name: "All Orders", path: "/all_orders" }] },
  { label: "JOB MANAGEMENT", items: [{ icon: Briefcase, name: "Job", path: "/jobs" }, { icon: FileText, name: "Job Application", path: "/job-applications" }] },
  { label: "SUPPORT", items: [{ icon: MessageSquare, name: "Support Tickets", path: "/support_tickets" }] },
  { label: "SETTINGS", items: [{ icon: Settings2, name: "Global Settings", path: "/globalsettings" }, { icon: Languages, name: "Language", path: "/language" }, { icon: Search, name: "SEO", path: "/seo" }, { icon: Settings2, name: "Social Credential", path: "/social-credential" }] },
];

export default function Sidebar({
  activePage,
  setActivePage,
  collapsed,
  setCollapsed
}) {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <aside className={`fixed top-0 left-0 h-full z-40 flex flex-col transition-all duration-300 ${collapsed ? "w-[72px]" : "w-[240px]"}`}
      style={{ background: "#fff", borderRight: "1px solid #eee" }}>

      {/* LOGO */}
      <div className="flex items-center h-20 px-4 border-b">
        <img
          src="https://res.cloudinary.com/dcc7qgxmb/image/upload/v1776687674/logo_white_p86nub.png"
          className="h-10"
        />
      style={{ background: "linear-gradient(#ffffff)", borderRight: "1px solid rgba(99,179,237,0.08)" }}>

      {/* Logo */}
      <div className={`flex items-center h-20 px-4 gap-3 border-b border-white/5 ${collapsed ? "justify-between" : ""}`}>
        <div
          className={`overflow-hidden transition-all duration-300 ${collapsed ? "w-[50px] h-16" : "w-[150px] h-12"}`}
        >
          <img
            src={collapsed ? logoCompact : logoFull}
            alt="Career Map"
            className={`h-full transition-all duration-300 ${collapsed ? "w-full object-contain" : "w-full object-contain object-left"}`}
          />
        </div>

        <button onClick={() => setCollapsed(!collapsed)} className="ml-auto">
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* NAV */}
      <nav className="flex-1 overflow-y-auto py-4">
        {navSections.map((section) => (
          <div key={section.label} className="mb-3">

            {!collapsed && (
              <p className="text-xs font-semibold text-gray-400 px-4 mb-2">
                {section.label}
              </p>
            )}

            {section.items.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.name;
              const isOpen = openDropdown === item.name;

              // NORMAL ITEM
              if (!item.children) {
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setActivePage(item.name);
                      if (item.path) navigate(item.path);
                    }}
                    className={`flex items-center gap-3 w-full px-4 py-2 text-sm transition
                      ${isActive ? "text-[#9a2119]" : "text-gray-600 hover:text-[#9a2119]"}`}
                  >
                    <span className="w-6 h-6 flex items-center justify-center">
                      <Icon size={15} />
                    </span>
                    {!collapsed && <span>{item.name}</span>}
                  </button>
                );
              }

              // DROPDOWN ITEM
              return (
                <div key={item.name}>
                  <button
                    onClick={() => setOpenDropdown(isOpen ? null : item.name)}
                    className={`flex items-center justify-between w-full px-4 py-2 text-sm transition
                      ${isOpen ? "text-[#9a2119]" : "text-gray-600 hover:text-[#9a2119]"}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 flex items-center justify-center">
                        <Icon size={15} />
                      </span>
                      {!collapsed && <span>{item.name}</span>}
                    </div>

                    {!collapsed && (
                      <span className="text-[10px] text-gray-400">
                        {isOpen ? "▲" : "▼"}
                      </span>
                    )}
                  </button>

                  {/* SUBMENU WITH ARROW */}
                  {isOpen && !collapsed && (
                    <div className="pl-9 mt-1 flex flex-col bg-gray-50 rounded-lg border border-gray-100 py-1">

                      {item.children.map((child) => (
                        <button
                          key={child.name}
                          onClick={() => {
                            setActivePage(child.name);
                            if (child.path) navigate(child.path);
                          }}
                          className="flex items-center gap-2 text-left px-3 py-2 text-sm text-gray-600 
                                     hover:text-[#9a2119] hover:bg-white 
                                     transition rounded-md mx-1"
                        >
                          {/* ✅ ARROW ICON */}
                          <ArrowIcon size={14} className="text-gray-400" />

                          <span>{child.name}</span>
                        </button>
                      ))}

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </nav>

      {/* ADMIN */}
      {!collapsed && (
        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#9a2119] text-white flex items-center justify-center rounded">
              A
            </div>
            <div>
              <p className="text-sm font-semibold">Admin</p>
              <p className="text-xs text-gray-400">admin@site.com</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}