"use client";
import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import sendArrow from "@/../public/assets/sendArrow.svg"
import email from "@/../public/assets/email.svg"

import phone from "@/../public/assets/phone.svg"


import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./LeafletMap'), {
  ssr: false // This ensures the component is only rendered on the client-side
});

export default function Form() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div id="contact" className='bg-white h-[350px] z-10 mb-20'>
      <div className="w-[80%] m-auto  bg-white rounded-[20px] shadow-lg border relative top-[115px] pb-[10px] max-w-[1200px]">
      <h1 className="w-[90%] mt-[47px] mx-auto text-center text-primary text-3xl md:text-[3rem] font-semibold leading-normal">Want to Say Hello!</h1>
      <p className='md:w-1/2  w-3/4 max-w-[400px] m-auto text-center text-[#464b37] text-sm font-normal leading-normal'>
      Learn how Marqflare can help you succeed.
      <br/>
       Talk to one of our experts today!

</p>
<div className="flex flex-col md:flex-row">
  <div className="flex flex-col mx-auto my-5">
    <div className="flex flex-row  mt-[40px] justify-between">

  <TextField id="standard-basic" label="Name" variant="standard" className='w-56 inline' required/>
  <TextField id="standard-basic" label="Phone Number" variant="standard" className='w-56 inline ' required/>
    </div>
    <div className="flex flex-row  mt-[40px] justify-between">

  <TextField id="standard-basic" label="Email" variant="standard" className='w-56 inline'/>
  <div>

  <FormControl variant="standard" sx={{minWidth: 230}}>
        <InputLabel id="demo-simple-select-standard-label">How did you find us?</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
  </div>
    </div>
    <TextField
          id="standard-multiline-static"
          label="Write Your Message"
          multiline
          rows={1}
          defaultValue=""
          variant="standard"
          className='w-[30rem] mt-[40px]' 
        />
  <span className='flex sm:flex-row sm:max-w-96 max-w-[10rem] flex-col justify-around'>
    <button className="flex whitespace-nowrap text-bold my-[30px] px-[20px] py-[10px] rounded-full bg-secondary text-white transition-all duration-300 mx-auto">
          <p className='mr-[10px] '>
            Send

          </p>
          <Image
          src={sendArrow}
          width={20}
          height={20}
          className='my-auto mr-3'
          alt="arrow"/>
        </button>
        <span className='flex flex-row sm:ml-[30px]'>
            <Image

            src={phone}
            width={30}
            height={20}
            alt="phone"
            className='mr-[16px]'/>
            <span className='flex flex-col m-auto'>
              <p>PHONE</p>
              <strong className='whitespace-nowrap'>
              03 5432 1234
              </strong>
            </span>
        </span>
        <span className='flex flex-row sm:ml-[55px]' >
            <Image

            src={email}
            width={30}
            height={20}
            alt="phone"
            className='mr-[16px]'/>
            <span className='flex flex-col m-auto '>
              <p>EMAIL</p>
              <strong className='whitespace-nowrap'>
              info@marqflare.com
              </strong>
            </span>
        </span>
  </span>
  </div>
 

<div className='pb-20 pr-20 pt-10 md:w-[45%] h-[350px]'>
  <Map/>
</div>
</div>
      </div>
    </div>
  )
}
