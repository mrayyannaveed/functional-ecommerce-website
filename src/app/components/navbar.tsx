import Link from 'next/link'
import React from 'react'
import { MdOutlineSportsVolleyball } from 'react-icons/md'

const Navbar = () => {
  return (
    <div>
        <header className="text-gray-900 font-bold body-font bg-slate-300">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={""} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <MdOutlineSportsVolleyball className='text-5xl text-orange-600'/>
      <span className="ml-2 text-xl">CricBlocks</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-slate-500">Home</Link>
      <Link href={"/about"} className="mr-5 hover:text-slate-500">About</Link>
      <Link href={"/contact"} className="mr-5 hover:text-slate-500">Contact</Link>
    </nav>
    <Link href={"/cart"}>
      <div tabIndex={0} role="button" className="pr-2 mt-5 md:mt-0">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-orange-400 duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item hover:text-white hover:bg-black">8</span>
        </div>

      
    </div>
    </Link>
  </div>
</header>
    </div>
  )
}

export default Navbar