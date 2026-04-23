import { Table, Input } from "antd";
import {
  EyeOutlined,
  SearchOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const data = [
  {
    key: "1",
    user: "Rahul Sharma",
    email: "rahul@gmail.com",
    joined: "2024-01-12",
    balance: "$120",
  },
  {
    key: "2",
    user: "Priya Das",
    email: "priya@gmail.com",
    joined: "2024-02-05",
    balance: "$80",
  },
];

export default function Banned() {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item.user.toLowerCase().includes(search.toLowerCase())
  );

  const handleReset = () => setSearch("");

  const columns = [
    {
      title: <span className="text-[#9a2119] font-semibold">User</span>,
      dataIndex: "user",
     
    },
    {
      title: <span className="text-[#9a2119] font-semibold">Email</span>,
      dataIndex: "email",
      
    },
    {
      title: <span className="text-[#9a2119] font-semibold">Joined At</span>,
      dataIndex: "joined",
     
    },
    {
      title: <span className="text-[#9a2119] font-semibold">Balance</span>,
      dataIndex: "balance",
      
    },
    {
      title: <span className="text-[#9a2119] font-semibold">Action</span>,
    render: () => (
  <div className="flex gap-2">
    <button
      className="w-9 h-9 flex items-center justify-center rounded-md 
                 border border-[#9a2119] 
                 text-[#9a2119]
                 hover:border-[#e57373]
                 hover:text-[#e57373]
                 transition duration-200"
    >
      <EyeOutlined />
    </button>
  </div>
),
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-[#9a2119]">
          Banned Users
        </h2>

        <div className="flex items-center gap-3">
          <Input
            placeholder="Search user..."
            value={search}
            prefix={<SearchOutlined className="text-[#9a2119]" />}
            className="w-64 h-9 rounded-md border-[#9a2119] focus:border-[#9a2119]"
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 h-9 rounded-md
                       bg-[#9a2119]
                       text-white
                       hover:bg-[#c4392e]
                       transition"
          >
            <ReloadOutlined />
            Reset
          </button>
        </div>
      </div>

      {/* TABLE */}
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 5 }}
        rowClassName="hover:bg-gray-50"
      />
    </div>
  );
}