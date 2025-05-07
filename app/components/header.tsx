import Link from 'next/link';
import React from 'react'

const Header = () => {
    return (
        <nav className='absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-transparent'>
            <div className='text-2xl font-bold bg-clip-text text-transparent uppercase' 
              style={{
                backgroundImage: 'linear-gradient(to right, #866935, #CEA251)',
              }}>
                Business <br /> lounge
            </div>

            <div className="relative">
  <div className="flex gap-8 pb-[3px] tracking-widest">
    <span className="uppercase text-[12px]"><Link href="/">Solutions</Link></span>
    <span className="uppercase text-[12px]"><Link href="/">Industries</Link></span>
    <span className="uppercase text-[12px]"><Link href="/">our agents</Link></span>
    <span className="uppercase text-[12px]"><Link href="/">pricing company</Link></span>
    <span className="uppercase text-[12px]"><Link href="/">resources</Link></span>
  </div>

  {/* Gradient bottom border */}
<div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-[#CEA251] to-[#685229]"></div>
</div>

            <div>
                <button className=' text-black text-sm cursor-pointer px-6 py-2 rounded-full capitalize'  style={{
                backgroundImage: 'linear-gradient(to right, #AD974E, #674C19)',
              }}>get started</button>
            </div>
        </nav>
    )
}

export default Header;
