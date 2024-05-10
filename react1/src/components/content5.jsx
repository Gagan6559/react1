import React from 'react';
import bodomologo from '../assets/bodomologo.png';
import cars24logo from '../assets/cars24logo.png';


function Content5() {
  return (
    <div className="text-center">
      {/* Heading */}
      <h2 className='text-6xl font-semibold text-brandPrimary mb-8 p-12'>Certified Spare Parts</h2>
      
      {/* Images */}
      <div className="flex flex-wrap justify-center items-center mb-6">
        <img src={bodomologo} alt="Image 1" className="h-32 w-64 mr-4" />
        <img src={cars24logo} alt="Image 2" className="h-32 w-64 ml-4" />
      </div>
      
      {/* Data */}
      <div>
        <p className='text-4xl font-semibold text-orange-500 mb-8 p-12'>&quot;We offer a single platform to everyone, vendors and customers to avail the service according to their needs and reducing the service time&quot;</p>
      </div>
    </div>
  );
}

export default Content5;
