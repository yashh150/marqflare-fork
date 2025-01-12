"use client";
import { Resend } from 'resend';
import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import sendArrow from "@/../public/assets/sendArrow.svg"
import emailIcon from "@/../public/assets/email.svg"

import phone from "@/../public/assets/phone.svg"


import dynamic from 'next/dynamic';


const Map = dynamic(() => import('./LeafletMap'), {
  ssr: false // This ensures the component is only rendered on the client-side
});

const resend = new Resend('re_KiAYXMi7_7Wih9r3XiwhKHCa19Q3zmbFX');

export default function Form() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [find, setFind] = useState('');
  const [msg, setMsg] = useState('');

  const [sent , setSent] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFindChange = (event) => {
    setFind(event.target.value);
  };

  const handleMsgChange = (event) => {
    setMsg(event.target.value);
  };
  const onSubmit = ()=> {
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'diy2903@gmail.com',
      subject: 'Marqflare query',
      html: `<p>Name: ${name}</p> <p>Phone Number: ${phoneNumber}</p> <p>Email: ${email}</p> <p>How did you find us?: ${find}</p> <p>Message: ${msg}</p>`
    });

    setSent("Email Sent Successfully")
    setTimeout(2000 ,setSent(''))
    
  }
  
  return (
    <div id="contact" className='bg-white h-[350px] z-10 mb-20'>
      <div className="w-[80%] m-auto bg-white rounded-[20px] shadow-lg border relative top-[115px] pb-[10px] max-w-[1200px]">
        <h1 className="w-[90%] mt-[47px] mx-auto text-center text-primary text-3xl md:text-[3rem] font-semibold leading-normal">Lets make it happen!</h1>
        <p className='m-auto text-center text-[#464b37] text-sm font-normal leading-normal'>
          Discover how Marqflare can help you achieve success. Fill out the form <br/>to speak with one of our experts today!
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col mx-auto my-5">
            <div className="flex md:flex-row flex-col mt-[40px] justify-between">
              <TextField id="standard-basic" onChange={handleNameChange} label="Name" variant="standard" className='w-56 inline' required/>
              <TextField id="standard-basic" onChange={handlePhoneNumberChange} label="Phone Number" variant="standard" className='w-56 inline' required/>
            </div>
            <div className="flex md:flex-row flex-col mt-[40px] justify-between">
              <TextField id="standard-basic" onChange={handleEmailChange} label="Email" variant="standard" className='w-56 inline'/>
              <div>
                <FormControl variant="standard" sx={{minWidth: 230}}>
                  <InputLabel id="demo-simple-select-standard-label">How did you find us?</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={find}
                    onChange={handleFindChange}
                    label="How did you find us?"
                  >
        
                    <MenuItem value="Search engines">Search engines</MenuItem>
                    <MenuItem value="Internet ads">Internet ads</MenuItem>
                    <MenuItem value="Social media">Social media</MenuItem>
                    <MenuItem value="Customer review sites">Customer review sites</MenuItem>
                    <MenuItem value="Comparison sites">Comparison sites</MenuItem>
                    <MenuItem value="Referral">Referral</MenuItem>
                    <MenuItem value="Customer testimonials">Customer testimonials</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <TextField
              id="standard-multiline-static"
              onChange={handleMsgChange}
              label="Write Your Message"
              multiline
              rows={1}
              defaultValue=""
              variant="standard"
              className='w-[30rem] mt-[40px]' 
            />
            <span className='flex flex-col sm:flex-row sm:max-w-96 max-w-[10rem] justify-around'>
              <button onClick={onSubmit} className="flex whitespace-nowrap text-bold my-[30px] px-[20px] py-[10px] rounded-full bg-secondary text-white transition-all duration-300 mx-auto">
                <p className='mr-[10px]'>
                  Send
                </p>
                <Image
                  src={sendArrow}
                  width={20}
                  height={20}
                  className='my-auto mr-3'
                  alt="arrow"
                />
              </button>
              <span className='flex flex-row sm:ml-[30px]'>
                <Image
                  src={phone}
                  width={30}
                  height={20}
                  alt="phone"
                  className='mr-[16px]'
                />
                <span className='flex flex-col m-auto'>
                  <p>PHONE</p>
                  <strong className='whitespace-nowrap'>
                  9891151228
                  </strong>
                </span>
              </span>
              <span className='flex flex-row sm:ml-[55px]'>
                <Image
                  src={emailIcon}
                  width={30}
                  height={20}
                  alt="phone"
                  className='mr-[16px]'
                />
                <span className='flex flex-col m-auto'>
                  <p>EMAIL</p>
                  <strong className='whitespace-nowrap'>
                    marqflare@gmail.com
                  </strong>
                </span>
              </span>
            </span>
            <p className='text-green-600'>
              {sent}
              </p>
          </div>
          <div className='p-20 md:pt-20 pt-0 md:w-[45%] h-[350px]'>
            <Map/>
          </div>
        </div>
      </div>
    </div>
  )
}
