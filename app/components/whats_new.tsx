import Image from "next/image"
import Button from "./ui/button"

export default function WhatsNew() {
  return (
    <div className="lg:h-screen bg-black text-white flex flex-col items-center justify-center px-4 lg:py-16 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col lg:gap-y-4 gap-y-3 lg:-mb-24 -mb-8">
        <h1 className="lg:text-6xl text-3xl max-w-3xl mx-auto font-medium font-sans lg:leading-18 leading-10 ">See What’s New And <br className="lg:hidden block" /> What’s Next <span className=" font-serif lg:-mx-2 lg:text-5xl text-3xl">.</span></h1>

        <p className="lg:text-sm text-xs font-sans font-extralight tracking-wider capitalize lg:max-w-[450px] max-w-[300px] mx-auto leading-relaxed">
          Founded In 2018, We Started As A Small Team With Big Dreams. We Recognized The Need For Innovative And
          Effective Solutions That Could Help Businesses Thrive In A Rapidly Evolving Digital World, With A Deep
          Understanding Of The Power Of Creativity And Technology.
        </p>

        <div className=" flex justify-center items-center"><Button text="explore more" className="lg:py-3"/>
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
