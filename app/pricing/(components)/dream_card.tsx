import Button_2 from '@/app/components/ui/button_2'
import React from 'react'

const Dream_card = () => {
  return (
    <div className='bg-black flex justify-center items-center h-screen px-4' >
      <div className='max-w-[750px] border border-[#6b6634] w-full mx-auto bg-[#0D0B0B] lg:rounded-[50px] rounded-3xl px-6 lg:px-12 lg:py-16 py-6 text-center '>
        <h2 className='text-white font-semibold font-sans capitalize text-xl lg:text-[44px] transform scale-y-110 mb-1 drop-shadow-sm'>
        Your Dream Team Starts Here
        </h2>
        <p className=' font-sans text-center font-extralight capitalize tracking-wider leading-6 mb-6 text-xs lg:text-sm max-w-[300px] lg:max-w-[600px] mx-auto '>Hugo integrates into your workflows across all communication channels to deliver fast, consistent support from onboarding to retention. Connect with one of our solutions designers to build a custom team plan for your operational needs.</p>
        <div className='flex items-center border-[0.5px] border-[#6b6634]  rounded-full lg:px-1 px-1 justify-center gap-4  mx-auto max-w-lg'>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className='w-full lg:px-6 px-4 lg:py-3 py-2 rounded-full placeholder:text-white/50 placeholder:text-xs text-white outline-none'
          />
      <Button_2 text="build your team" className='w-50 lg:px-0 lg:py-3 lg:text-xs'/>
        </div>
      </div>
      </div>
  )
}

export default Dream_card