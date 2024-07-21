import React, { useEffect, useRef, useState } from 'react';


const Manager = () => {

    const ref = useRef();

    const [form, setForm] = useState({
        site: "",
        username: "",
        password: ""
    });

    const [passwordArray, setPasswordArray] = useState([]);

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }

    }, []);


    const showPassword = () => {
        alert('show the password !!');
        // toggle the visibility icon
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = './icons/eye.png';
        } else {
            ref.current.src = './icons/eyecross.png';
        }

    };

    const savePassword = () => {
        setPasswordArray([...passwordArray, form]);
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
        console.log([...passwordArray, form]);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }




    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

            <div className=" max-w-4xl text-white mx-auto b-slate-400 p-4 rounded-3xl">
                <h1 className='font-bold text-4xl text-center text-green-400'>
                    <span className='text-green-700'>&lt;</span>
                    Pass
                    <span className='text-green-700'>OP/&gt;</span>
                </h1>
                <p className='text-green-900 font-bold text-center text-lg'>Your own Password Manager</p>
                <div className="flex flex-col items-center gap-8 text-black">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='px-4 py-1 rounded-full border border-green-400 w-full focus:outline-none focus:border-green-600' type="text" name="site" id="" />
                    <div className='flex gap-4 w-full'>
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='px-4 py-1 rounded-full border border-green-400 w-full focus:outline-none focus:border-green-600' type="text" name="username" id="" />
                        <div className="relative w-full">
                            <input value={form.password} onChange={handleChange} placeholder='Enter Password' className='px-4 py-1 rounded-full border border-green-400 w-full focus:outline-none focus:border-green-600' type="text" name="password" id="" />
                            <span>
                                <img ref={ref} onClick={showPassword} className='absolute right-4 top-2 w-5 hover:cursor-pointer' src="./icons/eye.png" alt="eye-icon" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='flex justify-center items-center gap-2 border-2 border-x-green-700 hover:border-y-green-700 px-4 py-2 rounded-full hover:bg-green-400 w-fit bg-green-600 transition-all ease-in-out' ><lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover"
                    >
                    </lord-icon>Add Password
                    </button>
                </div>
                {/* --Display data-- */}
                <div className="password text-black">
                    <h2 className='font-bold text-xl py-3'>Your Passwords</h2>
                    {passwordArray.length === 0 && <>NO Password To Show</>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden">
                            <thead className='bg-green-800 text-white'>
                                <tr>
                                    <th>Site</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100'>
                                {passwordArray.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className='text-center w-32 py-2 border border-white'><a href={item.site} target='_blank'>{item.site}</a></td>
                                            <td className='text-center w-32 py-2 border border-white'>{item.username}</td>
                                            <td className='text-center w-32 py-2 border border-white'>{item.password}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    }
                </div>
            </div>

        </>
    )
}

export default Manager