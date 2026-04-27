import { Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/logo_white.png";

function CornerBurst({ className = "" }) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true">
      <g fill="none" stroke="rgba(154,33,25,0.08)" strokeWidth="2">
        {Array.from({ length: 18 }).map((_, index) => {
          const angle = (index * 360) / 18;
          const radians = (angle * Math.PI) / 180;
          const x1 = 80 + Math.cos(radians) * 34;
          const y1 = 80 + Math.sin(radians) * 34;
          const x2 = 80 + Math.cos(radians) * 76;
          const y2 = 80 + Math.sin(radians) * 76;

          return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
    </svg>
  );
}

function BookShape({ className = "" }) {
  return (
    <svg viewBox="0 0 180 140" className={className} aria-hidden="true">
      <path
        d="M24 40C24 31 31 24 40 24H86C98 24 108 29 114 38V110C108 103 98 100 86 100H40C31 100 24 93 24 84V40Z"
        fill="rgba(154,33,25,0.08)"
        stroke="rgba(154,33,25,0.18)"
        strokeWidth="2"
      />
      <path
        d="M156 40C156 31 149 24 140 24H94C82 24 72 29 66 38V110C72 103 82 100 94 100H140C149 100 156 93 156 84V40Z"
        fill="rgba(154,33,25,0.05)"
        stroke="rgba(154,33,25,0.14)"
        strokeWidth="2"
      />
      <path d="M90 36V108" stroke="#9a2119" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M42 48H78" stroke="#9a2119" strokeOpacity="0.18" strokeWidth="2" strokeLinecap="round" />
      <path d="M102 48H138" stroke="#9a2119" strokeOpacity="0.18" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CapShape({ className = "" }) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
      <path
        d="M12 38L48 22L84 38L48 54L12 38Z"
        fill="rgba(154,33,25,0.10)"
        stroke="rgba(154,33,25,0.20)"
        strokeWidth="2"
      />
      <path
        d="M26 45V58C26 63 37 70 48 70C59 70 70 63 70 58V45"
        fill="none"
        stroke="rgba(154,33,25,0.18)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M84 39V59"
        stroke="#9a2119"
        strokeOpacity="0.35"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="84" cy="63" r="4" fill="#9a2119" fillOpacity="0.25" />
    </svg>
  );
}

function BriefcaseShape({ className = "" }) {
  return (
    <svg viewBox="0 0 170 130" className={className} aria-hidden="true">
      <rect
        x="22"
        y="40"
        width="126"
        height="70"
        rx="16"
        fill="rgba(154,33,25,0.07)"
        stroke="rgba(154,33,25,0.16)"
        strokeWidth="2"
      />
      <path
        d="M62 40V32C62 24 68 18 76 18H94C102 18 108 24 108 32V40"
        fill="none"
        stroke="rgba(154,33,25,0.18)"
        strokeWidth="2.4"
      />
      <path
        d="M22 68H66C66 74 72 79 78 79H92C98 79 104 74 104 68H148"
        fill="none"
        stroke="#9a2119"
        strokeOpacity="0.18"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function TargetShape({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="34" fill="none" stroke="rgba(154,33,25,0.12)" strokeWidth="8" />
      <circle cx="60" cy="60" r="20" fill="none" stroke="rgba(154,33,25,0.18)" strokeWidth="6" />
      <circle cx="60" cy="60" r="7" fill="#9a2119" fillOpacity="0.18" />
      <path
        d="M68 52L92 28"
        stroke="#9a2119"
        strokeOpacity="0.25"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M87 28H96V37"
        fill="none"
        stroke="#9a2119"
        strokeOpacity="0.25"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PencilShape({ className = "" }) {
  return (
    <svg viewBox="0 0 260 180" className={className} aria-hidden="true">
      <path
        d="M46 120L150 52L187 89L117 145L46 120Z"
        fill="rgba(154,33,25,0.06)"
        stroke="rgba(154,33,25,0.14)"
        strokeWidth="2"
      />
      <path
        d="M150 52L170 31L208 69L187 89L150 52Z"
        fill="rgba(154,33,25,0.12)"
      />
      <path
        d="M46 120L33 154L68 141L46 120Z"
        fill="rgba(235,196,150,0.55)"
        stroke="rgba(154,33,25,0.12)"
        strokeWidth="2"
      />
      <path d="M59 112L126 137" stroke="#9a2119" strokeOpacity="0.12" strokeWidth="3" />
    </svg>
  );
}

export default function AuthLayout() {
  const location = useLocation();
  const isSignup = location.pathname === "/signup";
  const isForgot = location.pathname === "/forgot-password";

  const panelTitle = isSignup
    ? "Create your admin account and get started with Career Map."
    : isForgot
      ? "Recover access securely with code verification and a new password."
      : "Secure access for your Career Map admin dashboard.";

  const panelSubtitle = isSignup
    ? "Your own content stays here, only the visual style has been refreshed to match the clean centered design."
    : isForgot
      ? "Follow the steps below to verify your email and choose a fresh password."
      : "Use your existing account details to continue managing content and users.";

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#faf7f5_0%,#f7f4f1_46%,#f3efeb_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <CornerBurst className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 auth-float auth-float-delay-4" />
      <CornerBurst className="pointer-events-none absolute -right-12 -top-10 h-44 w-44 rotate-45 auth-float auth-float-delay-2" />
      <BookShape className="pointer-events-none absolute left-[2%] top-[28%] h-32 w-32 auth-float auth-float-delay-1" />
      <CapShape className="pointer-events-none absolute right-[18%] top-[12%] h-16 w-16 auth-float auth-float-delay-3" />
      <PencilShape className="pointer-events-none absolute right-[3%] top-[32%] hidden h-48 w-72 lg:block auth-float auth-float-delay-2" />
      <BriefcaseShape className="pointer-events-none absolute left-[7%] bottom-[18%] hidden h-24 w-32 md:block auth-float auth-float-delay-2" />
      <TargetShape className="pointer-events-none absolute right-[10%] bottom-[12%] hidden h-20 w-20 md:block auth-float auth-float-delay-4" />

      <div className="pointer-events-none absolute bottom-[6%] left-[24%] h-20 w-20 rounded-full border border-[#9a2119]/8 bg-white/35 shadow-[0_18px_45px_rgba(154,33,25,0.05)]" />
      <div className="pointer-events-none absolute bottom-[8%] right-[24%] h-12 w-12 rotate-12 rounded-[16px] border border-[#9a2119]/8 bg-white/35" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">
        <div className="w-full max-w-xl text-center">
          <div
            className={`mx-auto overflow-hidden rounded-[30px] border border-white/80 bg-white/92 px-6 py-7 shadow-[0_24px_70px_rgba(67,39,32,0.12)] backdrop-blur-xl sm:px-8 sm:py-9 ${
              isSignup ? "max-w-[540px]" : isForgot ? "max-w-[560px]" : "max-w-[470px]"
            }`}
          >
            <div className="mb-7 flex justify-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#9a2119]/10 bg-[#fff7f5] px-4 py-2 shadow-sm">
                <img src={logo} alt="Career Map" className="h-9 w-auto rounded-xl bg-[#9a2119] px-3 py-2" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a2119]/70">
                  Admin Portal
                </span>
              </div>
            </div>

            <Outlet />
          </div>

          <div className="mx-auto mt-6 max-w-lg rounded-[24px] border border-white/70 bg-white/55 px-5 py-4 text-center shadow-[0_14px_40px_rgba(67,39,32,0.06)] backdrop-blur-sm">
            <p className="text-sm font-semibold text-[#9a2119]">{panelTitle}</p>
            <p className="mt-1 text-sm leading-6 text-slate-500">{panelSubtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
