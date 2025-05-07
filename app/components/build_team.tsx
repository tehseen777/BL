import React from 'react'
import Logo_slider from './logo_slider'
const Build_team = () => {
  return (
    <div>
<div className='relative h-screen  flex justify-center items-center'>


<div className='flex justify-center items-center py-10 '>

    {/* background image */}
    <div
className=" absolute inset-0 h-[120vh] bg-no-repeat bg-center bg-cover  z-0"
style={{
backgroundImage: `url('/mountain.png')`,
}}
></div>
<div className='relative z-10 flex flex-col gap-y-10 justify-center items-center '>


<h3 className='text-center text-7xl font-sans max-w-6xl transform scale-y-105 leading-18  '>We integrate seamlessly with technology built for scale & customer excellence.</h3>
<button className=' text-black text-sm text-semibold cursor-pointer px-8 py-3 rounded-full capitalize'style={{
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