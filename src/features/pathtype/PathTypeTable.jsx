import React from "react";
import { Table, Button } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

function PathTypeTable({ data, onAdd, onView, onEdit, onDelete, onSearch }) {
  const columns = [
    {
      title: "ID",
      render: (_, __, index) => index + 1,
      width: 80,
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Action",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button icon={<EyeOutlined />} onClick={() => onView(record)} />
          <Button icon={<EditOutlined />} onClick={() => onEdit(record)} />
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => onDelete(record)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow border w-full">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <input
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
          className="border px-3 py-2 rounded-md w-64"
        />

        <Button
          type="primary"
          onClick={onAdd}
          style={{ background: "#9a2119", borderColor: "#9a2119" }}
        >
          + Add Path Type
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        pagination={{ pageSize: 6 }}
      />
    </div>
  );
}

export default PathTypeTable;