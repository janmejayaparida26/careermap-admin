import { Table, Input, Tooltip } from "antd";
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
    name: "Free",
    features: `Career Library - Full Access
Entrance Exam - Full Access
Institute - Full Access
Quiz - Full Access`,
    module: "Career Library, Entrance Exam, Institute, Quiz",
    price: "0",
  },
  {
    key: "2",
    name: "Gold",
    features: `70,000+ Mock Test
Unlimited Pro Live Test
Unlimited Practice Pro Questions
17,000+ Previous Year Papers
Unlimited Re-Attempt`,
    module: "Career Library, Career Assessment",
    price: "1",
  },
  {
    key: "3",
    name: "Platinum",
    features: `70,000+ Mock Test
Unlimited Pro Live Test
Unlimited Practice Pro Questions
17,000+ Previous Year Papers
Unlimited Re-Attempt`,
    module:
      "Career Library, Career Assessment, Master Class, Book Your Mentor, Entrance Exam, Institute, Scholarship",
    price: "50000",
  },
];

export default function PlansTable({
  onView,
  onEdit,
  onDelete,
  onAdd,
}) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(initialData);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleReset = () => setSearch("");

  const ellipsis = (text) => (
    <Tooltip title={text}>
      <div className="truncate max-w-[220px] whitespace-pre-line">
        {text}
      </div>
    </Tooltip>
  );

  const columns = [
    {
      title: "SL",
      render: (_, __, index) => index + 1,
      width: 60,
    },
    {
      title: "Plan Name",
      dataIndex: "name",
    },
    {
      title: "Features",
      dataIndex: "features",
      render: ellipsis,
    },
    {
      title: "Module",
      dataIndex: "module",
      render: ellipsis,
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Action",
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
              onDelete && onDelete(record);
            }}
            className="btn border-red-500 text-red-500"
          >
            <DeleteOutlined />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">

      <h1 className="text-xl font-semibold text-[#9a2119] mb-6">
        Plans Management
      </h1>

      <div className="bg-white rounded-2xl border p-5">

        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold text-[#9a2119]">
            Plans
          </h2>

          <div className="flex gap-3">
            <Input
              placeholder="Search..."
              value={search}
              prefix={<SearchOutlined />}
              className="w-64"
              onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={handleReset} className="btn-main">
              <ReloadOutlined /> Reset
            </button>

            <button onClick={onAdd} className="btn-main">
              + Add
            </button>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={{ pageSize: 5 }}
          scroll={{ x: 1200 }}
        />
      </div>
    </div>
  );
}