import Image from "next/image"

export default function Team() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-8 lg:px-16 min-h-screen flex flex-col justify-center">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center mb-20 gap-x-10">
        <div className="lg:w-1/2 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-sans mb-6 leading-14">We&apos;re A Powerhouse With The Brightest Minds.</h2>
          <p className='font-sans font-extralight lg:text-base text-xs capitalize tracking-wider leading-7 lg:max-w-[700px] max-w-[300px]'>
            At Hugo, Only The Most Qualified 4-Year And Advanced Degree Holders Make It Onto Your Live-Mandates. With An
            Acceptance Rate Of 2%, Our Recruitment Process Is On Par With Harvard.
          </p>
        </div>
        <div className="relative">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full  overflow-hidden">
            <Image
              src="/about/team-1.png"
              alt="Professional working on laptop"
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center mb-20 gap-x-10">
        <div className="relative">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full  overflow-hidden">
            <Image
                      src="/about/team-2.png"
              alt="Professional in orange jacket working on laptop"
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="lg:w-1/2 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-sans mb-6 leading-14">We&apos;re A Powerhouse With The Brightest Minds.</h2>
          <p className='font-sans font-extralight lg:text-base text-xs capitalize tracking-wider leading-7 lg:max-w-[700px] max-w-[300px]'>
            At Hugo, Only The Most Qualified 4-Year And Advanced Degree Holders Make It Onto Your Live-Mandates. With An
            Acceptance Rate Of 2%, Our Recruitment Process Is On Par With Harvard.
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-x-10">
      <div className="lg:w-1/2 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-sans mb-6 leading-14">We&apos;re A Powerhouse With The Brightest Minds.</h2>
          <p className='font-sans font-extralight lg:text-base text-xs capitalize tracking-wider leading-7 lg:max-w-[700px] max-w-[300px]'>
            At Hugo, Only The Most Qualified 4-Year And Advanced Degree Holders Make It Onto Your Live-Mandates. With An
            Acceptance Rate Of 2%, Our Recruitment Process Is On Par With Harvard.
          </p>
        </div>
        <div className="relative">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full  overflow-hidden">
            <Image
                           src="/about/team-3.png"
              alt="Professional with glasses working"
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
