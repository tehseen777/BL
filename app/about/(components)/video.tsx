"use client"

import { useState, useRef, useEffect } from "react"
import { IoIosPlay } from "react-icons/io";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (video && video.duration) {
      const percent = (video.currentTime / video.duration) * 100
      setProgress(percent)
    }
  }

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 w-full h-[500px] max-w-5xl px-4 ">
        <div className="relative rounded-[100px] overflow-hidden shadow-2xl border border-[#D8BD62]">
          {/* Video element */}
          <video
            ref={videoRef}
            className="w-full aspect-[24/11] object-cover object-center"
            poster="/about/video_poster.png"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={handleTimeUpdate}
          >
            <source src="/about/video-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play button overlay */}
          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
              onClick={handlePlayClick}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#726434] to-[#D8BD62] outline outline-offset-6 outline-[#D8BD62] flex items-center justify-center shadow-lg">
              <IoIosPlay className="w-10 h-10 text-white fill-white" />
              </div>
            </div>
          )}

      
        </div>
      </div>
    </div>
  )
}
