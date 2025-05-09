"use client"

import { useEffect, useState } from "react"
import { CgMenuRight } from "react-icons/cg"
import { RxCross1 } from "react-icons/rx"
import Link from "next/link"
const navItems = [
  {name:"Home",
    link:"/"
  },
  {name:"solutions",
    link:"/solutions"
  },
  {name:"industries",
    link:"/industries"
  },
  {name:"our agents",
    link:"/our agents"
  },
  {name:"pricing company",
    link:"/pricing company"
  },
  {name:"resources",
    link:"/resources"
  }
]
export default function MobileMenu( {className}:{className:string}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e:KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }

    const handleClickOutside = (e:MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest(".sheet")) setOpen(false)
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [open])

  return (
    <>
      <div className={`${className}`} >
        <button onClick={() => setOpen(true)} className="lg:hidden block">
          <CgMenuRight size={32} className="text-[#C69B4D]"/>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Sheet */}
      <div
        className={`sheet fixed top-0 right-0 h-full w-64 z-50 bg-gradient-to-r from-[#c2a442] via-[#b69835] to-[#a58a32] shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Menu"
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-black"
        >
          <RxCross1 className="h-5 w-5" />
          
        </button>
        <div className="px-6 py-4 flex flex-col gap-y-10">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <span
                key={item.name}
                onClick={() => setOpen(false)}
                className="text-base text-white hover:text-blue-600 cursor-pointer"
              >
                <Link href={item.link}>{item.name}</Link>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
