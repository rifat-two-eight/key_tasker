
const Feedback = () => {
  return (
    <section className="bg-black py-24">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">User Feedback</h2>
              <p className="font-light text-gray-400 sm:text-xl">Here is what our users have to say about KeyTasker.</p>
          </div> 
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-900 border-b border-gray-700 md:p-12 lg:border-r">
                  <blockquote className="mx-auto mb-8 max-w-2xl text-gray-400">
                      <h3 className="text-lg font-semibold text-white">Very easy to use</h3>
                      <p className="my-4">"KeyTasker has completely changed how I organize my day. It's intuitive, fast, and exactly what I needed."</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white">JJ</div>
                      <div className="space-y-0.5 font-medium text-white text-left">
                          <div>Jese Leos</div>
                          <div className="text-sm text-gray-400">Software Engineer</div>
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-900 border-b border-gray-700 md:p-12">
                  <blockquote className="mx-auto mb-8 max-w-2xl text-gray-400">
                      <h3 className="text-lg font-semibold text-white">A game changer</h3>
                      <p className="my-4">"The collaboration features are top-notch. I can easily track my team's progress without micromanaging."</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold text-white">RL</div>
                      <div className="space-y-0.5 font-medium text-white text-left">
                          <div>Roberta Casas</div>
                          <div className="text-sm text-gray-400">Product Manager</div>
                      </div>
                  </figcaption>    
              </figure>
          </div>
      </div>
    </section>
  );
};

export default Feedback;
