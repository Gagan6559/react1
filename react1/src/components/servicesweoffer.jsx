import React from 'react';
import generalservices from '../assets/generalservices.png';
import evvehiclerepair from '../assets/evvehiclerepair.png';
import roadsideassistance from '../assets/roadsideassistance.png';
import sparepartsupply from '../assets/sparepartsupply.png';
import dentingpainting from '../assets/dentingpainting.png';
import insuranceclaimfacility from '../assets/insuranceclaimfacility.png';
import mechanicalrepairwork from '../assets/mechanicalrepairwork.png';
import perodicmaintainance from '../assets/perodicmaintainance.png';
import evcharging from '../assets/evcharging.png';
import salvage from '../assets/salvage.png';

const Servicesweoffer = () => {
  const services = [
    { name: <strong className="text-brandPrimary">General Services</strong>, image: generalservices },
    { name: <strong className="text-brandPrimary">Roadside Assistance</strong>, image: roadsideassistance },
    { name: <strong className="text-brandPrimary">EV Vehicle Repair</strong>, image: evvehiclerepair },
    { name: <strong className="text-brandPrimary">Spare Parts Supply</strong>, image: sparepartsupply },
    { name: <strong className="text-brandPrimary">Denting Painting</strong>, image: dentingpainting },
    { name: <strong className="text-brandPrimary">Insurance Claim Facility</strong>, image: insuranceclaimfacility },
    { name: <strong className="text-brandPrimary">Mechanical and Repair Work</strong>, image: mechanicalrepairwork },
    { name: <strong className="text-brandPrimary">Salvage</strong>, image: salvage },
    { name: <strong className="text-brandPrimary">Periodic Maintenance Service</strong>, image: perodicmaintainance },
    { name: <strong className="text-brandPrimary">EV Charging</strong>, image: evcharging }
  ];

  return (
    <div className='max-w-screen mx-auto px-4 py-8 mt-8'>
      <h1 className='text-5xl font-bold text-brandPrimary mb-12'>Services We Offer</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {services.map((service, index) => (
          <div key={index} className='bg-gray-200 p-4 flex flex-col items-center'>
            <img src={service.image} alt={service.name} className="h-24 w-44 mb-2 object-contain" />
            <span className="text-brandPrimary">{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicesweoffer;
