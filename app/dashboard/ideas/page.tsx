const IdeasPage = () => {
    return (
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Platform Ideas</h2>
            <p className="text-gray-500 mt-1">
              Suggest features and earn bonuses if implemented.
            </p>
          </div>
          <div className="bg-amber-50 text-amber-600 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
             12 Ideas Approved
          </div>
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Submission Form */}
            <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                     <h3 className="font-bold text-gray-900 text-lg mb-8 flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                         </div>
                         Submit Your Idea
                     </h3>
  
                     <div className="space-y-6">
                         <div>
                             <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Idea Title</label>
                             <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm font-medium focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                         </div>
  
                         <div>
                             <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Description & Impact</label>
                             <textarea rows={6} className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm font-medium focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"></textarea>
                         </div>
  
                         <div className="bg-gray-50 rounded-2xl p-4 flex items-start gap-3">
                              <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                              <p className="text-sm text-gray-500">
                                  Implemented ideas earn a <span className="text-gray-900 font-bold">$10.00 bonus</span> and a special badge on your profile.
                              </p>
                         </div>
  
                         <button className="w-full bg-[#0F172A] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#1E293B] transition-colors shadow-lg shadow-gray-200">
                              Submit Proposal
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                         </button>
                     </div>
                </div>
            </div>
  
            {/* Right Column */}
            <div className="space-y-6">
                
                {/* Recent Submissions */}
                 <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                      <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          Recent Submissions
                      </h3>
  
                      <div className="space-y-4">
                           {/* Item 1 */}
                           <div className="p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                               <div className="flex justify-between items-start mb-2">
                                   <h4 className="font-bold text-gray-900 text-sm">Task filters for mobile</h4>
                                   <span className="text-[10px] text-gray-400 font-bold">Oct 24</span>
                               </div>
                               <span className="bg-emerald-100 text-emerald-600 text-[10px] uppercase font-bold px-2 py-1 rounded">Approved</span>
                           </div>
  
                           {/* Item 2 */}
                           <div className="p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                               <div className="flex justify-between items-start mb-2">
                                   <h4 className="font-bold text-gray-900 text-sm">Direct chat with mods</h4>
                                   <span className="text-[10px] text-gray-400 font-bold">Oct 22</span>
                               </div>
                               <span className="bg-amber-100 text-amber-600 text-[10px] uppercase font-bold px-2 py-1 rounded">Pending</span>
                           </div>
  
                           {/* Item 3 */}
                           <div className="p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                               <div className="flex justify-between items-start mb-2">
                                   <h4 className="font-bold text-gray-900 text-sm">Custom payout levels</h4>
                                   <span className="text-[10px] text-gray-400 font-bold">Oct 18</span>
                               </div>
                               <span className="bg-rose-100 text-rose-600 text-[10px] uppercase font-bold px-2 py-1 rounded">Rejected</span>
                           </div>
                      </div>
                 </div>
  
                 {/* Top Innovator */}
                 <div className="bg-[#5455ff] rounded-3xl p-8 text-white">
                      <h3 className="font-bold text-lg mb-6">Top Innovator</h3>
                      
                      <div className="flex items-center gap-4 mb-6">
                           <div className="w-12 h-12 rounded-xl bg-white text-[#5455ff] flex items-center justify-center">
                               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                           </div>
                           <div>
                               <div className="font-bold">Sarah Miller</div>
                               <div className="text-xs text-indigo-200">5 Ideas Implemented</div>
                           </div>
                      </div>
  
                      <p className="text-sm text-indigo-100 leading-relaxed">
                          Join our monthly innovator program for exclusive access to beta features and higher task limits.
                      </p>
                 </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default IdeasPage;
