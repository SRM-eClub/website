"use client";
import React from "react";
import { Orbitron } from "next/font/google";
import Link from "next/link";

const eclub = Orbitron({
  weight: "700",
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <div className="navbar bg-black/20 backdrop-blur-2xl sticky top-0 z-40">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="#about">About</Link>
            </li>
            {/* <li>
              <Link href="#projects">Projects</Link>
            </li> */}
            <li>
              <Link href="#events">Events</Link>
            </li>
            <li>
              <Link href="#team">Team</Link>
            </li>
            {/* <li>
              <Link href="#sponsors">Sponsors</Link>
            </li> */}
          </ul>
        </div>
        <a className={eclub.className + " btn btn-ghost text-xl"} href="/">eClub</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="#about">About</Link>
          </li>
          {/* <li>
            <Link href="#projects">Projects</Link>
          </li> */}
          <li>
            <Link href="#events">Events</Link>
          </li>
          <li>
            <Link href="#team">Team</Link>
          </li>
          {/* <li>  
            <Link href="#sponsors">Sponsors</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
