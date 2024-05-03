import React, { useState } from 'react';
import NavBar from '../components/core/CityPage/NavBar';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaPersonWalkingLuggage } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { GiIndiaGate } from 'react-icons/gi';
import backgroundImage from './Dusseldolf_cover 1.png';
import Image1 from '../data/Content Page/Book Now & Pay Later.png';
import Image2 from '../data/Content Page/Group 471.png';

import BookPage from '../components/core/CityPage/BookPAge';

import BlogPage from '../components/core/CityPage/BlogPage';
import OtherCities from '../components/core/CityPage/OtherCities';
import Footer from '../components/core/CityPage/Footer';

const CityPage = () => {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        pickupDate: '',
        pickupTime: '',
        passengerInfo: '',
        email: '',
        phone: '',
        additionalRequirements: false
    });
    const [selectedOption, setSelectedOption] = useState('One Way');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="flex flex-col min-h-screen relative">
            <NavBar />

            {/* Background Image */}
            <div className="relative w-full h-[500px]">
                <img
                    className="w-full h-full object-cover z-0 absolute"
                    src={backgroundImage}
                    alt="Dusseldorf"
                />
                {/* Dark overlay to improve content visibility */}
                <div className="absolute inset-0 bg-black opacity-50 z-0" />
            </div>

            {/* Content Section */}
            <div className=" relative p-6  z-10 w-11/12 mx-auto -mt-[32%]">
                <div className="flex flex-col sm:flex-row justify-evenly">
                    {/* Left Content */}
                    <section className="text-white sm:text-left">
                        <h2 className="text-2xl sm:text-4xl font-bold mb-4 font-roboto leading-10">
                            Private Transfer & Taxi Services <br /> in Geneva
                        </h2>
                        <p className="text-lg sm:text-xl mb-6 leading-10">
                            Book airport transfers, city transfers, and hourly <br /> disposal services with driver.
                        </p>
                    </section>

                    {/* Right Content */}
                    <section className="bg-white rounded-md shadow-md p-4">
                        {/* Booking Selection */}
                        <div className="flex mb-4 bg-gray-200 rounded overflow-hidden">
                            {['One Way', 'Round Trip', 'Hourly'].map((option) => (
                                <div
                                    key={option}
                                    className={`flex items-center justify-center font-semibold text-lg cursor-pointer p-2 w-full ${selectedOption === option ? 'bg-white text-red-500' : 'bg-gray-200'}`}
                                    onClick={() => handleOptionChange(option)}
                                    aria-label={`Select ${option} option`}
                                    role="button"
                                    tabIndex={0}
                                    onKeyPress={(e) => e.key === 'Enter' && handleOptionChange(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>

                        {/* Form Section */}
                        <form onSubmit={handleSubmit}>
                            {/* From */}
                            <div className="mb-4">
                                <label className="block font-semibold mb-1 text-gray-700" htmlFor="from">
                                    From
                                </label>
                                <input
                                    id="from"
                                    name="from"
                                    type="text"
                                    placeholder="(airport, hostel, address)"
                                    className="w-full p-2 focus:border-gray-400 focus:outline-none"
                                    value={formData.from}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* To */}
                            <div className="mb-4">
                                <label className="block font-semibold mb-1 text-gray-700" htmlFor="to">
                                    To
                                </label>
                                <input
                                    id="to"
                                    name="to"
                                    type="text"
                                    placeholder="(airport, hostel, address)"
                                    className="w-full p-2 focus:border-gray-400 focus:outline-none"
                                    value={formData.to}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Pickup Date and Time */}
                            <div className="flex flex-col sm:flex-row mb-4 space-x-0 sm:space-x-4 space-y-2 sm:space-y-0 items-center">
                                {/* Pickup Date */}
                                <div className="flex items-center w-full sm:w-1/2">
                                    <FaCalendarAlt className="mr-2 text-gray-500 text-2xl" />
                                    <input
                                        type="date"
                                        name="pickupDate"
                                        className="w-full p-2 focus:border-gray-400 focus:outline-none"
                                        value={formData.pickupDate}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                {/* Pickup Time */}
                                <div className="flex items-center w-full sm:w-1/2">
                                    <FaCalendarAlt className="mr-2 text-gray-500 text-2xl" />
                                    <input
                                        type="time"
                                        name="pickupTime"
                                        className="w-full p-2 focus:border-gray-400 focus:outline-none"
                                        value={formData.pickupTime}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Passenger and Baggage Info */}
                            <div className="mb-4 flex items-center">
                                <FaPersonWalkingLuggage className="mr-2 text-gray-500 text-2xl" />
                                <input
                                    id="passengerInfo"
                                    name="passengerInfo"
                                    type="text"
                                    placeholder="Passenger and Baggage Info"
                                    className="w-full p-2 focus:border-gray-400 focus:outline-none"
                                    value={formData.passengerInfo}
                                    onChange={handleInputChange}
                                />
                                <RiArrowDropDownLine className="mr-2 text-gray-500 text-2xl" />
                            </div>

                            {/* Email */}
                            <div className="mb-4 flex items-center">
                                <MdOutlineEmail className="mr-2 text-gray-500 text-2xl" />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-2 focus:border-gray-400 focus:outline-none"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="mb-4 flex items-center">
                                <div className="flex">
                                    <GiIndiaGate className="mr-2 text-red-500 text-2xl" />
                                    <RiArrowDropDownLine className="mr-2 text-gray-500 text-2xl" />
                                </div>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="w-full p-2 focus:border-gray-400 focus:outline-none"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Additional Requirements */}
                            <div className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    id="additionalRequirements"
                                    name="additionalRequirements"
                                    checked={formData.additionalRequirements}
                                    onChange={handleInputChange}
                                    className="mr-2"
                                />
                                <label className="font-semibold text-gray-700" htmlFor="additionalRequirements">
                                    Additional Requirements
                                </label>
                            </div>

                            {/* Search Button */}
                            <button
                                type="submit"
                                className="w-full p-3 bg-[#FF2D5C] text-white rounded-md cursor-pointer font-semibold hover:bg-[#e0637e]"
                            >
                                Search
                            </button>
                        </form>
                    </section>
                </div>

                <div className="flex flex-col sm:flex-row sm:space-x-6 absolute bottom-[10%]">
                    <div className="mb-4 sm:mb-0">
                        <img src={Image1} alt="Book Now & Pay Later" className="w-full sm:w-auto" />
                    </div>
                    <div>
                        <img src={Image2} alt="Travel Image" className="w-full sm:w-auto" />
                    </div>
                </div>
            </div>

            {/* Other components */}
            <BookPage />
            <BlogPage />
            <OtherCities />
            <Footer />
        </div>
    );
};

export default CityPage;
