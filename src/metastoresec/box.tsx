"use client";
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { stagger, SlideIn2, FadeIn, zoomIn, fill } from '@/utils/motion';
import Image from 'next/image';

const Box = () => {
    const [active, setActive] = useState(false);
    return (
        <section className='hidden  sm:p-16  xs:p-8 py-12 p-6 w-full xl:flex flex-col  relative z-40 '>
            <motion.div
                variants={stagger(2, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className='2xl:max-w-[1280px] h-[350px] space-y-8 w-full  flex flex-col justify-center items-start  p-2 text-white m-auto '>
                <motion.div 
                initial={{opacity:0}}
                animate={{
                    x: active ? "470%" : 0,
                    rotate: active ? 360 : 0,
                    opacity: active ? 1 : 0.3
                }} transition={{
                    type: "tween",
                    duration: 2
                }} 
            viewport={{once:true}}
            className='z-10 w-[220px] h-[220px] rounded-lg' onClick={() => { setActive((prev) => !prev) }}><Image src={"/t_500x300.jpeg"} height={220} width={220} alt='meta-tag' className='rounded-lg object-cover' /> </motion.div>
                <motion.div 
                variants={fill}
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                className='w-0 bg-blue-500 relative z-20 opacity-50 shadow-md shadow-white  h-1'>
                </motion.div>
            </motion.div>
        </section >
  )
}

export default Box