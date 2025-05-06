"use client"

import { useState } from "react"
import Image from "next/image"

export default function DashboardCard({className}:{className:string}) {
  const [topScore, setTopScore] = useState(10)
  const [bottomScore, setBottomScore] = useState(31)

  return (

<div className={className}>
      <div className="relative w-full max-w-4xl bg-black border border-amber-600/20 rounded-3xl overflow-hidden px-20 pt-24">
        {/* Top section with 2 WEEKS */}
        <div className="absolute top-0 left-16 right-0 bottom-0">
          <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-full rounded-tl-none rounded-tr-none w-60 h-40 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">2 WEEKS</h1>
          </div>
        </div>

        {/* Middle section with circles */}
        <div className="flex justify-end mb-8">
          <div className="flex items-center space-x-8">
            {/* First circle */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full border border-amber-500 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-amber-500 text-xs">SELECT</p>
                  <p className="text-amber-500 text-xs">TEAM</p>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full border border-amber-500 bg-black"></div>
            </div>

            {/* Connecting line */}
            <div className="w-16 h-0.5 bg-amber-500"></div>

            {/* Second circle */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full border border-amber-500 flex items-center justify-center">
                <p className="text-amber-500 text-sm">LAUNCH</p>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full border border-amber-500 bg-black"></div>
            </div>

            {/* Connecting line */}
            <div className="w-16 h-0.5 bg-amber-500"></div>

            {/* Third circle */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full border border-amber-500 flex items-center justify-center">
                <p className="text-amber-500 text-sm">ITERATE</p>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full border border-amber-500 bg-black"></div>
            </div>
          </div>
        </div>

        {/* Bottom section with profile and stats */}
        <div className="flex items-start space-x-6">
          {/* Profile image */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-amber-200 overflow-hidden border-4 border-white">
              <div className="w-full h-full relative">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Profile"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="flex-1 space-y-6">
            {/* First stat card */}
            <div className="relative bg-black border border-amber-600/30 rounded-xl p-4">
              <div className="mb-2">
                <p className="text-amber-500 font-semibold">ACCURACY SCORE</p>
              </div>
              <div className="w-full bg-amber-900/30 rounded-full h-3 mb-2">
                <div
                  className="bg-gradient-to-r from-amber-400 to-amber-600 h-3 rounded-full"
                  style={{ width: `${topScore * 3}%` }}
                ></div>
              </div>
              <div>
                <p className="text-white font-semibold">DATA</p>
              </div>

              {/* Percentage circle */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 rounded-full border-4 border-amber-500"></div>
                  <div className="absolute inset-1 rounded-full bg-black flex items-center justify-center">
                    <p className="text-white font-bold text-xl">{topScore}%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second stat card */}
            <div className="relative bg-black border border-blue-600/30 rounded-xl p-4">
              <div className="mb-2">
                <p className="text-amber-500 font-semibold">ACCURACY SCORE</p>
              </div>
              <div className="w-full bg-amber-900/30 rounded-full h-3 mb-2">
                <div
                  className="bg-gradient-to-r from-amber-400 to-amber-600 h-3 rounded-full"
                  style={{ width: `${bottomScore * 3}%` }}
                ></div>
              </div>
              <div className="flex justify-between">
                <p className="text-white font-semibold">DATA</p>
                <p className="text-white font-semibold">08 MIN 34 SEC</p>
              </div>

              {/* Percentage circle */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 rounded-full border-4 border-amber-500"></div>
                  <div className="absolute inset-1 rounded-full bg-black flex items-center justify-center">
                    <p className="text-white font-bold text-xl">{bottomScore}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
  
  )
}
