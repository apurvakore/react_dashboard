  import React, { useState } from 'react';
  import { CiBoxes } from "react-icons/ci";
  import SidePanelItem from './SidePanelItem';
  import sidePanelData from '../data/SidePanel';
  import accountPagesData from '../data/AccountPages';
  import { FaStar } from "react-icons/fa";


  const SidePanel = () => {
    const [activeItemId, setActiveItemId] = useState(1); // Default to first item
    const [accountPagesActiveItemId, setAccountPagesActiveItemId] = useState(0);

    const handleItemClick = (id) => {
      setActiveItemId(id);
      setAccountPagesActiveItemId(0);
    };

    const handleAccountPagesItemClick = (id) => {
      setActiveItemId(0);
      setAccountPagesActiveItemId(id);
    };

    return (
      <div className='w-[100%] bg-[#F7F9FB] flex flex-col h-screen overflow-y-auto'>
        <div className="flex flex-col justify-start pt-6 px-5 w-full">
          <div className="flex items-center pb-4 px-3 border-b">
            <div className="icon rotate-180 text-4xl text-[#353536] p-1 font-bold"><CiBoxes/></div>
            <div className="title text-sm text-[#364969] px-1 font-semibold flex items-center">Soft UI Dashboard</div>
          </div>
          <div className="sidePanel-items flex flex-col pt-5 items-start">
            {sidePanelData.map(item => (
              <SidePanelItem
                key={item.id}
                icon={item.icon}
                optionName={item.optionName}
                isActive={item.id === activeItemId}
                onClick={() => handleItemClick(item.id)}
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
                onClick={() => handleAccountPagesItemClick(item.id)}
              />
            ))}
          </div>
          <div className="documentation-box mt-6 py-3 pl-3 pr-1">
            <div className="rounded-xl bg-gradient-to-r from-[#56C8EC] to-[#6389F9] flex flex-col p-4">
              <div className="icon mb-4 text-md drop-shadow-sm p-2 bg-white rounded-lg w-fit text-[#2196FE] ">
                <FaStar className='' />
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
    );
  };

  export default SidePanel;
