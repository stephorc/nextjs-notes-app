import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../public/favicon.png';
import { BsPlusCircleFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';

const Sidenav = ({ children }) => {
  const router = useRouter();

  const menuItems = [
    {
      href: '/Recent',
      title: 'Recent',
    },
    {
      href: '/Mynotes',
      title: 'My Notes',
    },
    {
      href: '/Calendar',
      title: 'Calendar',
    },
    {
      href: '/Trash',
      title: 'Trash',
    },
    {
      href: '/Settings',
      title: 'Settings',
    },
  ];

  return (
    <div className='w-full h-screen fixed z-30'>
      <div className='flex flex-col justify-between'>
        <header className='flex items-center sticky top-0 p-4 bg-teal-600 text-white font-bold z-50 xl:pl-16'>
          <Link href='/'>
            <Image
              src={Logo}
              alt='Scribe'
              width='60'
              height='60'
              className='cursor-pointer hover:rotate-12 ease-in duration-200'
            />
          </Link>
          <Link href='/'>
            <h1 className='cursor-pointer text-5xl uppercase tracking-widest'>Scribe</h1>
          </Link>
        </header>
        <div className='flex flex-col md:flex-row flex-1'>
          <aside className='bg-slate-100 w-full h-[340px] md:h-screen md:w-60 xl:w-96'>
            <nav>
              <ul>
                {menuItems.map(({ href, title }) => (
                  <li className='m-2' key={title}>
                    <Link href={href}>
                      <a
                        className={`flex p-2 rounded hover:bg-teal-600 cursor-pointer ${
                          router.asPath === href && 'bg-red-500 text-white'
                        }`}
                      >
                        {title}
                      </a>
                    </Link>
                  </li>
                ))}
                <div className='flex flex-row items-center justify-evenly md:justify-center md:flex-col'>
                  <li className='flex items-center justify-center w-[80%] m-2 md:w-full md:mb-4 md:p-2'>
                    <FaSearch size={20} className='text-red-500 mr-2' /> 
                    <input type="text" placeholder='Search' className='rounded p-2 w-full h-full outline-2 outline-teal-600' />
                    {/* border-b-4 border-transparent hover:border-red-500 ease-in duration-200 */}
                  </li>
                  <li className='m-2'>
                    {/* className='border-t-4 border-dashed border-teal-600 bg-teal-600/10 w-full h-full' */}
                    {/* FcPlus */}
                    <BsPlusCircleFill
                      size={50}
                      className='text-teal-600 cursor-pointer rounded-full shadow-xl shadow-gray-400 hover:scale-110 hover:text-red-500 active:scale-95 ease-in duration-200'
                    />
                  </li>
                </div>
              </ul>
            </nav>
          </aside>
          <main className='flex-1'>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;