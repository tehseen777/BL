
import Image from "next/image"

export default function DashboardCard({ className }: { className: string }) {
  const topScore = 10
  const bottomScore = 31

  return (

    <div className={className}>
      <div className="relative lg:w-[600px] w-[330px] bg-black border border-[#D8BD62] lg:shadow-[0px_4px_10px_5px_rgba(216,189,98,0.25)] shadow-[0px_1px_3px_3px_rgba(216,189,98,0.25)] rounded-3xl overflow-hidden lg:px-10 px-4 lg:pt-12 pt-8 pb-6">
        {/* Top section with 2 WEEKS */}
        <div className="absolute top-0 lg:left-15 left-10 right-0 bottom-0">
          <div className="bg-gradient-to-b from-[#D8BD62] to-[#726434] lg:rounded-[50px] rounded-3xl lg:rounded-t-none rounded-t-none lg:w-44 w-24 lg:h-30 h-18 flex items-center justify-center">
            <h1 className="lg:text-2xl text-sm  lg:font-semibold text-white">2 WEEKS</h1>
          </div>
        </div>

        {/* Middle section with circles */}
        <div className="flex relative   justify-end lg:mb-8 mb-4">
          <div className=" flex items-center lg:space-x-5 space-x-3 ">
            {/* First circle */}

            <div className="relative  lg:w-18 lg:h-18 w-10 h-10 rounded-full border border-[#D8BD62]  bg-[#17130D] flex items-center justify-center">

              <p className="text-white text-center lg:text-xs text-[6px]">SELECT <br /> TEAM</p>


            </div>

            {/* Second circle */}

            <div className="relative  lg:w-18 lg:h-18 w-10 h-10 rounded-full border border-[#D8BD62]  bg-[#17130D] flex items-center justify-center">
              <p className="text-white text-center lg:text-xs text-[6px]">LAUNCH <br /> TEAM</p>
            </div>



            {/* Third circle */}

            <div className="relative  lg:w-18 lg:h-18 w-10 h-10 rounded-full border border-[#D8BD62]  bg-[#17130D] flex items-center justify-center">
                <p className="text-white text-center lg:text-xs text-[6px]">ITERATE <br /> TEAM</p>
              </div>

            {/* arrows */}
            <div className=' absolute top-1/2 -translate-y-1/2 flex justify-center   items-center '>
              <Image src="/vectors/vector-3.png" alt="growth" width={1000} height={1000} className='lg:w-36 w-20 lg:h-24 lg:-ml-2  -ml-1' />
              <Image src="/vectors/vector-4.png" alt="growth" width={1000} height={1000} className='lg:w-34 w-20 lg:h-24 lg:-ml-12 lg:-mr-2  -ml-7' />
              <Image src="/vectors/vector-5.png" alt="growth" width={1000} height={1000} className='lg:w-13 w-[34px] h-14 lg:h-23 lg:-ml-1 lg:-mb-1  -ml-3 mt-1 ' />
            </div>

          </div>
        </div>



        {/* Bottom section with profile and stats */}
        <div className="flex flex-col gap-y-4 lg:pr-16 lg:pl-8 pl-4 pr-2">
          <div className=" flex items-center justify-center gap-x-8">
            {/* Profile image */}
            <div className="lg:w-20 lg:h-20 w-16 h-14 rounded-full bg-amber-200 flex items-center justify-center overflow-hidden border-1 border-white">
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
            <div className="relative w-[75%] bg-gradient-to-b from-[#201703] to-[#161106] border border-[#D8BD62] lg:rounded-xl rounded-full lg:px-5 px-3 lg:py-3 py-2 ">
              <div className="lg:mb-2 mb-1">
                <p className="text-white font-semibold  lg:text-[10px] text-[8px]">ACCURACY SCORE</p>
              </div>
              <div className="w-[90%] bg-[#726434] rounded-full lg:h-2 h-1 mb-2">
                <div
                  className=" bg-gradient-to-b from-[#D8BD62] to-[#726434] lg:h-2 h-1 rounded-full"
                  style={{ width: `${topScore * 3}%` }}
                ></div>
              </div>
              <div className="lg:block hidden">
                <p className="text-white font-semibold  text-[10px]">DATA</p>
              </div>

              {/* Percentage circle */}
              <div className="absolute lg:-right-8 -right-4 top-1/4 -translate-y-1/2">
                <div className="relative lg:w-16 lg:h-16 w-10 h-10 rounded-full lg:p-4 p-2 bg-gradient-to-b from-[#CB8E1F] to-[#65470F]">
                  <div className="absolute inset-0 "></div>
                  <div className="absolute inset-1 rounded-full bg-[#322D23] flex items-center justify-center">
                    <p className="text-white font-semibold font-sans lg:text-[16px] text-[12px]">{topScore}%</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div>
            {/* Second stat card */}
            <div className="relative bg-gradient-to-b from-[#201703] to-[#161106] border border-[#D8BD62] lg:rounded-xl rounded-full lg:px-5 px-4 lg:py-3 py-2">
              <div className="lg:mb-2 mb-1">
                <p className="text-white font-semibold lg:text-[10px] text-[8px]">ACCURACY SCORE</p>
              </div>
              <div className="w-[90%] bg-[#726434] rounded-full lg:h-2 h-1 lg:mb-2 mb-1">
                <div
                  className=" bg-gradient-to-b from-[#D8BD62] to-[#726434] lg:h-2 h-1 rounded-full"
                  style={{ width: `${bottomScore * 3}%` }}
                ></div>
              </div>
              <div className="flex justify-between w-[90%]">
                <p className="text-white font-semibold lg:text-[10px] text-[8px]">DATA</p>
                <p className="text-white font-semibold lg:text-[10px] text-[8px]">08 MIN 34 SEC</p>
              </div>

              {/* Percentage circle */}
              <div className="absolute lg:-right-8 -right-4 top-1/4 -translate-y-1/2">
                <div className="relative lg:w-16 lg:h-16 w-10 h-10 rounded-full lg:p-4 p-2 bg-gradient-to-b from-[#CCB25C] to-[#65470F]">
                  <div className="absolute inset-0 rounded-full  "></div>
                  <div className="absolute inset-1 rounded-full bg-[#322D23] flex items-center justify-center">
                    <p className="text-white font-semibold font-sans lg:text-[16px] text-[12px]">{bottomScore}%</p>
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
