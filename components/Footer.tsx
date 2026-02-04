
const Footer = () => {
    return (
      <footer className="p-4 bg-black md:p-8 lg:p-10 border-t border-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
            <a href="#" className="flex justify-center items-center text-2xl font-semibold text-white mb-6">
                KEYTASKER
            </a>
            <p className="my-6 text-gray-400">The ultimate task management platform for teams and individuals.</p>
            <ul className="flex flex-wrap justify-center items-center mb-6 text-white text-sm sm:text-base selection:bg-fuchsia-300 selection:text-fuchsia-900">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Premium</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Campaigns</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Affiliate Program</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
                </li>
            </ul>
            <span className="text-sm text-gray-400 sm:text-center">© 2026-2027 <a href="#" className="hover:underline">KeyTasker™</a>. All Rights Reserved.</span>
        </div>
      </footer>
    );
  };
  
  export default Footer;
