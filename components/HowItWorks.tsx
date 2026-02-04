
const HowItWorks = () => {
    const steps = [
      {
        title: "Sign Up",
        description: "Create your free account in seconds and set up your workspace.",
        icon: (
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        )
      },
      {
        title: "Create Tasks",
        description: "Organize your work by creating tasks, setting deadlines, and assigning priorities.",
         icon: (
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
         )
      },
      {
        title: "Track Progress",
        description: "Monitor your team's progress with real-time dashboards and analytics.",
         icon: (
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
         )
      },
      {
          title: "Achieve Goals",
          description: "Complete projects on time and celebrate your success with KeyTasker.",
           icon: (
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
           )
      }
    ];
  
    return (
      <section className="bg-gray-900 py-24">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">How It Works</h2>
            <p className="text-gray-400 sm:text-xl">Simple steps to get you up and running with KeyTasker.</p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors border border-gray-700 shadow-lg">
                <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-gray-700/50 ring-1 ring-white/10">
                   {step.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
