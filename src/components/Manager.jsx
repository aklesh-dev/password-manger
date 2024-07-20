import React from 'react'

const Manager = () => {
    return (
        <>
            <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

            <div className=" max-w-4xl text-white mx-auto b-slate-400 p-4 rounded-3xl">
                <h1 className='font-bold text-4xl text-center text-green-400'>
                    <span className='text-green-700'>&lt;</span>
                    Pass
                    <span className='text-green-700'>OP/&gt;</span>
                </h1>
                <p className='text-green-900 font-bold text-center text-lg'>Your own Password Manager</p>
                <div className="flex flex-col items-center gap-8 text-black">
                    <input placeholder='Enter Website URL' className='px-4 py-1 rounded-full border border-green-400 w-full focus:outline-none focus:border-green-600' type="text" name="" id="" />
                    <div className='flex gap-4 w-full'>
                        <input placeholder='Enter Username' className='px-4 py-1 rounded-full border border-green-400 w-full focus:outline-none focus:border-green-600' type="text" name="" id="" />
                        <input placeholder='Enter Password' className='px-4 py-1 rounded-full border border-green-400 w-full focus:outline-none focus:border-green-600' type="text" name="" id="" />
                    </div>
                    
                    <button className='flex justify-center items-center gap-2 border-2 border-x-green-700 hover:border-y-green-700 px-4 py-2 rounded-full hover:bg-green-400 w-fit bg-green-600 transition-all ease-in-out' ><lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover"
                    >
                    </lord-icon>Add Password
                    </button>
                </div>
            </div>

        </>
    )
}

export default Manager