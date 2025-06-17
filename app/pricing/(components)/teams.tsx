import React from 'react'
import { MdOutlineCheckCircleOutline } from "react-icons/md";
const Teams = () => {
    const team_skills = [
        "Omnichannel support",
        "365/24/7 coverage in 60+ languages",
        "Minimum 3 years work experience",
        "100% dedicated to your account",
        "Onboarding, Management, QA, Training, WFM included",
        "Customer Support, Trust & Safety & AI Automation",
        "Team lead(s) included",
        "Seasonal & holiday support",
        "Regular reports & insights",
        "Trained backup agents"
    ];

    return (
        <div className='flex justify-center  h-screen bg-black'>
            <div className='flex flex-col gap-y-10'>
                <div className='relative z-10 flex flex-col gap-y-3 justify-center items-center py-20 lg:py-0 '>
                    <h2 className='lg:text-6xl text-3xl font-sans font-medium text-center capitalize lg:leading-16 leading-10'>Outsourced Support, <br /> In-House Feel</h2>
                    <p className=' font-sans text-center font-extralight tracking-wider text-xs lg:text-base lg:max-w-[700px] max-w-[300px]'>Never miss a ping again. We build fully managed teams who embody your voice, align with your values, and bring deep expertise to every customer interaction..</p>
                </div>
                <div className='bg-gradient-to-b from-[#B99722] to-[#726434] max-w-5xl p-6 rounded-3xl transform scale-[0.9]'>
                    <div className='bg-white rounded-2xl p-4 text-black flex gap-x-12'>

                        <div className='w-1/3 flex justify-center items-center'>
                            <div className='flex flex-col w-full gap-y-6 justify-center items-center p-4 border-r-3 border-red-50'>
                                <h4 className=' text-4xl font-sans  text-center capitalize  leading-10'>dedicated teams</h4>
                                <div>
                                    <p className=' font-sans text-center font-medium tracking-wider text-xs lg:text-base '>Starting at</p>
                                    <p className=' font-sans text-center font-bold  text-4xl '>$11/hr</p>
                                    <p className=' font-sans text-center font-medium tracking-wider text-xs lg:text-base '>per agent</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-2/3 p-4 flex flex-col gap-y-6'>
                        <p className=' font-sans font-semibold tracking-wide text-sm lg:text-lg '>Full-time, rigorously vetted teams, month-to-month contracts</p>
                            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                                {team_skills.map((team_skill, idx) => <div key={idx} className='flex items-start gap-3 '>
                                    <MdOutlineCheckCircleOutline className="text-black font-bold  min-w-7 min-h-7" />
                                    <span className=' font-sans  tracking-wider text-xs lg:text-base '>{team_skill}</span>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teams