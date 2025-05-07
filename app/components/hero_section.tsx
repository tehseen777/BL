import React from 'react'
import Image from 'next/image'
const Hero_section = () => {
  return (
    <div className='relative h-screen flex px-20 justify-center gap-x-16 items-center pt-20 overflow-hidden'>

        {/* top left png */}
     <div
        className=" absolute   w-[250px] h-[250px] bg-no-repeat  bg-contain top-0 left-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/hero-graphic-1.png')`,
        }}
      ></div>

      {/* bottom right png */}
     <div
        className=" absolute   w-[250px] h-[250px] bg-no-repeat  bg-contain bottom-10 -right-30 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/hero-graphic-2.png')`,
        }}
      ></div>
         
         <div>
            <Image src="/hero_image.png" alt="hero_image" width={1200} height={1000} className='w-[440px] h-auto'/>
         </div>

         <div className=' flex flex-col gap-y-4'>
            <p className='text-[#CB8E1F] font-sans tracking-wider'>Outsourcing+</p>
            <h2 className='text-[80px]  leading-20  font-sans  capitalize'>Built to make <br /> you better <span className='font-serif -mx-4 text-6xl'>.</span></h2>
            <p className='text-white max-w-[400px] leading-6 font-sans font-extralight text-sm capitalize tracking-wider'>We’re not traditional outsourcers. We build world-class teams—from customer support to AI data solutions—helping you scale faster and smarter.</p>
            <div>
            <button className=' text-black text-sm cursor-pointer px-8 py-2 rounded-full capitalize' style={{
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