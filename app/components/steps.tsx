"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function Steps() {
  const [openStep, setOpenStep] = useState(0)

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? -1 : index)
  }

  const steps = [
    "I've Experienced Long And Unpredictable Hours In My Previous Roles.",
    "I've Experienced Long And Unpredictable Hours In My Previous Roles.",
    "I've Experienced Long And Unpredictable Hours In My Previous Roles.",
    "I've Experienced Long And Unpredictable Hours In My Previous Roles.",
    "I've Experienced Long And Unpredictable Hours In My Previous Roles.",
  ]

  const stepContent =
    "We Source, Train, And Assemble Your New Team In As Little As 2 Weeks. Once You Go Live, We Continuously Work To Ensure You Hit KPIs."

  return (
    <div className="bg-black text-white h-screen flex flex-col justify-center  gap-y-8 lg:py-10 py-16 lg:px-36 px-6">
      <div className="flex flex-col gap-y-3">
        <h1 className="lg:text-4xl text-2xl text-center lg:text-left font-semibold tracking-wide  transform scale-y-110 font-sans">Launch In 5 Easy Steps</h1>
        <p className=" text-center lg:text-left mb-6 font-sans lg:text-sm text-xs font-extralight tracking-wide">
          We Source, Train, And Assemble Your New Team In As Little As 2 Weeks.
          <br className="lg:block hidden"/>
          Once You Go Live, We Continuously Work To Ensure You Hit KPIs.
        </p>

        
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center  gap-x-10">
          <div className=" rounded-3xl overflow-hidden lg:block hidden">
            <Image
              src="/steps-image.png"
              alt="Team members discussing work in an office"
              width={1000}
              height={1200}
              className="w-auto h-[400px] object-cover"
            />
          </div>

          <div className="lg:w-2/3 lg:space-y-3 space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`border-[0.5px] lg:text-sm text-xs  rounded-lg overflow-hidden ${
                  openStep === index ? 'border-[#D8BD62] bg-[#1E190B]  shadow-[0px_4px_4px_5px_rgba(216,189,98,0.25)]' : "border-[#D8BD62]"
                }`}
              >
                <button
                  onClick={() => toggleStep(index)}
                  className="flex justify-between items-center w-full p-4 text-left"
                >
                  <span className="font-sans  tracking-wide">{step}</span>
                  <ChevronDown
                    className={`transition-transform cursor-pointer duration-200 ${openStep === index ? "transform rotate-180" : ""}`}
                  />
                </button>
                {openStep === index && <div className="px-4 pb-3  font-sans font-extralight tracking-wide">{stepContent}</div>}
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
