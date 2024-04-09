import Link from "next/link";
import React from "react";


const NavbarComponent = () => {
  return (
    <div className='fullscreen-bg'>
      <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-4">
        <div className="flex items-center justify-between text-white">
          <img href={'http://localhost:3000/'}
      src="../logo.png"
      width={100}
      height={100}
      className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
      alt="Picture of the author"
    />
          <div className="flex items-center gap-4">
            <div className="hidden mr-4 lg:block">
              <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-white">
                  <Link href="/dashboard" className="flex items-center font-bold">
                  Home
                  </Link>
                </li>
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-white">
                  <Link href="/products" className="flex items-center font-bold">
                  Popular
                  </Link>
                </li>
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-white">
                  <Link href="/blog" className="flex items-center font-bold">
                  Romance
                  </Link>
                </li>
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-white">
                  <Link href="/setting" className="flex items-center font-bold">
                  Anime
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-x-1">
            <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    </div>
            </div>
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
