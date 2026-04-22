import React,{useState} from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'
const DashBoardlayout = () => {
    const [activePage, setActivePage] = useState("Dashboard");
      const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
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