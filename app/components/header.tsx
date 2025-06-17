import Link from 'next/link';
import React from 'react'
import MobileMenu from './ui/mobileMenu'

const Header = () => {
  return (
    <nav className='absolute top-0 left-0 right-0 z-50 flex justify-between items-center lg:p-6 p-3 bg-transparent'>
      <div className='lg:text-2xl text-sm lg:font-bold font-semibold bg-clip-text text-transparent uppercase'
        style={{
          backgroundImage: 'linear-gradient(to right, #866935, #CEA251)',
        }}>
        <Link href={"/"}>Business <br className='lg:block hidden'/> lounge</Link>
      </div>

      {/* <div className="relative"> */}
      <div className="lg:flex gap-8 hidden items-center tracking-widest">
        <span className="text-white uppercase font-sans text-[12px] hover:bg-gradient-to-r from-[#CEA251] to-[#685229] bg-clip-text hover:text-transparent"><Link href="/solutions">Solutions</Link></span>
        <span className="text-white uppercase font-sans text-[12px] hover:bg-gradient-to-r from-[#CEA251] to-[#685229] bg-clip-text hover:text-transparent"><Link href="/industries">Industries</Link></span>
        <span className="text-white uppercase font-sans text-[12px] hover:bg-gradient-to-r from-[#CEA251] to-[#685229] bg-clip-text hover:text-transparent "><Link href="pricing">pricing company</Link></span>
        <span className="text-white uppercase font-sans text-[12px] hover:bg-gradient-to-r from-[#CEA251] to-[#685229] bg-clip-text hover:text-transparent "><Link href="resources">resources</Link></span>
        <span className="text-white uppercase font-sans text-[12px] hover:bg-gradient-to-r from-[#CEA251] to-[#685229] bg-clip-text hover:text-transparent "><Link href="/about">About</Link></span>
      </div>

      {/* Gradient bottom border */}
      {/* <div className="absolute left-0 bottom-0 w-full h-[0.2px] bg-gradient-to-r from-[#CEA251] to-[#685229]"></div> */}
      {/* </div> */}

      <div className='lg:flex hidden'>
        <button className=' text-black text-sm font-sans font-medium cursor-pointer px-6 py-2 rounded-full capitalize' style={{
          backgroundImage: 'linear-gradient(to right, #AD974E, #674C19)',
        }}>get started</button>
      </div>
      <MobileMenu className='lg:hidden flex items-center' />
    </nav>
  )
}

export default Header;
