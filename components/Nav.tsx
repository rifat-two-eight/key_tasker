import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 bg-white backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black"><Image src="/logo.svg" alt="Logo" width={150} height={150} /> </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="text-white focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-10 py-2.5 text-center transition-all hover:scale-105" style={{ background: 'radial-gradient(circle, #33337F, #02024F)' }}>
              Login
            </button>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-md md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 text-black rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About us</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 text-black rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">How it works</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
