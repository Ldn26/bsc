import React from 'react'
import { FaApple } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import { FaGooglePlay } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';


function Footer() {
  return (
    <div className="p-24 pb-10  bg-primary   " >
<div className='flex flex-col lg:flex-row  p-4 gap-4  items-center justify-around ' >
  <div className='flex  items-center justify-center gap-2'>
  <Link href={"./"}  className='flex flex-row  whitespace-nowrap  transition-all hover:scale-105 bg-white rounded-full px-6 py-3 items-center gap-4'>
  <FaApple size={40} />
    <div className='flex  flex-col  text-left'>
      <h1 className='text-sm '>Download on the</h1>
      <h1 className='font-medium '> App Store </h1>
    </div>
  </Link>
  <Link  href={"./"} className='flex flex-row  whitespace-nowrap  hover:scale-105 transition-all bg-black rounded-full px-6 py-3  items-center gap-4'>
  <FaGooglePlay size={40}  color='white' />

    <div className='flex flex-col  text-white'>
      <h1 className='text-sm text-left'>Got it on </h1>
      <h1 className='font-medium text-left'>Google Play </h1>
    </div>
  </Link>
  </div>
  <h2 className='text-white  text-sm  whitespace-nowrap md:text-xl'>@2019 Lift Media All Rights Reserved</h2>

  <div className='flex flex-row items-center  gap-4'>
<Link href={"/facebook"} className='rounded-full transition-all border-white border p-4 items-center flex justify-center hover:scale-110'>
  <FaFacebookF  size={20} color='white'/>
  </Link>
  <Link href={"/fa"} className='rounded-full transition-all border-white border p-4 items-center flex justify-center hover:scale-110'>
  <FaLinkedinIn  size={20} color='white'/>

  </Link>
  <Link href={"/facebook"} className='rounded-full transition-all border-white border p-4 items-center flex justify-center hover:scale-110'>
  <FaInstagram size={20} color='white' />

  </Link>
  </div>
</div>
    </div>
  )
}

export default Footer