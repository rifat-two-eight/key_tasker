
const WhyChooseUs = () => {
  return (
    <section className="bg-gray-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full skew-y-3 bg-gray-900 z-0 origin-top-left scale-110"></div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl relative z-10 lg:py-16 lg:px-6">
        <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Why Choose Us?</h2>
            <p className="text-gray-400 sm:text-xl">We provide the tools you need to succeed, backed by support you can trust.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
                <div className="flex gap-4">
                    <div className="flex-shrink-0">
                         <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-500 text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                         </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Secure & Reliable</h3>
                        <p className="text-gray-400">Enterprise-grade security to keep your data safe and accessible 24/7.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                     <div className="flex-shrink-0">
                         <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-500 text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                         </div>
                    </div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
                        <p className="text-gray-400">Optimized for performance to ensure smooth operation even with complex tasks.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                     <div className="flex-shrink-0">
                         <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-500 text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                         </div>
                    </div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                        <p className="text-gray-400">Our dedicated support team is always ready to assist you.</p>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/20 to-black p-8 rounded-2xl border border-indigo-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to get started?</h3>
              <p className="text-gray-400 mb-8">Join thousands of satisfied users who have transformed the way they work.</p>
              <button className="w-full text-white font-medium rounded-lg text-sm px-5 py-3 text-center transition-all hover:scale-[1.02]" style={{ background: 'radial-gradient(circle, #33337F, #02024F)' }}>
                  Join Now
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
