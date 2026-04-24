import { Tabs } from "antd";
import { useState } from "react";

import AllUsersTab from "./tabs/AllUsers";
import Active from "./tabs/Active";
import Banned from "./tabs/Banned";
import EmailUnverified from "./tabs/EmailUnverified";
import MobileUnverified from "./tabs/MobileUnverified";
import Subscribers from "./tabs/Subscribers";
import WithBalance from "./tabs/WithBalance";
import NotificationToUser from "./tabs/NotificationToUser";
import UserDetails from "./tabs/UserDetails";

export default function AllUsers() {
  const [activeKey, setActiveKey] = useState("1");
  const [selectedUser, setSelectedUser] = useState(null);
  const [notifUser, setNotifUser] = useState(null); // ✅ user to notify

  // ✅ If a user is selected, show their detail page (no tabs)
  if (selectedUser) {
    return (
      <UserDetails
        user={selectedUser}
        onBack={() => {
          setSelectedUser(null);
          setActiveKey("1");
        }}
        // ✅ When Notifications or Send Email clicked — switch to tab 9
        onNotify={(user) => {
          setNotifUser(user);
          setSelectedUser(null);
          setActiveKey("9");
        }}
      />
    );
  }

  const tabItems = [
    {
      label: "All Users",
      key: "1",
      children: (
        <AllUsersTab
          setSelectedUser={setSelectedUser}
          setActiveKey={setActiveKey}
        />
      ),
    },
    { label: "Active", key: "2", children: <Active setSelectedUser={setSelectedUser} /> },
    { label: "Banned", key: "3", children: <Banned setSelectedUser={setSelectedUser} /> },
    {
      label: "Email Unverified",
      key: "4",
      children: <EmailUnverified setSelectedUser={setSelectedUser} />,
    },
    {
      label: "Mobile Unverified",
      key: "5",
      children: <MobileUnverified setSelectedUser={setSelectedUser} />,
    },
     { label: "With Balance", key: "7", children: <WithBalance setSelectedUser={setSelectedUser} /> },
   
    { label: "Subscribers", key: "6", children: <Subscribers /> },
    {
      label: "Notification to User",
      key: "9",
      // ✅ pass notifUser so the tab knows who it's sending to
      children: <NotificationToUser user={notifUser} />,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-[#9a2119] mb-2">
        Users Management
      </h1>
      <Tabs activeKey={activeKey} onChange={setActiveKey} items={tabItems} />
    </div>
  );
}
