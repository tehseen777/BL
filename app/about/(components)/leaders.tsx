import Button from "@/app/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Leaders() {
  return (
    <section className="bg-black text-white py-16 px-4 overflow-hidden">
      <div >
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-6xl font-sans transform scale-110 capitalize tracking-wide   mb-6">Our Leadership</h2>
   <p className='font-sans font-extralight lg:text-base text-xs capitalize tracking-wider mx-auto text-center lg:max-w-[900px] max-w-[300px]'>
            Qp X Qs → MPO. It's An Equation We've Consistently Harnessed To Deliver Exceptional Results
            <br />
            And Why 95% Of Our Clients Expand Our Scope Within The First 3 Months.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-12">
<Button text="explore more" className="lg:py-3"/>
  
        </div>

        {/* Team Images */}
        <div className="flex gap-3 justify-center  overflow-hidden">
          {/* Using placeholder images - replace with actual team images */}
          <div className="w-24 md:w-28 lg:w-32 h-90 overflow-hidden">
            <Image
              src="/about/leader-1.png"
              alt="Team member"
              width={128}
              height={288}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="w-24 md:w-28 lg:w-32 mt-10 h-90 overflow-hidden">
            <Image
              src="/about/leader-2.png"
              alt="Team member"
              width={128}
              height={288}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="w-24 md:w-28 lg:w-32 h-90 overflow-hidden">
            <Image
              src="/about/leader-3.png"
              alt="Team member"
              width={128}
              height={288}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="w-24 md:w-28 lg:w-32 mt-10 h-90 overflow-hidden">
            <Image
              src="/about/leader-4.png"
              alt="Team member"
              width={128}
              height={288}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="w-24 md:w-28 lg:w-32 h-90 overflow-hidden">
            <Image
              src="/about/leader-5.png"
              alt="Team member"
              width={128}
              height={288}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="w-24 md:w-28 lg:w-32 mt-10 h-90 overflow-hidden">
            <Image
              src="/about/leader-6.png"
              alt="Team member"
              width={128}
              height={288}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="w-24 md:w-28 lg:w-32 h-90 overflow-hidden">
            <Image
              src="/about/leader-7.png"
              alt="Team member"
              width={128}
              height={288}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="w-24 md:w-28 lg:w-32 mt-10 h-90 overflow-hidden">
            <Image
              src="/about/leader-8.png"
              alt="Team member"
              width={128}
              height={288}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="w-24 md:w-28 lg:w-32 h-90 overflow-hidden">
            <Image
              src="/about/leader-9.png"
              alt="Team member"
              width={128}
              height={288}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
