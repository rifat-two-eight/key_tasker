
const Faq = () => {
    const faqs = [
        {
            question: "Is there a free trial?",
            answer: "Yes, we offer a 14-day free trial so you can experience all the premium features."
        },
        {
            question: "Can I collaborate with my team?",
            answer: "Absolutely! KeyTasker is built for collaboration. You can invite team members and assign tasks seamlessly."
        },
        {
            question: "Is my data secure?",
            answer: "Security is our top priority. We use industry-standard encryption to protect your data."
        },
        {
            question: "How do I upgrade my plan?",
            answer: "You can upgrade your plan at any time from your account settings."
        }
    ];

  return (
    <section className="bg-gray-900 py-24">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Frequently Asked Questions</h2>
              <p className="text-gray-400 sm:text-xl">Have questions? We have answers.</p>
          </div>
          <div className="grid pt-8 text-left border-t border-gray-700 md:gap-16 dark:border-gray-700 md:grid-cols-2">
              {faqs.map((faq, index) => (
                   <div key={index} className="mb-10">
                      <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                          <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 111.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                          {faq.question}
                      </h3>
                      <p className="text-gray-400">
                          {faq.answer}
                      </p>
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default Faq;
