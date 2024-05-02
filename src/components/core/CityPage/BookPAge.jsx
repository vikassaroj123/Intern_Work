import React from 'react';
import { MdOutlineWatchLater, MdEditCalendar, MdOutlineWifiCalling3 } from "react-icons/md";
import { TbSettingsSearch } from "react-icons/tb";

const amenities = [
    {
        icon: <MdOutlineWatchLater className="text-[#377C96] text-3xl font-bold mb-2" aria-label="Book and pay later" />,
        text: "Book and pay later",
    },
    {
        icon: <TbSettingsSearch className="text-[#377C96] text-3xl mb-2" aria-label="Flexible trip arrangement" />,
        text: "Flexible trip arrangement",
    },
    {
        icon: <MdEditCalendar className="text-[#377C96] text-3xl mb-2" aria-label="Free cancellation" />,
        text: "Free cancellation",
    },
    {
        icon: <MdOutlineWifiCalling3 className="text-[#377C96] text-3xl mb-2" aria-label="24/7 in-person support" />,
        text: "24/7 in-person support",
    },
];

const BookPAge = () => {
    return (
        <div className="w-full bg-[#EFEFEF] py-6 px-4">
            {/* Amenities Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {amenities.map((amenity, index) => (
                    <div key={index} className="relative flex flex-col items-center text-center">
                        {amenity.icon}
                        <span className="font-semibold text-gray-800">{amenity.text}</span>
                        {/* Vertical line */}
                        {index < amenities.length - 1 && (
                            <div className="absolute right-[-0.5rem] top-0 bottom-0 border-l border-gray-400 opacity-50"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookPAge;
