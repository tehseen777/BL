import React from 'react'
import Image from 'next/image'
import Button from '@/app/components/ui/button'
import { IoSearch } from "react-icons/io5";
const Global = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-black'>
            <div className='container flex px-28'>
                <div className="w-1/2 flex flex-col lg:gap-y-4 gap-y-1 justify-between py-2 items-center lg:items-start">
                <div className='flex flex-col lg:gap-y-4 gap-y-1 justify-center items-center lg:items-start'>
                    <h1 className="lg:text-6xl text-2xl font-sans font-medium leading-16 tracking-wide capitalize transform scale-y-105 ">
                        Global, 24/7
                        <br className='hidden lg:block' />
                        operations
                    </h1>
                    <p className="text-sm max-w-[450px] font-sans text-center leading-6 mb-4 lg:mb-0 lg:text-left font-extralight tracking-wider ">
                        Expert customer support coverage with strategic hubs across four continents. We scale your CX operations whenever and wherever you need, from the Americas to Asia-Pacific.
                    </p>
                    <div className='flex'>
                        <Button text='explore more' className=' lg:px-6' />
                    </div>
                    </div>
                    <div className="w-full max-w-[400px]">
                        <div className="flex rounded-lg overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search Your Location..."
                                className="flex-grow py-3 px-4 text-sm placeholder:text-sm text-gray-500  bg-white outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-b from-[#D8BD62] to-[#726434] px-4 flex items-center justify-center"
                            >
                             <IoSearch className="h-8 w-8 text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                <Image alt='' src={"/map.png"} height={1000} width={1000} className='w-1/2' />
            </div>
        </div>
    )
}

export default Global