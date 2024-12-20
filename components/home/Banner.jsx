"use client"
import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div
  className="flex flex-col  lg:flex-row  items-center  lg:items-stretch  h-[calc(100vh-88px)] justify-center"
>

<div className='flex  p-24 md:p-0 items-center w-full lg:w-1/2 justify-center'>

    <div className="   justify-center flex-col   items-center  pl-12     ltr:sm:text-left rtl:sm:text-right"> 
      <h1 className="text-[60px]    font-black   sm:text-6xl">

      {/* Book Your Appointment   <br /> Now On Tabib-Dz */}
      Plan Your Next Travel <br /> to Boumerdes
      </h1>

      <p className="mt-4 max-w-3xl sm:text-2xl/relaxed">
   


      Your one-stop platform for exploring top destinations, accommodations, and transportation.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="/login"
          className="block w-full rounded-xl bg-secendry   px-12 py-3 text-2xl font-medium border border-secendry  hover:scale-105 shadow hover:bg-white text-white hover:text-secendry  transition-all  sm:w-auto"
        >
        Book an Appointment
        </a>
      </div>
    </div>
      
</div>
    <div className='   relative hidden lg:flex items-center justify-center w-1/2 '>
<Image width={650} height={650}  className='' alt='person' src={"/boum.svg"}/>
</div>
  </div>

  )
}

export default Banner