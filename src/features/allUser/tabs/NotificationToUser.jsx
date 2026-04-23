import { Input, Button } from "antd";
import { useState } from "react";
import { useQuill } from "react-quilljs";
import Quill from "quill";

import "quill/dist/quill.snow.css";

/* 👉 ADD CUSTOM ICONS */
const icons = Quill.import("ui/icons");

icons["undo"] = `
  <svg viewBox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="6 10 2 6 6 2"></polygon>
    <path class="ql-stroke" d="M2,6h9a5,5 0 1,1 0,10h-1"></path>
  </svg>
`;

icons["redo"] = `
  <svg viewBox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="12 10 16 6 12 2"></polygon>
    <path class="ql-stroke" d="M16,6H7a5,5 0 1,0 0,10h1"></path>
  </svg>
`;

export default function NotificationToUser() {
  const [subject, setSubject] = useState("");

  const { quill, quillRef } = useQuill({
    theme: "snow",
    modules: {
      toolbar: {
        container: [
          ["undo", "redo"],
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ align: [] }],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          undo: function () {
            this.quill.history.undo();
          },
          redo: function () {
            this.quill.history.redo();
          },
        },
      },

      // 👉 Enable history (required)
      history: {
        delay: 1000,
        maxStack: 50,
        userOnly: true,
      },
    },
  });

  const handleSend = () => {
    const message = quill?.root.innerHTML;
    console.log({ subject, message });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 ">
      
      {/* SUBJECT */}
      <div className="mb-5">
        <label className="block text-sm font-semibold mb-2 text-[#9a2119]">
          Subject <span className="text-red-500">*</span>
        </label>

        <Input
          placeholder="Email subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="h-10 rounded-md"
        />
      </div>

      {/* MESSAGE */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2 text-[#9a2119]">
          Message
        </label>

        <div className="border rounded-md overflow-hidden">
          <div ref={quillRef} style={{ height: "200px" }} />
        </div>
      </div>

      {/* SEND */}
      <div className="flex justify-end">
        <Button
          onClick={handleSend}
          className="px-6 h-10 rounded-md bg-[#9a2119] text-white hover:bg-[#c0392b] border-none"
        >
          Send Notification
        </Button>
      </div>
    </div>
  );
}