import React from 'react'
import Image from 'next/image'
const Hero = () => {
    return (
        <div className='bg-black flex justify-center items-baseline-last h-[750px]'>
            <div className=' flex flex-col justify-center items-center lg:gap-y-3 gap-y-2'>
                <p className='text-[#D8BD62] font-sans tracking-wider uppercase text-center text-xl  '>industries</p>
                <h2 className='lg:text-6xl text-4xl leading-16 font-sans font-medium capitalize text-center mb-4'>Our All Industries</h2>
                <p className=' font-sans text-center font-extralight tracking-wider text-xs lg:text-base lg:max-w-[1050px] max-w-[300px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <Image  alt='' src={"/industries/hero_image.png"} height={1000} width={1000} className='w-[800px] h-auto'/>
            </div>
        </div>
    )
}

export default Hero