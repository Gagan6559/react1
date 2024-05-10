import React from 'react';
import applicationicon from '../assets/applicationicon.png';

function Content7() {
    return (
        <div className="flex flex-wrap p-4">
            {/* Left Column */}
            <div className="w-full md:w-3/4 bg-brandPrimary text-white rounded-3xl flex items-center justify-center shadow-lg shadow-purple-800">
                <div className="h-full p-4">
                    {/* Content in Left Column */}
                    <div className="text-white p-4 text-center">
                        <h1 className="text-4xl font-medium mb-2">Go4garage Customer Application</h1>
                        <h1 className='text-5xl font-medium mb-2'>&</h1>
                        <h1 className="text-4xl font-medium mb-2">Go4garage Workshop Application</h1>
                        <p className='text-3xl mt-8'>Get realtime updates for your vehicle service and
                            entire repair.</p>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="hidden md:block w-1/4">
                <div className="h-full">
                    {/* Image in Right Column */}
                    <img className="h-80 w-auto object-cover ml-20" src={applicationicon} alt="Image" />
                </div>
            </div>
        </div>
    );
}

export default Content7;
