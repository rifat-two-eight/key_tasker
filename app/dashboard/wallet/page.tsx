const WalletPage = () => {
  return (
    <div className="w-full mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Wallet</h2>
          <p className="text-gray-500 mt-1">
            Manage your funds and withdrawal requests.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-[#1e1b4b] text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#2e2b6b] transition-colors shadow-lg shadow-indigo-200">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
           Request Payout
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Balance Card */}
           <div className="bg-[#0F172A] rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[280px]">
               <div className="relative z-10">
                   <div className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">Available Balance</div>
                   <div className="text-5xl font-extrabold tracking-tight mb-8">$1,245.50</div>
                   
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                            <div className="text-[10px] text-gray-400 uppercase font-bold mb-1">Total Earned</div>
                            <div className="text-xl font-bold">$4,850.00</div>
                        </div>
                         <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                            <div className="text-[10px] text-gray-400 uppercase font-bold mb-1">Moderation</div>
                            <div className="text-xl font-bold">$125.40</div>
                        </div>
                    </div>
               </div>
               
               {/* Decorative card background */}
               <div className="absolute top-1/2 -right-8 opacity-10 transform -translate-y-1/2 rotate-12">
                    <svg width="200" height="140" viewBox="0 0 200 140" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="0" width="200" height="140" rx="10" />
                        <rect x="0" y="20" width="200" height="20" fill="#0F172A" />
                    </svg>
               </div>
           </div>

           {/* Payment Methods */}
           <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-6">Payment Methods</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                     {/* PayPal Card */}
                     <div className="border-2 border-[#5455ff] bg-blue-50/10 rounded-2xl p-6 relative">
                         <div className="absolute top-4 right-4 text-[#5455ff]">
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                         </div>
                         <div className="text-xs font-bold text-[#5455ff] uppercase tracking-wider mb-4">Primary</div>
                         <div className="font-bold text-gray-900 text-lg mb-1">PayPal</div>
                         <div className="text-gray-500 text-sm">alex.j@example.com</div>
                     </div>

                     {/* Add Method */}
                     <button className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-gray-400 hover:border-gray-300 hover:bg-gray-50 transition-all">
                          <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                          <span className="font-bold text-sm">Add Method</span>
                     </button>
                </div>

                <div className="bg-amber-50 rounded-xl p-4 flex items-start gap-3 border border-amber-100">
                    <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <p className="text-xs text-amber-800 font-medium leading-relaxed">
                        Minimum withdrawal amount is <span className="font-bold">**$25.00**</span>. Payouts are processed every Monday and Thursday. Verified users get instant approval.
                    </p>
                </div>
           </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
                 <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                 Transaction History
            </h3>
             <button className="text-gray-400 hover:text-gray-600">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
             </button>
        </div>
        
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="bg-gray-50/50">
                    <tr className="text-xs text-gray-400 uppercase tracking-wider">
                        <th className="px-8 py-4 font-bold">Transaction</th>
                        <th className="px-8 py-4 font-bold">Reference</th>
                        <th className="px-8 py-4 font-bold">Date</th>
                        <th className="px-8 py-4 font-bold text-right">Amount</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {/* Row 1 */}
                    <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-8 py-5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                                </div>
                                <span className="font-bold text-gray-900 text-sm">Earned</span>
                            </div>
                        </td>
                        <td className="px-8 py-5 text-sm text-gray-500 font-medium">Fiverr Order Help #2441</td>
                        <td className="px-8 py-5 text-sm text-gray-400">Oct 24, 2023</td>
                        <td className="px-8 py-5 text-right font-bold text-emerald-500 text-sm">+$1.50</td>
                    </tr>

                     {/* Row 2 */}
                     <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-8 py-5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                                </div>
                                <span className="font-bold text-gray-900 text-sm">Withdrawal</span>
                            </div>
                        </td>
                        <td className="px-8 py-5 text-sm text-gray-500 font-medium">PayPal (Pending)</td>
                        <td className="px-8 py-5 text-sm text-gray-400">Oct 23, 2023</td>
                        <td className="px-8 py-5 text-right font-bold text-gray-900 text-sm">-$150.00</td>
                    </tr>

                     {/* Row 3 */}
                     <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-8 py-5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                                </div>
                                <span className="font-bold text-gray-900 text-sm">Moderation</span>
                            </div>
                        </td>
                        <td className="px-8 py-5 text-sm text-gray-500 font-medium">Correct Vote #991</td>
                        <td className="px-8 py-5 text-sm text-gray-400">Oct 23, 2023</td>
                        <td className="px-8 py-5 text-right font-bold text-emerald-500 text-sm">+$0.05</td>
                    </tr>

                     {/* Row 4 */}
                     <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-8 py-5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                                </div>
                                <span className="font-bold text-gray-900 text-sm">Bonus</span>
                            </div>
                        </td>
                        <td className="px-8 py-5 text-sm text-gray-500 font-medium">Continuing Conv. #241</td>
                        <td className="px-8 py-5 text-sm text-gray-400">Oct 22, 2023</td>
                        <td className="px-8 py-5 text-right font-bold text-emerald-500 text-sm">+$0.50</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
