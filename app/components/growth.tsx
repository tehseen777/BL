import React from 'react'
import Image from 'next/image'
const Growth = () => {
  return (
    <div className='relative overflow-hidden h-screen flex flex-col gap-y-20 justify-center items-center py-10'>

    {/* top left png */}
    <div
        className=" absolute   w-[250px] h-[250px] bg-no-repeat  bg-contain top-0 left-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/growth-graphic-1.png')`,
        }}
      ></div>

      {/* bottom right png */}
     <div
        className=" absolute   w-[300px] h-[300px] bg-no-repeat  bg-contain bottom-20 -right-45 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/growth-graphic-2.png')`,
        }}
      ></div>

        <div className='relative z-10 flex flex-col gap-y-2'>
        <h2 className='text-6xl font-semibold  font-sans text-center'>+ More Growth, Less Risk</h2>
        <p className='text-sm font-extralight font-sans capitalize text-center tracking-wider leading-6 max-w-[900px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>


<div className='flex flex-col gap-y-12'>
<div className='relative flex justify-center items-center gap-x-20'>

<div className=' absolute top-1/2 -translate-y-1/2 flex justify-center px-32 items-center '>
    <Image src="/vectors/vector-2.png" alt="growth" width={1000} height={1000} className='w-60 h-auto mt-28 ' />
    <Image src="/vectors/vector-1.png" alt="growth" width={1000} height={1000} className='w-60 h-auto mb-36 ' />
    <Image src="/vectors/vector-2.png" alt="growth" width={1000} height={1000} className='w-60 h-auto mt-28 ' />
    <Image src="/vectors/vector-1.png" alt="growth" width={1000} height={1000} className='w-60 h-auto mb-36 ' />
</div>

    <div className=' relative z-10 rounded-full h-40 gap-y-2  w-40 bg-[#040303] flex flex-col p-6  justify-center items-center border-2 border-[#D8BD62]'><Image src="/services/logo-1.png" alt="growth" width={1000} height={1000} className='w-10 h-10 ' />
    <p className='text-sm text-center font-sans font-semibold capitalize'>Customer Support</p></div>

    <div className=' relative z-10 rounded-full h-40 w-40 flex gap-y-2 bg-[#040303] p-6 flex-col justify-center items-center border-2 border-[#D8BD62]'><Image src="/services/logo-2.png" alt="growth" width={1000} height={1000} className='w-10 h-10 ' />
    <p className='text-sm text-center font-sans font-semibold capitalize'>Data & AI</p></div>

      <div className=' relative z-10 rounded-full h-40 w-40 flex gap-y-2 flex-col justify-center p-8 items-center border-2 border-[#58470B]' style={{
                backgroundImage: 'linear-gradient(to bottom, #D8BD62, #726434)',
              }}><Image src="/services/logo-3.png" alt="growth" width={1000} height={1000} className='w-10 h-10 ' />
    <p className='text-sm text-center text-black font-sans font-semibold capitalize'>Trust & Safety</p></div>

    <div className=' relative z-10 rounded-full h-40 w-40 flex gap-y-2 bg-[#040303] flex-col p-6 justify-center items-center border-2 border-[#D8BD62]'><Image src="/services/logo-4.png" alt="growth" width={1000} height={1000} className='w-10 h-10 ' />
    <p className='text-sm text-center font-sans font-semibold capitalize'>Digital Operations</p></div>

    <div className=' relative z-10 rounded-full h-40 w-40 flex  gap-y-2 bg-[#040303] flex-col p-6 justify-center items-center border-2 border-[#D8BD62]'><Image src="/services/logo-4.png" alt="growth" width={1000} height={1000} className='w-10 h-10 ' />
    <p className='text-sm text-center font-sans font-semibold capitalize'>Digital Operations</p></div>
</div>





<div className='flex relative z-10 justify-center text-sm font-sans font-light items-center gap-x-16'>
    <div className='flex flex-col gap-y-4 items-center justify-center'>
        <p className='text-center text-sm font-sans font-extralight max-w-[180px]' >Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className='text-black text-[12px] font-semibold px-4 py-2 cursor-pointer rounded-full capitalize' style={{
                backgroundImage: 'linear-gradient(to bottom, #D8BD62, #726434)',
              }} >
            explore more
        </button>
    </div>
    <div className='flex flex-col gap-y-4 items-center justify-center'>
        <p className='text-center max-w-[180px]' >Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className='text-black text-[12px] font-semibold px-4 py-2 cursor-pointer rounded-full capitalize' style={{
                backgroundImage: 'linear-gradient(to bottom, #D8BD62, #726434)',
              }} >
            explore more
        </button>
    </div>
    <div className='flex flex-col gap-y-4 items-center justify-center'>
        <p className='text-center max-w-[180px]' >Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className='text-black text-[12px] font-semibold px-4 py-2 cursor-pointer rounded-full capitalize' style={{
                backgroundImage: 'linear-gradient(to bottom, #D8BD62, #726434)',
              }} >
            explore more
        </button>
    </div>
    <div className='flex flex-col gap-y-4 items-center justify-center'>
        <p className='text-center max-w-[180px]' >Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className='text-black text-[12px] font-semibold px-4 cursor-pointer py-2 rounded-full capitalize' style={{
                backgroundImage: 'linear-gradient(to bottom, #D8BD62, #726434)',
              }} >
            explore more
        </button>
    </div>
    <div className='flex flex-col gap-y-4 items-center justify-center'>
        <p className='text-center max-w-[180px]' >Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className='text-black text-[12px] font-semibold px-4 cursor-pointer py-2 rounded-full capitalize' style={{
                backgroundImage: 'linear-gradient(to bottom, #D8BD62, #726434)',
              }} >
            explore more
        </button>
    </div>
</div>
</div>

    </div>
  )
}

export default Growth