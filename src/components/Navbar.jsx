import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center text-white bg-purple-400 px-32 h-14'>
      <div className='logo font-bold text-2xl'>
        <span className='text-green-700'>&lt;</span>
        Pass
        <span className='text-green-700'>OP/&gt;</span>
      </div>
      
      {/* <ul className='flex gap-8 '>
        <li><a className='hover:font-semibold' href='/'>Home</a></li>
        <li><a className='hover:font-semibold' href='/about'>About</a></li>
        <li><a className='hover:font-semibold' href='/contact'>Contact</a></li>

      </ul> */}

      <button className='bg-green-700 rounded-xl hover:bg-green-800 transition-all delay-75 ease-in-out flex  items-center p-1 text-white'>
        <img className='w-5 h-5 bg-white rounded-full' src="./icons/github.svg" alt="github icon" />
        <a className='px-4 py-2' href='#'>GitHub</a>
      </button>

    </nav>
  )
}

export default Navbar;