import React from 'react'
import Image from 'next/image'
const Oprations = () => {
  return (
    <div className='relative bg-black min-h-screen flex justify-center items-center overflow-hidden'>
      {/* top left png */}
      <div
        className=" absolute hidden lg:block  w-[350px] h-[350px] bg-no-repeat  bg-contain top-20 -left-15 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/growth-graphic-1.png')`,
        }}
      ></div>

      {/* bottom right png */}
      <div
        className=" absolute hidden lg:block  w-[350px] h-[350px] bg-no-repeat  bg-contain top-10 -right-50 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/growth-graphic-2.png')`,
        }}
      ></div>

      <div className='max-w-[1000px] mx-auto flex flex-col gap-y-8 py-10'>
        <div className='flex justify-center gap-x-10 items-center'>
          <div className='w-1/2 flex flex-col gap-y-3'>
            <h3 className='lg:text-5xl text-3xl font-sans  capitalize lg:leading-14 leading-10'>Digital <br /> Operations</h3>
            <p className=' font-sans font-extralight tracking-wider text-xs lg:text-sm lg:max-w-[400px] max-w-[300px]'>Being a publicly listed company can be expensive when considering upfront listing costs, even overlap at times. Therefore, the key to managing expenses and deal risk in raising the public capital is to find good people to guide you through the process to avoid potential pitfalls.</p>
          </div>

          <Image alt='' src={"/solutions/op-1.png"} height={1000} width={1000} className='w-[430px] h-auto' />
        </div>

        <div className='flex justify-center gap-x-10 items-center'>

          <Image alt='' src={"/solutions/op-2.png"} height={1000} width={1000} className='w-[430px] h-auto' />
          <div className='w-1/2 flex flex-col gap-y-3'>
            <h3 className='lg:text-5xl text-3xl font-sans  capitalize lg:leading-14 leading-10'>Digital <br /> Operations</h3>
            <p className=' font-sans font-extralight tracking-wider text-xs lg:text-sm lg:max-w-[400px] max-w-[300px]'>Being a publicly listed company can be expensive when considering upfront listing costs, even overlap at times. Therefore, the key to managing expenses and deal risk in raising the public capital is to find good people to guide you through the process to avoid potential pitfalls.</p>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Oprations