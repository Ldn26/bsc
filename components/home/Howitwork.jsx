import React from 'react'
import Image from 'next/image'
function Howitwork() {
  return (
    <div>


<div className="flex  lg:flex-row-reverse  justify-center   flex-col  my-24 px-8   gap-4">

<div  className="flex flex-col justify-center items-center md:items-start text-center  mx-8      md:text-start  ">

<h1 className={` text-[40px]   font-extrabold  text-center  `}>
How it Works </h1>

<p className='text-secendry font-bold text-[24   px]'> A simple, 3-step guide to using the platform.</p>
<p className="text-[18px] max-w-[650px]">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam fugit nostrum accusantium id ullam reiciendis tempora, mollitia ducimus? Impedit voluptatem deserunt, qui eum reprehenderit natus tempore eaque repellendus consectetur exercitationem?
</p>
</div>
<Image  src={"./boum.svg"} width={600} height={600} className='mx-8' alt="prv101"/>


</div>
<div className="flex  lg:flex-row  justify-center  flex-col    my-24 px-8   gap-4">
<div  className="flex flex-col justify-center items-center md:items-start text-center  mx-8      md:text-start  ">

<h1 className={` text-[40px]   font-extrabold  text-center  `}>
Events Notifications </h1>

<p className='text-secendry font-bold text-[24   px]'> A simple, 3-step guide to using the platform.</p>
<p className="text-[18px] max-w-[650px]">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam fugit nostrum accusantium id ullam reiciendis tempora, mollitia ducimus? Impedit voluptatem deserunt, qui eum reprehenderit natus tempore eaque repellendus consectetur exercitationem?
</p>
</div>
<Image  src={"./boum.svg"} width={600} height={600} className='mx-8' alt="prv101"/>


</div>

        
    </div>



  
  )
}

export default Howitwork