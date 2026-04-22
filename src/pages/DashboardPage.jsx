import { HandCoins, Percent, CalendarCheck, Wrench, ShoppingCart, CheckCircle2, Clock3 } from "lucide-react";
import Header from "../components/layout/Header";
import StatCard from "../components/widgets/StatCard";
import SubscriptionChart from "../components/charts/SubscriptionChart";
import LoginChart from "../components/charts/LoginChart";
import TicketList from "../components/widgets/TicketList";
import UserStats from "../components/widgets/UserStats";

const topStats = [
  {
    title: "Total Deposited",
    value: "Rs0.00",
    icon: HandCoins,
    trend: 0,
    chartType: "bar",
    chartData: [20, 40, 30, 50, 35, 60],
  },
  {
    title: "Deposited Charge",
    value: "Rs0.00",
    icon: Percent,
    accent: true,
    trend: 0,
    chartType: "line",
    chartData: [10, 30, 25, 45, 35, 55],
  },
  {
    title: "Total Plan",
    value: "1",
    icon: CalendarCheck,
    trend: 0,
    chartType: "bar",
    chartData: [5, 10, 8, 12, 9, 15],
  },
  {
    title: "Total Services",
    value: "6",
    icon: Wrench,
    trend: 12,
    chartType: "line",
    chartData: [10, 20, 30, 25, 40, 50],
  },
];

const orderStats = [
  {
    title: "Total Orders",
    value: "0",
    icon: ShoppingCart,
    chartType: "bar",
    chartData: [2, 5, 3, 6, 4, 7],
  },
  {
    title: "Orders Approved",
    value: "0",
    icon: CheckCircle2,
    chartType: "line",
    chartData: [1, 3, 5, 4, 6, 8],
  },
  {
    title: "Orders Pending",
    value: "0",
    icon: Clock3,
    chartType: "bar",
    chartData: [6, 4, 5, 3, 4, 2],
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 max-w-[1400px] mx-auto p-4">

      {/* Top Stats (2 per row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {topStats.map((s) => (
          <StatCard key={s.title} {...s} />
        ))}
      </div>

      {/* Order Stats (2 per row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {orderStats.map((s) => (
          <StatCard key={s.title} {...s} subtitle="All time" />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Header />
        <SubscriptionChart />
        <LoginChart />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
        <TicketList />
        <UserStats />
      </div>

    </div>
  );
}