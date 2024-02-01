import React from "react";
import Link from "next/link";
import Logo from "./logo";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 top-0 z-10 bg-gradient-to-b from-[rgba(62,54,54,0.9)] to-transparent">
        <div className="px-4 h-full w-full">
          <div className="flex flex-wrap items-center p-4 justify-center gap-4">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/about">
                  <p>ABOUT US</p>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <p>PRODUCTS</p>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <p>PROJECTS</p>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <p>NEWS</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p>CONTACT US</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;