import React from "react";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";

function Content4() {
  return (
    <div className="flex flex-col md:flex-row shadow-gray-800 mt-12">
      {/* Left Column with Image and Heading */}
      <div className="w-full basis-3/6 md:w-1/2 p-4">
        <h2 className="text-5xl font-semibold text-brandPrimary mb-8">Regular Maintenance</h2>
        <p className="text-3xl font-semibold text-gray-800 mb-8">
        Experience worry-free ownership with our Regular Periodic Service. Our expert team is dedicated to keep your automotive in optimal condition through scheduled maintenance, ensuring peak performance and longevity  
        </p>
      </div>

      {/* Right Column with 3 Images */}
      <div className="w-full basis-3/6 md:w-1/2 flex flex-wrap justify-center items-center p-4">
        <img src={c1} alt="Image 2" className="w-32 shadow-lg shadow-purple-800 mx-2 mb-4 md:mb-0 md:mr-2 md:w-auto md:max-w-xs md:h-auto md:max-h-32" />
        <img src={c2} alt="Image 3" className="w-32 shadow-lg shadow-purple-800 mx-2 mb-4 md:mb-0 md:mr-2 md:w-auto md:max-w-xs md:h-auto md:max-h-32" />
        <img src={c3} alt="Image 1" className="w-32 shadow-lg shadow-purple-800 mx-2 mb-4 md:mb-0 md:w-auto md:max-w-xs md:h-auto md:max-h-32" />
      </div>
    </div>
  );
}

export default Content4;
