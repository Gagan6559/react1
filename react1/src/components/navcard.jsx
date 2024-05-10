import React from 'react';

function Navcard() {
    return (
        <div className='flex flex-wrap justify-between px-8 text-neutralDGrey mx-3'>
            <div className='w-full sm:w-auto'>
                <div className='border rounded p-8 text-base bg-brandPrimary text-white shadow-lg shadow-purple-800'>
                    <p className='text-center'>Easy Insurance Claim Process for Customers</p>
                </div>
            </div>
            <div className='w-full sm:w-auto'>
                <div className='border rounded p-8 text-base bg-brandPrimary text-white shadow-lg shadow-purple-800'>
                    <p className='text-center'>Parts Network for customers as well as vendors</p>
                </div>
            </div>
            <div className='w-full sm:w-auto'>
                <div className='border rounded p-8 text-base bg-brandPrimary text-white shadow-lg shadow-purple-800'>
                    <p className='text-center'>Workshop Pan India Providing in Time Services</p>
                </div>
            </div>
        </div>
    );
}

export default Navcard;
