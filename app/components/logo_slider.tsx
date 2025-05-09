import React from 'react'
import Image from 'next/image'


const logos = [
  "/logos/white_color/logo-1.png",
  "/logos/white_color/logo-2.png",
  "/logos/white_color/logo-3.png",
  "/logos/white_color/logo-4.png",
  "/logos/white_color/logo-5.png",
  "/logos/white_color/logo-6.png",
  "/logos/white_color/logo-7.png",
  
]


const Logo_slider = ({ background_color }: { background_color: string }) => {
  // Determine the filter to apply based on the background color
  const blendMode = background_color === '#000000' ? 'color' : 'normal';  // Apply color b/ Invert for blue background, no change for red background
  
  return (
    <div className=' max-w-screen'>
      <div className='slider-container' style={{ backgroundColor: background_color }}>
        <div className="slider-track">
          {/* Logos repeated twice for seamless loop */}
          {[...logos, ...logos].map((src, i) => (
            <div className="slider-item" key={i}>
              <Image
                src={src}
                alt={`logo_${i}`}
                width={150}
                height={150}
                className='text-yellow-500 lg:w-[180px] w-[70px] h-full'
                style={{
                  mixBlendMode: blendMode,  // Apply blend mode to adjust logo color
                  filter: background_color === '#000000' ? 'invert(1)  sepia(1) saturate(3) hue-rotate(0deg)' : 'none' // Invert for black background
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Logo_slider