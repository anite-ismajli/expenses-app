import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

const CashFlowChart = ({ data }) => {
  // data = [{name, value}, ...]
  const labels = useMemo(() => data.map((d) => d.name), [data]);
  const dataset = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Cash Flow",
          data: data.map((d) => d.value),
          fill: true,
          backgroundColor: (ctx) => {
            const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, "rgba(59,130,246,0.6)");
            gradient.addColorStop(1, "rgba(59,130,246,0.05)");
            return gradient;
          },
          borderColor: "#3b82f6",
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    }),
    [data, labels]
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { ticks: { color: "#94a3b8" }, grid: { display: false } },
      y: { ticks: { color: "#94a3b8" }, grid: { color: "#111827" } },
    },
    plugins: {
      legend: { display: false },
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
      <h3 className="text-lg font-semibold text-slate-100 mb-4">Cash Flow</h3>
      <div className="w-full h-[260px]">
        <Line data={dataset} options={options} />
      </div>
    </div>
  );
};

export default CashFlowChart;