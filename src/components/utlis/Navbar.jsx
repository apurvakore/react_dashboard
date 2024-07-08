import React from 'react';
import { IoMdHome } from "react-icons/io";
import { FaUserCircle } from 'react-icons/fa';
import { FaSearch } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();

  const pathNameMap = {
    '/dashboard': 'Dashboard',
    '/billing': 'Billing',
    '/tables': 'Tables',
    '/virtual-reality':'Virtual Reality'
    // Add other routes as needed
  };

  const currentPathName = pathNameMap[location.pathname] || 'Dashboard';

  return (
    <>
      <div className='pt-3 sticky'>
        <div className='py-4 flex justify-between'>
          <div>
            <div className='flex space-x-2 pt-[2px]'>
              <IoMdHome className='text-[#96A0B1] mt-1' />
              <h3 className='text-gray-500'>/</h3> 
              <h3 className='text-[#344767] font-normal'>{currentPathName}</h3>
            </div>
            <h3 className='pt-[2px] font-bold text-[#344767] text-md'>{currentPathName}</h3>
          </div>
          <div className='flex space-x-3 justify-center items-center'>
            <div className='flex bg-white rounded-lg border border-gray-300 w-[220px]'>
              <div className='p-3'>
                <FaSearch />
              </div>
              <div className='pt-[8px] pb-[8px] rounded-lg rounded-l-none'>
                <input type="text" className='focus:outline-none text-sm' placeholder='Type here...' />
              </div>
            </div>
            <div className='flex items-center space-x-1'>
              <FaUserCircle className='text-[#344767]' />
              <span className='text-[#344767] text-[14px] font-semibold'>Sign in</span>
            </div>
            <IoIosSettings className='text-[#344767]' />
            <FaBell className='text-[#344767] text-sm'/>
          </div>
        </div>
      </div>
    </>
  );
}
