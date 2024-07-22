import React from "react";
import { HiPencil } from "react-icons/hi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



import platformInfoData from "../../data/profile/platformInfo";
import conversationData from "../../data/profile/conversationData";

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
            <div className="pb-4 ">
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
          <p className="pt-5 text-[#67748E] text-sm font-medium">
            Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is
            no. If two equally difficult paths, choose the one more painful in
            the short term (pain avoidance is creating an illusion of equality).
                  </p>
                  <div className="mt-12 flex flex-col space-y-5">
                        <div className="flex space-x-2 items-center">
                          <span className="text-[#344767] text-sm font-bold">Full Name:</span>
                          <span className="text-sm text-[#67748E] font-normal">Alec M. Thompson</span>
                      </div>
                      <div className="flex space-x-2 items-center">
                          <span className="text-[#344767] text-sm font-bold">Mobile:</span>
                          <span className="text-sm text-[#67748E] font-normal">(44) 123 1234 123</span>
                      </div>
                      <div className="flex space-x-2 items-center">
                          <span className="text-[#344767] text-sm font-bold">Email:</span>
                          <span className="text-sm text-[#67748E] font-normal">alecthompson@mail.com</span>
                      </div>
                      <div className="flex space-x-2 items-center">
                          <span className="text-[#344767] text-sm font-bold">Location:</span>
                          <span className="text-sm text-[#67748E] font-normal">USA</span>
                      </div>
                      <div className="flex space-x-3 items-center">
                          <span className="text-[#344767] text-sm font-bold">Social: </span>
                          <FaFacebookSquare className="text-[#3B5998]"/>
                          <FaTwitter className="text-[#55ACEE]"/>
                          <FaInstagram className="text-[#125688]" />
                      </div>
            </div>
                  
        </div>
          </div>
          

          <div className="w-[33%] mt-3 bg-white rounded-xl">
      <div className="p-4">
        <span className="text-[#344767] font-semibold">Conversations</span>
      </div>
      <div className="p-5">
        {conversationData.map((conversation, index) => (
          <div key={index} className="flex justify-between mb-4 items-center">
            <div className="flex space-x-4 pb-2 items-center">
              <img className="w-[50px] h-[50px] rounded-xl" src={conversation.profileImage} alt={conversation.name} />
              <div className="flex flex-col">
                <span className="text-[#344767] font-semibold">{conversation.name}</span>
                <p className="text-xs text-[#697690]">{conversation.para}</p>
              </div>
            </div>
            <div>
              <button className="text-[#3ACAEB] font-bold text-xs">REPLY</button>
            </div>
          </div>
        ))}
      </div>
    </div>
          



          

    </div>
  );
};
