import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/logo_white.png";

function SignupIllustration() {
  return (
    <svg viewBox="0 0 280 180" className="h-48 w-full max-w-[260px]" aria-hidden="true">
      <ellipse cx="140" cy="160" rx="95" ry="18" fill="rgba(255,255,255,0.12)" />

      <g transform="translate(28 54)">
        <circle cx="20" cy="16" r="10" fill="#f3c7b0" />
        <rect x="12" y="28" width="16" height="34" rx="8" fill="#f6efe6" />
        <rect x="9" y="60" width="7" height="32" rx="3.5" fill="#8a3e35" />
        <rect x="24" y="60" width="7" height="32" rx="3.5" fill="#8a3e35" />
      </g>

      <g transform="translate(84 40)">
        <circle cx="20" cy="16" r="10" fill="#d6a284" />
        <rect x="10" y="27" width="20" height="42" rx="10" fill="#bd7b54" />
        <rect x="7" y="68" width="8" height="38" rx="4" fill="#f0d1b8" />
        <rect x="25" y="68" width="8" height="38" rx="4" fill="#f0d1b8" />
      </g>

      <g transform="translate(145 44)">
        <circle cx="21" cy="15" r="10" fill="#f3c7b0" />
        <rect x="11" y="26" width="20" height="40" rx="10" fill="#f2b649" />
        <rect x="10" y="65" width="8" height="38" rx="4" fill="#27303f" />
        <rect x="24" y="65" width="8" height="38" rx="4" fill="#27303f" />
      </g>

      <g transform="translate(205 50)">
        <circle cx="20" cy="15" r="10" fill="#e4b18f" />
        <rect x="9" y="26" width="22" height="40" rx="11" fill="#fff4c9" />
        <rect x="9" y="65" width="8" height="42" rx="4" fill="#1f2837" />
        <rect x="24" y="65" width="8" height="42" rx="4" fill="#1f2837" />
        <rect x="4" y="35" width="10" height="6" rx="3" fill="#e4b18f" transform="rotate(-25 9 38)" />
      </g>
    </svg>
  );
}

function LoginIllustration() {
  return (
    <svg viewBox="0 0 240 180" className="h-44 w-full max-w-[220px]" aria-hidden="true">
      <ellipse cx="120" cy="154" rx="82" ry="18" fill="rgba(255,255,255,0.14)" />
      <ellipse cx="118" cy="88" rx="64" ry="34" fill="rgba(255,255,255,0.14)" />

      <g transform="translate(62 42)">
        <circle cx="22" cy="16" r="10" fill="#efc0a4" />
        <rect x="12" y="28" width="20" height="42" rx="10" fill="#f4d164" />
        <rect x="12" y="69" width="8" height="42" rx="4" fill="#d06a5c" />
        <rect x="24" y="69" width="8" height="42" rx="4" fill="#d06a5c" />
        <rect x="28" y="38" width="18" height="6" rx="3" fill="#efc0a4" transform="rotate(-18 37 41)" />
      </g>

      <g transform="translate(122 44)">
        <circle cx="22" cy="16" r="10" fill="#efc0a4" />
        <rect x="12" y="28" width="20" height="42" rx="10" fill="#fff7e1" />
        <rect x="12" y="69" width="8" height="42" rx="4" fill="#283244" />
        <rect x="24" y="69" width="8" height="42" rx="4" fill="#283244" />
        <rect x="-2" y="36" width="18" height="6" rx="3" fill="#efc0a4" transform="rotate(22 7 39)" />
      </g>
    </svg>
  );
}

function AuthPanel({ title, subtitle, type }) {
  return (
    <div className="relative h-full overflow-hidden rounded-[30px]">
      <div className="absolute inset-0 bg-[#9a2119]" />
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:26px_26px]" />
      <div className="absolute inset-y-0 right-0 w-[42%] rounded-l-[120px] bg-[#fff3d9]" />

      <div className="relative z-10 flex h-full flex-col justify-between p-10 text-white">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[11px] backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-white" />
            <span className="tracking-[0.18em] text-white/80">designstudio</span>
          </div>

          <div className="max-w-[250px]">
            <h2 className="text-[40px] font-bold leading-[1.05]">{title}</h2>
            <p className="mt-4 text-sm leading-6 text-white/75">{subtitle}</p>
          </div>
        </div>

        <div className="flex justify-center">
          {type === "signup" ? <SignupIllustration /> : <LoginIllustration />}
        </div>
      </div>
    </div>
  );
}

export default function AuthLayout() {
  const location = useLocation();
  const isSignup = location.pathname === "/signup";
  const isForgot = location.pathname === "/forgot-password";
  const panelTitle = isSignup ? "We're so glad to have you on board!" : isForgot ? "Reset your access with ease" : "Welcome back!";
  const panelSubtitle = isSignup
    ? "Join millions of users all over the world and keep up with the trends in the design world."
    : isForgot
      ? "Verify your email, confirm the code, and create a fresh password for your admin account."
      : "Pick up where you left off.";

  return (
    <div className="min-h-screen overflow-hidden bg-[linear-gradient(135deg,#f6eeea_0%,#f8f1ed_55%,#efe3de_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-[10%] top-[6%] h-80 w-80 rounded-full bg-white/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[8%] left-[16%] h-72 w-72 rounded-full bg-[#f1ddd4] blur-3xl" />
      <div className="pointer-events-none absolute right-[14%] top-[20%] h-96 w-96 rounded-[40%] bg-white/45 blur-3xl" />

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">
        <div
          className={`relative grid w-full max-w-5xl overflow-hidden rounded-[34px] bg-[#fff5de] shadow-[0_30px_80px_rgba(101,63,52,0.16)] lg:grid-cols-2 ${isSignup ? "" : "lg:[&>section:first-child]:order-2"}`}
        >
          <section className="min-h-[680px] bg-[#fff8e7]">
            <div className="flex h-full items-center justify-center p-8 lg:p-12">
              <div className="w-full max-w-md">
                <div className={`mb-8 flex items-center ${isSignup ? "justify-start" : "justify-center"} gap-3`}>
                  <img src={logo} alt="Career Map" className="h-10 w-auto rounded-xl bg-[#9a2119] px-3 py-2" />
                </div>
                <Outlet />
                <div className="mt-8 lg:hidden">
                  <Link to="/login" className="text-sm font-medium text-[#9a2119]">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="min-h-[680px] bg-transparent">
            <AuthPanel
              title={panelTitle}
              subtitle={panelSubtitle}
              type={isSignup ? "signup" : "login"}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
