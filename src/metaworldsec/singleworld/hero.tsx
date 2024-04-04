'use client';
import React from 'react';
import { Footer, Navbar } from '@/components';
import { motion } from "framer-motion";
import { stagger,zoomIn } from '@/utils/motion';
import Image from 'next/image';
const Hero = ({img}:{img:string}) => {
  return (
    <section className='sm:p-16 w-full xs:p-8 p-6 py-12'>
    <motion.div
        variants={stagger(2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='2xl:max-w-[1280px] flex flex-col justify-center items-center p-2 w-full m-auto'>
       <motion.div variants={zoomIn(1,1,1)} 
       initial="hidden" 
       whileInView="show"
       viewport={{once:true}}><Image src={img} height={1000} width={1000} alt='planet'/>
       </motion.div>
      </motion.div>
     </section>
  )
}

export default Hero;