import { Button, Input, Select, Switch } from "antd";
import {
  BellOutlined,
  GlobalOutlined,
  SafetyCertificateOutlined,
  SaveOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export default function GlobalSettingsPage() {
  return (
    <section className="space-y-5">
      <div className="rounded-[28px] border border-[#f0d7d4] bg-gradient-to-br from-white via-[#fff8f7] to-[#fff2ef] p-6 shadow-[0_18px_45px_rgba(154,33,25,0.08)]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#c46b62]">
              Admin Control Center
            </p>
            <h1 className="mt-2 text-3xl font-bold text-[#9a2119]">Global Settings</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Configure system-wide app behavior, notification preferences, regional defaults,
              and admin policy settings from a single surface.
            </p>
          </div>

          <div className="rounded-2xl border border-[#f1d4d0] bg-white/80 px-4 py-3 text-right shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Theme
            </p>
            <p className="mt-1 text-3xl font-bold text-[#9a2119]">Brand Red</p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <div className="rounded-[24px] border border-[#f0d7d4] bg-white p-5 shadow-[0_18px_40px_rgba(154,33,25,0.06)]">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fdf2f1] text-[#9a2119]">
                <SettingOutlined />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#9a2119]">Application Settings</h2>
                <p className="text-sm text-slate-500">
                  Use this layout as the base for your exact settings content.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Application Name</span>
                <Input size="large" defaultValue="Career Map Admin" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Support Email</span>
                <Input size="large" defaultValue="admin@careermap.io" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Default Currency</span>
                <Select
                  size="large"
                  defaultValue="INR"
                  options={[
                    { label: "INR", value: "INR" },
                    { label: "USD", value: "USD" },
                    { label: "AED", value: "AED" },
                  ]}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Timezone</span>
                <Select
                  size="large"
                  defaultValue="Asia/Kolkata"
                  options={[
                    { label: "Asia/Kolkata", value: "Asia/Kolkata" },
                    { label: "UTC", value: "UTC" },
                    { label: "Europe/London", value: "Europe/London" },
                  ]}
                />
              </label>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#f0d7d4] bg-white p-5 shadow-[0_18px_40px_rgba(154,33,25,0.06)]">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fdf2f1] text-[#9a2119]">
                <BellOutlined />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#9a2119]">Notification Preferences</h2>
                <p className="text-sm text-slate-500">
                  A clean settings card styled with the current project palette.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                ["Email Notifications", "Send system updates to administrators"],
                ["Push Alerts", "Enable real-time admin activity prompts"],
                ["Maintenance Notices", "Show maintenance banners to app users"],
              ].map(([title, description]) => (
                <div key={title} className="flex items-center justify-between rounded-2xl border border-[#f4e0dd] bg-[#fffafa] px-4 py-3">
                  <div>
                    <p className="font-semibold text-slate-700">{title}</p>
                    <p className="text-sm text-slate-500">{description}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-[24px] border border-[#f0d7d4] bg-white p-5 shadow-[0_18px_40px_rgba(154,33,25,0.06)]">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fdf2f1] text-[#9a2119]">
                <GlobalOutlined />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#9a2119]">Regional Controls</h2>
                <p className="text-sm text-slate-500">
                  Space reserved for project-specific locale and rollout settings.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-[#f4e0dd] bg-[#fffafa] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Default Language</p>
                <p className="mt-2 text-xl font-bold text-[#9a2119]">English</p>
                <p className="mt-1 text-sm text-slate-500">
                  Link this with the Language module for production data later.
                </p>
              </div>
              <div className="rounded-2xl border border-[#f4e0dd] bg-[#fffafa] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Country Access</p>
                <p className="mt-2 text-xl font-bold text-slate-700">India, UAE, UK</p>
                <p className="mt-1 text-sm text-slate-500">
                  Manage country-specific enablement and rollout visibility from this section.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#f0d7d4] bg-white p-5 shadow-[0_18px_40px_rgba(154,33,25,0.06)]">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fdf2f1] text-[#9a2119]">
                <SafetyCertificateOutlined />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#9a2119]">Policy Snapshot</h2>
                <p className="text-sm text-slate-500">
                  A supportive layout block for security or compliance toggles.
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-600">
              <div className="rounded-2xl border border-[#f4e0dd] bg-[#fffafa] px-4 py-3">
                Admin verification is required for destructive actions.
              </div>
              <div className="rounded-2xl border border-[#f4e0dd] bg-[#fffafa] px-4 py-3">
                Audit log retention is currently configured for 90 days.
              </div>
              <Button
                type="primary"
                icon={<SaveOutlined />}
                className="mt-2 h-11 w-full border-none bg-[#9a2119] hover:!bg-[#c4392e]"
              >
                Save Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
