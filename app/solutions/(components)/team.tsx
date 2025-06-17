import React from 'react'
import Button from '@/app/components/ui/button'

const Team = () => {
  return (
    <div className='relative bg-black  text-white lg:h-[400px] flex  justify-center items-center overflow-hidden'>
      {/* bg shadow */}
      <div
        className=" absolute  inset-0  bg-center   lg:h-[400px] bg-no-repeat   bg-cover z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/solutions/bg-2.png')`,
        }}
      ></div>



      <div className='relative z-10 flex flex-col gap-y-3 justify-center items-center py-20 lg:py-0 '>
        <h2 className='lg:text-6xl text-3xl font-sans font-medium text-center capitalize lg:leading-16 leading-10'>Your Dream Team Starts Here</h2>
        <p className=' font-sans text-center font-extralight tracking-wider text-xs lg:text-base lg:max-w-[800px] max-w-[300px]'>Hugo integrates into your workflows across all communication channels to deliver fast, consistent support from onboarding to retention. Connect with one of our solutions designers to build a custom team plan for your operational needs.</p>
      <Button text="get started" className='lg:py-3'/>
      </div>
    </div>
  )
}

export default Team