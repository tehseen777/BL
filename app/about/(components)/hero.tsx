import React from 'react'

const Hero = () => {
  return (
    <div
    className='relative bg-cover bg-center h-screen bg-black opacity-80 overflow-hidden'
     style={{ backgroundImage: `url("/about/hero_image.png")` }}>


           {/* top left png */}
           <div
        className=" absolute hidden lg:block  w-[350px] h-[350px] bg-no-repeat  bg-contain bottom-5 -left-15 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/growth-graphic-1.png')`,
        }}
      ></div>

      {/* bottom right png */}
      <div
        className=" absolute hidden lg:block  w-[350px] h-[350px] bg-no-repeat  bg-contain bottom-10 -right-50 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/growth-graphic-2.png')`,
        }}
      ></div>
</div>
  )
}

export default Hero