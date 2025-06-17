import Image from "next/image"
export default function PopularBlog() {
  return (
    <div className="h-[500px] max-w-screen py-10 text-white bg-black">
      {/* Main Content */}
      <div className="max-w-[1000px] mx-auto">
        {/* Popular Blog Heading */}
        <h1 className="text-5xl  font-bold mb-8">Most Popular Blog</h1>

        {/* Blog Images */}
        <div className="flex items-center gap-4">
          {/* Main Blog Post */}
          <div className="relative h-[330px] w-3/5 border rounded-3xl">
            <Image
              src="/resources/popular_blog_1.png"
              alt="Man working on laptop in office"
              fill
              className="object-cover rounded-3xl  bg-black opacity-50"
            />
            <div className="absolute bottom-0 p-4">
              {/* Blog Meta */}
              <div className="flex items-center text-[#F1DD80] space-x-6 ">
                <span className=" text-sm">December 14, 2023</span>
                <span className="text-sm">101 Comments</span>
              </div>

              {/* Blog Title and Description */}
              <h2 className="text-xl font-semibold leading-relaxed">
                There are many variations of passages of Lorem Ipsum available.
              </h2>

              <p className="tracking-wide capitalize font-sans font-extralight text-[12px] sm:text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed suscipit bibendum justo a aliquam risus consequat eget suspendisse potenti.
              </p>
            </div>
          </div>

          {/* Side Blog Posts */}
          <div className="flex flex-col gap-5 w-1/2">
            {/* First Side Blog Post */}
            <div className="flex gap-x-4 items-center">
              <div className="relative h-[130px] w-[165px] border rounded-2xl">
                <Image
                  src="/resources/popular_blog_2.png"
                  alt="Man working on laptop in office"
                  fill
                  className="object-cover rounded-2xl"
                />
                 </div>
                <div className=" space-y-1 w-2/3">
                  {/* Blog Meta */}
                  <div className="flex items-center text-[#F1DD80] space-x-6 ">
                    <span className=" text-xs">December 14, 2023</span>
                    <span className=" text-xs">101 Comments</span>
                  </div>

                  {/* Blog Title and Description */}
                  <h2 className="text-lg font-semibold  leading-relaxed">
                  Lorem ipsum dolor sit amet 
                  </h2>

                  <p className="tracking-wide capitalize font-sans font-extralight text-[12px] sm:text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipiscing consequat eget suspendisse potenti.
                  </p>
                </div>
             
            </div>

            {/* Second Side Blog Post */}
            <div className="flex gap-x-4 items-center">
              <div className="relative h-[130px] w-[165px] border rounded-2xl">
                <Image
                  src="/resources/popular_blog_3.png"
                  alt="Man working on laptop in office"
                  fill
                  className="object-cover rounded-2xl"
                />
                 </div>
                <div className=" space-y-1 w-2/3">
                  {/* Blog Meta */}
                  <div className="flex items-center text-[#F1DD80] space-x-6 ">
                    <span className=" text-xs">December 14, 2023</span>
                    <span className=" text-xs">101 Comments</span>
                  </div>

                  {/* Blog Title and Description */}
                  <h2 className="text-lg font-semibold  leading-relaxed">
                  Lorem ipsum dolor sit amet 
                  </h2>

                  <p className="tracking-wide capitalize font-sans font-extralight text-[12px] sm:text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipiscing consequat eget suspendisse potenti.
                  </p>
                </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}