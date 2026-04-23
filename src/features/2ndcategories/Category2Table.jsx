import React from "react";
import { Table, Button, Space } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default function Category2Table({
  data,
  onAdd,
  onEdit,
  onView,
  onDelete,
}) {
  const columns = [
    {
      title: "SL",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      ellipsis: true,
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (img) => (
        <img
          src={img}
          alt=""
          className="w-12 h-12 rounded-md object-cover"
        />
      ),
    },
    {
      title: "Action",
      render: (_, record) => (
        <Space>
          <Button icon={<EyeOutlined />} onClick={() => onView(record)} />
          <Button icon={<EditOutlined />} onClick={() => onEdit(record)} />
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => onDelete(record.id)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="bg-white p-5 rounded-2xl shadow border">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold text-[#9a2119]">
          Category List
        </h2>

        <Button
          type="primary"
          onClick={onAdd}
          style={{ background: "#9a2119", borderColor: "#9a2119" }}
        >
          + Add Category
        </Button>
      </div>

      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>
  );
}