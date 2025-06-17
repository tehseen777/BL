import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const Newsletter = () => {
  return (
          
    //   Newsletter 
    <div className='bg-black justify-center items-center lg:pt-28 pt-10 py-4 px-4' >
      <div className='max-w-[700px] w-full mx-auto bg-gradient-to-r from-[#D8BD62] to-[#726434] lg:rounded-[50px] rounded-3xl px-6 lg:py-16 py-6 text-center lg:mb-20'>
        <h2 className='text-white font-semibold font-sans capitalize text-xl lg:text-[40px] mb-6 drop-shadow-sm'>
          Subscribe To Newsletter!
        </h2>
        <div className='flex items-center border-2 border-white  rounded-full lg:px-1 px-1 justify-center gap-4 max-w-md mx-auto'>
          <input
            type="email"
            placeholder="Enter Your Email"
            className='w-full lg:px-6 px-4 lg:py-3 py-2 rounded-full placeholder:text-white text-black outline-none'
          />
          <button className='bg-white text-black lg:p-3 p-2 cursor-pointer rounded-full hover:bg-gray-200 transition'>
            <FaPaperPlane />
          </button>
        </div>
      </div>
      </div>
  )
}

export default Newsletter