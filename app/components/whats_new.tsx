import Image from "next/image"

export default function WhatsNew() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col gap-y-4 -mb-24">
        <h1 className="text-6xl max-w-3xl mx-auto font-sans leading-18 ">See What’s New And What’s Next <span className=" font-serif -mx-2 text-5xl">.</span></h1>

        <p className="text-sm font-sans font-extralight tracking-wider capitalize max-w-[520px] mx-auto leading-relaxed">
          Founded In 2018, We Started As A Small Team With Big Dreams. We Recognized The Need For Innovative And
          Effective Solutions That Could Help Businesses Thrive In A Rapidly Evolving Digital World, With A Deep
          Understanding Of The Power Of Creativity And Technology.
        </p>

        <div className=" flex justify-center items-center">   <button className=' text-black cursor-pointer text-sm px-10 py-3 rounded-full capitalize' style={{
                backgroundImage: 'linear-gradient(to bottom, #D8BD62, #726434)',
              }}>
                speak to an expert
            </button>
        </div>
        </div>
        <div className="flex gap-4 mb-8 justify-center">
          {/* First image - larger/taller */}
          <div className="w-1/4 overflow-hidden  h-full">
            <Image
              src="/new-1.png"
              alt="Business meeting with presentation"
              width={240}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second image - smaller */}
          <div className="w-1/4 overflow-hidden h-full self-end">
            <Image
              src="/new-2.png"
              alt="People discussing in modern office"
              width={240}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Third image - smaller */}
          <div className="w-1/4 overflow-hidden h-full self-end">
            <Image
              src="/new-3.png"
              alt="Person working on laptop with digital overlay"
              width={240}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Fourth image - larger/taller */}
          <div className="w-1/4 overflow-hidden h-full">
            <Image
              src="/new-4.png"
              alt="Modern office workspace"
              width={240}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center space-x-2">
          <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
          <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
          <div className="w-8 h-1 bg-yellow-500 rounded-full"></div>
          <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
          <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
