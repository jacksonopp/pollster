import React, { useEffect, useState } from 'react';

type Props = {};

const Nav = (props: Props) => {
  // react state that is used to track whether the nav is open or not
  const [isOpen, setIsOpen] = useState(true);
  const [openStyle, setOpenStyle] = useState('block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4')

  useEffect(() => {
    // if the nav is open, set the open style to block for sizes smaller than lg
    if (isOpen) {
      setOpenStyle('block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4')
    }
    // if the nav is closed, set the open style to none for sizes smaller than lg
    else {
      setOpenStyle('hidden block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4')
    }
  }, [isOpen]);

  return (
    // A navbar component using tailwindcss
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 mb-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Pollster</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className={openStyle}
          >
            Home
          </a>
          <a
            href="#responsive-header"
            className={openStyle}
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
