import React from 'react'
import Button from '@/app/components/ui/button'

const Support = () => {
  return (
    <div className='relative bg-black  text-white lg:h-[500px] flex  justify-center items-center overflow-hidden'>
      {/* bg shadow */}
      <div
        className=" absolute  inset-0  bg-center   lg:h-[500px] bg-no-repeat   bg-cover z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/solutions/bg-1.png')`,
        }}
      ></div>



      <div className='relative z-10 flex flex-col gap-y-3 justify-center items-center py-20 lg:py-0 '>
        <h2 className='lg:text-6xl text-3xl font-sans font-medium text-center capitalize lg:leading-16 leading-10'>Outsourced Support, <br /> In-House Feel</h2>
        <p className=' font-sans text-center font-extralight tracking-wider text-xs lg:text-base lg:max-w-[700px] max-w-[300px]'>Never miss a ping again. We build fully managed teams who embody your voice, align with your values, and bring deep expertise to every customer interaction..</p>
      <Button text="get started" className='lg:py-3'/>
      </div>
    </div>
  )
}

export default Support