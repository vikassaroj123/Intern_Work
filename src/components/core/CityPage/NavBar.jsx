import React, { useState } from 'react';
import { BiSolidUserCircle, BiTransfer } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosHelpBuoy } from 'react-icons/io';
import { FaGlobeAmericas, FaBus } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import Image1 from './Layer2.png';

const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex justify-between items-center p-3 shadow-lg bg-white">
            {/* Logo and navigation links */}
            <div className="flex items-center space-x-7 justify-between">
                <div className="flex items-center">
                    <img src={Image1} alt="Logo"/>
                </div>

                {/* Transfer and Bus Hire Links */}
                <div className="hidden md:flex items-center space-x-6">
                    {/* Transfer Link */}
                    <div className="flex items-center space-x-1">
                        <BiTransfer className="text-2xl" />
                        <span>Transfer</span>
                    </div>
                    
                    {/* Bus Hire Link */}
                    <div className="flex items-center space-x-1 text-black">
                        <FaBus className="text-2xl" />
                        <span>Bus Hire</span>
                    </div>
                </div>
            </div>

            {/* Desktop navigation links */}
            <div className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                    <IoIosHelpBuoy />
                    <span>Help</span>
                </div>
                
                <div className="flex items-center space-x-2">
                    <FaGlobeAmericas />
                    <span>Deutsch | EUR</span>
                </div>

                <div className="flex items-center space-x-2 bg-[#EDEDED] p-2 rounded-[17.5px]">
                    <BiSolidUserCircle className="text-3xl" />
                    <RxHamburgerMenu className="text-2xl" />
                </div>
            </div>

            {/* Mobile view */}
            <div className="flex md:hidden items-center space-x-4">
                <p className="mr-2">Open Request</p>
                <BiSolidUserCircle className="text-2xl" />
                <CiMenuFries className="text-2xl cursor-pointer" onClick={toggleMenu} />
            </div>

            {isMenuOpen && (
                <div className="absolute top-16 right-4 w-40 bg-white border rounded-md shadow-lg z-10">
                    {/* Mobile menu content */}
                    <div className="flex flex-col p-2 space-y-2">
                        <div className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                            <IoIosHelpBuoy />
                            <span>Help</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                            <FaGlobeAmericas />
                            <span>Deutsch | EUR</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md cursor-pointer bg-[#EDEDED]">
                            <BiSolidUserCircle className="text-2xl" />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default NavBar;
