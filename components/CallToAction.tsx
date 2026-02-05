const CallToAction = () => {
  const topEarners = [
    {
      name: "Sarah Miller",
      description: "1,232 tasks verified",
      amount: "$12,450",
      initial: "S",
      color: "bg-red-100 text-red-600",
    },
    {
      name: "David Chen",
      description: "985 tasks verified",
      amount: "$9,820",
      initial: "D",
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Elena Rodriguez",
      description: "877 tasks verified",
      amount: "$8,140",
      initial: "E",
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <section className="bg-white pb-24">
      <div className="max-w-screen-xl px-4 mx-auto lg:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-[#383CC1] shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/20 to-transparent"></div>
          
          <div className="grid md:grid-cols-2 gap-12 p-8 items-center relative z-10">
            <div>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Ready to start earning?
              </h2>
              <p className="mb-8 font-light text-indigo-100 md:text-lg opacity-90">
                Join thousands of others who are already earning money on their own
                schedule. It takes less than 2 minutes to sign up.
              </p>
              <button className="bg-white text-[#383CC1] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                Join Now
              </button>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-xl max-w-sm ml-auto">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#383CC1] flex items-center justify-center text-white font-bold text-xs">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    </div>
                    <div>
                        <div className="text-xs font-bold text-gray-900">Top Earners</div>
                        <div className="text-[10px] text-blue-600 font-medium">REAL-TIME LEADERBOARD</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {topEarners.map((earner, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full ${earner.color} flex items-center justify-center font-bold`}>
                          {earner.initial}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900">
                            {earner.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {earner.description}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-gray-900">
                          {earner.amount}
                        </div>
                        <div className="text-[10px] text-emerald-500 font-medium">
                          Paid ✨
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
