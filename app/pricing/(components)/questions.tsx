"use client"
import { useState } from "react"
import { FaChevronDown } from "react-icons/fa";

const Questions = () => {

    const questions = [
        "I've Experienced Long And Unpredictable Hours In My Previous Roles.",
        "I've Experienced Long And Unpredictable Hours In My Previous Roles.",
        "I've Experienced Long And Unpredictable Hours In My Previous Roles.",
        "I've Experienced Long And Unpredictable Hours In My Previous Roles.",
        "I've Experienced Long And Unpredictable Hours In My Previous Roles.",
    ]

    const answers =
        "We Source, Train, And Assemble Your New Team In As Little As 2 Weeks. Once You Go Live, We Continuously Work To Ensure You Hit KPIs."


    const [openQues, setOpenQues] = useState(0)

    const toggleQues = (index: number) => {
        setOpenQues(openQues === index ? -1 : index)
    }

    return (
        <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center gap-y-8 lg:py-18 py-16 lg:px-36 px-6">
            <div className="flex flex-col gap-y-3">
                <h2 className="lg:text-5xl text-2xl capitalize text-center lg:text-left font-semibold tracking-wide  transform scale-y-110 font-sans">frequently asked questions</h2>
                <p className=" text-center font-sans lg:text-sm text-xs font-extralight max-w-[600px] mx-auto tracking-wide">
                    We Source, Train, And Assemble Your New Team In As Little As 2 Weeks.
               
                    Once You Go Live, We Continuously Work To Ensure You Hit KPIs.
                </p>


            </div>

            <div className="lg:w-2/3 lg:space-y-6 space-y-4">
                {questions.map((ques, index) => (
                    <div
                        key={index}
                        className={`border-[0.5px] lg:text-sm text-xs  rounded-lg overflow-hidden ${openQues === index ? 'border-[#D8BD62] bg-[#1E190B]  shadow-[0px_4px_4px_5px_rgba(216,189,98,0.25)]' : "border-[#D8BD62]"
                            }`}
                    >
                        <button
                            onClick={() => toggleQues(index)}
                            className="flex justify-between items-center w-full p-4 text-left"
                        >
                            <span className="font-sans  tracking-wide">{ques}</span>
                            <FaChevronDown 
                                className={`transition-transform cursor-pointer duration-200 ${openQues === index ? "transform rotate-180" : ""}`}
                            />
                        </button>
                        {openQues === index && <div className="px-4 pb-3  font-sans font-extralight tracking-wide">{answers}</div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Questions