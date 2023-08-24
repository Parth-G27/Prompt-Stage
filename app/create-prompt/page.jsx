"use client";

import React from 'react'
import { useState } from "react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';


const CreatePrompt = () => {
    const [count, setCount] = useState(1);
    const [submitting, setSubmitting] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [collection, setCollection] = useState({
      number: 0,
      prompt: 'Test prompt',
    });

    const genPrompt = event =>{
        
        setPrompt(event.target.value);
        
    }
    const reg = () =>{
      console.log(prompt);
      setCollection({
        number:count,
        prompt:prompt,
      })
      
      setCount(count+1);
      
    }
  return (
    <section className='w-full pt-11 mb-20'>
        <h2 className='mb-5 text-4xl'> Testing : </h2>
       
        <input className='w-full bg-gray-100 px-4 py-2 rounded-lg mb-6 focus:outline-none'  
        type="text" placeholder='write prompt' onChange={genPrompt} />      
        {/* <Form/> */}
        <input type="button" className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' 
        value="submit" onClick={reg} />
        <br /><br />
        <span className='bg-purple-200 font-medium text-4xl mt-5'>{prompt}</span>
        
        <p>{collection.number+" : "+collection.prompt}</p>

    </section>
  )
}

export default CreatePrompt