
import { useState } from 'react';
import img from '../assets/logo-text.png';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        'Home',
        'Technologies',
        'Projects',
        'About',
        'Contact',
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className=" container mx-auto px-4 sm:px-6 lg:px-8">

                {/* ================= MOBILE / TABLET ================= */}
                <div className="md:hidden"> 

                    {/* Top Row */}
                    <div className="relative flex items-center justify-between pt-5">

                        {/* Hamburger */}
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            // aria-label={isOpen ? 'Close menu' : 'Open menu'} for accessability of reader!
                            className="btn btn-circle swap swap-rotate p-5"
                        >
                            {/* Hamburger */}
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} fill-current`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 512 512"
                            >
                                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                            </svg>

                            {/* Close */}
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} fill-current`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 512 512"
                            >
                                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                            </svg>
                        </button>

                        {/* Center Logo */}
                        <img
                            src={img}
                            alt="DevStack Logo"
                            className="relative left-43 w-32 -translate-x-1/2 sm:w-36"
                        />

                        {/* Auth Buttons */}
                        <div className="ml-auto flex items-center gap-1 sm:gap-2">
                            <button
                                type="button"
                                className=" shadow-none btn btn-sm rounded-full border-0 bg-transparent px-2 sm:px-3"
                            >
                                Sign In
                            </button>

                            <button
                                type="button"
                                className="btn btn-sm rounded-full border border-[#D91B7E] bg-[#D91B7E] px-3 text-white hover:bg-[#c51870]"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="mt-6 border-t pt-5 pb-4">
                            <ul className="flex flex-col items-center gap-4 text-center">
                                {menuItems.map((item) => (
                                    <li
                                        key={item}
                                        className="transition-colors hover:text-[#D91B7E]"
                                    >
                                        <a href="#">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>


                {/* ================= DESKTOP / TABLET ================= */}
                <div className="hidden items-center justify-between pt-5 md:flex">

                    {/* Logo */}
                    <img
                        src={img}
                        alt="DevStack Logo"
                        className="w-36 lg:w-40"
                    />

                    {/* Menu */}
                    <ul className="flex items-center justify-center gap-5 text-center lg:gap-8">
                        {menuItems.map((item) => (
                            <li
                                key={item}
                                className="transition-colors hover:text-[#D91B7E]"
                            >
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className="btn rounded-full border-0 bg-transparent shadow-none"
                        >
                            Sign In
                        </button>

                        <button
                            type="button"
                            className="btn rounded-full border border-[#D91B7E] bg-[#D91B7E] text-white hover:bg-[#c51870]"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>

            </div>

            <div className="divider" />
        </nav>
    );
};

export default Navbar;

