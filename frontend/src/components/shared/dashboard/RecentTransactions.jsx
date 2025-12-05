import React from "react";
import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";

const RecentTransactions = ({ items = [] }) => {
  return (
    <div className="bg-[#111827] border border-slate-800 rounded-xl p-4 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-100">Recent Transactions</h3>
        <div className="flex items-center gap-2">
          <button className="bg-slate-800 px-3 py-2 rounded-md text-slate-200">Search</button>
          <button className="bg-slate-800 px-3 py-2 rounded-md text-slate-200">Filter</button>
        </div>
      </div>

      <div className="space-y-3">
        {items.map((t, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-[#0f1724] rounded-md">
            <div className="flex items-center gap-3">
              {t.amount < 0 ? (
                <ArrowDownCircle className="text-red-400" size={22} />
              ) : (
                <ArrowUpCircle className="text-green-400" size={22} />
              )}

              <div>
                <p className="text-slate-100 text-sm font-medium">{t.desc}</p>
                <p className="text-slate-400 text-xs">
                  {t.category} · {t.date}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className={`font-semibold ${t.amount < 0 ? "text-red-400" : "text-green-400"}`}>
                {t.amount < 0 ? "-" : "+"}€{Math.abs(t.amount)}
              </p>
              <p className="text-xs text-slate-400">{t.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;