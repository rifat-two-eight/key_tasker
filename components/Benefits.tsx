import Image from "next/image";

const Benefits = () => {
  const benefitsList = [
    "Access to a steady stream of verified tasks across multiple categories",
    "Earn base pay + bonus for genuine, on-topic conversations",
    "Submit proof in seconds with a simple screenshot workflow",
    "Fair review system powered by category-based moderation and voting",
    "Built-in quality controls that protect honest users and reduce abuse",
  ];

  return (
    <section className="bg-white py-24 text-black">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
              Benefits
            </span>
            <h2 className="mb-6 text-4xl lg:text-5xl tracking-tight font-extrabold text-gray-900 leading-tight">
              Get <span className="text-indigo-600">verified micro-tasks</span> <br />
              that match your skills
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Browse curated tasks by category and earn through a transparent system
              with proof-based submission, community moderation, and clear payout
              rules.
            </p>
            <ul className="space-y-4">
              {benefitsList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
             {/* Using a standard img tag if Image component has issues with local path without width/height, 
                 but Next/Image is better. Assuming public/benefit.png exists. 
                 If user uploaded it via tool, I need to make sure it's in public. 
                 Wait, user said "its in my public". */}
            <div className="relative rounded-lg overflow-hidden">
                <img 
                    src="/benefit.png" 
                    alt="Benefits of KeyTasker" 
                    className="w-full h-auto object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
