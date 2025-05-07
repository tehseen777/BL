'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { GoStarFill } from "react-icons/go";
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Hanna Caliba',
    role: 'Marketing Manager',
    image: '/peoples/hanna.png',
    stars: 5,
    review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Julia Morgan',
    role: 'Marketing Manager',
    image: '/peoples/julia.png',
    stars: 5,
    review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Jems Login',
    role: 'Marketing Manager',
    image: '/peoples/james.png',
    stars: 5,
    review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Liam Smith',
    role: 'Marketing Manager',
    image: '/peoples/hanna.png',
    stars: 5,
    review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',

  },
  {
    name: 'Olivia Brown',
    role: 'Marketing Manager',
    image: '/peoples/julia.png',
    stars: 5,
    review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',

  },
];

const ITEMS_PER_SLIDE = 3;

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(testimonials.length / ITEMS_PER_SLIDE);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * ITEMS_PER_SLIDE;
    return testimonials.slice(start, start + ITEMS_PER_SLIDE);
  };

  return (
    <section className="bg-black text-white py-16 overflow-hidden">
      <h2 className="text-3xl lg:text-6xl font-bold text-center mb-12">
        What Our Clients Say About Us
      </h2>

      <div className="flex justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {getVisibleTestimonials().map((t, idx) => (
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
                      <GoStarFill key={i} className="text-[#F3AE57] text-xl" />
                    ))}
                </div>
                <p className="text-sm text-gray-300">{t.review}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-opacity duration-300 cursor-pointer ${
              i === currentIndex ? 'bg-white opacity-100' : 'bg-white opacity-40'
            }`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
