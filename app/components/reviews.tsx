'use client';

import Image from 'next/image';
import React from 'react';
import { GoStarFill } from "react-icons/go";

const testimonials = [
  {
    name: 'HannaCaliba',
    role: 'Marketing Manager',
    image: '/peoples/hanna.png', // Replace with real images
    stars: 5,
    review:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Julia Morgan',
    role: 'Marketing Manager',
    image: '/peoples/julia.png',
    stars: 5,
    review:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Jems Login',
    role: 'Marketing Manager',
    image: '/peoples/james.png',
    stars: 5,
    review:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
];

const Reviews = () => {
  return (
    <section className="bg-black text-white py-16">
      <h2 className="text-3xl lg:text-6xl font-bold text-center mb-12">
        What Our Clients Says About Us
      </h2>

      <div className="flex justify-center flex-wrap gap-8 px-4">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-b from-[#292828] to-[#251515] rounded-xl px-8 py-12 text-center max-w-sm flex flex-col items-center shadow-lg"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border border-gray-500">
              <Image
                src={t.image}
                alt={t.name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-sans">{t.name}</h3>
            <p className="text-sm font-sans text-gray-400 mb-3">{t.role}</p>
            <div className="flex justify-center gap-x-1 mb-4">
              {Array(t.stars)
                .fill(0)
                .map((_, i) => (
                    <GoStarFill key={i} className='text-[#F3AE57] text-xl'/>
                ))}
            </div>
            <p className="text-sm text-gray-300">{t.review}</p>
          </div>
        ))}
      </div>

      {/* Dots (static, for visual only) */}
      <div className="flex justify-center mt-8 gap-2">
        <span className="w-3 h-3 rounded-full bg-white opacity-70"></span>
        <span className="w-3 h-3 rounded-full bg-white opacity-40"></span>
        <span className="w-3 h-3 rounded-full bg-white opacity-40"></span>
      </div>
    </section>
  );
};

export default Reviews;
