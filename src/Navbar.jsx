import React from "react";
import { NavLink } from "react-router-dom";
import image from "./images/vsmthane-logo.jpg";

const Navbar = () => {
    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 ">
            <div className="py-4 px-10">
                <div className="container flex justify-between items-center">
                    {/* Left Section: Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
                            <img src={image} alt="VSM Logo" className="h-14 w-[140px] mr-3" />

                            <span className="hidden sm:block rounded-xs border-white">Alumni</span>
                        </a>
                    </div>

                    {/* Right Section: Navigation Links */}
                    <div className="hidden lg:flex font-semibold h-8">
                        <ul className="flex items-center gap-8">
                            <li>
                                <NavLink
                                    className="nav-link px-4 py-2 hover:bg-white hover:text-gray-950 border border-transparent hover:border-gray-400 rounded-md transition-all duration-300"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link px-4 py-2 hover:bg-white hover:text-gray-950 border border-transparent hover:border-gray-400 rounded-md transition-all duration-300" to="/events">Events</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link px-4 py-2 hover:bg-white hover:text-gray-950 border border-transparent hover:border-gray-400 rounded-md transition-all duration-300" to="/network_tab">Alumni</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link px-4 py-2 hover:bg-white hover:text-gray-950 border border-transparent hover:border-gray-400 rounded-md transition-all duration-300" to="/donation">Donation</NavLink>
                            </li>
                            
                            <li>
                                <NavLink className="nav-link px-4 py-2 hover:bg-white hover:text-gray-950 border border-transparent hover:border-gray-400 rounded-md transition-all duration-300" to="/sucessstories">Success Stories</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link px-4 py-2 hover:bg-white hover:text-gray-950 border border-transparent hover:border-gray-400 rounded-md transition-all duration-300" to="/login">Login</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link px-4 py-2 hover:bg-white hover:text-gray-950 border border-transparent hover:border-gray-400 rounded-md transition-all duration-300" to="/logout">Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;