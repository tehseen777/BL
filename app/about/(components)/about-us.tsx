import Logo_slider from '@/app/components/logo_slider'
import Button from '@/app/components/ui/button'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='  bg-black h-screen flex flex-col justify-between'>
    <div className='flex flex-col lg:gap-y-5 gap-y-3 justify-center items-center lg:py-28'>
  
    <div className='flex flex-col lg:gap-y-2 gap-y-0 justify-center items-center'>
    <p className='uppercase text-3xl text-[#CB8E1F] font-sans'>about us</p>
  <h2 className='lg:text-7xl text-2xl capitalize text-center leading-20  font-sans tracking-wide'>
  We've Decoded the <br /> Science of Excellence.
  </h2>
 
  </div>
  <p className='font-sans font-extralight lg:text-base text-xs capitalize tracking-wider text-center lg:max-w-[900px] max-w-[300px]'>
  Qp x Qs → MPO. It’s an equation we’ve consistently harnessed to deliver exceptional results and why 95% of our clients expand our scope within the first 3 months.
  </p>
<Button text="explore more" className='lg:py-3'/>
  </div>
  <Logo_slider background_color='black'/>
  </div>
  )
}

export default AboutUs