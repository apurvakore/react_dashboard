import React, { useState } from 'react';
import { BsFillBoxFill } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import { FaTools } from "react-icons/fa";

const Founder = () => {
  const [activeFeature, setActiveFeature] = useState('App');

  const features = [
    { name: 'App', icon: <BsFillBoxFill /> },
    { name: 'Message', icon: <MdMessage /> },
    { name: 'Settings', icon: <FaTools /> }
  ];

  return (
    <div>
      <div className="background h-[300px] w-[100%] bg-[#1B7FEB] rounded-2xl  -mt-32 md:-mt-20">
      </div>
      <div className="px-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between  space-y-3 md:space-y-0 px-4 py-4 -mt-10 bg-[#F5FAFE] rounded-xl bg-opacity-90 shadow-sm">
          <div className="flex space-x-6">
            <div className="photo">
              <img className='w-[70px] shadow-sm rounded-xl' src="https://themewagon.github.io/soft-ui-dashboard-react/static/media/bruce-mars.45f6477957606abd2f24.jpg" alt="" />
            </div>
            <div className="name designation flex flex-col justify-center">
              <div className="name text-xl font-semibold text-[#344767]">Alex Thompson</div>
              <div className="designation text-sm font-semibold text-[#67748E]">CEO / Co-Founder</div>
            </div>
          </div>
          <div className="features flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-4 items-center text-[#344767]">
            {features.map((feature) => (
              <div
                key={feature.name}
                className={`flex space-x-2 cursor-pointer px-3 py-2 rounded-lg ${activeFeature === feature.name ? 'bg-white shadow-sm' : ''}`}
                onClick={() => setActiveFeature(feature.name)}
              >
                <div className="icon flex items-center">{feature.icon}</div>
                <div className="title text-sm font-semibold">{feature.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founder;
