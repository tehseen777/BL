import Button_2 from '@/app/components/ui/button_2'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-black flex justify-center items-end-safe h-[550px] pb-30'>
     <div className=' flex flex-col lg:gap-y-3 gap-y-2'>
                <p className='text-[#D8BD62] font-sans tracking-wider uppercase text-center text-xl  '>Pricing</p>
                <h2 className='lg:text-6xl text-4xl leading-16 font-sans font-medium capitalize text-center mb-4'>Customer Support <br />Outsourcing</h2>
                <div className='flex items-center border-[0.5px] border-[#6b6634]  rounded-full lg:px-1 px-1 justify-center gap-4  mx-auto max-w-2xl'>
          <input
            type="email"
            placeholder="Enter Your Email"
            className='w-2xl lg:px-6 px-4 lg:py-3 py-2 rounded-full placeholder:text-white placeholder:text-sm text-white outline-none'
          />
      <Button_2 text="build your team" className='w-50 lg:px-0 lg:py-3 lg:text-xs'/>
        </div>
            </div>
    </div>
  )
}

export default Hero