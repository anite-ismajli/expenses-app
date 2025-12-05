import TopBar from "@/components/shared/dashboard/TopBar.jsx";
import OverviewCard from "@/components/shared/dashboard/OverviewCard.jsx";
import CashFlow from "@/components/shared/dashboard/CashFlowChart.jsx";
import SpendingInsightChart from "@/components/shared/dashboard/SpendingInsightChart.jsx";
import RecentTransactions from "@/components/shared/dashboard/RecentTransactions.jsx";

const stats = [
  { id: 1, title: "Total Balance", subtitle: "(all accounts)", value: "€ 7,130" },
  { id: 2, title: "Monthly Expenses", subtitle: "(this month)", value: "€ 1,000" },
  { id: 3, title: "Upcoming Bills", subtitle: "(due in 5 days)", value: "€ 800" },
  { id: 4, title: "Savings Progress", subtitle: "(goal)", value: "59.4%" },
];

const areaData = [
  { name: "Jan", value: 500 },
  { name: "Feb", value: 800 },
  { name: "Mar", value: 1000 },
  { name: "Apr", value: 1300 },
  { name: "May", value: 1600 },
  { name: "Jun", value: 1800 },
  { name: "Jul", value: 900 },
  { name: "Aug", value: 700 },
  { name: "Sep", value: 900 },
  { name: "Oct", value: 600 },
  { name: "Nov", value: 400 },
  { name: "Dec", value: 200 },
];

const pieData = [
  { name: "Rent", value: 400 },
  { name: "Groceries", value: 250 },
  { name: "Transport", value: 150 },
  { name: "Entertainment", value: 80 },
  { name: "Misc", value: 120 },
];

const transactionsMock = [
  { date: "Dec 01, 2025", category: "Rent", desc: "Apartment rent", amount: -1200, status: "Paid" },
  { date: "Nov 28, 2025", category: "Salary", desc: "Company inc.", amount: 2500, status: "Credited" },
  { date: "Nov 23, 2025", category: "Groceries", desc: "Supermarket", amount: -65.25, status: "Card" },
];

const DashboardPage = () => {
  return (
    <div className="px-6 py-8 w-full max-w-full">
      <TopBar />

      <section className="mt-6 w-full">
        <h2 className="text-xl font-bold text-slate-100 mb-4">Overview</h2>

        {/* Overview cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((s) => (
            <OverviewCard
              key={s.id}
              title={s.title}
              subtitle={s.subtitle}
              value={s.value}
            />
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <CashFlow data={areaData} />
          </div>

          <div>
            <SpendingInsightChart data={pieData} />
          </div>
        </div>

        {/* Recent transactions */}
        <RecentTransactions items={transactionsMock} />
      </section>
    </div>
  );
};

export default DashboardPage;