import React from "react";

const OverviewCard = ({ title, subtitle, value }) => {
  return (
    <div className="bg-[#111827] border border-slate-800 rounded-xl p-4 shadow-md hover:shadow-lg hover:bg-[#151d2b] transition">
      <div className="flex flex-col">
        <p className="text-slate-400 text-sm">{subtitle}</p>
        <p className="text-slate-100 text-lg font-semibold">{title}</p>
        <p className="text-2xl font-bold mt-3 text-slate-100">{value}</p>
      </div>
    </div>
  );
};

export default OverviewCard;