const ModerationPage = () => {
    return (
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Moderation Queue</h2>
            <p className="text-gray-500 mt-1">
              Earn $0.05 per correct decision. 98.4% Accuracy.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-lg text-sm font-bold shadow-sm">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             14s Avg. Sync
          </button>
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
              
              {/* Submission Card */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                  
                  {/* Submission Header */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-50">
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </div>
                          <div>
                              <h3 className="font-bold text-gray-900">Submission #A8F92</h3>
                              <p className="text-xs text-gray-500">Category: Social Management</p>
                          </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </button>
                  </div>
  
                  {/* Content */}
                  <div className="space-y-8">
                       <div className="bg-gray-50 rounded-xl p-6">
                           <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Task Instructions</h4>
                           <p className="text-gray-700 font-medium leading-relaxed">
                              Go to Fiverr and send a message to the seller 'TechSavvy' asking about their turnaround time. Screenshot must show the recipient name and your sent message.
                           </p>
                       </div>
  
                       <div>
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">User Evidence</h4>
                          <div className="h-64 bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200 text-slate-400 font-bold">
                              [Screenshot Preview]
                          </div>
                       </div>
  
                       <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gray-50 rounded-xl p-4">
                               <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">User's Guess</h4>
                               <p className="font-bold text-gray-900 text-lg">YES</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                               <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Explanation</h4>
                               <p className="text-sm text-gray-600 italics">
                                  "I messaged the seller and they responded within 5 minutes."
                               </p>
                            </div>
                       </div>
                  </div>
              </div>
  
              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                  <button className="bg-[#009F6B] hover:bg-[#008F60] text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-100 flex items-center justify-center gap-2 transition-colors">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
                       Approve
                  </button>
                  <button className="bg-[#E60023] hover:bg-[#D60020] text-white font-bold py-4 rounded-xl shadow-lg shadow-rose-100 flex items-center justify-center gap-2 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l2.94 1.5M13 14v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"></path></svg>
                      Reject
                  </button>
              </div>
  
          </div>
  
          {/* Sidebar */}
          <div className="space-y-6">
              {/* Quality Rules */}
               <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                   <h3 className="font-bold text-gray-900 mb-6 flex items-center">
                       <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                       Quality Rules
                   </h3>
                   <ul className="space-y-4 text-sm text-gray-600 font-medium">
                       <li className="flex items-start gap-3">
                           <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0"></span>
                           Screen shot must match the category.
                       </li>
                       <li className="flex items-start gap-3">
                           <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0"></span>
                           Recipient name must be clearly visible.
                       </li>
                       <li className="flex items-start gap-3">
                           <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0"></span>
                           Messages should not be blurred.
                       </li>
                       <li className="flex items-start gap-3">
                           <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0"></span>
                           Reject if repetitive behavior is seen.
                       </li>
                   </ul>
               </div>
  
               {/* Moderation Earnings */}
               <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                   <h3 className="font-bold text-gray-900 mb-6">Moderation Earnings</h3>
                   
                   <div className="flex justify-between items-center mb-4">
                       <span className="text-gray-500 text-sm font-medium">Today's Votes</span>
                       <span className="text-xl font-bold text-gray-900">42</span>
                   </div>
                   <div className="flex justify-between items-center mb-8">
                       <span className="text-gray-500 text-sm font-medium">Earned Today</span>
                       <span className="text-xl font-bold text-emerald-500">+$2.10</span>
                   </div>
  
                   <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold py-3 rounded-xl transition-colors text-sm">
                       Full Voting History
                   </button>
               </div>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default ModerationPage;
