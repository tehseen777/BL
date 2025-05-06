import React from 'react'
import Image from 'next/image'
const Hero_section = () => {
  return (
    <div className='relative h-screen flex px-20 justify-center gap-x-10 items-center overflow-hidden'>

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
            <Image src="/hero_image.png" alt="hero_image" width={1200} height={1000} className='w-[400px] h-auto'/>
         </div>

         <div className=' flex flex-col gap-y-4'>
            <p className='text-[#CB8E1F] font-sans'>Outsourcing+</p>
            <h2 className='text-7xl  font-sans'>Built to make <br /> you better.</h2>
            <p className='text-white max-w-[500px] font-sans font-extralight capitalize tracking-wider'>We’re not traditional outsourcers. We build world-class teams—from customer support to AI data solutions—helping you scale faster and smarter.</p>
            <div>
            <button className=' text-black text-sm px-10 py-3 rounded-full capitalize' style={{
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