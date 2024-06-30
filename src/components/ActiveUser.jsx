import React from 'react'
import { MdLibraryBooks } from "react-icons/md";
import { MdTouchApp } from "react-icons/md";
import { MdOutlineCreditCard } from "react-icons/md";
import { IoExtensionPuzzle } from "react-icons/io5";


const ActiveUser = () => {
  return (
    <div className='bg-white h-[100%] p-5 pb-12 rounded-lg'>
        <div className="img-part rounded-lg p-2 py-4 bg-gradient-to-br from-[#373E6A] to-[#151829]">
            <img className='w-[100%]' src="https://i.ibb.co/NrCm8Fx/download-1.png" alt="" />
        </div>
        <div className="text-part py-6 px-2">
            <div className="flex flex-col">
                <h1 className='font-semibold  text-[#344767]'>Active Users</h1>
                <p className="text-[#67748E] text-sm"><span className='font-bold'>(+23%)</span> than last week</p>
            </div>
        </div>
        <div className="icons-part px-3 mt-2  flex justify-between">
            <div className="flex flex-col space-y-3">
                <div className="each-combo flex space-x-2 mb-1">
                    <div className="icon bg-gradient-to-br from-[#E9068C] to-[#8823C1] text-white text-sm p-1 rounded-md"><MdLibraryBooks /></div>
                    <div className="name text-[13px] text-[#67748E] font-semibold">Users</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-2xl font-bold text-[#344767] mb-2">36K</div>
                    <div className="progress-bar">
                        <div class="w-full flex items-center bg-[#E9ECEF] rounded-full h-1 ">
                            <div class="bg-[#344767] h-1.5 rounded-full" style={{"width": "50%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-3">
                <div className="each-combo flex space-x-2 mb-1">
                    <div className="icon bg-gradient-to-br from-[#21BDFE] to-[#2161FE] text-white text-sm p-1 rounded-md"><MdTouchApp /></div>
                    <div className="name text-[13px] text-[#67748E] font-semibold">Clicks</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-2xl font-bold text-[#344767] mb-2">2M</div>
                    <div className="progress-bar">
                        <div class="w-full flex items-center bg-[#E9ECEF] rounded-full h-1 ">
                            <div class="bg-[#344767] h-1.5 rounded-full" style={{"width": "85%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-3">
                <div className="each-combo flex space-x-2 mb-1">
                    <div className="icon bg-gradient-to-br from-[#FABF34] to-[#F54D38] text-white text-sm p-1 rounded-md"><MdOutlineCreditCard /></div>
                    <div className="name text-[13px] text-[#67748E] font-semibold">Sales</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-2xl font-bold text-[#344767] mb-2">$435</div>
                    <div className="progress-bar">
                        <div class="w-full flex items-center bg-[#E9ECEF] rounded-full h-1 ">
                            <div class="bg-[#344767] h-1.5 rounded-full" style={{"width": "30%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-3">
                <div className="each-combo flex space-x-2 mb-1">
                    <div className="icon bg-gradient-to-br from-[#FC596C] to-[#ED1214] text-white text-sm p-1 rounded-md"><IoExtensionPuzzle /></div>
                    <div className="name text-[13px] text-[#67748E] font-semibold">Items</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-2xl font-bold text-[#344767] mb-2">43</div>
                    <div className="progress-bar">
                        <div class="w-full flex items-center bg-[#E9ECEF] rounded-full h-1 ">
                            <div class="bg-[#344767] h-1.5 rounded-full" style={{"width": "40%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ActiveUser