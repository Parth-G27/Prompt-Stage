"use client";
import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect } from 'react';
//import { PiBirdFill } from 'react-icons/Pi';

import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  //const userLoggedIn = true ;
  
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false)
  
  useEffect(()=>{
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }
    setUpProviders();
  },[])

  return (
    <nav className='flex-between w-full pt-11 mb-20'>
        <Link href="/" className='flex gap-3'>
       
          <Image src="/assets/images/cuckoo.png"
          alt="LOGO"
          width={35}
          height={35}
          className='object-contain w-10 h-10'/>
          <p className='logo_text'>Prompt Stage</p>
          {/* <PiBirdFill className='icom-class w-24 h-24' /> */}
        </Link>

        {alert("Session : "+session?.user)}

        {/* Desktop */}
        <div className='sm:flex hidden'>
          {session?.user ? 
          ( <div className='flex gap-3 md:gap-5'>
            <Link href="create-prompt" className='black_btn'>
            Create Post
            </Link>
            <button type="button" onClick={signOut} className='outline_btn'> 
              Sign Out
            </button>

            <Link href='profile'>
             <Image src="/assets/images/logo.svg"
             width={37}
             height={37}
             className='rounded-full'
             alt="profile"/>

           
            </Link>
            </div>
             ) :(
            <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
            </>)
          }
        </div>

        {/*Mobile */}
        <div className='sm:hidden flex relative'> 
        {session?.user ?(
          <div className='flex'>
            <Image src="/assets/images/logo.svg"
             width={37}
             height={37}
             className='rounded-full'
             alt="profile"
             onClick={()=> setToggleDropDown((prev)=> !prev)
              }/>

              {toggleDropDown && (
                <div className='dropdown'>
                  <Link href='/profile'
                  className='dropdown_link'
                  onClick={()=> setToggleDropDown(false)}>
                    My Profile
                  </Link>
                  <Link href='/create-prompt'
                  className='dropdown_link'
                  onClick={()=> setToggleDropDown(false)}>
                    Create Orompt
                  </Link>
                  <button type="button"  onClick={()=> {
                  setToggleDropDown(flase);
                  signOut(); }}
                  className='mt-5 w-full black_btn'
                  >
                    Sign Out
                  </button>
                </div>
              )}
             
          </div>
        ):(
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
            </>
        )}
        </div>
        
    </nav>
  )
}

export default Nav