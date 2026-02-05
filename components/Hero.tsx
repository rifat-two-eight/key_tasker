import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative pt-32 h-[90vh] md:h-[100vh] pb-20 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 mt-15 opacity-100">
         <Image
            src="/hero.png"
            alt="Background Pattern"
            fill
            className=""
            priority
         />
      </div>

      <div className="relative mt-20 z-10 grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 mb-6 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
                <span className="w-2 h-2 mr-2 bg-blue-600 rounded-full"></span>
                NEW: INSTANT PAYOUTS AVAILABLE
            </div>

            {/* Headline */}
            <h1 className="max-w-2xl mb-4 leading-15 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
                A Smarter Platform for <br className="hidden lg:block"/> Structured Micro-Earnings
            </h1>

            {/* Subtext */}
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                Join 50,000+ users earning daily by completing simple digital tasks. Secure, verified, and paid instantly to your wallet.
            </p>

            {/* Buttons */}
            <div className="flex flex-col mb-8 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button className="inline-flex justify-center items-center py-3 px-8 text-base font-medium text-center text-white rounded-full bg-[#02024F] hover:bg-[#02024F]/90 focus:ring-4 focus:ring-blue-300 transition-all shadow-lg hover:shadow-xl">
                    Start Earning
                </button>
                <button className="inline-flex justify-center items-center py-3 px-8 text-base font-medium text-center text-gray-900 rounded-full border border-gray-100 bg-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 transition-all shadow-sm">
                   Browse Task
                </button>
            </div>

             {/* Social Proof */}
             <div className="flex items-center gap-4 mt-8">
                 <div className="flex -space-x-4">
                    <img className="w-10 h-10 border-2 border-white rounded-full" src="https://i.pravatar.cc/100?img=1" alt="User 1" />
                    <img className="w-10 h-10 border-2 border-white rounded-full" src="https://i.pravatar.cc/100?img=5" alt="User 2" />
                    <img className="w-10 h-10 border-2 border-white rounded-full" src="https://i.pravatar.cc/100?img=8" alt="User 3" />
                    <img className="w-10 h-10 border-2 border-white rounded-full" src="https://i.pravatar.cc/100?img=9" alt="User 4" />
                </div>
                <div className="text-sm font-medium text-gray-500">
                    Trusted by <span className="font-bold text-gray-900">50,000+</span> active earners
                </div>
             </div>
        </div>             
      </div>
    </section>
  );
};

export default Hero;
