import React from 'react'
import Image from 'next/image'
import DashboardCard from './dashboard_card'
import Button from './ui/button'
// import DashboardCard from './dashboard_card'
const Perfomance = () => {

  return (
    <div className='overflow-hidden relative'>
      
    
      <div>
      {/* section 1*/}
      <div className='relative z-10 lg:h-screen w-screen'>


        {/* bg shadow*/}
        <div
          className=" absolute inset-0 h-[50vh] lg:h-screen w-screen transform scale-y-110 top-20  bg-cover bg-center lg:bg-top  bg-no-repeat   z-0"
          style={{
            backgroundImage: `url('/shadow-1.png')`,
          }}
        ></div>
        {/* section 1 content */}
        <div className="relative z-10 lg:h-screen flex flex-col  justify-between items-center pb-4 lg:pb-0 gap-y-10 pt-28 lg:pt-0 ">
          <div className='flex flex-col lg:gap-y-4 gap-y-3 justify-center items-center lg:py-28'>
            <div className='flex flex-col lg:gap-y-2 gap-y-0 justify-center items-center'>
          <h2 className='lg:text-4xl text-2xl transform lg:scale-y-110 font-medium lg:font-semibold font-sans tracking-wide'>
            Your Success Our Mission
          </h2>
          <h3 className='lg:text-4xl text-2xl font-sans'>
            You deserve better.
          </h3>
          </div>
          <p className='font-sans font-extralight lg:text-sm text-xs capitalize tracking-wider text-center lg:max-w-[700px] max-w-[300px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
       <Button text="explore more"/>
          </div>
        <DashboardCard className='block lg:hidden' />
        </div>

      </div>




      {/* section 2*/}
      <div className="  relative z-10 lg:h-screen bg-black text-white justify-center lg:p-16 px-6 py-10 flex flex-col lg:flex-row ">
        <div className=' flex justify-center items-baseline-last'>
        <div className="   flex flex-col lg:flex-row justify-center gap-y-20  gap-x-70">
          {/* Left section */}
          <div className="max-w-xl flex flex-col lg:gap-y-4 gap-y-1 justify-center items-center lg:items-start">
            <h1 className="lg:text-4xl text-2xl font-sans font-medium leading-12 transform scale-y-105 ">
              Lorem Ipsum
              <br className='hidden lg:block'/>
              Dummy Text
            </h1>
            <p className="text-xs max-w-[250px] font-sans text-center mb-4 lg:mb-0 lg:text-left font-extralight tracking-wider ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry make a type specimen book.
            </p>
            <div className='flex'>
          <Button text='explore more' className='text-xs lg:px-6'/>
            </div>
          </div>

          {/* Right section - Testimonials */}
          <div className="space-y-6 max-w-md">
            {/* First testimonial */}
            <div className="flex items-start gap-4 ">
              <div className="relative">
                <div className="lg:w-14 lg:h-14 w-16 h-16 rounded-full overflow-hidden p-[1px]"
                  style={{
                    backgroundImage: 'linear-gradient(to bottom, #A57D24, #3F300E)',
                  }}>
                  <Image
                    src={`/peoples/john-1.png`}
                    alt="Profile"
                    width={1000}
                    height={1000}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-[#D8BD62] text-lg font-semibold">John</h3>
                <p className="text-gray-300 text-xs">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry make a type specimen book.
                </p>
              </div>
              <div className="bg-clip-text text-transparent text-5xl lg:mr-20 font-serif" style={{
                backgroundImage: 'linear-gradient(to bottom, #A57D24, #3F300E)',
              }} >“</div>
            </div>

            {/* Middle testimonial - larger and more to the left */}
            <div className="flex items-start gap-4 lg:-ml-28">
              <div className="relative">
                <div className="lg:w-20 lg:h-20 w-16 h-16 rounded-full overflow-hidden p-1"
                  style={{
                    backgroundImage: 'linear-gradient(to bottom, #D8BD62, #726434)',
                  }}>
                  <Image
                    src={`/peoples/john-2.png`}
                    alt="Profile"
                    width={1000}
                    height={1000}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-[#D8BD62] lg:text-xl text-lg font-semibold">John</h3>
                <p className="text-gray-300 lg:text-sm text-xs">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry make a type specimen book.
                </p>
              </div>
              <div className="bg-clip-text text-transparent lg:text-7xl text-5xl font-serif lg:mr-30 " style={{
                backgroundImage: 'linear-gradient(to bottom, #A57D24, #3F300E)',
              }} >“</div>
            </div>

            {/* Third testimonial */}
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="lg:w-14 lg:h-14 w-16 h-16 rounded-full overflow-hidden p-[1px]"
                  style={{
                    backgroundImage: 'linear-gradient(to bottom, #A57D24, #3F300E)',
                  }}>
                  <Image
                    src={`/peoples/john-3.png`}
                    alt="Profile"
                    width={1000}
                    height={1000}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-[#D8BD62] text-lg font-semibold">John</h3>
                <p className="text-gray-300 text-xs">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry make a type specimen book.
                </p>
              </div>
              <div className="bg-clip-text lg:mr-20 text-transparent text-5xl font-serif" style={{
                backgroundImage: 'linear-gradient(to bottom, #A57D24, #3F300E)',
              }} >“</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  {/* center perfomance card */}
  <DashboardCard className=' hidden lg:block absolute z-10 top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2' />
    </div>

  )
}

export default Perfomance