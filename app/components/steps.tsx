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
    <div className="bg-black text-white h-screen flex flex-col justify-between  py-10 px-20">
      <div >
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Launch In 5 Easy Steps</h1>
        <p className=" mb-8">
          We Source, Train, And Assemble Your New Team In As Little As 2 Weeks.
          <br />
          Once You Go Live, We Continuously Work To Ensure You Hit KPIs.
        </p>

        
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center  gap-x-10">
          <div className=" rounded-3xl overflow-hidden">
            <Image
              src="/steps-image.png"
              alt="Team members discussing work in an office"
              width={1000}
              height={1200}
              className="w-auto h-[400px] object-cover"
            />
          </div>

          <div className="md:w-1/2 space-y-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`border text-sm  rounded-lg overflow-hidden ${
                  openStep === index ? "border-yellow-600 bg-[rgba(255,200,0,0.1)]" : "border-gray-700"
                }`}
              >
                <button
                  onClick={() => toggleStep(index)}
                  className="flex justify-between items-center w-full p-4 text-left"
                >
                  <span>{step}</span>
                  <ChevronDown
                    className={`transition-transform duration-200 ${openStep === index ? "transform rotate-180" : ""}`}
                  />
                </button>
                {openStep === index && <div className="p-3 pt-0 text-sm">{stepContent}</div>}
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
