import Link from 'next/link'
import React from 'react'
import { MdOutlineSportsVolleyball } from 'react-icons/md'

const Navbar = () => {
  return (
    <div>
        <header className="text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={""} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <MdOutlineSportsVolleyball className='text-5xl text-indigo-600'/>
      <span className="ml-2 text-xl">CricBlocks</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-slate-300">Home</Link>
      <Link href={"/about"} className="mr-5 hover:text-slate-300">About</Link>
      <Link href={"/contact"} className="mr-5 hover:text-slate-300">Contact</Link>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Navbar