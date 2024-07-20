import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center text-white bg-purple-400 px-4 h-14'>
      <div className='logo font-bold text-2xl'>
        <span className='text-green-700'>&lt;</span>
        Pass
        <span className='text-green-700'>OP/&gt;</span>
      </div>
      <ul className='flex gap-4 '>
        <li><a className='hover:font-semibold' href='/'>Home</a></li>
        <li><a className='hover:font-semibold' href='/about'>About</a></li>
        <li><a className='hover:font-semibold' href='/contact'>Contact</a></li>

      </ul>

    </nav>
  )
}

export default Navbar;