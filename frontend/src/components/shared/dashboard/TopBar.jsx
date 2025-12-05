import React from "react";
import { Bell, Search, Moon } from "lucide-react";

const TopBar = () => {
  return (
    <div className="w-full flex items-center justify-between bg-[#111827] border border-slate-800 rounded-xl px-4 py-3 shadow-lg">
      {/* Left section */}
      <div>
        <h1 className="block w-full py-2 bg-clip-text leading-12 text-2xl font-semibold  text-transparent bg-linear-to-r from bg-blue-800 to-red-300">Hi Anite!</h1>
        <p className="text-sm text-slate-400">Welcome back.</p>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-3">
        {/* Search button */}
        <div className="hidden md:flex items-center bg-[#0f1724] px-3 py-1.5 rounded-xl border border-slate-700">
          <Search className="text-slate-400" size={18} />
          <input className="bg-transparent ml-2 outline-none text-slate-200 text-sm" placeholder="Search..." />
        </div>
         {/* Theme */}
        <button className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
          <Moon className="text-slate-300" size={18} />
        </button>

        {/* Notifications */}
        <button className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition relative">
          <Bell size={18} className="text-slate-300" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-blue-500 rounded-full"></span>
        </button>

        {/* Avatar */}
        <div className="h-10 w-10 rounded-full bg-slate-600 flex items-center justify-center text-white font-semibold">
          AI
        </div>
      </div>
    </div>
  );
};

export default TopBar;