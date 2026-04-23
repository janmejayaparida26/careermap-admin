import React, { useEffect } from "react";
import { Form, Input, Select, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

function SubCategoryForm({ onSubmit, initialValues, viewMode }) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) form.setFieldsValue(initialValues);
    else form.resetFields();
  }, [initialValues]);

  const handleFinish = (values) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={handleFinish}
      className="grid grid-cols-2 gap-4"
    >
      {/* Category */}
      <Form.Item name="category" label="Select Category" rules={[{ required: true }]}>
        <Select disabled={viewMode}>
          <Option value="Medical">Medical</Option>
        </Select>
      </Form.Item>

      {/* 2nd Category */}
      <Form.Item name="secondCategory" label="Select 2nd Category">
        <Select disabled={viewMode}>
          <Option value="GENERAL COURSES/DEGREES">GENERAL COURSES/DEGREES</Option>
        </Select>
      </Form.Item>

      {/* Title */}
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input disabled={viewMode} />
      </Form.Item>

      {/* File */}
      <Form.Item name="file" label="File">
        <Upload beforeUpload={() => false} disabled={viewMode}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>

      {/* Institutions (full width) */}
      <Form.Item
        name="institutions"
        label="Institutions"
        className="col-span-2"
      >
        <Input.TextArea rows={2} disabled={viewMode} />
      </Form.Item>

      {/* Description (full width) */}
      <Form.Item
        name="description"
        label="Description"
        className="col-span-2"
      >
        <Input.TextArea rows={3} disabled={viewMode} />
      </Form.Item>

      {/* Submit */}
      {!viewMode && (
        <div className="col-span-2 text-right">
          <Button
            htmlType="submit"
            block
            style={{ background: "#9a2119", borderColor: "#9a2119" }}
            className="text-white"
          >
            Create
          </Button>
        </div>
      )}
    </Form>
  );
}

export default SubCategoryForm;