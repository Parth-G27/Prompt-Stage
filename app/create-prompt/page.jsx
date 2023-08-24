"use client";

import React from 'react'
import { useState } from "react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';


const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [collection, setCollection] = useState([])
    // const newprompt = {
    //     prompt: '',
    //     tag: '',
    // };
    const genPrompt = event =>{
        //newprompt.prompt = event.target.value;
        // prompt = event.target.value;
        setPrompt(event.target.value);
        
    }
    const reg = () =>{

    }
  return (
    <section>
        <h2> Testing  : </h2>
        <h4>Enter prompt -</h4>  <br /><br />
        <input className='border-r-yellow-950'  type="text" placeholder='write prompt' onChange={genPrompt} />      
        {/* <Form/> */}
        <input type="button" value="submit" onClick={reg} />
        <p>{prompt}</p>

        {/* <p>{collection}</p> */}

    </section>
  )
}

export default CreatePrompt