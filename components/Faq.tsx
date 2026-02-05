const Faq = () => {
  const faqs = [
    {
      question: "How do I start earning?",
      answer:
        "Sign up for a free account, complete your profile, and browse the 'Tasks' section. Pick any task that is available and follow the instructions provided.",
    },
    {
      question: "What is crowd moderation?",
      answer:
        "Crowd moderation is a community-driven system where qualified users review proof submissions to ensure accuracy and fairness.",
    },
    {
      question: "How do I become a moderator?",
      answer:
        "Consistent high-quality work and a good reputation score can qualify you to become a moderator and earn additional rewards.",
    },
    {
      question: "When can I withdraw my money?",
      answer:
        "You can request a withdrawal once your approved balance reaches the minimum payout threshold, which is typically processed within 24-48 hours.",
    },
    {
      question: "Are my screenshots secure?",
      answer:
        "Yes, all submissions are encrypted and only visible to the necessary parties for verification purposes.",
    },
  ];

  return (
    <section className="bg-white py-24 text-black">
      <div className="py-8 px-4 mx-auto max-w-6xl lg:py-16 lg:px-6">
        <div className="text-center mb-16">
          <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            FAQ
          </span>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Frequently Asked <span className="text-[#5956E9]">Questions</span>
          </h2>
          <p className="text-gray-500 sm:text-xl">
            Everything you need to know about getting started.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-lg border border-gray-100 [&_summary::-webkit-details-marker]:hidden"
              open={index === 0}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-900 font-bold hover:bg-gray-50 transition-colors rounded-lg group-open:rounded-b-none group-open:bg-white group-open:pb-4 group-open:text-[#5956E9]">
                <h2 className="">{faq.question}</h2>
                <svg
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180 text-gray-400 group-open:text-[#5956E9]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 pt-0 leading-relaxed text-gray-500 text-sm">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
