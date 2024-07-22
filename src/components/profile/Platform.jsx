import React from "react";
import { HiPencil } from "react-icons/hi";

import platformInfoData from "../../data/profile/platformInfo";

export const Platform = () => {
  return (
    <div className="flex space-x-5">
      <div className="w-[33%] mt-3 bg-white rounded-xl">
        <div className="">
          <div className="flex flex-col p-3 space-y-4">
            <span className="text-[#344767] font-semibold pt-2">
              Platform Setting
            </span>

            {/* Account Section */}
            <div className="pb-5 ">
              <span className="text-xs font-bold text-[#67748E] ">ACCOUNT</span>
              {platformInfoData.account.map((item, index) => (
                <div key={index} className="pt-5 pb-2">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      checked={item.checked}
                    />
                    <div className="relative w-10 h-5 bg-gray-200  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-[#444B76] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-transform after:transform peer-checked:after:translate-x-5"></div>
                    <span className="ms-3 text-sm font-medium text-[#67748E] dark:text-gray-300">
                      {item.name}
                    </span>
                  </label>
                </div>
              ))}
            </div>

            {/* Application Section */}
            <div className="pb-2">
              <span className="text-xs font-bold text-[#67748E] mt-4">
                APPLICATION
              </span>
              {platformInfoData.application.map((item, index) => (
                <div key={index} className="pt-5 pb-2">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      checked={item.checked}
                    />
                    <div className="relative w-10 h-5 bg-gray-200  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-[#444B76] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-transform after:transform peer-checked:after:translate-x-5"></div>
                    <span className="ms-3 text-sm font-medium text-[#67748E] dark:text-gray-300">
                      {item.name}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[33%] mt-3 bg-white rounded-xl">
        <div className="p-3 pt-4">
          <div className="flex justify-between">
            <span className="text-[#344767] font-semibold">
              Profile Information
            </span>
            <HiPencil className="mt-1 text-[#8392AB]" />
          </div>
          <p className="pt-5 text-[#707C95] text-m">
            Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is
            no. If two equally difficult paths, choose the one more painful in
            the short term (pain avoidance is creating an illusion of equality).
          </p>
        </div>
      </div>
    </div>
  );
};
