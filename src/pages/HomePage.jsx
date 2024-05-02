import React from 'react';
import NavBar from '../components/common/NavBar';
import { FaQuestion, FaExclamationCircle } from 'react-icons/fa';
import InfoCard from '../components/core/HomePage/InfoCard';
import DropDownInfo from '../components/core/HomePage/DropDownInfo';
import RegistrationFom from '../components/core/HomePage/RegistrationFom';
import WaveImage1 from '../data/BackgroundImages/423.png';
import WaveImage2 from '../data/BackgroundImages/431.png';
import { MdCardTravel } from "react-icons/md";
import { IoIosLink } from "react-icons/io";


const HomePage = () => {
    return (
        <div className="relative min-h-screen">

            {/* Wave Images */}
            <div className="absolute inset-0">
                <img
                    src={WaveImage1}
                    alt="Wave form 1"
                    className="w-full absolute top-0 left-0 h-auto object-cover"
                    style={{ zIndex: -1 }}
                />
                <img
                    src={WaveImage2}
                    alt="Wave form 2"
                    className="w-full absolute left-0 h-auto object-cover"
                    style={{ zIndex: -1 }}
                />
            </div>

            {/* Main content wrapper */}
            <div className="relative z-0">
                {/* Navigation Bar */}
                <NavBar />

                {/* Home Page Content */}
                <div className="flex flex-col items-center justify-center mt-14 p-4 sm:p-8 lg:mt-16">

                    {/* Welcome Message */}
                    <div className=" mt-12 text-center font-family: 'Montserrat', sans-serif" >
                        <h1 className="text-xl font-bold sm:text-2xl lg:text-4xl">
                            Hello, how can we help you?
                        </h1>
                        <p className="text-lg mt-4 sm:text-xl text-gray-700 lg:text-2xl">
                            Find travel guides, FAQ chat, and more.
                        </p>
                    </div>

                    {/* Info Card Section */}
                    <div className="w-11/12 mx-auto lg:mt-20">
                        <div className="flex flex-col lg:flex-row gap-7 justify-center">

                            {/* First InfoCard */}
                            <InfoCard
                                icon={FaQuestion}
                                iconColor="#FF2D5C"
                                iconSize={25}
                                borderColor="#FFA9BC"
                                header="FAQ"
                                description="Get answers to your questions about travel."
                                showMobileIcon
                                mobileIcon={IoIosLink}
                                mobileIconSize={25}
                                backgroundColor="#f0f0f0"
                            />

                            {/* Second InfoCard */}
                            <InfoCard
                                icon={MdCardTravel}
                                iconColor="#FF2D5C"
                                iconSize={25}
                                borderColor="#FFA9BC"
                                header="Travel Guides"
                                description="Discover top destinations and travel tips."
                                showMobileIcon
                                mobileIcon={IoIosLink}
                                mobileIconSize={25}
                                backgroundColor="#f0f0f0"
                            />
                        </div>

                        {/* DropDownInfo and RegistrationForm */}
                        <div className="mt-10 flex flex-col gap-4 items-center w-full lg:mt-12">
                            <DropDownInfo />
                            <DropDownInfo />
                            <RegistrationFom />
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS Media Queries for Mobile Devices */}
            <style jsx>{`
                @media (max-width: 640px) {
                    .relative img {
                        object-fit: cover;
                        height: 30%;
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default HomePage;
