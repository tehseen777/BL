import React from 'react'
import Image from 'next/image'
import Button from "@/app/components/ui/button"
const Hero_section = () => {
    return (
        <div className='relative h-screen flex flex-col lg:flex-row px-6 lg:px-20 justify-center lg:gap-x-16 gap-y-6 items-center lg:pt-20 pt-10 overflow-hidden'>


            {/* top left png */}
            <div
                className=" absolute hidden lg:block  w-[350px] h-[350px] bg-no-repeat  bg-contain top-30 -left-15 z-0 pointer-events-none"
                style={{
                    backgroundImage: `url('/growth-graphic-1.png')`,
                }}
            ></div>

            {/* bottom right png */}
            <div
                className=" absolute hidden lg:block  w-[350px] h-[350px] bg-no-repeat  bg-contain bottom-10 -right-50 z-0 pointer-events-none"
                style={{
                    backgroundImage: `url('/growth-graphic-2.png')`,
                }}
            ></div>

            {/* right png mobile */}
            <div
                className=" block lg:hidden absolute   w-[100px] h-[100px] bg-no-repeat  bg-contain top-10 -right-10 z-0 pointer-events-none"
                style={{
                    backgroundImage: `url('/hero-graphic-2.png')`,
                }}
            ></div>

            {/* left png mobile */}
            <div
                className=" block lg:hidden absolute   w-[100px] h-[100px] bg-no-repeat rotate-180  bg-contain top-10 -left-10 z-0 pointer-events-none"
                style={{
                    backgroundImage: `url('/hero-graphic-2.png')`,
                }}
            ></div>



            <div>
                <Image src="/solutions/hero_image.png" alt="hero_image" width={1200} height={1000} className='lg:w-[400px] w-[240px] h-auto' />
            </div>

            <div className=' flex flex-col lg:gap-y-3 gap-y-2'>
                <p className='text-[#D8BD62] font-sans tracking-wider uppercase text-center text-xl  lg:text-left'>solutions</p>
                <h2 className='lg:text-6xl text-4xl leading-16 font-sans font-medium  capitalize text-center lg:text-left '>Customer Support <br />Outsourcing</h2>
                <p className='text-white lg:max-w-[400px] max-w-[270px] leading-6 font-sans font-extralight text-sm capitalize tracking-wider text-center lg:text-left'>Qp x Qs → MPO. It’s an equation we’ve consistently harnessed to deliver exceptional results and why 95% of our clients expand our scope within the first 3 months.</p>
                <div className='flex justify-center lg:justify-start'>
                    <Button text="get started" />
                </div>

            </div>


        </div>
    )
}

export default Hero_section