"use client";
import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { PiBirdFill } from 'react-icons/Pi';

import {signIn, signOut, useSession, getProviders} from 'next-auth/next';
const Nav = () => {
  const userLoggedIn = true ;

  return (
    <nav className='flex-between w-full pt-3 mb-15'>
        <Link href="/" className='flex gap-3'>
       
          <Image src="/assets/images/cuckoo.png"
          alt="LOGO"
          width={35}
          height={35}
          className='object-contain w-10 h-10'/>
          <p className='logo_text'>Prompt Stage</p>
          {/* <PiBirdFill className='icom-class w-24 h-24' /> */}
        </Link>

        <div className='sm:flex hidden'>
          {userLoggedIn ? 
          ( <div className='flex gap-3 md:gap-5'>
            <Link href="create-prompt" className='black_btn'>
            Create Post
            </Link>
            </div> ):(
            <>
            </>)
          }
        </div>
        
    </nav>
  )
}

export default Nav