"use client";

import { usePathname } from "next/navigation";

const TopNavbar = () => {
  const pathname = usePathname();

  const getPageTitle = (path: string) => {
    if (path === "/dashboard") return "Overview";
    if (path === "/dashboard/tasks") return "Tasks";
    if (path.startsWith("/dashboard/tasks/")) return "Task Details";
    if (path === "/dashboard/moderation") return "Moderation";
    if (path === "/dashboard/wallet") return "Wallet";
    if (path === "/dashboard/support") return "Support";
    if (path === "/dashboard/ideas") return "Submit Idea";
    if (path === "/dashboard/settings") return "Settings";
    
    return "Dashboard";
  };

  return (
    <header className="fixed top-0 right-0 left-64 h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 z-40">
        <div>
            <h1 className="text-xl font-bold text-gray-800">{getPageTitle(pathname)}</h1>
        </div>
        
        <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            
            <div className="h-8 w-px bg-gray-200"></div>

            <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                    <div className="text-sm font-bold text-gray-900">$1,245.50</div>
                    <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">Earned Balance</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#02021E] text-white flex items-center justify-center font-bold shadow-lg shadow-indigo-100">
                    AJ
                </div>
            </div>
        </div>
    </header>
  );
};

export default TopNavbar;
