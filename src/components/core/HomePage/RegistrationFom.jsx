import React, { useState } from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { MdOutlineMail } from 'react-icons/md';

const DropDownInfo = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mt-8 flex justify-center w-full sm:w-3/4 mx-auto relative lg:w-2/3">
            {/* Container for dropdown button */}
            <div
                className={`flex items-center p-4 bg-white rounded-lg w-full cursor-pointer ${isOpen ? 'rounded-b-none' : 'shadow-lg'}`}
                onClick={toggleAccordion}
            >
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-3">
                        <div className="text-[#FF7190] text-3xl">
                            <MdOutlineMail />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-medium">Send Query</h3>
                            <p className='text-gray-600 text-sm'>This is the initial paragraph for the accordion.</p>
                        </div>
                    </div>
                    <div
                        className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    >
                        <MdOutlineArrowDropDown className="w-6 h-6" />
                    </div>
                </div>
            </div>

            {/* Dropdown content */}
            {isOpen && (
                <div className="absolute w-full top-full rounded-lg rounded-t-none p-5 z-10 shadow-lg bg-white">
                    {/* Form for user input */}
                    <form className="space-y-4">
                        {/* Name input */}
                        <div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#FF7190] focus:border-[#FF7190]"
                                />
                            </div>
                            {/* Email input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#FF7190] focus:border-[#FF7190]"
                                />
                            </div>
                            {/* Subject input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="subject">
                                    Subject:
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#FF7190] focus:border-[#FF7190]"
                                />
                            </div>
                            {/* Order number input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="orderNumber">
                                    Order Number:
                                </label>
                                <input
                                    type="text"
                                    id="orderNumber"
                                    name="orderNumber"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#FF7190] focus:border-[#FF7190]"
                                />
                            </div>

                        </div>
                        {/* Query text area */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="query">
                                Your Query:
                            </label>
                            <textarea
                                id="query"
                                name="query"
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md h-32 focus:ring-[#FF7190] focus:border-[#FF7190]"
                            />
                        </div>
                        
                        {/* Submit button */}
                        <div>
                            <button
                                type="submit"
                                className="bg-[#FF7190] text-white px-4 py-2 rounded-md hover:bg-[#e7617f]"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default DropDownInfo;
