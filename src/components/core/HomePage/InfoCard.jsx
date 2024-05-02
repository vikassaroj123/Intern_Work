import React from 'react';
import { FaQuestion, FaExclamationCircle } from 'react-icons/fa';


const InfoCard = ({ icon, iconColor, iconSize, borderColor, header, description, showMobileIcon, mobileIcon, mobileIconSize }) => {
    return (
        <div className='mt-8 flex justify-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3'>
            <div className='flex items-center p-4 bg-white rounded-lg shadow-lg space-x-3 w-full'>
                {/* Icons */}
                <div className='flex items-center space-x-3'>
                    {/* Primary icon */}
                    <div className={`rounded-full border p-2`} style={{ borderColor: borderColor, color: iconColor }}>
                        {React.createElement(icon, { size: iconSize })}
                    </div>
                </div>

                {/* Text Content */}
                <div className='flex flex-col'>
                    {/* Header */}
                    <div className='text-lg font-bold'>{header}</div>
                    {/* Description */}
                    <div className='mt-1 text-sm text-gray-600'>
                        {description}
                    </div>
                </div>

                {/* Extra icon for mobile views */}
                {showMobileIcon && (
                    <div className='sm:hidden'>
                        {React.createElement(mobileIcon, { size: mobileIconSize })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InfoCard;
