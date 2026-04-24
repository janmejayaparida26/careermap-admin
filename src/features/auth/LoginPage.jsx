import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { message } from "antd";
import { LockKeyhole, Mail, ArrowRight } from "lucide-react";
import { loginUser } from "./authStorage";

const inputClassName =
  "h-12 w-full border-0 border-b border-[#d8beb8] bg-transparent px-0 pb-1 pl-10 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#9a2119] focus:ring-0";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [messageApi, contextHolder] = message.useMessage();
  const [form, setForm] = useState({
    email: "admin@careermap.io",
    password: "Admin@123",
  });
  const [loading, setLoading] = useState(false);

  const redirectTo = location.state?.from?.pathname || "/dashboard";

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      loginUser(form);
      messageApi.success("Login successful.");
      navigate(redirectTo, { replace: true });
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
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#9a2119]/70">Welcome back</p>
        <h2 className="text-4xl font-bold text-slate-900">Sign in</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="space-y-2">
          <label className="text-[13px] font-semibold text-slate-700">Email Address</label>
          <div className="relative">
            <Mail size={18} className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[#9a2119]" />
            <input
              type="email"
              className={inputClassName}
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="admin@careermap.io"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-[13px] font-semibold text-slate-700">Password</label>
            <Link to="/forgot-password" className="text-[13px] font-semibold text-[#9a2119] hover:text-[#b5261d]">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <LockKeyhole size={18} className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[#9a2119]" />
            <input
              type="password"
              className={inputClassName}
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#9a2119] text-sm font-semibold text-white transition hover:bg-[#b5261d] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Logging in..." : "Login"}
          <ArrowRight size={16} />
        </button>

        <div className="pt-2 text-center text-xs text-slate-500">
          Demo login:
          <span className="ml-1 font-semibold text-[#9a2119]">admin@careermap.io / Admin@123</span>
        </div>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Don&apos;t have an account?{" "}
        <Link to="/signup" className="font-semibold text-[#9a2119] hover:text-[#b5261d]">
          Create one
        </Link>
      </p>
    </div>
  );
}
