import React from 'react'
import Image from 'next/image'
const Hero_section = () => {
  return (
    <div className='relative h-screen flex flex-col lg:flex-row px-6 lg:px-20 justify-center lg:gap-x-16 gap-y-6 items-center lg:pt-20 pt-10 overflow-hidden'>



        {/* top left png desktop */}
     <div
        className=" hidden lg:block absolute   w-[250px] h-[250px] bg-no-repeat  bg-contain top-0 left-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/hero-graphic-1.png')`,
        }}
      ></div>

      {/* bottom right png desktop */}
     <div
        className=" hidden lg:block absolute   w-[250px] h-[250px] bg-no-repeat  bg-contain bottom-10 -right-30 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/hero-graphic-2.png')`,
        }}
      ></div>
         
      {/* right png mobile */}
      <div
        className=" block lg:hidden absolute   w-[100px] h-[100px] bg-no-repeat  bg-contain top-10 -right-10 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/hero-graphic-2.png')`,
        }}
      ></div>

      {/* left png mobile */}
      <div
        className=" block lg:hidden absolute   w-[100px] h-[100px] bg-no-repeat rotate-180  bg-contain top-10 -left-10 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/hero-graphic-2.png')`,
        }}
      ></div>



         <div>
            <Image src="/hero_image.png" alt="hero_image" width={1200} height={1000} className='lg:w-[440px] w-[240px] h-auto'/>
         </div>

         <div className=' flex flex-col lg:gap-y-4 gap-y-2'>
            <p className='text-[#CB8E1F] font-sans tracking-wider text-center text-lg  lg:text-left'>Outsourcing+</p>
            <h2 className='lg:text-[80px] text-4xl lg:leading-20 leading-10 font-sans  capitalize text-center lg:text-left '>Built to make <br /> you better <span className='font-serif lg:-mx-4 -mx-2 lg:text-6xl text-4xl'>.</span></h2>
            <p className='text-white lg:max-w-[400px] max-w-[270px] leading-6 font-sans font-extralight text-sm capitalize tracking-wider text-center lg:text-left'>We’re not traditional outsourcers. We build world-class teams—from customer support to AI data solutions—helping you scale faster and smarter.</p>
            <div className='flex justify-center lg:justify-start'>
            <button className=' text-black text-sm cursor-pointer lg:px-8 px-6 py-2 rounded-full capitalize' style={{
                backgroundImage: 'linear-gradient(to bottom, #D8BD62, #726434)',
              }}>
                explore more
            </button>
            </div>
           
         </div>
         
         
          </div>
  ) 
}

export default Hero_section