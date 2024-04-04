"use client";
import React from 'react'
import { motion } from "framer-motion";
import { stagger, SlideIn2, FadeIn, zoomIn, SlideIn } from '@/utils/motion';

const customStyle = {
    heroText: " font-bold lg:text-[100px] md:text-[80px] sm:text-[60px] xl:text-[120px] text-[34px] lg:leading-[150.4px] md:leading-[110.4px] sm:leading-[74.4px] leading-[60.4px] uppercase text-white",
    heroDText:
      'md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]'
  
}
const Hero = () => {
    return (
        <section className='sm:p-16 xs:p-8 py-12 p-6 w-full flex flex-col relative z-40 '>
            <motion.div
            variants={stagger(2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className='2xl:max-w-[1280px] bg- w-full flex justify-center items-center  p-2 text-white m-auto flex-col'>
            <div className='flex flex-row sm:space-x-6 space-x-[6px]'>
            <motion.h1 variants={SlideIn2("up","spring",0.2,0.8)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{once:true}}
            className='font-bold lg:text-[100px] md:text-[80px] sm:text-[60px] xl:text-[120px] text-[34px] lg:leading-[150.4px] md:leading-[110.4px] sm:leading-[74.4px] leading-[60.4px] uppercase text-white'>Welcome</motion.h1>
            <motion.h1 variants={SlideIn2("down","spring",0.4,0.9)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{once:true}}
            className='font-bold lg:text-[100px] md:text-[80px] sm:text-[60px] xl:text-[120px] text-[34px] lg:leading-[150.4px] md:leading-[110.4px] sm:leading-[74.4px] leading-[60.4px] uppercase text-white'>to</motion.h1>
            <motion.h1 variants={SlideIn2("up","spring",0.5,1)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{once:true}}
            className='font-bold lg:text-[100px] md:text-[80px] sm:text-[60px] xl:text-[120px] text-[34px] lg:leading-[150.4px] md:leading-[110.4px] sm:leading-[74.4px] leading-[60.4px] uppercase text-white'>the</motion.h1>
            </div>
            <div className='flex flex-row sm:space-x-6 space-x-[6px]'>
             <motion.h1 variants={SlideIn2("left","spring",0.4,1.3)}
             initial="hidden"
            viewport={{once:true}}
            whileInView="show" 
             className='font-bold lg:text-[100px] md:text-[80px] sm:text-[60px] xl:text-[120px] text-[34px] lg:leading-[150.4px] md:leading-[110.4px] sm:leading-[74.4px] leading-[60.4px] uppercase text-white'>Meta&apos;s</motion.h1>
             <motion.h1 variants={SlideIn2("right","spring",0.4,1.3)}
             initial="hidden"
            viewport={{once:true}}
            whileInView="show" 
             className='font-bold lg:text-[100px] md:text-[80px] sm:text-[60px] xl:text-[120px] text-[34px] lg:leading-[150.4px] md:leading-[110.4px] sm:leading-[74.4px] leading-[60.4px] uppercase text-white'>Store</motion.h1>
            </div>
            
            </motion.div>
        </section>
    )
}

export default Hero;