import React from 'react'
import Image from 'next/image'
import Button from './ui/button'
const Growth = () => {
  return (
    <div className='relative overflow-hidden lg:h-screen bg-black flex flex-col lg:gap-y-20 gap-y-10 justify-center items-center lg:py-10 py-16'>

      {/* top left png */}
      <div
        className=" absolute hidden lg:block  w-[250px] h-[250px] bg-no-repeat  bg-contain top-0 left-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/growth-graphic-1.png')`,
        }}
      ></div>

      {/* bottom right png */}
      <div
        className=" absolute hidden lg:block  w-[300px] h-[300px] bg-no-repeat  bg-contain bottom-20 -right-45 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/growth-graphic-2.png')`,
        }}
      ></div>

      <div className='relative z-10 flex flex-col justify-center items-center lg:gap-y-2 gap-y-1'>
        <h2 className='lg:text-5xl text-2xl font-semibold  font-sans text-center'>+ More Growth, Less Risk</h2>
        <p className='lg:text-sm text-[8px] font-extralight font-sans capitalize text-center tracking-wider lg:leading-6 lg:max-w-[800px] max-w-[280px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>


      <div className='flex flex-col lg:gap-y-12 gap-y-4'>
        <div className='relative flex justify-center items-center lg:gap-x-20 gap-x-5'>
          {/* dekstop bg vectors */}
          <div className=' hidden lg:flex absolute top-1/2 -translate-y-1/2 justify-center px-32 items-center '>
            <Image src="/vectors/vector-2.png" alt="growth" width={1000} height={1000} className='w-60 h-auto -mt-8 ' />
            <Image src="/vectors/vector-1.png" alt="growth" width={1000} height={1000} className='w-60 h-auto mb-60 ' />
            <Image src="/vectors/vector-2.png" alt="growth" width={1000} height={1000} className='w-60 h-auto -mt-8  ' />
            <Image src="/vectors/vector-1.png" alt="growth" width={1000} height={1000} className='w-60 h-auto mb-60 ' />
          </div>


          {/* mobile bg vectors */}
          <div className=' flex lg:hidden absolute top-1/2 -translate-y-1/2 justify-center gap-x-3  items-center '>
            <Image src="/vectors/vector-6.png" alt="growth" width={2000} height={1000} className='w-22 h-auto  -ml-7 ' />
            <Image src="/vectors/vector-7.png" alt="growth" width={2000} height={1000} className='w-22 h-auto mb-14  -ml-5' />
            <Image src="/vectors/vector-6.png" alt="growth" width={2000} height={1000} className='w-22 h-auto -mr-2 -ml-5' />
            <Image src="/vectors/vector-7.png" alt="growth" width={2000} height={1000} className='w-22 h-auto mb-14 -ml-3 -mr-4' />
          </div>


          <div className='flex flex-col lg:gap-y-12 gap-y-2'>
            <div className=' relative z-10 rounded-full lg:h-40 h-12 lg:w-40 w-12 lg:gap-y-2 bg-[#040303] flex flex-col lg:p-6 p-1 justify-center items-center border-2 border-[#D8BD62]'><Image src="/services/logo-1.png" alt="growth" width={1000} height={1000} className='lg:w-10 lg:h-10 w-3 h-3 ' />
              <p className='lg:text-sm text-[4px] text-center font-sans font-semibold capitalize'>Customer Support</p></div>



            <div className='relative z-10 flex flex-col lg:gap-y-4 gap-y-1 items-center justify-center'>
              <p className='text-center lg:text-sm  text-[6px] font-sans font-extralight lg:max-w-[180px] max-w-[60px]' >Lorem ipsum dolor sit amet,</p>
            <Button text='explore more' className=' lg:px-4 lg:py-2 lg:text-[12px]'/>
            </div>

          </div>


          <div className='flex flex-col  lg:gap-y-12 gap-y-2'>
            <div className=' relative z-10 rounded-full lg:h-40 h-12 lg:w-40 w-12 lg:gap-y-2 gap-y-1 bg-[#040303] flex flex-col lg:p-6 p-1 justify-center items-center border-2 border-[#D8BD62]'><Image src="/services/logo-2.png" alt="growth" width={1000} height={1000} className='lg:w-10 lg:h-10 w-3 h-3 ' />
              <p className='lg:text-sm text-[4px] text-center font-sans font-semibold capitalize'>Data & AI</p></div>

            <div className='relative z-10 flex flex-col lg:gap-y-4 gap-y-1 items-center justify-center'>
              <p className='text-center lg:text-sm  text-[6px] font-sans font-extralight lg:max-w-[180px] max-w-[60px]' >Lorem ipsum dolor sit amet,</p>
              <Button text='explore more' className=' lg:px-4 lg:py-2 lg:text-[12px]'/>
            </div>
          </div>

          <div className='flex flex-col  lg:gap-y-12 gap-y-2'>
            <div className=' relative z-10 rounded-full lg:h-40 h-12 lg:w-40 w-12 lg:gap-y-2 gap-y-1 bg-[#040303] flex flex-col lg:p-6 p-1 justify-center items-center border-2 border-[#58470B]' style={{
              backgroundImage: 'linear-gradient(to bottom, #D8BD62, #726434)',
            }}><Image src="/services/logo-3.png" alt="growth" width={1000} height={1000} className='lg:w-10 lg:h-10 w-3 h-3 ' />
              <p className='lg:text-sm text-[4px] text-center text-black font-sans font-semibold capitalize'>Trust & Safety</p></div>

            <div className='relative z-10 flex flex-col lg:gap-y-4 gap-y-1 items-center justify-center'>
              <p className='text-center lg:text-sm  text-[6px] font-sans font-extralight lg:max-w-[180px] max-w-[60px]' >Lorem ipsum dolor sit amet,</p>
              <Button text='explore more' className=' lg:px-4 lg:py-2 lg:text-[12px]'/>
            </div>
          </div>


          <div className='flex flex-col  lg:gap-y-12 gap-y-2'>
            <div className=' relative z-10 rounded-full lg:h-40 h-12 lg:w-40 w-12 lg:gap-y-2 gap-y-1 bg-[#040303] flex flex-col lg:p-6 p-1 justify-center items-center border-2 border-[#D8BD62]'><Image src="/services/logo-4.png" alt="growth" width={1000} height={1000} className='lg:w-10 lg:h-10 w-3 h-3 ' />
              <p className='lg:text-sm text-[4px] text-center font-sans font-semibold capitalize'>Digital Operations</p></div>

            <div className='relative z-10 flex flex-col lg:gap-y-4 gap-y-1 items-center justify-center'>
              <p className='text-center lg:text-sm  text-[6px] font-sans font-extralight lg:max-w-[180px] max-w-[60px]' >Lorem ipsum dolor sit amet,</p>
              <Button text='explore more' className=' lg:px-4 lg:py-2 lg:text-[12px]'/>
            </div>
          </div>


          <div className='flex flex-col  lg:gap-y-12 gap-y-2'>
            <div className=' relative z-10 rounded-full lg:h-40 h-12 lg:w-40 w-12 lg:gap-y-2 gap-y-1 bg-[#040303] flex flex-col lg:p-6 p-1 justify-center items-center border-2 border-[#D8BD62]'><Image src="/services/logo-4.png" alt="growth" width={1000} height={1000} className='lg:w-10 lg:h-10 w-3 h-3 ' />
              <p className='lg:text-sm text-[4px] text-center font-sans font-semibold capitalize'>Digital Operations</p></div>


              <div className='relative z-10 flex flex-col lg:gap-y-4 gap-y-1 items-center justify-center'>
            <p className='text-center lg:text-sm  text-[6px] font-sans font-extralight lg:max-w-[180px] max-w-[60px]' >Lorem ipsum dolor sit amet,</p>
            <Button text='explore more' className=' lg:px-4 lg:py-2 lg:text-[12px]'/>
          </div>
          </div>

       
        </div>







      </div>

    </div>
  )
}

export default Growth