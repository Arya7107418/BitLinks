import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-20 bg-purple-700 flex justify-between px-6 items-center text-white shadow-lg fixed w-full top-0 z-50'>
      <div className='logo font-bold text-3xl bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent hover:scale-105 transition-all cursor-pointer '>
        <Link href="/" className='hover:text-purple-200 transition-colors'>BitLinks</Link>
      </div>
      <ul className='flex justify-center gap-6 items-center'>
        <Link href="/" className='hover:text-purple-200 transition-colors'><li>Home</li></Link>
        <Link href="/about" className='hover:text-purple-200 transition-colors'><li>About</li></Link>
        <Link href="/shorten" className='hover:text-purple-200 transition-colors'><li>Shorten</li></Link>
        <Link href="/contact" className='hover:text-purple-200 transition-colors'><li>Contact Us</li></Link>
        <li className='flex gap-4'>
          <Link href="/shorten">
            <button className='bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg px-4 py-2 font-semibold transition-colors'>
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className='bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg px-4 py-2 font-semibold transition-colors'>
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar