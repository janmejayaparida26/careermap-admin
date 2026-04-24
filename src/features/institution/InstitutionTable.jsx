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
    name: "JIPMER Puducherry",
    logo: "https://via.placeholder.com/40",
    address: "Puducherry",
    admission: "NEET",
    date: "July 2025",
    type: "Govt.",
    url: "https://jipmer.edu.in",
    country: "India",
    state: "Pondicherry",
    district: "Pondicherry",
  },
];

export default function InstitutionTable({
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

  const columns = [
    { title: "SL", render: (_, __, i) => i + 1 },
    { title: "Name", dataIndex: "name" },
    {
      title: "Logo",
      dataIndex: "logo",
      render: (logo) => <img src={logo} className="w-10 h-10 rounded" />,
    },
    { title: "Address", dataIndex: "address" },
    { title: "Admission", dataIndex: "admission" },
    { title: "Date", dataIndex: "date" },
    { title: "Type", dataIndex: "type" },
    {
      title: "URL",
      dataIndex: "url",
      render: (url) => <a href={url}>Visit</a>,
    },
    { title: "Country", dataIndex: "country" },
    { title: "State", dataIndex: "state" },
    { title: "District", dataIndex: "district" },
    {
      title: "Action",
      align: "right",
      render: (_, record) => (
        <div className="flex justify-end gap-2">
          <button onClick={() => onView(record)}><EyeOutlined /></button>
          <button onClick={() => onEdit(record)}><EditOutlined /></button>
          <button onClick={() => onDelete(record)}><DeleteOutlined /></button>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white p-5 rounded-2xl">
      <div className="flex justify-between mb-4">
        <h2 className="text-[#9a2119] font-semibold">
          Institution Management
        </h2>

        <div className="flex gap-2">
          <Input
            placeholder="Search..."
            prefix={<SearchOutlined />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => setSearch("")}>
            <ReloadOutlined />
          </button>
          <button onClick={onAdd}>+ Add</button>
        </div>
      </div>

      <Table columns={columns} dataSource={filteredData} scroll={{ x: true }} />
    </div>
  );
}