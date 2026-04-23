import { Tabs } from "antd";
import AllUsersTab from "./tabs/AllUsers";
import Active from "./tabs/Active";
import Banned from "./tabs/Banned";
import EmailUnverified from "./tabs/EmailUnverified";
import MobileUnverified from "./tabs/MobileUnverified";
import Subscribers from "./tabs/Subscribers";
import WithBalance from "./tabs/WithBalance";
import NotificationToUser from "./tabs/NotificationToUser";

export default function AllUsers() {
  return (
    <div >
      
      {/* 🔥 Header */}
      <h1 className="text-2xl font-semibold text-[#9a2119] mb-2">
        Users Management
      </h1>

        <Tabs
          defaultActiveKey="1"
          className="custom-tabs"
          items={[
            { label: "All Users", key: "1", children: <AllUsersTab /> },
            { label: "Active", key: "2", children: <Active /> },
            { label: "Banned", key: "3", children: <Banned /> },
            { label: "Email Unverified", key: "4", children: <EmailUnverified /> },
            { label: "Mobile Unverified", key: "5", children: <MobileUnverified /> },
             { label: "With Balance", key: "7", children: <WithBalance /> },
              { label: "Subscribers", key: "6", children: <Subscribers /> },
            { label: "Notification to User", key: "8", children: <NotificationToUser /> },
          ]}
        />

     
    </div>
  );
}