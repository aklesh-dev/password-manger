import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-purple-400 px-4 h-14'>
        <div className='logo font-bold'>PassOP</div>
        <ul className='flex gap-4 '>
            <li><a className='hover:font-semibold' href='/'>Home</a></li>
            <li><a className='hover:font-semibold' href='/about'>About</a></li>
            <li><a className='hover:font-semibold' href='/contact'>Contact</a></li>

        </ul>

    </nav>
  )
}

export default Navbar;