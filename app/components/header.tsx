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

            <div className='flex gap-8 border-b '>
                <span className='uppercase text-sm'><Link href="/">Solutions</Link></span>
                <span className='uppercase text-sm'><Link href="/">Industries</Link></span>
                <span className='uppercase text-sm'><Link href="/">our agents</Link></span>
                <span className='uppercase text-sm'><Link href="/">pricing company</Link></span>
                <span className='uppercase text-sm'><Link href="/">resources</Link></span>
            </div>

            <div>
                <button className=' text-black text-sm  px-8 py-3 rounded-full capitalize'  style={{
                backgroundImage: 'linear-gradient(to right, #AD974E, #674C19)',
              }}>get started</button>
            </div>
        </nav>
    )
}

export default Header;
