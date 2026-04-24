import { Table, Input } from "antd";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const initialData = [
  {
    key: "1",
    module: "Career Library",
    category: "Railways",
    exam: "RRC Level 1 Exam (Group D posts)",
    issue: "February 2025",
    last: "March 2025",
    url: "https://www.rrbcdg.gov.in/",
  },
  {
    key: "2",
    module: "Career Library",
    category: "Railways",
    exam: "RRB Assistant Station Master Exam",
    issue: "July 2025",
    last: "August 2025",
    url: "https://www.rrbcdg.gov.in/",
  },
  {
    key: "3",
    module: "Career Library",
    category: "Railways",
    exam: "RRB Ministerial & Isolated Categories Exam",
    issue: "April 2025",
    last: "May 2025",
    url: "https://www.rrbcdg.gov.in/",
  },
];

export default function EntranceExamTable({
  onView,
  onEdit,
  onAdd,
}) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(initialData);

  const filteredData = data.filter((item) =>
    item.exam.toLowerCase().includes(search.toLowerCase())
  );

  const handleReset = () => setSearch("");

  const columns = [
    {
      title: <span className="text-[#9a2119] font-semibold">SL</span>,
      render: (_, __, index) => index + 1,
      width: 60,
    },
    {
      title: <span className="text-[#9a2119] font-semibold">Module</span>,
      dataIndex: "module",
    },
    {
      title: <span className="text-[#9a2119] font-semibold">Category</span>,
      dataIndex: "category",
    },
    {
      title: <span className="text-[#9a2119] font-semibold">Exam Name</span>,
      dataIndex: "exam",
    },
    {
      title: <span className="text-[#9a2119] font-semibold">Issue Date</span>,
      dataIndex: "issue",
    },
    {
      title: <span className="text-[#9a2119] font-semibold">Last Date</span>,
      dataIndex: "last",
    },
    {
      title: <span className="text-[#9a2119] font-semibold">URL</span>,
      dataIndex: "url",
      render: (url) => (
        <a href={url} target="_blank" className="text-blue-500">
          Visit
        </a>
      ),
    },
    {
      title: <span className="text-[#9a2119] font-semibold">Action</span>,
      align: "right",
      render: (_, record) => (
        <div className="flex justify-end gap-2">
          <button onClick={() => onView(record)} className="btn">
            <EyeOutlined />
          </button>
          <button onClick={() => onEdit(record)} className="btn">
            <EditOutlined />
          </button>
          <button
            onClick={() => {
              setData(data.filter((d) => d.key !== record.key));
            }}
            className="btn-danger"
          >
            <DeleteOutlined />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-5">
      {/* HEADER */}
      <div className="flex justify-between mb-4">
        <h2 className="text-[#9a2119] font-semibold">Entrance Exams</h2>

        <div className="flex gap-3">
          <Input
            placeholder="Search exam..."
            value={search}
            prefix={<SearchOutlined />}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={handleReset} className="btn-primary">
            <ReloadOutlined /> Reset
          </button>

          <button onClick={onAdd} className="btn-primary">
            + Add
          </button>
        </div>
      </div>

      <Table columns={columns} dataSource={filteredData} pagination={{ pageSize: 5 }} />
    </div>
  );
}