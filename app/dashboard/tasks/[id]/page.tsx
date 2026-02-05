import Link from "next/link";

export default function TaskDetails({ params }: { params: { id: string } }) {
  // In a real app, fetch task details using params.id
  // For now, we mock static content matching the screenshot

  return (
    <div className="w-full mx-auto">
      {/* Breadcrumb / Back */}
      <div className="mb-6">
        <Link href="/dashboard/tasks" className="flex items-center text-sm font-bold text-gray-500 hover:text-gray-900">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Tasks
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase tracking-wider">FIVERR</span>
            <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded uppercase tracking-wider">LIMITED QUANTITY</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Send Order Inquiry to 'TechSavvy'</h1>
           <div className="flex items-center text-sm text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              5 minutes to complete
           </div>
        </div>
        <div className="text-right">
             <div className="text-xs text-blue-400 font-bold uppercase mb-1">Total Payout</div>
             <div className="text-5xl font-extrabold text-[#02021E] tracking-tight">$2.00</div>
             <div className="text-xs font-bold text-emerald-500">($1.50 Base + $0.50 Bonus)</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Flow & Submission */}
        <div className="lg:col-span-2 space-y-8">
            
            {/* Step-by-step Instructions */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
                <h2 className="text-xl font-bold text-gray-900 flex items-center mb-8">
                    <div className="w-8 h-8 rounded-full bg-[#1e1b4b] text-white flex items-center justify-center text-sm mr-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    Step-by-Step Instructions
                </h2>

                <div className="space-y-10 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px before:h-full before:w-0.5 before:bg-gray-100">
                    
                    {/* Step 1 */}
                    <div className="relative flex group items-start">
                         <div className="absolute left-0 flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full font-bold text-sm z-10 shrink-0">
                            1
                        </div>
                        <div className="ml-12 pt-1">
                            <h3 className="font-bold text-gray-900 text-lg mb-2">Visit Fiverr Profile</h3>
                            <p className="text-gray-500 mb-4 leading-relaxed">Click the button below to go directly to the recipient's profile.</p>
                            <button className="bg-[#1e1b4b] text-white px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-[#2e2b6b] transition-colors">
                                fiverr.com/techsavvy
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </button>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex group items-start">
                         <div className="absolute left-0 flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full font-bold text-sm z-10 shrink-0">
                            2
                        </div>
                        <div className="ml-12 pt-1">
                             <h3 className="font-bold text-gray-900 text-lg mb-2">Send Message</h3>
                             <p className="text-gray-500 mb-4 leading-relaxed">Paste the exact message text shown below. Do not change it or your task will be rejected.</p>
                             <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 italic text-gray-700 font-medium">
                                "Hi there! I'm interested in your UI Design gig. What is your current turnaround time for a 5-page project?"
                             </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex group items-start">
                         <div className="absolute left-0 flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full font-bold text-sm z-10 shrink-0">
                            3
                        </div>
                         <div className="ml-12 pt-1">
                             <h3 className="font-bold text-gray-900 text-lg mb-2">Screen Capture</h3>
                             <p className="text-gray-500 leading-relaxed">Take a screenshot of the chat window. Ensure the recipient's username and your message are both visible in one shot.</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Submission Area */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 flex items-center mb-8">
                     <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm mr-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                    </div>
                    Submit Evidence
                </h2>

                <div className="mb-8">
                    <label className="block text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">Upload Screenshot</label>
                    <div className="border-2 border-dashed border-gray-200 rounded-2xl p-10 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                         <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white text-gray-400 group-hover:text-blue-600 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                         </div>
                         <p className="font-bold text-gray-900 mb-1">Click to upload or drag & drop</p>
                         <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                         <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Does it match?</label>
                         <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Yes/No" />
                    </div>
                    <div>
                         <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Short Explanation</label>
                         <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Optional" />
                    </div>
                </div>

                <button className="w-full bg-[#1e1b4b] text-white font-bold py-4 rounded-xl text-lg hover:bg-[#2e2b6b] transition-colors shadow-lg shadow-indigo-200">
                    Submit Task for Review
                </button>
            </div>

        </div>

        {/* Right Column: Widgets */}
        <div className="space-y-6">

             {/* Bonus Eligibility */}
             <div className="bg-[#0F172A] rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="font-bold text-lg mb-4 flex items-center">
                         <svg className="w-5 h-5 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Bonus Eligibility
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Earn an extra <span className="text-white font-bold">$0.50</span> if you continue the conversation after the initial message and the seller responds!
                    </p>

                    <ul className="space-y-3 text-xs font-medium text-gray-300">
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            Keep the topic relevant
                        </li>
                        <li className="flex items-center gap-2">
                             <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            At least 2 more messages
                        </li>
                        <li className="flex items-center gap-2">
                             <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            Response from recipient
                        </li>
                    </ul>
                </div>
             </div>

             {/* Avoid Rejection */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                 <h3 className="font-bold text-gray-900 text-lg mb-6 flex items-center">
                     <svg className="w-5 h-5 text-rose-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    Avoid Rejection
                 </h3>
                 <ul className="space-y-6">
                     <li className="flex gap-3">
                         <span className="text-rose-500 font-bold shrink-0">!</span>
                         <p className="text-sm text-gray-600 leading-relaxed">Don't use old screenshots from previous tasks.</p>
                     </li>
                     <li className="flex gap-3">
                         <span className="text-rose-500 font-bold shrink-0">!</span>
                         <p className="text-sm text-gray-600 leading-relaxed">Username in screenshot must match 'TechSavvy'.</p>
                     </li>
                      <li className="flex gap-3">
                         <span className="text-rose-500 font-bold shrink-0">!</span>
                         <p className="text-sm text-gray-600 leading-relaxed">Do not modify the exact message text.</p>
                     </li>
                 </ul>
              </div>

        </div>
      </div>
    </div>
  );
}
