import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { UserRound, Mail, LockKeyhole, ArrowRight } from "lucide-react";
import { signupUser } from "./authStorage";

const inputClassName =
  "h-12 w-full border-0 border-b border-[#d8beb8] bg-transparent px-0 pb-1 pl-10 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#9a2119] focus:ring-0";

export default function SignupPage() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      messageApi.error("Passwords do not match.");
      return;
    }

    if (form.password.length < 6) {
      messageApi.error("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);
      signupUser(form);
      messageApi.success("Account created successfully.");
      navigate("/dashboard", { replace: true });
    } catch (error) {
      messageApi.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {contextHolder}
      <div className="mb-10 text-center">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#9a2119]/70">Create account</p>
        <h2 className="text-4xl font-bold text-slate-900">Sign up</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="space-y-2">
          <label className="text-[13px] font-semibold text-slate-700">Full Name</label>
          <div className="relative">
            <UserRound size={18} className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[#9a2119]" />
            <input
              type="text"
              className={inputClassName}
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter full name"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[13px] font-semibold text-slate-700">Email Address</label>
          <div className="relative">
            <Mail size={18} className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[#9a2119]" />
            <input
              type="email"
              className={inputClassName}
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[13px] font-semibold text-slate-700">Password</label>
          <div className="relative">
            <LockKeyhole size={18} className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[#9a2119]" />
            <input
              type="password"
              className={inputClassName}
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Create password"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[13px] font-semibold text-slate-700">Confirm Password</label>
          <div className="relative">
            <LockKeyhole size={18} className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[#9a2119]" />
            <input
              type="password"
              className={inputClassName}
              value={form.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              placeholder="Confirm password"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#9a2119] text-sm font-semibold text-white transition hover:bg-[#b5261d] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Creating account..." : "Create Account"}
          <ArrowRight size={16} />
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-[#9a2119] hover:text-[#b5261d]">
          Login here
        </Link>
      </p>
    </div>
  );
}
