const WhyChooseUs = () => {
  const features = [
    {
      title: "Transparent Pricing",
      description:
        "Know exactly how much you'll earn before starting any task. No hidden fees or surprise deductions.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
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
      ),
      bgColor: "bg-blue-50",
    },
    {
      title: "Vetted Tasks",
      description:
        "Every task is pre-screened to ensure legitimacy and compliance with legal and ethical standards.",
      icon: (
        <svg
          className="w-8 h-8 text-emerald-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          ></path>
        </svg>
      ),
      bgColor: "bg-emerald-50",
    },
    {
      title: "Fair Moderation",
      description:
        "Community-driven review system prevents bias and ensures every submission gets a fair assessment.",
      icon: (
        <svg
          className="w-8 h-8 text-rose-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
      ),
      bgColor: "bg-rose-50",
    },
    {
      title: "Instant Withdrawals",
      description:
        "Once you reach the threshold, request payouts instantly with processing within 24-48 hours.",
      icon: (
        <svg
          className="w-8 h-8 text-amber-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      ),
      bgColor: "bg-amber-50",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated support team is always available to help resolve issues and answer questions.",
      icon: (
        <svg
          className="w-8 h-8 text-purple-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          ></path>
        </svg>
      ),
      bgColor: "bg-purple-50",
    },
    {
      title: "Global Access",
      description:
        "Work from anywhere in the world. We support earners from over 120 countries and counting.",
      icon: (
        <svg
          className="w-8 h-8 text-cyan-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          ></path>
        </svg>
      ),
      bgColor: "bg-cyan-50",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="text-center mb-16">
          <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            Why Choose Us
          </span>
          <h2 className="mb-4 text-4xl lg:text-5xl tracking-tight font-extrabold text-gray-900">
            Why Choose <span className="text-indigo-600">KEYTASKER</span>
          </h2>
          <p className="text-gray-500 sm:text-lg max-w-2xl mx-auto">
            We're built on transparency, security, and fairness - three
            principles that set us apart from traditional gig platforms.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div
                className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center ${feature.bgColor}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
