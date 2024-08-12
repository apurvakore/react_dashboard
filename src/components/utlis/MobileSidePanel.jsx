import React, { useState } from 'react';
import { CiBoxes } from "react-icons/ci";
import { FaStar, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import SidePanelItem from './SidePanelItem';
import sidePanelData from '../../data/utlis/SidePanel';
import accountPagesData from '../../data/utlis/AccountPages';
// import { useLocation } from 'react-router-dom';

const MobileSidePanel = ({ isSidebarOpen, toggleSidebar }) => {
  const [activeItemId, setActiveItemId] = useState(1); // Default to first item
  const [accountPagesActiveItemId, setAccountPagesActiveItemId] = useState(0);
  const navigate = useNavigate();

  const handleItemClick = (id, path) => {
    setActiveItemId(id);
    setAccountPagesActiveItemId(0);
    navigate(path);
    toggleSidebar(); // Close sidebar on navigation
  };

  const handleAccountPagesItemClick = (id, path) => {
    setActiveItemId(0);
    setAccountPagesActiveItemId(id);
    navigate(path);
    toggleSidebar(); // Close sidebar on navigation
  };

//   const location = useLocation();
//   const pathNameMap = {
//     '/dashboard': 'Dashboard',
//     '/billing': 'Billing',
//     '/tables': 'Tables',
//     '/virtual-reality': 'Virtual Reality',
//     '/profile': 'Profile',
//     '/signup': 'Sign Up',
//     '/signin': 'Sign In'
//   };

//   const currentPathName = pathNameMap[location.pathname] || 'Dashboard';

  return (
    <>
      {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>}
      <div className={`fixed top-0 left-0 w-[80%] 2xl:w-[18%] h-screen bg-[#F7F9FB] z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out overflow-y-auto`}>
        <div className="flex flex-col justify-start pt-6 px-5 w-full">
          <div className="flex items-center justify-between pb-4 px-3 border-b">
            <div className="icon rotate-180 text-4xl text-[#353536] p-1 font-bold"><CiBoxes /></div>
            <div className="title text-sm text-[#364969] px-1 font-semibold flex items-center">Soft UI Dashboard</div>
            <div className="text-[#364969] cursor-pointer md:hidden" onClick={toggleSidebar}>
              <FaTimes className="text-lg" />
            </div>
          </div>
          <div className="sidePanel-items flex flex-col pt-5 items-start">
            {sidePanelData.map(item => (
              <SidePanelItem
                key={item.id}
                icon={item.icon}
                optionName={item.optionName}
                isActive={item.id === activeItemId}
                onClick={() => handleItemClick(item.id, item.path)}
              />
            ))}
          </div>
          <div className="account-pages-heading text-[#828FA2] text-[0.75rem] px-4 mt-3 font-semibold">ACCOUNT PAGES</div>
          <div className="sidePanel-items flex flex-col pt-3 items-start">
            {accountPagesData.map(item => (
              <SidePanelItem
                key={item.id}
                icon={item.icon}
                optionName={item.optionName}
                isActive={item.id === accountPagesActiveItemId}
                onClick={() => handleAccountPagesItemClick(item.id, item.path)}
              />
            ))}
          </div>
          <div className="documentation-box mt-6 py-3 pl-3 pr-1">
            <div className="rounded-xl bg-gradient-to-r from-[#56C8EC] to-[#6389F9] flex flex-col p-4">
              <div className="icon mb-4 text-md drop-shadow-sm p-2 bg-white rounded-lg w-fit text-[#2196FE] ">
                <FaStar />
              </div>
              <div className="text flex flex-col mb-4 text-white">
                <h2 className="text-sm font-bold">Need Help?</h2>
                <p className="text-[12px] font-semibold">Please check our docs</p>
              </div>
              <div className="button">
                <button className='flex bg-white w-full justify-center drop-shadow-sm text-[#344767] px-3 py-2 rounded-lg text-[12px] font-semibold'>
                  DOCUMENTATION
                </button>
              </div>
            </div>
          </div>
          <div className="py-3 pl-3 pr-1">
            <div className="button">
              <button className='flex justify-center w-full rounded-lg text-white py-3 text-[12px] font-bold bg-gradient-to-br from-[#21CDFD] to-[#1F61F1] '>UPGRADE TO PRO</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidePanel;
