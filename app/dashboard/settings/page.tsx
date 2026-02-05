"use client";

import { useState } from "react";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState<"personal" | "security">("personal");

  return (
    <div className="w-full mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Account Settings</h2>
        <p className="text-gray-500 mt-1">
          Manage your personal information, security, and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1">
          <div className="space-y-2">
            <button
              onClick={() => setActiveTab("personal")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === "personal"
                  ? "bg-[#5455ff] text-white shadow-lg shadow-indigo-200"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              Personal Info
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === "security"
                  ? "bg-[#5455ff] text-white shadow-lg shadow-indigo-200"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              Security
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm min-h-[600px]">
            
            {/* Personal Info Tab */}
            {activeTab === "personal" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="flex items-start gap-6 mb-8">
                   <div className="relative group">
                       <div className="w-24 h-24 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 border border-gray-200">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                       </div>
                       <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#5455ff] text-white rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200 hover:scale-110 transition-transform">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                       </button>
                   </div>
                   <div>
                       <h3 className="font-bold text-gray-900 text-lg">Profile Picture</h3>
                       <p className="text-gray-500 text-sm mt-1">PNG, JPG or GIF. Max size of 1MB.</p>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                         <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">First Name</label>
                         <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                    </div>
                    <div>
                         <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Last Name</label>
                         <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                    </div>
                </div>

                <div className="mb-6">
                     <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                     <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                </div>

                <div className="mb-8">
                     <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Bio (Optional)</label>
                     <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"></textarea>
                </div>

                 <div className="flex justify-end pt-6 border-t border-gray-50">
                    <button className="bg-[#1e1b4b] text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#2e2b6b] transition-colors shadow-lg shadow-indigo-100 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
                        Save Changes
                    </button>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                    
                    <div className="bg-blue-50 rounded-2xl p-6 mb-8 border border-blue-100 flex items-start gap-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        </div>
                        <div>
                             <h3 className="font-bold text-gray-900 mb-1">Two-Factor Authentication</h3>
                             <p className="text-sm text-gray-600 mb-4 leading-relaxed max-w-lg">
                                 Add an extra layer of security to your account. We'll send a code to your device whenever you sign in.
                             </p>
                             <button className="bg-white border border-blue-200 text-blue-600 text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                                 Enable 2FA
                             </button>
                        </div>
                    </div>

                    <div className="space-y-6 mb-8">
                        <div>
                             <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Current Password</label>
                             <input type="password" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                        </div>
                        <div>
                             <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">New Password</label>
                             <input type="password" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                        </div>
                        <div>
                             <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Confirm New Password</label>
                             <input type="password" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                        </div>
                    </div>

                    <div className="flex justify-end pt-6 border-t border-gray-50">
                        <button className="bg-[#1e1b4b] text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#2e2b6b] transition-colors shadow-lg shadow-indigo-100">
                            Update Password
                        </button>
                    </div>

                </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
