import React, { useState } from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Link } from 'react-router-dom';
import LogoCGU from '../assets/Logo 1 CGU Refine OL-02.png';

const navigation = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Work', href: '/work' },
  { name: 'Director Partners', href: '/dir-partners' },
  { name: 'Services', href: '/services' },
  { name: 'Our Client', href: '/client' },
  { name: 'Contact Us', href: '/contact' },
];

const countries = [
  { name: 'Indonesia', href: '/indonesia' },
  { name: 'India', href: '/india' },
  { name: 'Malaysia', href: '/malaysia' },
  { name: 'Thailand', href: '/thailand' },
];

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <Disclosure as="nav" className="fixed top-0 inset-x-0 z-50 bg-transparent">
        {() => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-20 items-center justify-between">
                {/* Logo + desktop links */}
                <div className="flex items-center">
                  <Link to="/" className="flex items-center">
                    <img src={LogoCGU} alt="CGU Logo" className="h-10 w-auto" />
                  </Link>

                  <div className="hidden md:ml-10 md:flex md:space-x-10">
                    {countries.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Desktop sidebar toggle */}
                <div className="hidden md:flex items-center">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"                  
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                      />
                    </svg>
                  </button>
                </div>

                {/* Mobile hamburger */}
                <div className="flex md:hidden">
                  <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                     <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                      />
                    </svg>
                  </DisclosureButton>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <DisclosurePanel className="md:hidden bg-gray-800/90 px-4 pb-4 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700"
                >
                  {item.name}
                </Link>
              ))}
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      {/* Sidebar Right */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={() => setSidebarOpen(false)}
          />

          <div className="fixed top-0 right-0 z-50 h-full w-64 bg-gray-900 text-white shadow-lg p-6">
            <button
              onClick={() => setSidebarOpen(false)}
              className="mb-6 p-2 rounded-full hover:bg-white/10 focus:outline-none"
              aria-label="Close sidebar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>

            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-left px-4 py-2 text-sm font-medium rounded hover:bg-gray-700"
                  onClick={() => setSidebarOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
