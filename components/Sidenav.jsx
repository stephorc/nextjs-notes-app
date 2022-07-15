import React from 'react';
import Image from 'next/image';
import Logo from '../public/favicon.png';
import { BsPlusCircleFill } from 'react-icons/bs';

const Sidenav = () => {
  return (
    <header className='w-full h-screen fixed'>
      <div className='flex flex-col justify-between'>
        <div className='flex items-center p-4 bg-teal-600 text-white font-bold z-50 xl:pl-16'>
          <Image
            src={Logo}
            alt='Scribe'
            width='60'
            height='60'
          />
          <h1 className='cursor-pointer text-5xl uppercase tracking-widest'>Scribe</h1>
        </div>
        <div className='flex flex-col items-center justify-evenly p-4 w-fit h-screen bg-slate-100 md:px-16 lg:px-24 xl:px-40'>
          <ul className='flex flex-col items-center justify-evenly gap-10'>
            {/* <li>Account</li> */}
            <li className='sm:py-2 md:py-5 text-xl cursor-pointer'>Search</li>
            <li className='sm:py-2 md:py-5 text-xl cursor-pointer'>Recent</li>
            <li className='sm:py-2 md:py-5 text-xl cursor-pointer'>My Notes</li>
            <li className='sm:py-2 md:py-5 text-xl cursor-pointer'>Calendar</li>
            <li className='sm:py-2 md:py-5 text-xl cursor-pointer'>Trash</li>
            <li className='sm:py-2 md:py-5 text-xl cursor-pointer'>Settings</li>
          </ul>
          <div className='pb-10 sm:pb-0 md:pt-10'>
            <BsPlusCircleFill
              size={50}
              className='text-teal-600 cursor-pointer rounded-full shadow-xl shadow-gray-400'
            />
            {/* <div className='absoulte bottom-0 left-0 right-0 border-t-2 border-dashed border-teal-600 bg-teal-600/10 p-0 z-40 w-full h-full'></div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Sidenav;