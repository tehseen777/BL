import React from 'react'
import Image from 'next/image'
import DashboardCard from './dashboard_card'
const Perfomance = () => {

  return (
<div className='overflow-hidden relative'>
  {/* section 1*/}
  <div className='relative h-screen w-screen'>


{/* bg shadow*/}
<div
className=" absolute inset-0 h-[120vh] bg-no-repeat bg-center bg-cover  z-0"
style={{
  backgroundImage: `url('/shadow-1.png')`,
}}
></div>

<div className="relative z-10 h-screen flex flex-col gap-y-4 justify-center items-center">
<h2 className='text-6xl font-semibold font-sans'>
Your Success Our Mission
</h2>
<h3 className='text-6xl font-sans'>
You deserve better.
</h3>
<p className='font-sans font-extralight text-[16px] capitalize tracking-wider text-center max-w-[900px]'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
</p>
<button className=' text-black text-sm px-10 py-3 rounded-full capitalize' style={{
                backgroundImage: 'linear-gradient(to bottom, #D8BD62, #726434)',
              }}>
                explore more
            </button>
</div>


</div>

{/* center perfomance card */}
{/* <DashboardCard className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/> */}


{/* section 2*/}
<div className="relative z-10 h-screen bg-black text-white flex items-center justify-center px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left section */}
        <div className="max-w-xl">
          <h1 className="text-6xl font-sans font-semibold mb-6">
            Lorem Ipsum
            <br />
            Dummy Text
          </h1>
          <p className="text-lg max-w-[400px] font-sans font-extralight tracking-wider mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry make a type specimen book.
          </p>
          <button className=' text-black text-sm px-10 py-3 rounded-full capitalize' style={{
                backgroundImage: 'linear-gradient(to bottom, #D8BD62, #726434)',
              }}>
                explore more
            </button>
        </div>

        {/* Right section - Testimonials */}
        <div className="space-y-12 max-w-md">
          {/* First testimonial */}
          <div className="flex items-start gap-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden p-1"
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
            <div className="bg-clip-text text-transparent text-7xl font-serif"   style={{
                backgroundImage: 'linear-gradient(to bottom, #A57D24, #3F300E)',
              }} >“</div>
          </div>

          {/* Middle testimonial - larger and more to the left */}
          <div className="flex items-start gap-4 -ml-24">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden p-1"
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
            <div className="bg-clip-text text-transparent text-7xl font-serif mr-16 "   style={{
                backgroundImage: 'linear-gradient(to bottom, #A57D24, #3F300E)',
              }} >“</div>
          </div>

          {/* Third testimonial */}
          <div className="flex items-start gap-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden p-1"
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
            <div className="bg-clip-text text-transparent text-7xl font-serif"   style={{
                backgroundImage: 'linear-gradient(to bottom, #A57D24, #3F300E)',
              }} >“</div>
          </div>
        </div>
      </div>
    </div>
</div>
  
  )
}

export default Perfomance