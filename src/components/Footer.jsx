import React from 'react'

const Footer = () => {
    return (
        <div className='bg-purple-400 w-full fixed bottom-0'>
            <footer className="footer text-center bg-transparent">
                <div className='logo font-bold text-2xl'>
                    <span className='text-green-700'>&lt;</span>
                    Pass
                    <span className='text-green-700'>OP/&gt;</span>
                </div>
                <div className='font-semibold text-white text-sm'>Copyright © 2024 PassOP</div>
            </footer>
        </div>
    )
}

export default Footer