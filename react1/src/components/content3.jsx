import React from 'react';
import map from '../assets/map.png';
import skodalogo from '../assets/skodalogo.png';
import toyotalogo from '../assets/toyotalogo.png';
import tatalogo from '../assets/tatalogo.png';
import suzukilogo from '../assets/suzukilogo.jpg';
import audilogo from '../assets/audilogo.png';
import bmwlogo from '../assets/bmwlogo.jpg';
import chevroletlogo from '../assets/chevroletlogo.jpg';  
import datsunlogo from '../assets/datsunlogo.jpg';
import fordlogo from '../assets/fordlogo.jpg';
import hondalogo from '../assets/hondalogo.jpg';
import hyundailogo from '../assets/hyundailogo.png';
import kialogo from '../assets/kialogo.png';
import mahindralogo from '../assets/mahindralogo.jpg';
import nissanlogo from '../assets/nissanlogo.jpg';
import renaultlogo from '../assets/renaultlogo.jpg';
import volvologo from '../assets/volvologo.jpg';
import volkswagenlogo from '../assets/volkswagenlogo.jpg';


function Content3() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Column with Image */}
      <div className="basis-3/4 md:w-1/2 p-4">
        <h1 className='text-5xl font-semibold text-brandPrimary mb-8'>Our Prescence</h1>
            <img src={map} alt="Image" className="w-full h-auto" />
      </div>

      {/* Right Column with Logos */}
      <div className="w-full md:w-1/2 md:w-30 p-4">
        <h1 className='text-5xl font-semibold text-brandPrimary mb-8'>Brands We Serve</h1>
        <div className="flex flex-wrap justify-center items-center">
          <img src={skodalogo} alt="Skoda Logo" className="w-24 h-auto mx-2 my-4" />
          <img src={toyotalogo} alt="Toyota Logo" className="w-24 h-auto mx-2 my-4" />
          <img src={tatalogo} alt="Tata Logo" className="w-24 h-auto mx-2 my-4" />
          <img src={suzukilogo} alt="suzukilogo" className="w-24 h-auto mx-2 my-4" />
          <img src={audilogo} alt="audilogo" className="w-24 h-auto mx-2 my-4" />
          <img src={bmwlogo} alt="BMW Logo" className="w-24 h-auto mx-2 my-4" />
          <img src={datsunlogo} alt="datsun logo" className="w-24 h-auto mx-2 my-4" />
          <img src={fordlogo} alt="ford logo" className="w-24 h-auto mx-2 my-4" />
          <img src={chevroletlogo} alt="chevrolet logo" className="w-24 h-auto mx-2 my-4" />
          <img src={hondalogo} alt="honda logo" className="w-24 h-auto mx-2 my-4" />
          <img src={hyundailogo} alt="hyundai logo" className="w-24 h-auto mx-2 my-4" />
          <img src={kialogo} alt="kia logo" className="w-24 h-auto mx-2 my-4" />
          <img src={mahindralogo} alt="mahindra logo" className="w-24 h-auto mx-2 my-4" />
          <img src={nissanlogo} alt="nissan logo" className='w-24 h-auto mx-2 my-4' />
          <img src={renaultlogo} alt="renault logo" className='w-24 h-auto mx-2 my-4' />
          <img src={volvologo} alt="volvo logo" className='w-24 h-auto mx-2 my-4' />
          <img src={volkswagenlogo} alt="volkswagen logo" className='w-24 h-auto mx-2' />
          {/* Add more brand logos here */}
        </div>
      </div>
    </div>
  );
}

export default Content3;
