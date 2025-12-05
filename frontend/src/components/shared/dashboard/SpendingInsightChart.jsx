import React, { useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const COLORS = ["#06b6d4", "#7c3aed", "#10b981", "#f59e0b", "#ef4444"];

const SpendingInsightChart = ({ data }) => {
  const chartData = useMemo(
    () => ({
      labels: data.map((d) => d.name),
      datasets: [
        {
          data: data.map((d) => d.value),
          backgroundColor: data.map((_, i) => COLORS[i % COLORS.length]),
          hoverOffset: 6,
        },
      ],
    }),
    [data]
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom", labels: { color: "#cbd5e1" } },
      tooltip: {
        backgroundColor: "#0b1220",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#263241",
        borderWidth: 1,
      },
    },
  };

  return (
    <div className="bg-[#111827] border border-slate-800 rounded-xl p-4 shadow-md w-full h-[320px]">
      <h3 className="text-lg font-semibold text-slate-100 mb-4">Spending Insights</h3>

      <div className="w-full h-[220px]">
        <Pie data={chartData} options={options} />
      </div>

      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        {data.map((p, i) => (
          <li key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full" style={{ background: COLORS[i % COLORS.length] }} />
              <span>{p.name}</span>
            </div>
            <div>€{p.value}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpendingInsightChart;