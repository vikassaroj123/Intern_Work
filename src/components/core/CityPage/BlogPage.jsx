import React, { useState } from 'react';
import Image1 from '../../../data/Content Page/Group 143.png';
import Image2 from '../../../data/Content Page/Group 144.png';

const BlogPage = () => {
    const [selectedLink, setSelectedLink] = useState('Home');

    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };

    return (
        <div className="p-5 w-11/12 mx-auto mt-4">
            {/* Navigation Links */}
            <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-5 mb-8">
                <a
                    href="#"
                    onClick={() => handleLinkClick('Home')}
                    className={`nav-link block md:inline-block mb-2 md:mb-0 md:mr-4 ${selectedLink === 'Home' ? 'text-blue-500 font-bold' : ''}`}
                >
                    Home
                </a>
                <a
                    href="#"
                    onClick={() => handleLinkClick('Cities')}
                    className={`nav-link block md:inline-block mb-2 md:mb-0 md:mr-4 ${selectedLink === 'Cities' ? 'text-blue-500 font-bold' : ''}`}
                >
                    Cities
                </a>
                <a
                    href="#"
                    onClick={() => handleLinkClick('Rome')}
                    className={`nav-link block md:inline-block mb-2 md:mb-0 md:mr-4 ${selectedLink === 'Rome' ? 'text-blue-500 font-bold' : ''}`}
                >
                    Rome
                </a>
            </div>

            {/* Content Area */}
            <div className="flex flex-col md:flex-row gap-5 space-x-10 mt-10">
                {/* Sidebar List */}
                <div className="w-full md:w-60 mb-6 md:mb-0">
                    <ul className="space-y-4">
                        <li
                            className={`flex items-center ${selectedLink === 'At a Glance' ? 'font-bold text-blue-500' : ''}`}
                            onClick={() => handleLinkClick('At a Glance')}
                        >
                            {/* Hollow circular bullet */}
                            <span className="w-3 h-3 border border-black rounded-full mr-2"></span>
                            At a Glance
                        </li>
                        <li
                            className={`flex items-center ${selectedLink === 'Transportation in Rome' ? 'font-bold text-blue-500' : ''}`}
                            onClick={() => handleLinkClick('Transportation in Rome')}
                        >
                            <span className="w-3 h-3 border border-black rounded-full mr-2"></span>
                            Transportation in Rome
                        </li>
                        <li
                            className={`flex items-center ${selectedLink === 'Airport transfer in Rome' ? 'font-bold text-blue-500' : ''}`}
                            onClick={() => handleLinkClick('Airport transfer in Rome')}
                        >
                            <span className="w-3 h-3 border border-black rounded-full mr-2"></span>
                            Airport transfer in Rome
                        </li>
                        <li
                            className={`flex items-center ${selectedLink === 'Sightseeing transportation' ? 'font-bold text-blue-500' : ''}`}
                            onClick={() => handleLinkClick('Sightseeing transportation')}
                        >
                            <span className="w-3 h-3 border border-black rounded-full mr-2"></span>
                            Sightseeing transportation
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex flex-col w-full md:w-11/12 sm:11/12">
                    <span>
                        Nestled in the heart of the Italian Peninsula, Rome is the capital of the country and one of the most populated cities in Italy. From its rich architecture to rare artifacts, this city is known to possess a history like none other. The picturesque atmosphere, the cold wind blowing, and the serene atmosphere is what makes Rome a must-visit place for all the travel fanatics out there.
                    </span>

                    <div className="mt-4 flex flex-col md:flex-row">
                        <span>
                            A perfect blend of gothic ruins, jaw-dropping art, and lively nights, Rome sets an exemplary example for a place about how it should entertain its travelers. The city wholeheartedly welcomes travelers from a wide array of interests, from awe-inspiring monuments to living life at its best. Rome will never fail to surprise you with a new place to explore. <br />
                            <br />
                            A perfect blend of gothic ruins, jaw-dropping art, and lively nights, Rome sets an exemplary example for a place about how it should entertain its travelers. The city wholeheartedly welcomes travelers from a wide array of interests, from awe-inspiring monuments to living life at its best. Rome will never fail to surprise you with a new place to explore.
                        </span>
                        <img src={Image2} alt="Rome scenery" className="mt-4 md:mt-0 md:ml-4 w-full md:w-auto h-auto" />
                    </div>

                    <div className="flex flex-col md:flex-row mt-4">
                        <img src={Image1} alt="Rome" className="h-auto w-full md:w-auto mr-4" />
                        <span>
                            Referred to as ‘An Eternal City’ in the beginning of history, Rome is seen to be a dream for music lovers due to the Parco Della Musica, one of the largest music venues in the world. Not only music, Rome has also established itself as one of the most wanted places to visit in the world and is the third most visited place in the entire Europe. This city has experienced arts from different periods and became home to some of the most renowned artists such as Borromini, Bernini, Carracci, and Cortona. <br />
                            <br />
                            Referred to as ‘An Eternal City’ in the beginning of history, Rome is seen to be a dream for music lovers due to the Parco Della Musica, one of the largest music venues in the world. Not only music, Rome has also established itself as one of the most wanted places to visit in the world and is the third most visited place in the entire Europe. This city has experienced arts from different periods and became home to some of the most renowned artists such as Borromini, Bernini, Carracci, and Cortona.
                        </span>
                    </div>

                    <div className="mt-4">
                        <span>
                            Embracing ancient art, Rome has used its innovation to give birth to contemporary art and enhance its love for art and architecture. The National Museum of the 21st Century Arts exemplifies this. The Italian cuisine has managed to become the king of all cuisines, from the Carciofi alla Romana to the Spaghetti alla Carbonara—Delicious spaghetti topped with bacon, smoky eggs, and pecorino cheese.
                        </span>
                    </div>

                    <div className="mt-4">
                        <span>
                            Rome offers many reasons to attract you and embrace you in its warm arms, rejuvenating your soul with its authentic art, awe-inspiring architecture, and mouth-watering food.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
