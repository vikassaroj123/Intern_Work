import React, { useState } from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosHelpBuoy } from 'react-icons/io';
import { FaGlobeAmericas } from 'react-icons/fa';
import { CiMenuFries } from "react-icons/ci";

const NavBar = () => {
    // State to handle the visibility of the mobile menu
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex justify-between items-center p-3 shadow-lg bg-white">
            {/* Logo */}
            <div className="font-bold text-[30px] text-[#FD2E5A]">
                LOGO
            </div>

            {/* Desktop View (Hidden on small screens) */}
            <nav className="hidden md:flex items-center space-x-6">
                {/* Help */}
                <div className="flex items-center space-x-2">
                    <IoIosHelpBuoy />
                    <span>Help</span>
                </div>
                {/* Country */}
                <div className="flex items-center space-x-2">
                    <FaGlobeAmericas />
                    <span>Deutsch | EUR</span>
                </div>
                {/* User Profile Dashboard */}
                <div className="flex items-center space-x-3 p-2 rounded-[17.5px] bg-[#EDEDED]">
                    <BiSolidUserCircle className="text-3xl" />
                    <RxHamburgerMenu className="text-2xl" />
                </div>
            </nav>

            {/* Mobile View */}
            <div className="md:hidden flex items-center space-x-4">
                <p>Open Request</p>
                <BiSolidUserCircle className="text-2xl" />
                <CiMenuFries className="text-2xl cursor-pointer" onClick={toggleMenu} />
                {isMenuOpen && (
                    <div className="absolute top-16 right-4 w-40 bg-white border rounded-md shadow-lg z-10">
                        {/* Help */}
                        <div className="flex items-center space-x-2 p-2 hover:bg-gray-100">
                            <IoIosHelpBuoy />
                            <span>Help</span>
                        </div>
                        {/* Country */}
                        <div className="flex items-center space-x-2 p-2 hover:bg-gray-100">
                            <FaGlobeAmericas />
                            <span>Deutsch | EUR</span>
                        </div>
                        {/* User Profile Dashboard */}
                        <div className="flex items-center space-x-5 p-2 hover:bg-gray-100 rounded-lg bg-[#EDEDED]">
                            <BiSolidUserCircle className="text-2xl" />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default NavBar;
