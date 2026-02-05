const Feedback = () => {
    const feedbacks = [
        {
            name: "Linda Miller",
            role: "Happy User",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            stars: 5,
            review: "I started earning on KEYTASKER by completing small tasks consistently. Over time, the platform proved reliable, and payments have been fair and transparent."
        },
        {
            name: "Dennis Kane",
            role: "Happy User",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
            stars: 5,
            review: "I've been using KEYTASKER for a while now, and earning through tasks has been smooth. The review system helps keep everything fair."
        },
        {
            name: "Santino Rivers",
            role: "Happy User",
            image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
            stars: 5,
            review: "I didn't earn much at first, but as I kept completing tasks, KEYTASKER became a reliable way to earn. The process feels transparent."
        },
        {
            name: "Linda Miller",
            role: "Happy User",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            stars: 5,
            review: "KEYTASKER rewards consistency. I've earned steadily by following the rules and completing tasks properly."
        },
        {
            name: "Dennis Kane",
            role: "Happy User",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
            stars: 5,
            review: "At first I was careful, but after completing several tasks, the platform proved reliable. Payments and approvals have been consistent."
        },
        {
            name: "Santino Rivers",
            role: "Happy User",
            image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
            stars: 5,
            review: "It took some time to understand the flow, but once I did, earning through tasks became smooth and predictable."
        }
    ];

  return (
    <section className="py-24">
      <div className="bg-[#02021E] py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-16">
              <span className="bg-indigo-100/10 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block border border-indigo-500/30">
                  Community Feedback
              </span>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                  Real Clients with Honest Review
              </h2>
              <p className="font-light text-gray-400 sm:text-xl">
                  Hear from users who complete verified tasks and earn through a fair review <br className="hidden sm:block"/> system designed to reward quality work.
              </p>
          </div> 
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {feedbacks.map((item, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-[#0F0F2D] border border-gray-800 hover:border-indigo-500/30 transition-all">
                      <div className="flex mb-4 text-yellow-500">
                          {[...Array(item.stars)].map((_, i) => (
                              <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          ))}
                      </div>
                      <p className="mb-6 text-gray-400 text-sm leading-relaxed">"{item.review}"</p>
                      <div className="flex items-center space-x-3">
                          <img className="w-10 h-10 rounded-full object-cover" src={item.image} alt={item.name} />
                          <div className="font-medium text-white text-left">
                              <div className="text-sm">{item.name}</div>
                              <div className="text-xs text-indigo-400">{item.role}</div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default Feedback;
