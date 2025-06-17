import React from 'react'
import Image from 'next/image'
import Button from '@/app/components/ui/button'
const Testimonials = () => {
  return (
    <div className="  relative z-10 lg:h-[550px] bg-black text-white justify-center items-center lg:p-16 px-6 py-10 flex flex-col lg:flex-row ">
      {/* bg shadow */}
      <div
        className=" absolute  inset-0  bg-center   lg:h-[550px] bg-no-repeat   bg-cover z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/solutions/bg-2.png')`,
        }}
      ></div>
      <div className=' flex justify-center items-baseline-last z-10 relative'>
        <div className="   flex flex-col lg:flex-row justify-center gap-y-20  gap-x-70">
          {/* Left section */}
          <div className="max-w-xl flex flex-col lg:gap-y-4 gap-y-1 justify-center items-center lg:items-start">
            <h1 className="lg:text-6xl text-2xl font-sans font-medium leading-16 tracking-wide transform scale-y-105 ">
              Lorem Ipsum
              <br className='hidden lg:block' />
              Dummy Text
            </h1>
            <p className="text-base max-w-[350px] font-sans text-center mb-4 lg:mb-0 lg:text-left font-extralight tracking-wider ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry make a type specimen book.
            </p>
            <div className='flex'>
              <Button text='explore more' className=' lg:px-6' />
            </div>
          </div>

          {/* Right section - Testimonials */}
          <div className="space-y-12 max-w-md">
            {/* First testimonial */}
            <div className="flex items-start gap-4 ">
              <div className="relative">
                <div className="lg:w-20 lg:h-20 w-16 h-16 rounded-full overflow-hidden p-[1px]"
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
                <p className="text-gray-300 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry make a type specimen book.
                </p>
              </div>
              <div className="bg-clip-text text-transparent text-5xl lg:mr-8 font-serif" style={{
                backgroundImage: 'linear-gradient(to bottom, #A57D24, #3F300E)',
              }} >“</div>
            </div>

            {/* Middle testimonial - larger and more to the left */}
            <div className="flex items-start gap-4 lg:-ml-28">
              <div className="relative">
                <div className="lg:w-24 lg:h-24 w-16 h-16 rounded-full overflow-hidden p-1"
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
                <p className="text-gray-300 lg:text-base text-xs">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry make a type specimen book.
                </p>
              </div>
              <div className="bg-clip-text text-transparent lg:text-7xl text-5xl font-serif lg:mr-16 " style={{
                backgroundImage: 'linear-gradient(to bottom, #A57D24, #3F300E)',
              }} >“</div>
            </div>

            {/* Third testimonial */}
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="lg:w-20 lg:h-20 w-16 h-16 rounded-full overflow-hidden p-[1px]"
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
                <p className="text-gray-300 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry make a type specimen book.
                </p>
              </div>
              <div className="bg-clip-text lg:mr-8 text-transparent text-5xl font-serif" style={{
                backgroundImage: 'linear-gradient(to bottom, #A57D24, #3F300E)',
              }} >“</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials