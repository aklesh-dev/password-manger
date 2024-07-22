import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {

    const ref = useRef();
    const passwordRef = useRef();

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


    // toggle the visibility icon
    const showPassword = () => {
        // alert('show the password !!');
        passwordRef.current.type = 'text';
        // console.log(ref.current.src);
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = './icons/eye.png';
            passwordRef.current.type = 'password';
        } else {
            ref.current.src = './icons/eyecross.png';
            passwordRef.current.type = 'text';
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

    // copy text
    const copyText = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            // console.log('Copied the text: ' + text);
            toast('👌 Copied to clipboard!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                
                });
        } catch (error) {
            console.error('Failed to copy: ', error);
        }
    };




    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition = "Bounce"/>
                {/* Same as */}
            <ToastContainer />

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
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='px-4 py-1 rounded-full border border-green-400 w-full focus:outline-none focus:border-green-600' type="password" name="password" id="" />
                            <span>
                                <img ref={ref} onClick={showPassword} className='absolute right-4 top-2 w-5 hover:cursor-pointer' src="./icons/eye.png" alt="eye-icon" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='flex justify-center items-center gap-2 border-2 border-x-green-700 hover:border-y-green-700  px-4 py-2 rounded-full hover:bg-green-400 w-fit bg-green-600 transition-all ease-in-out' ><lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover"
                    >
                    </lord-icon>
                        Add Password
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
                                        <tr key={index} className=''>
                                            <td className='w-32 text-center py-2 border border-white'>
                                                <div className="flex justify-center items-center gap-4">
                                                    <a href={item.site} target='_blank'>{item.site}</a>
                                                    {/* <img src="./icons/copy.gif" alt="copy" /> */}
                                                    <div className='lordicon-copy cursor-pointer' onClick={() => copyText(item.site)}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover"
                                                            style={{ 'height': '25px', 'width': '25px', 'paddingTop': '6px' }}
                                                        >
                                                        </lord-icon>
                                                    </div>
                                                </div>

                                            </td>
                                            <td className='w-32 text-center py-2 border border-white'>
                                                <div className="flex justify-center items-center gap-4">
                                                    <span>{item.username}</span>
                                                    <div className='lordicon-copy cursor-pointer' onClick={() => copyText(item.username)}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover"
                                                            style={{ 'height': '25px', 'width': '25px', 'paddingTop': '6px' }}
                                                        >
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='w-32 text-center py-2 border border-white'>
                                                <div className="flex justify-center items-center gap-4 ">
                                                    <span>{item.password}</span>
                                                    <div className='lordicon-copy cursor-pointer size-7 text-end' onClick={() => copyText(item.password)}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover"
                                                            style={{ 'height': '25px', 'width': '25px', 'paddingTop': '6px' }}
                                                        >
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
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