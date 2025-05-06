'use client';

import Image from 'next/image';
import React from 'react';

const images = [
  '/new-1.png',
  '/new-2.png',
  '/new-3.png',
  '/new-4.png',
];

const WhatsNew = () => {
  return (
    <section className="bg-black  text-white py-16 px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-4">
          See What’s New And What’s Next.
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Founded in 2018, We Started As A Small Team With Big Dreams. We Recognized The Need For Innovative And Effective Solutions That Could Help Businesses Thrive In A Rapidly Evolving Digital World. With A Deep Understanding Of The Power Of Creativity And Technology.
        </p>
        <button className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-[#866935] to-[#CEA251] text-black font-semibold transition hover:opacity-90">
          Speak To An Expert
        </button>
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-[40px] w-[200px] md:w-[250px] lg:w-[280px] h-[320px] relative">
            <Image
              src={src}
              alt={`new-${index}`}
              layout="fill"
              objectFit="cover"
              className="rounded-[40px]"
            />
          </div>
        ))}
      </div>

      {/* Slider Dots (static for visual effect) */}
      <div className="flex justify-center mt-8 gap-2">
        <span className="w-3 h-1.5 rounded-full bg-white opacity-30"></span>
        <span className="w-3 h-1.5 rounded-full bg-white opacity-30"></span>
        <span className="w-6 h-1.5 rounded-full bg-gradient-to-r from-[#866935] to-[#CEA251]"></span>
        <span className="w-3 h-1.5 rounded-full bg-white opacity-30"></span>
        <span className="w-3 h-1.5 rounded-full bg-white opacity-30"></span>
      </div>
    </section>
  );
};

export default WhatsNew;
