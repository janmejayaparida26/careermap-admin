import React, { useState } from "react";
import { Modal } from "antd";
import SubCategoryTable from "./SubCategoryTable";
import SubCategoryForm from "./SubCategoryForm";

const initialData = [
  {
    id: 1,
    category: "Medical",
    secondCategory: "GENERAL COURSES/DEGREES",
    title: "MBBS",
    institutions: "AIIMS DELHI, AIIMS BHUBANESWAR...",
    description: "The MBBS (Bachelor of Medicine and...)",
  },
  {
    id: 2,
    category: "Medical",
    secondCategory: "GENERAL COURSES/DEGREES",
    title: "BDS",
    institutions: "Manipal Dental College...",
    description: "The BDS (Bachelor of Dental Surgery...)",
  },
];

function SubCategoryPage() {
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [viewMode, setViewMode] = useState(false);
  const [search, setSearch] = useState("");

  const handleSubmit = (values) => {
    if (editData) {
      setData(data.map((d) => (d.id === editData.id ? { ...d, ...values } : d)));
    } else {
      setData([...data, { ...values, id: Date.now() }]);
    }
    setOpen(false);
    setEditData(null);
    setViewMode(false);
  };

  const handleDelete = (id) => {
    setData(data.filter((d) => d.id !== id));
  };

  return (
    <div className="w-full"> {/* ✅ FIXED ALIGNMENT */}

      {/* Page Title */}
      <h2 className="text-xl font-semibold text-[#9a2119] mb-5">
        SubCategory Management
      </h2>

      {/* Table Section */}
      <div className="w-full">
        <SubCategoryTable
          data={data}
          search={search}
          setSearch={setSearch}
          onAdd={() => {
            setEditData(null);
            setViewMode(false);
            setOpen(true);
          }}
          onView={(row) => {
            setEditData(row);
            setViewMode(true);
            setOpen(true);
          }}
          onEdit={(row) => {
            setEditData(row);
            setViewMode(false);
            setOpen(true);
          }}
          onDelete={handleDelete}
        />
      </div>

      {/* Modal */}
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={1000}
        title={
          viewMode
            ? "View SubCategory"
            : editData
            ? "Edit SubCategory"
            : "Add SubCategory"
        }
      >
        <SubCategoryForm
          onSubmit={handleSubmit}
          initialValues={editData}
          viewMode={viewMode}
        />
      </Modal>
    </div>
  );
}

export default SubCategoryPage;