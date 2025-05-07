
import Image from "next/image"

export default function DashboardCard({ className }: { className: string }) {
  const topScore = 10
  const bottomScore = 31

  return (

    <div className={className}>
      <div className="relative w-3xl bg-black border border-[#D8BD62] shadow-[0px_4px_10px_5px_rgba(216,189,98,0.25)] rounded-3xl overflow-hidden px-20 pt-16 pb-10">
        {/* Top section with 2 WEEKS */}
        <div className="absolute top-0 left-20 right-0 bottom-0">
          <div className="bg-gradient-to-b from-[#D8BD62] to-[#726434] rounded-[60px] rounded-tl-none rounded-tr-none w-48 h-34 flex items-center justify-center">
            <h1 className="text-3xl font-semibold text-white">2 WEEKS</h1>
          </div>
        </div>

        {/* Middle section with circles */}
        <div className="flex relative   justify-end mb-8">
          <div className=" flex items-center space-x-6 ">
            {/* First circle */}

            <div className="relative  w-20 h-20 rounded-full border border-[#D8BD62]  bg-[#17130D] flex items-center justify-center">
        
                <p className="text-white text-center text-xs">SELECT <br /> TEAM</p>
          

            </div>

            {/* Second circle */}

            <div className="relative  w-20 h-20 rounded-full border border-[#D8BD62]  bg-[#17130D] flex items-center justify-center">
              <p className="text-white text-center text-xs">LAUNCH <br /> TEAM</p>
            </div>



            {/* Third circle */}

            <div className="relative  w-20 h-20 rounded-full border border-[#D8BD62]  bg-[#17130D] flex items-center justify-center">
              <p className="text-white text-center text-xs">ITERATE <br /> TEAM</p>
            </div>

                 {/* arrows */}
                 <div className=' absolute top-1/2 -translate-y-1/2 flex justify-center   items-center '>
    <Image src="/vectors/vector-3.png" alt="growth" width={1000} height={1000} className='w-40 h-28 -mr-14 -ml-3' />
    <Image src="/vectors/vector-4.png" alt="growth" width={1000} height={1000} className='w-42 h-30  -mr-5' />
    <Image src="/vectors/vector-5.png" alt="growth" width={1000} height={1000} className='w-16 h-28  ' />
</div>

          </div>
        </div>



        {/* Bottom section with profile and stats */}
        <div className="flex flex-col gap-y-4 px-10">
          <div className=" flex items-center justify-between">
            {/* Profile image */}
            <div className="w-24 h-24 rounded-full bg-amber-200 overflow-hidden border-1 border-white">
              <div className="w-full h-full relative">
                <Image
                  src="/peoples/mark.png"
                  alt="Profile"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>

            </div>

            {/* First stat card */}
            <div className="relative w-[75%] bg-gradient-to-b from-[#201703] to-[#161106] border border-[#D8BD62] rounded-xl px-6 py-4">
              <div className="mb-2">
                <p className="text-white  text-[12px]">ACCURACY SCORE</p>
              </div>
              <div className="w-[90%] bg-[#726434] rounded-full h-2 mb-2">
                <div
                  className=" bg-gradient-to-b from-[#D8BD62] to-[#726434] h-2 rounded-full"
                  style={{ width: `${topScore * 3}%` }}
                ></div>
              </div>
              <div>
                <p className="text-white  text-[12px]">DATA</p>
              </div>

              {/* Percentage circle */}
              <div className="absolute -right-8 top-1/4 -translate-y-1/2">
                <div className="relative w-18 h-18 rounded-full p-4 bg-gradient-to-b from-[#CB8E1F] to-[#65470F]">
                  <div className="absolute inset-0 "></div>
                  <div className="absolute inset-1 rounded-full bg-[#322D23] flex items-center justify-center">
                    <p className="text-white font-semibold font-sans text-lg">{topScore}%</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div>
            {/* Second stat card */}
            <div className="relative bg-gradient-to-b from-[#201703] to-[#161106] border border-[#D8BD62] rounded-xl px-6 py-4">
              <div className="mb-2">
                <p className="text-white  text-[12px]">ACCURACY SCORE</p>
              </div>
              <div className="w-[90%] bg-[#726434] rounded-full h-2 mb-2">
                <div
                  className=" bg-gradient-to-b from-[#D8BD62] to-[#726434] h-2 rounded-full"
                  style={{ width: `${bottomScore * 3}%` }}
                ></div>
              </div>
              <div className="flex justify-between w-[90%]">
                <p className="text-white  text-[12px]">DATA</p>
                <p className="text-white  text-[12px]">08 MIN 34 SEC</p>
              </div>

              {/* Percentage circle */}
              <div className="absolute -right-8 top-1/4 -translate-y-1/2">
                <div className="relative w-18 h-18 bg-gradient-to-b from-[#CB8E1F] to-[#65470F] rounded-full p-4">
                  <div className="absolute inset-0 rounded-full  "></div>
                  <div className="absolute inset-1 rounded-full bg-[#322D23] flex items-center justify-center">
                    <p className="text-white font-semibold font-sans text-lg">{bottomScore}%</p>
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
