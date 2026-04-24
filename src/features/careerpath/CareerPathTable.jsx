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
    category: "Medical",
    pathType: "Path 1",
    stream: "12th [PCB, PCMB, PCB(M), PCM(B)]",
    graduation: "MBBS",
    afterGraduation: "M.D/ M.S",
    afterPostGraduation: "DM-MCH : SS",
    anyOther: "POST DOC",
  },
  {
    key: "2",
    module: "Career Library",
    category: "Lecturer/Professor",
    pathType: "Path 1",
    stream: "12th",
    graduation: "graduation in any stream",
    afterGraduation: "Post graduation in any discipline",
    afterPostGraduation: "Ph.D",
    anyOther: "N/A",
  },
  {
    key: "3",
    module: "Career Library",
    category: "Journalism & Mass communication",
    pathType: "Path 1",
    stream: "12th pass in any stream",
    graduation: "UG(J/JMC) / PG Diploma",
    afterGraduation: "Ph.D",
    afterPostGraduation: "N/A",
    anyOther: "N/A",
  },
];

export default function CareerPathTable({
  onView,
  onEdit,
  onDelete,
  onAdd,
}) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(initialData);

  const filteredData = data.filter((item) =>
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleReset = () => setSearch("");

  const columns = [
    {
      title: <span className="text-[#9a2119] font-semibold">SL</span>,
      render: (_, __, index) => index + 1,
      width: 60,
    },
    { title: <span className="text-[#9a2119]">Module</span>, dataIndex: "module" },
    { title: <span className="text-[#9a2119]">Category</span>, dataIndex: "category" },
    { title: <span className="text-[#9a2119]">Path</span>, dataIndex: "pathType" },
    { title: <span className="text-[#9a2119]">Stream</span>, dataIndex: "stream" },
    { title: <span className="text-[#9a2119]">Graduation</span>, dataIndex: "graduation" },
    { title: <span className="text-[#9a2119]">After Grad</span>, dataIndex: "afterGraduation" },
    { title: <span className="text-[#9a2119]">After PG</span>, dataIndex: "afterPostGraduation" },
    { title: <span className="text-[#9a2119]">Other</span>, dataIndex: "anyOther" },
    {
      title: (
        <span className="text-[#9a2119] font-semibold text-right block">
          Action
        </span>
      ),
      align: "right",
      width: 180,
      render: (_, record) => (
        <div className="flex justify-end gap-2">
          <button onClick={() => onView(record)} className="btn-action">
            <EyeOutlined />
          </button>
          <button onClick={() => onEdit(record)} className="btn-action">
            <EditOutlined />
          </button>
          <button
            onClick={() => {
              const updated = data.filter((d) => d.key !== record.key);
              setData(updated);
              onDelete && onDelete(record);
            }}
            className="btn-delete"
          >
            <DeleteOutlined />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-5">

      {/* Header */}
      <div className="flex justify-between mb-4">
        <Input
          placeholder="Search category..."
          value={search}
          prefix={<SearchOutlined />}
          className="w-64"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-2">
          <button onClick={handleReset} className="btn-main">
            <ReloadOutlined /> Reset
          </button>
          <button onClick={onAdd} className="btn-main">
            + Add
          </button>
        </div>
      </div>

      <Table columns={columns} dataSource={filteredData} pagination={{ pageSize: 5 }} />
    </div>
  );
}