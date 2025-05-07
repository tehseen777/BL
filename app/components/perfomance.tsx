import React from 'react'
import Image from 'next/image'
import DashboardCard from './dashboard_card'
// import DashboardCard from './dashboard_card'
const Perfomance = () => {

  return (
    <div className='overflow-hidden relative'>
      
    
      <div>
      {/* section 1*/}
      <div className='relative z-10 h-screen w-screen'>


        {/* bg shadow*/}
        <div
          className=" absolute inset-0 h-[100vh] transform scale-y-110 top-20  bg-cover bg-no-repeat   z-0"
          style={{
            backgroundImage: `url('/shadow-1.png')`,
          }}
        ></div>

        <div className="relative z-10 h-screen flex flex-col gap-y-4 items-center py-28 ">
          <h2 className='text-5xl transform scale-y-110  font-semibold font-sans tracking-wide'>
            Your Success Our Mission
          </h2>
          <h3 className='text-5xl font-sans'>
            You deserve better.
          </h3>
          <p className='font-sans font-extralight text-sm capitalize tracking-wider text-center max-w-[750px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className=' text-black cursor-pointer text-sm px-8 py-2 rounded-full capitalize' style={{
            backgroundImage: 'linear-gradient(to bottom, #D8BD62, #726434)',
          }}>
            explore more
          </button>
        </div>
      </div>




      {/* section 2*/}
      <div className="relative z-10 h-screen bg-black text-white justify-center py-10  flex px-20">
        <div className='container  flex justify-center items-baseline-last'>
        <div className="  flex flex-col lg:flex-row  w-screen justify-between gap-10">
          {/* Left section */}
          <div className="max-w-xl flex flex-col gap-y-4 justify-center ">
            <h1 className="text-5xl font-sans font-semibold ">
              Lorem Ipsum
              <br />
              Dummy Text
            </h1>
            <p className="text-sm max-w-[300px] font-sans font-extralight tracking-wider ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry make a type specimen book.
            </p>
            <div className='flex'>
            <button className=' text-black cursor-pointer text-sm px-10 py-3 rounded-full capitalize' style={{
              backgroundImage: 'linear-gradient(to bottom, #D8BD62, #726434)',
            }}>
              explore more
            </button>
            </div>
          </div>

          {/* Right section - Testimonials */}
          <div className="space-y-8 max-w-md">
            {/* First testimonial */}
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden p-[1px]"
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
                <h3 className="text-[#D8BD62] text-xl font-semibold">John</h3>
                <p className="text-gray-300 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry make a type specimen book.
                </p>
              </div>
              <div className="bg-clip-text text-transparent text-7xl font-serif" style={{
                backgroundImage: 'linear-gradient(to bottom, #A57D24, #3F300E)',
              }} >“</div>
            </div>

            {/* Middle testimonial - larger and more to the left */}
            <div className="flex items-start gap-4 -ml-24">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden p-1"
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
                <h3 className="text-[#D8BD62] text-xl font-semibold">John</h3>
                <p className="text-gray-300 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry make a type specimen book.
                </p>
              </div>
              <div className="bg-clip-text text-transparent text-7xl font-serif mr-16 " style={{
                backgroundImage: 'linear-gradient(to bottom, #A57D24, #3F300E)',
              }} >“</div>
            </div>

            {/* Third testimonial */}
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden p-[1px]"
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
                <h3 className="text-[#D8BD62] text-xl font-semibold">John</h3>
                <p className="text-gray-300 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry make a type specimen book.
                </p>
              </div>
              <div className="bg-clip-text text-transparent text-7xl font-serif" style={{
                backgroundImage: 'linear-gradient(to bottom, #A57D24, #3F300E)',
              }} >“</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  {/* center perfomance card */}
  <DashboardCard className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
    </div>

  )
}

export default Perfomance