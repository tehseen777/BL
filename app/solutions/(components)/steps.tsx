import React from 'react'
import Link from 'next/link'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
const Steps = () => {
    return (
        <div className=' bg-black  text-white lg:h-[600px] flex  justify-center items-center overflow-hidden '>
            <div className=' px-24 flex flex-col gap-y-4'>
                <h2 className='lg:text-4xl text-3xl font-sans font-medium  capitalize lg:leading-16 leading-10'>Why use a Capital Pooling Company to go Public</h2>
                <div className='flex justify-center gap-x-20'>
                    <div className='flex flex-col justify-between'>
                        <p className=' font-sans  font-extralight tracking-wider leading-6 text-xs lg:text-sm lg:max-w-[700px] max-w-[300px]'>Being a publicly listed company can be expensive when considering upfront listing costs, audits, and legal fees. The National Instruments securities rules, TSX exchange guidelines <Link href={"#"} className='underline underline-offset-4 text-[#bda556]'>www.tsx.com/resource/en/47</Link>  and IFRS accounting principals are complex and even overlap at times. Therefore, the key to managing expenses and deal risk in raising the public capital is to find good people to guide you through the process to avoid potential pitfalls.</p>

                        <Link href={"#"} className='flex items-center gap-x-4'>
                            <p className=' font-sans  font-extralight tracking-wider text-xs lg:text-base lg:max-w-[700px] max-w-[300px]'>LEARN AREAS OF OUR EXPERTISE </p>
                            <HiOutlineArrowLongRight size={25} className='transform scale-x-200' />

                        </Link>
                    </div>

                    <div className='flex flex-col gap-y-6'>
                        <p className=' font-sans  font-extralight tracking-wider text-xs lg:text-base lg:max-w-[700px] max-w-[300px]'>CPCs are specific vehicles to get private companies listed on the TSXV Exchange by splitting the IPO process into these two steps:</p>

                        <div className='flex justify-center gap-x-10'>
                            <div className=' bg-gradient-to-b from-[#B99722] to-[#726434] px-8 py-12 rounded-4xl'>
                                <h3 className='lg:text-3xl text-xl font-sans font-medium' >STEP 1</h3>
                               <p className=' font-sans font-extralight tracking-wider text-xs lg:text-sm lg:max-w-[450px]'>
                                    Public listing of CPC shell (with Experienced management team and only cash).
                                </p>
                            </div>

                            <div className=' bg-gradient-to-b from-[#B99722] to-[#726434] px-8 py-12 rounded-4xl'>
                            <h3 className='lg:text-3xl text-xl font-sans font-medium' >STEP 2</h3>
                                <p className=' font-sans font-extralight tracking-wider text-xs lg:text-sm lg:max-w-[450px]'>Qualifying transaction (QT) where an operating business is merged with the CPC with a filling statement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Steps