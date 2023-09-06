// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { Search } from './Search.js';
import { MyDropdown } from './MyLink.js';
import { toggleMobileMenu } from '../functions/toggle.js';
import Image from 'next/image';
import Logo from '../images/LogenO.png'
import 'tailwindcss/tailwind.css'






const Layout = ({ categories, children, posts, onSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <nav className='flex items-center flex-wrap bg-slate-900 p-3 z-10  overflow-visible	'>
        <Link href='/'>
          <div className='inline-flex items-center p-2 mr-4 '>
          <Image
           src={Logo}
           alt="logo"
           style={{width: "80px"}}/>
         
          </div>
        </Link>
        <button
          onClick={() => toggleMobileMenu(mobileMenuOpen, setMobileMenuOpen)}
          className=' inline-flex p-3 hover:bg-gray-900 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            mobileMenuOpen
              ? 'block'
              : 'hidden'
          } w-full lg:inline-flex lg:flex-grow lg:w-auto lg:flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto `}
        >
          <div className={!mobileMenuOpen ? 'ml-auto flex' : ''}>
          <Link href='/'>
            <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
              Home
            </div>
          </Link>
          <MyDropdown categories={categories} mobileMenuOpen={mobileMenuOpen} />
          <Search posts={posts} onSearch={onSearch} />
          </div>
          </div>
        
      </nav>
      <Head>
        <title>wproductions</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
    </div>
  );
};

export default Layout;

