import React, { useState } from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { BsChatRightDots } from 'react-icons/bs';
import { FaWhatsapp, FaTelegram, FaRegCommentDots } from 'react-icons/fa';

const DropDownInfo = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mt-8 flex justify-center w-full sm:w-3/4 md:w-1/2 lg:w-[65%] mx-auto relative">
            {/* Container for dropdown button */}
            <div
                className={`flex items-center p-4 bg-white rounded-lg w-full cursor-pointer ${isOpen ? 'rounded-b-none' : 'shadow-lg'
                    }`}
                onClick={toggleAccordion}
            >
                <div className="flex items-center space-x-6 justify-between w-full">
                    <div className="flex items-center space-x-3">
                        <div className="text-[#FF7190] text-3xl">
                            <BsChatRightDots />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-medium">Chat</h3>
                            <p className='text-gray-600'>This is the initial paragraph for the accordion.</p>
                        </div>
                    </div>
                    <div
                        className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                            }`}
                    >
                        <MdOutlineArrowDropDown className="w-6 h-6" />
                    </div>
                </div>
            </div>

            {/* Dropdown content */}
            {isOpen && (
                <div className="absolute top-0 mt-16 w-full z-10 rounded-b-lg bg-white p-5 shadow-lg">
                    {/* Container for icons */}
                    <div className="flex justify-around">
                        {/* Icon for WhatsApp */}
                        <a href="www.facebook.com" className=' cursor-pointer'> <FaWhatsapp className="text-green-500 w-12 h-12" /></a>
                        {/* Icon for Telegram */}
                        <a href="#" className=' cursor-pointer'>   <FaTelegram className="text-blue-500 w-12 h-12" /></a>
                        <a href="#" className=' cursor-pointer'>   <FaRegCommentDots className="text-purple-500 w-12 h-12" /></a>
                        {/* Icon for Live Chat */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropDownInfo;
