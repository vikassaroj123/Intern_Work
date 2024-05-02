import React from 'react';
import Logo from './Rydeu 2.png'

const Footer = () => {
    return (
        <div className='w-full bg-[#161616] text-white py-8 mt-8'>
            <div className='container mx-auto flex flex-wrap justify-between w-11/12 px-4'>
                {/* Logo and description */}
                <div className='flex flex-col w-full md:w-1/4 mb-4'>
                    <img src={Logo} alt="Company Logo" className="mb-4 w-[112px] h-[39.5px]" />
                    <span className='text-lg mb-4'>Solution for all ground transfers</span>
                    <div className='mt-8'>
                        <span className='font-bold'>Connect with us</span>
                        {/* Add your social media links here */}
                    </div>
                </div>

                {/* Company section */}
                <div className='flex flex-col w-full sm:w-1/2 md:w-1/4 mb-4'>
                    <h3 className='font-bold mb-2'>Company</h3>
                    <ul className='text-gray-500'>
                        <li className='mb-1'><a href='/about-us'>About Us</a></li>
                        <li className='mb-1'><a href='/privacy-policy'>Privacy Policy</a></li>
                        <li className='mb-1'><a href='/terms-conditions'>Terms & Conditions</a></li>
                        <li className='mb-1'><a href='/imprint'>Imprint</a></li>
                        <li className='mb-1'><a href='/careers'>Careers / Jobs</a></li>
                        <li className='mb-1'><a href='/sitemap'>Sitemap</a></li>
                    </ul>
                </div>

                {/* Help Center section */}
                <div className='flex flex-col w-full sm:w-1/2 md:w-1/4 mb-4'>
                    <h3 className='font-bold mb-2'>Help Center</h3>
                    <ul className='text-gray-500'>
                        <li className='mb-1'><a href='/contact-us'>Contact Us</a></li>
                        <li className='mb-1'><a href='/customer-faqs'>Customer FAQs</a></li>
                        <li className='mb-1'><a href='/business-faqs'>Business FAQs</a></li>
                        <li className='mb-1'><a href='/supplier-faqs'>Supplier FAQs</a></li>
                    </ul>
                </div>

                {/* Our Services section */}
                <div className='flex flex-col w-full md:w-1/4 mb-4'>
                    <h3 className='font-bold mb-2'>Our Services</h3>
                    <ul className='text-gray-500'>
                        <li className='mb-1'><a href='/airport-transfer'>Airport Transfer</a></li>
                        <li className='mb-1'><a href='/city-transfer'>City Transfer</a></li>
                        <li className='mb-1'><a href='/hourly-transfer'>Hourly Transfer</a></li>
                        <li className='mb-1'><a href='/business'>Business</a></li>
                        <li className='mb-1'><a href='/supplier'>Supplier</a></li>
                    </ul>
                </div>
            </div>
            
            {/* Copyright section */}
            <div className='text-gray-500 mt-8 border-t border-gray-700 text-center pt-4'>
                <span>&copy; {new Date().getFullYear()} rydeu.com. All rights reserved.</span>
            </div>
        </div>
    );
};

export default Footer;
