import React, { useState } from 'react';
import longLogo from '../assests/img/longlogo.png'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=" md:flex justify-center bg-black text-white">
            <nav className='flex flex-row justify-between'>
                <img className='w-36' src={longLogo} alt='long-logo'/>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            {isOpen && <path fill-rule="evenodd" d="M6 5h12a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1zm0 6h12a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2a1 1 0 011-1zm0 6h12a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2a1 1 0 011-1z" clip-rule="evenodd" />}
                            {!isOpen && <path fill-rule="evenodd" d="M4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2zm3 4a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zm1 4a1 1 0 100 2h10a1 1 0 100-2H7z" clip-rule="evenodd" />}
                        </svg>
                    </button>
                </div>
                <ul className={`flex flex-col md:flex-row justify-between w-full max-w-md p-2 text-xl font-bold ${isOpen ? "" : "hidden md:flex"}`}>
                    <li className='px-2'><a href="/" className="no-underline ">Home</a></li>
                    <li className='px-2'><a href="/projects" className="no-underline">Projects</a></li>
                    <li className='px-2'><a href="/about" className="no-underline">About</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;