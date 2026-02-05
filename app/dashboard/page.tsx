const Dashboard = () => {
  return (
    <div className="w-full mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
          <p className="text-gray-500 mt-1">
            Track your earnings and task performance.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            ></path>
          </svg>
          Last 30 Days
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                ></path>
              </svg>
            </div>
            <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              <svg
                className="w-3 h-3 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
              12%
            </span>
          </div>
          <div className="text-gray-500 text-sm font-medium mb-1">
            Total Earnings
          </div>
          <div className="text-2xl font-bold text-gray-900">$1,245.50</div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="text-gray-500 text-sm font-medium mb-1">
            Approved Tasks
          </div>
          <div className="text-2xl font-bold text-gray-900">142</div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="text-gray-500 text-sm font-medium mb-1">
            Pending Review
          </div>
          <div className="text-2xl font-bold text-gray-900">12</div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="text-gray-500 text-sm font-medium mb-1">
            Rejection Rate
          </div>
          <div className="text-2xl font-bold text-gray-900">2.4%</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Submissions */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-900 text-lg">
              Recent Submissions
            </h3>
            <button className="text-sm font-bold text-blue-600 hover:text-blue-700">
              View All
            </button>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs text-gray-400 uppercase tracking-wider">
                    <th className="pb-4 font-semibold">Task Details</th>
                    <th className="pb-4 font-semibold">Category</th>
                    <th className="pb-4 font-semibold">Status</th>
                    <th className="pb-4 font-semibold text-right">Payout</th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  {/* Row 1 */}
                  <tr className="group">
                    <td className="py-4">
                      <div className="font-bold text-gray-900">
                        Fiverr Order Help
                      </div>
                      <div className="text-xs text-gray-400">
                        Oct 24, 2:30 PM
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold">
                        Fiverr
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span className="text-xs font-bold text-emerald-600 uppercase">
                          Approved
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-right font-bold text-gray-900">
                      $1.50
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="group">
                    <td className="py-4 border-t border-gray-50">
                      <div className="font-bold text-gray-900">
                        Email Signup Flow
                      </div>
                      <div className="text-xs text-gray-400">
                        Oct 24, 11:15 AM
                      </div>
                    </td>
                    <td className="py-4 border-t border-gray-50">
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold">
                        Email
                      </span>
                    </td>
                    <td className="py-4 border-t border-gray-50">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                        <span className="text-xs font-bold text-orange-500 uppercase">
                          Pending
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-right font-bold text-gray-900 border-t border-gray-50">
                      $0.80
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="group">
                    <td className="py-4 border-t border-gray-50">
                      <div className="font-bold text-gray-900">
                        TikTok Engagement
                      </div>
                      <div className="text-xs text-gray-400">
                        Oct 23, 4:50 PM
                      </div>
                    </td>
                    <td className="py-4 border-t border-gray-50">
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold">
                        Social
                      </span>
                    </td>
                    <td className="py-4 border-t border-gray-50">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span className="text-xs font-bold text-emerald-600 uppercase">
                          Approved
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-right font-bold text-gray-900 border-t border-gray-50">
                      $2.00
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="group">
                    <td className="py-4 border-t border-gray-50">
                      <div className="font-bold text-gray-900">
                        IG Message Test
                      </div>
                      <div className="text-xs text-gray-400">
                        Oct 23, 10:20 AM
                      </div>
                    </td>
                    <td className="py-4 border-t border-gray-50">
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold">
                        Social
                      </span>
                    </td>
                    <td className="py-4 border-t border-gray-50">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        <span className="text-xs font-bold text-red-500 uppercase">
                          Rejected
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-right font-bold text-gray-900 border-t border-gray-50">
                      $1.20
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">
          {/* Moderator Status Widget */}
          <div className="bg-[#02021E] rounded-3xl p-6 text-white overflow-hidden relative">
            <div className="relative z-10">
              <div className="text-[10px] font-bold text-indigo-400 tracking-wider uppercase mb-2">
                Moderator Status
              </div>
              <h3 className="text-xl font-bold mb-3">Unlock Earn+</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Earn $25 in "Social" category to unlock crowd moderation and earn
                $0.05 per vote.
              </p>

              <div className="w-full bg-gray-800 rounded-full h-1.5 mb-2">
                <div
                    className="bg-indigo-500 h-1.5 rounded-full"
                    style={{ width: "65%" }}
                ></div>
              </div>
              <div className="flex justify-between text-[10px] font-medium text-gray-400">
                  <span>$16.40 earned</span>
                  <span className="text-indigo-400">65% Progress</span>
              </div>
            </div>
          </div>

          {/* Category Breakdown Widget */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-6">Category Breakdown</h3>
                <div className="space-y-5">
                    
                    {/* Item 1 */}
                    <div>
                        <div className="flex justify-between text-xs font-bold text-gray-700 mb-2">
                            <span>Social</span>
                            <span>45%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                    </div>

                    {/* Item 2 */}
                     <div>
                        <div className="flex justify-between text-xs font-bold text-gray-700 mb-2">
                            <span>Fiverr</span>
                            <span>30%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                            <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '30%' }}></div>
                        </div>
                    </div>

                     {/* Item 3 */}
                     <div>
                        <div className="flex justify-between text-xs font-bold text-gray-700 mb-2">
                            <span>Email</span>
                            <span>15%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                            <div className="bg-rose-500 h-1.5 rounded-full" style={{ width: '15%' }}></div>
                        </div>
                    </div>

                     {/* Item 4 */}
                     <div>
                        <div className="flex justify-between text-xs font-bold text-gray-700 mb-2">
                            <span>Other</span>
                            <span>10%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                            <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '10%' }}></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
