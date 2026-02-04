
const Benefits = () => {
    const benefits = [
        {
            title: "Boost Efficiency",
            description: "Automate repetitive tasks and focus on what matters most.",
            color: "blue"
        },
        {
            title: "Seamless Collaboration",
            description: "Work together with your team in real-time, anywhere.",
            color: "purple"
        },
        {
            title: "Data-Driven Insights",
            description: "Make informed decisions with powerful analytics tools.",
            color: "teal"
        }
    ];

  return (
    <section className="bg-black py-24">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Benefits</h2>
            <p className="text-gray-400 sm:text-xl">Discover how KeyTasker can transform your productivity.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
                <div key={index} className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all hover:bg-gray-800">
                     <div className={`w-12 h-12 rounded-lg mb-6 flex items-center justify-center bg-${benefit.color}-900/30 text-${benefit.color}-400 ring-1 ring-${benefit.color}-500/50`}>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path></svg>
                     </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                        {benefit.description}
                    </p>
                </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Benefits;
