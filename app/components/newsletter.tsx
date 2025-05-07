import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const Newsletter = () => {
  return (
          
    //   Newsletter 
    <div className='bg-black justify-center items-center flex py-6'>
      <div className='max-w-[800px] w-full mx-auto bg-gradient-to-r from-[#D8BD62] to-[#726434] rounded-[50px] px-6 py-20 text-center mb-20'>
        <h2 className='text-white font-semibold font-sans capitalize text-3xl lg:text-[40px] mb-6 drop-shadow-sm'>
          Subscribe To Newsletter!
        </h2>
        <div className='flex items-center border-2 border-white  rounded-full px-2 justify-center gap-4 max-w-md mx-auto'>
          <input
            type="email"
            placeholder="Enter Your Email"
            className='w-full px-6 py-3 rounded-full placeholder:text-white text-black outline-none'
          />
          <button className='bg-white text-black p-3 cursor-pointer rounded-full hover:bg-gray-200 transition'>
            <FaPaperPlane />
          </button>
        </div>
      </div>
      </div>
  )
}

export default Newsletter