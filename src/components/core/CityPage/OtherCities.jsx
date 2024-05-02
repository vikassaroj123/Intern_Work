import React from 'react';
import Image from './Florance.png';
import Image2 from './Group 143.png';

const OtherCities = () => {
    // Sample data for city cards; replace this with your actual data.
    const cityData = [
        { id: 1, name: 'City 1', imageUrl: Image2 },
        { id: 2, name: 'City 2', imageUrl: Image2 },
        { id: 3, name: 'City 3', imageUrl: Image2 },
        { id: 4, name: 'City 4', imageUrl: Image2 },
        { id: 5, name: 'City 5', imageUrl: Image2 },
        { id: 6, name: 'City 6', imageUrl: Image2 },
        { id: 7, name: 'City 7', imageUrl: Image2 },
        { id: 8, name: 'City 8', imageUrl: Image2 }
    ];

    return (
        <div className="w-11/12 mx-auto">
            <div className="mb-4">
                <span className="text-lg font-semibold">Other cities</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
                {cityData.map((city) => (
                    <div key={city.id} className="bg-white p-4 rounded shadow-lg">
                        <img
                            src={city.imageUrl}
                            alt={city.name}
                            className="w-full h-32 object-cover rounded"
                        />
                        <div className="mt-2 flex items-center justify-center text-center">
                            {/* <span className="text-sm font-medium">{city.name}</span> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OtherCities;
