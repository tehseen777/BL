import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full bg-black text-white px-6 lg:px-20 lg:pt-20 pt-10'>

            {/* Footer Main Content */}
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-12 pb-10 text-sm'>

                {/* Brand (Span 2 Columns on Large Screens) */}
                <div className='lg:col-span-2'>
                    <h3 className='bg-clip-text bg-gradient-to-r from-[#866935] to-[#CEA251] text-transparent font-bold text-xl mb-2'>BUSINESS LOUNGE</h3>
                    <p className='text-gray-300 mb-4 font-sans max-w-[300px] font-extralight tracking-widest text-sm'>
                        It has survived not only five centuries, but also the leap into electronic.
                    </p>

                    <div className='flex  text-white'>
                        <div className='pr-3 border-r border-gray-600 '>
                            <FaInstagram className='cursor-pointer hover:text-[#CEA251] text-xl' />
                        </div>
                        <div className='px-3 border-r border-gray-600 '>
                            <FaTwitter className='cursor-pointer hover:text-[#CEA251] text-xl' />
                        </div>
                        <div className='px-3 border-r border-gray-600 '>
                            <FaFacebookF className='cursor-pointer hover:text-[#CEA251] text-xl' />
                        </div>
                        <div className='pl-3 '>
                            <FaLinkedinIn className='cursor-pointer hover:text-[#CEA251] text-xl' />
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className='text-white font-semibold text-lg tracking-wide mb-4 font-sans'>Quick Links</h4>
                    <ul className='space-y-2 text-gray-300 text-sm font-sans font-extralight tracking-wide'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Products</li>
                    </ul>
                </div>

                {/* Find Us */}
                <div>
                    <h4 className='text-white font-semibold text-lg tracking-wide mb-4 font-sans'>Find Us</h4>
                    <p className='text-gray-300 font-sans leading-7 text-sm font-extralight tracking-wide'>
                        50 Brooklyn Golden Street, <br />
                        New York, United States of America
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h4 className='text-white font-semibold text-lg tracking-wide mb-4 font-sans'>Contact</h4>
                    <div className='flex flex-col gap-y-2'>
                    <p className='text-gray-300 text-sm font-sans font-extralight tracking-wide'>Address Lorem Ipsum simply</p>
                    <p className='text-gray-300 text-sm font-sans font-extralight tracking-wide'>812-635-0485</p>
                    <p className='text-gray-300 text-sm font-sans font-extralight tracking-wide'>info@ceobfresh@gmail.com</p>
                </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className='border-t py-6 text-sm text-gray-300 flex flex-col md:flex-row justify-between items-center'>
                <p className='font-sans font-extralight tracking-wide'>© 2023 <span className='text-white'>BusinessLounge</span>... All right reserved.</p>
                <p className='mt-2 md:mt-0 font-sans font-extralight tracking-wide'>Privacy Policy | Terms of Service</p>
            </div>
        </div>
    );
};

export default Footer;
