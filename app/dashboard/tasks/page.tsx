import Link from "next/link";

const TaskExplorer = () => {
    const tasks = [
        {
            id: 1,
            title: "Fiverr: Send order inquiry message",
            platform: "Fiverr",
            category: "FIVERR",
            slotsLeft: 122,
            price: 1.50,
            bonus: 0.50,
            icon: (
                 <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            )
        },
        {
            id: 2,
            title: "IG: Reply to creator story",
            platform: "Instagram",
             category: "SOCIAL",
             slotsLeft: 45,
             price: 1.20,
             bonus: 0.30,
             icon: (
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            )
        },
        {
            id: 3,
            title: "Email: Confirm newsletter signup",
            platform: "Email",
            category: "EMAIL",
            slotsLeft: 540,
            price: 0.80,
            bonus: 0.20,
             icon: (
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2z"></path></svg>
            )
        },
        {
            id: 4,
            title: "Fiverr: Leave a review for seller",
            platform: "Fiverr",
            category: "FIVERR",
            slotsLeft: 12,
            price: 2.50,
            bonus: 1.00,
            icon: (
                 <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            )
        },
        {
            id: 5,
            title: "Messenger: Group chat activity",
            platform: "Messenger",
            category: "MESSENGER",
            slotsLeft: 88,
            price: 1.00,
            bonus: 0.40,
            icon: (
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            )
        },
        {
            id: 6,
            title: "TikTok: Collaborative video post",
            platform: "TikTok",
            category: "SOCIAL",
            slotsLeft: 3,
            price: 3.50,
            bonus: 1.50,
            icon: (
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            )
        }
    ];

  return (
    <div className="w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
                <h2 className="text-3xl font-bold text-gray-900">Task Explorer</h2>
                <p className="text-gray-500 mt-1">Found {tasks.length} tasks matching your profile.</p>
            </div>
            
            <div className="relative w-full md:w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="text" className="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3 shadow-sm" placeholder="Search tasks..." />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
                <div key={task.id} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center">
                            {task.icon}
                        </div>
                        <div className="text-right">
                             <div className="text-2xl font-bold text-gray-900">${task.price.toFixed(2)}</div>
                             <div className="text-[10px] font-bold text-emerald-500 uppercase">+${task.bonus.toFixed(2)} BONUS</div>
                        </div>
                    </div>

                    <h3 className="font-bold text-gray-900 text-lg mb-4 line-clamp-2 min-h-[56px]">{task.title}</h3>

                    <div className="flex items-center justify-between mb-8">
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase rounded-lg tracking-wider">{task.category}</span>
                        <div className="flex items-center text-xs font-bold text-orange-500">
                             <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                             {task.slotsLeft} SLOTS LEFT
                        </div>
                    </div>

                    <Link href={`/dashboard/tasks/${task.id}`} className="block w-full bg-[#1e1b4b] text-white text-center py-3 rounded-xl font-bold text-sm hover:bg-[#2e2b6b] transition-colors">
                        View Details ›
                    </Link>
                </div>
            ))}
        </div>
    </div>
  );
};

export default TaskExplorer;
