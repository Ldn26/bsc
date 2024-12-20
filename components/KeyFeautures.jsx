"use client"
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import { motion ,useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer'
function Skils() {

  const variants = {
    hidden: { opacity: 0, x: -100 , y: 0 },
    visible: { opacity: 1, x: 0, y:0, transition: { duration: 0.5  , ease :'linear' } },
  }
  const variants2 = {
    hidden: { opacity: 0, x: 100 , y: 0 },
    visible: { opacity: 1, x: 0, y:0, transition: { duration: 0.5  ,ease :'linear'} },
  }
  const variants3 = {
    hidden: { opacity: 0, x: 0 , y: -100 },
    visible: { opacity: 1, x: 0, y:0, transition: { duration: 0.5 ,ease :'linear' } },
  }


  const variants4 = {
    hidden: { opacity: 0, x: 0 , y: 100 },
    visible: { opacity: 1, x: 0, y:0, transition: { duration: 0.5 ,ease :'linear' } },
  }


  // const controls2 = useAnimation()
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1, 
  })

  const [ref2, inView2] = useInView({
    threshold: 0.09 
  })

  useEffect(() => {
    if (inView || inView2) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView, inView2])




// for element 2 and 5 
  // useEffect(() => {
  //   if (inView2) {
  //     controls2.start('visible')
  //   }else{
  //     controls.start('hidden')   }
  // }, [controls2, inView2])


  // others element
  // useEffect(() => {
  //   if (inView) {
  //     controls.start('visible')
  //   }else{
  //     controls.start('hidden')   }
  // }, [controls, inView])

  return (


    <div className="grid px-16 grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">

<motion.article
   ref={ref}
   initial="hidden"
   animate={controls}
   variants={variants}
  className="rounded-lg  bg-secendery  p-4 shadow-sm hover:shadow-primary flex flex-col items-center justify-center gap-4 transition-all hover:shadow-2xl sm:p-6"
>

<div className='bg-white p-2 w-fit text-white flex items-center justify-center'>

<Image alt='expert' width={40} height={40} className='text-white ' src={"./check.svg"} />
</div>

    <h3 className="  text-[22.5px] font-bold   text-center text-gray-900">
    Strategy & Direction
    </h3>


  <p className="mt-2 font-normal text-center text-[15px] text-gray-500">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
    animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
    itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
    Molestias explicabo corporis voluptatem?
  </p>


</motion.article>

<motion.article
   ref={ref2}
   initial="hidden"
   animate={controls}
   variants={variants3}

  className="rounded-lg  bg-secendery p-4 shadow-sm hover:shadow-primary flex flex-col items-center justify-center gap-4 transtion-all hover:shadow-2xl sm:p-6"
>

<div className='bg-white p-2 w-fit text-white flex items-center justify-center'>

<Image alt='expert' width={40} height={40} className='text-white ' src={"./check.svg"} />
</div>

    <h3 className="  text-[22.5px] font-bold  text-center  text-gray-900">
    Strategy & Direction
    </h3>


  <p className="mt-2 font-normal text-center text-[15px] text-gray-500">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
    animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
    itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
    Molestias explicabo corporis voluptatem?
  </p>


</motion.article>


<motion.article
   ref={ref}
   initial="hidden"
   animate={controls}
   variants={variants2}
  className="rounded-lg  bg-secendery p-4 shadow-sm hover:shadow-primary flex flex-col items-center justify-center gap-4 transition-all hover:shadow-2xl sm:p-6"
>

<div className='bg-white p-2 w-fit text-white flex  items-center justify-center'>

<Image alt='expert' width={40} height={40} className='text-white ' src={"./check.svg"} />
</div>

    <h3 className="  text-[22.5px] font-bold  text-center text-gray-900">
    Strategy & Direction
    </h3>


  <p className="mt-2 font-normal text-center text-[15px] text-gray-500">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
    animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
    itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
    Molestias explicabo corporis voluptatem?
  </p>


</motion.article>



<motion.article
   ref={ref}
   initial="hidden"
   animate={controls}
   variants={variants}
  className="rounded-lg   bg-secendery p-4 shadow-sm hover:shadow-primary flex flex-col items-center justify-center gap-4 transition-all hover:shadow-2xl sm:p-6"
>

<div className='bg-white p-2 w-fit text-white flex items-center justify-center'>

<Image alt='expert' width={40} height={40} className='text-white ' src={"./check.svg"} />
</div>

    <h3 className="  text-[22.5px] font-bold  text-center text-gray-900">
    Strategy & Direction
    </h3>


  <p className="mt-2 font-normal text-center text-[15px] text-gray-500">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
    animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
    itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
    Molestias explicabo corporis voluptatem?
  </p>


</motion.article>


<motion.article
   ref={ref}
   initial="hidden"
   animate={controls}
   variants={variants4}
  className="rounded-lg    bg-secendery  p-4 shadow-sm hover:shadow-primary flex flex-col items-center justify-center gap-4 transition-all hover:shadow-2xl sm:p-6"
>

<div className='bg-white p-2 w-fit text-white flex items-center justify-center'>

<Image alt='expert' width={40} height={40} className='text-white ' src={"./check.svg"} />
</div>

    <h3 className="  text-[22.5px] font-bold   text-center  text-gray-900">
    Strategy & Direction
    </h3>

    
  <p className="mt-2 font-normal text-center text-[15px] text-gray-500">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
    animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
    itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
    Molestias explicabo corporis voluptatem?
  </p>


</motion.article>

<motion.article
ref={ref}
initial="hidden"
animate={controls}
variants={variants2}
  className="rounded-lg bg-secendery   p-4 shadow-sm hover:shadow-primary flex flex-col items-center justify-center gap-4 transition-all hover:shadow-2xl sm:p-6"
>

<div className='bg-white p-2 w-fit text-white flex items-center justify-center'>

<Image alt='expert' width={40} height={40} className='text-white ' src={"./check.svg"} />
</div>

    <h3 className="  text-[22.5px] font-bold  text-center text-gray-900">
    Strategy & Direction
    </h3>


  <p className="mt-2 font-normal text-center text-[15px] text-gray-500">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
    animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
    itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
    Molestias explicabo corporis voluptatem?
  </p>  


</motion.article>




  </div>

  )
}

export default Skils