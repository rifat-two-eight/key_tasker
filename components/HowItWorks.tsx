
const HowItWorks = () => {
    return (
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-screen-xl px-4 mx-auto lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Feature Cards - Masonry/Grid feel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Card 1: Pick a Category (Blue) */}
                <div className="p-8 rounded-3xl bg-[#5956E9] text-white shadow-xl transform transition hover:-translate-y-1">
                    <div className="w-12 h-12 mb-6 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Pick a Category</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">Choose from Social, Email, Freelance, and more.</p>
                </div>

                {/* Card 2: Fast Submissions (White) - Shifted down slightly on desktop for staggered look if needed, but grid is fine */}
                <div className="p-8 rounded-3xl bg-white border border-gray-100 text-gray-900 shadow-lg transform transition hover:-translate-y-1 mt-0 sm:mt-12">
                     <div className="w-12 h-12 mb-6 rounded-full bg-orange-100 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Fast Submissions</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Upload screenshots and get results in moments.</p>
                </div>

                {/* Card 3: Crowd Review (White) */}
                <div className="p-8 rounded-3xl bg-white border border-gray-100 text-gray-900 shadow-lg transform transition hover:-translate-y-1">
                    <div className="w-12 h-12 mb-6 rounded-full bg-blue-50 flex items-center justify-center">
                         <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Crowd Review</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Your evidence is reviewed by the community for fairness.</p>
                </div>

                 {/* Card 4: Secure Payouts (Dark Blue) */}
                 <div className="p-8 rounded-3xl bg-[#1E1B4B] text-white shadow-xl transform transition hover:-translate-y-1 mt-0 sm:mt-12">
                     <div className="w-12 h-12 mb-6 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                     </div>
                    <h3 className="text-xl font-bold mb-2">Secure Payouts</h3>
                    <p className="text-indigo-200 text-sm leading-relaxed">Verified ledger system ensures your money is always safe.</p>
                </div>

            </div>

             {/* Right Column: Steps */}
             <div className="lg:pl-16 mt-16 lg:mt-0">
                <div className="inline-block px-4 py-2 mb-6 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-lg">
                    How it works
                </div>
                <h2 className="mb-12 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                    The most efficient way <br/> to <span className="text-[#5956E9]">earn money</span>
                </h2>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                    {/* Step 1 */}
                    <div className="relative flex items-start group">
                        <div className="absolute left-0 flex items-center justify-center w-10 h-10 ml-0 bg-[#E0E7FF] rounded-full group-hover:bg-[#5956E9] transition-colors z-10 shrink-0">
                            <span className="font-bold text-[#5956E9] group-hover:text-white">1</span>
                        </div>
                        <div className="ml-16">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Select a Task</h3>
                            <p className="text-gray-500 leading-relaxed">Browse our high-paying marketplace for a task that fits your skills.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-start group">
                         <div className="absolute left-0 flex items-center justify-center w-10 h-10 ml-0 bg-[#E0E7FF] rounded-full group-hover:bg-[#5956E9] transition-colors z-10 shrink-0">
                            <span className="font-bold text-[#5956E9] group-hover:text-white">2</span>
                        </div>
                        <div className="ml-16">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Perform Action</h3>
                            <p className="text-gray-500 leading-relaxed">Follow simple instructions to complete the micro-task correctly.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-start group">
                         <div className="absolute left-0 flex items-center justify-center w-10 h-10 ml-0 bg-[#E0E7FF] rounded-full group-hover:bg-[#5956E9] transition-colors z-10 shrink-0">
                            <span className="font-bold text-[#5956E9] group-hover:text-white">3</span>
                        </div>
                        <div className="ml-16">
                             <h3 className="text-xl font-bold text-gray-900 mb-2">Submit Evidence</h3>
                             <p className="text-gray-500 leading-relaxed">Provide screenshots and an AI-assisted guess for rapid processing.</p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex items-start group">
                        <div className="absolute left-0 flex items-center justify-center w-10 h-10 ml-0 bg-[#E0E7FF] rounded-full group-hover:bg-[#5956E9] transition-colors z-10 shrink-0">
                            <span className="font-bold text-[#5956E9] group-hover:text-white">4</span>
                        </div>
                        <div className="ml-16">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Get Paid</h3>
                            <p className="text-gray-500 leading-relaxed">Watch your balance grow and withdraw to your preferred method.</p>
                        </div>
                    </div>
                </div>

             </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
