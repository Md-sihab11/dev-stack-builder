import React from 'react';
import img from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <nav className="" >
            <div className="container mx-auto items-center">

                <div className="container mx-auto pt-5 flex justify-between items-center">
                    <img src={img} alt="" className="" />

                    
                        <ul className=" flex gap-6 cursor-pointer ">
                            <li className="hover:text-red-500"><a href="#">Home</a></li>
                            <li className="hover:text-red-500"><a href="#">Technologies</a></li>
                            <li className="hover:text-red-500"><a href="#">Projects</a></li>
                            <li className="hover:text-red-500"><a href="#">About</a></li>
                            <li className="hover:text-red-500"><a href="#">Contact</a></li>
                        </ul>
                  

                    <div>
                        <button className="btn btn-neutral rounded-full rounded-r-none">Sign In</button>
                       <button className="btn btn-success rounded-full rounded-l-none">Sign Up</button>
                    </div>
                </div>
                 
            </div>
             <div className="divider" />
        </nav>
    );
};

export default Navbar;
