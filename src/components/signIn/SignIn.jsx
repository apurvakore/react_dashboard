import React from 'react'
import { Navbar } from './Navbar'


export const SignIn = () => {
    return (
      <>
        <Navbar/>
        <div className=' flex justify-between ml-[20%] 2xl:ml-[18%]'>
          <div className='w[15%] border'>
          </div>
          <div className='w-[25%] flex flex-col justify-center  space-y-3'>
            <div className='flex flex-col space-y-3'>
                <h6 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#21CDFD]  to-[#1F61F1] font-bold'>Welcome back</h6>
                <p className='text-[#758198] text-sm font-semibold'>Enter your email and password to sign in</p>
            </div>
            <div className='flex flex-col space-y-3'>
                <div className='flex flex-col space-y-2'>
                  <h6 className='text-[#364969] text-xs font-bold'>Email</h6>
                <input type="text" placeholder='Email' className='border rounded-lg py-2 px-2 '/>
                </div>
              <div className='flex flex-col space-y-2'>
                  <h6 className=' text-[#364969] text-xs font-bold' >Password</h6>
                  <input type="password" placeholder='Password' className='border rounded-lg py-2 px-2 '/>
              </div>
              <div>
                    <label class="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" checked/>
                    <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-0 peer-focus:ring-transparent dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#444B76]"></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</span>
                  </label>

              </div>
              <div className=' border flex justify-center py-2 rounded-lg bg-gradient-to-br from-[#21CDFD] to-[#1F61F1]'>
                <button className='text-white text-xs font-semibold'>
                 SIGN IN
                </button>
              </div>
              <div className=' flex space-x-1 justify-center text-sm'>
                <p className='text-[#8A94A8] font-semibold'>Don't have an account?</p>
                <span className=' font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#21CDFD]  to-[#1F61F1]'>SIGN UP</span>
              </div>
              
            </div>
          </div>
          <div className='w-[60%]  border'>
            <img src="random wallpaper.jpeg" alt="" />
          </div>
        </div>
        
    </>
  )
}
