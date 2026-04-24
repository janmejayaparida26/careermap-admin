import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";

const pageNameMap = {
  "/dashboard": "Dashboard",
  "/mentor": "Mentors",
  "/all_users": "All Users",
  "/modules": "Modules",
  "/stream": "Stream",
  "/categories": "Categories",
  "/2ndcategories": "2nd Categories",
  "/subcategories": "Subcategories",
  "/salary": "Salary Range",
  "/jobscope": "Job Scope",
};

const DashBoardlayout = () => {
    const location = useLocation();
    const [activePage, setActivePage] = useState("Dashboard");
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    useEffect(() => {
      setActivePage(pageNameMap[location.pathname] || "Dashboard");
    }, [location.pathname]);

  return (
   <div className="flex h-screen bg-[#f9fafd] overflow-hidden font-body">
         <Sidebar
           activePage={activePage}
           setActivePage={setActivePage}
           collapsed={sidebarCollapsed}
           setCollapsed={setSidebarCollapsed}
         />
         <div className={`flex flex-col flex-1 overflow-hidden transition-all duration-300 ${
           sidebarCollapsed ? "ml-[72px]" : "ml-[240px]"
         }`}>
           <Header activePage={activePage} />
           <main className="flex-1 overflow-y-auto p-6">
             <Outlet/>
           </main>
         </div>
       </div>
  )
}

export default DashBoardlayout
