import React from 'react'
import Logo_slider from './logo_slider'
const Build_team = () => {
  return (
    <div>
      <div className='relative lg:h-screen  flex justify-center items-center'>


        <div className='flex justify-center items-center py-10 '>

          {/* background image */}
          <div
            className=" absolute inset-0 lg:h-[120vh] bg-no-repeat lg:bg-center bg-cover  z-0"
            style={{
              backgroundImage: `url('/mountain.png')`,
            }}
          ></div>
          <div className='relative z-10 flex flex-col lg:gap-y-10 gap-y-4 justify-center items-center '>


            <h3 className='text-center lg:text-6xl text-xl font-sans max-w-4xl capitalize transform lg:scale-y-105 lg:leading-18 leading-8   '>We integrate seamlessly with <br className='lg:block hidden' /> technology built for scale & <br className='lg:hidden block' />customer excellence.</h3>
            <button className=' text-black lg:text-sm text-xs text-semibold cursor-pointer lg:px-8 px-4 lg:py-3 py-2 rounded-full capitalize' style={{
              backgroundImage: 'linear-gradient(to bottom, #D8BD62, #726434)',
            }}>
              Build your team
            </button>
          </div>

        </div>
      </div>

      <Logo_slider background_color="#000000" />
    </div>
  )
}

export default Build_team