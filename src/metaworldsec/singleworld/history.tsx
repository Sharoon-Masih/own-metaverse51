'use client';
import React from 'react';
import { motion } from "framer-motion";
import { FadeIn, SlideIn2, stagger } from '@/utils/motion';
import {TypingTitle4 } from '@/components/CustomTexts';

const customStyle={
    planetStyle:"text-[70px] font-bold  tracking-[1rem]  bg-clip-text text-transparent bg-gradient-to-r from-white from-[12%] to-gray-700"
}
const History = ({title}:{title:string}) => {
  return (
    <section className=' sm:p-16 w-full  relative xs:p-8 p-6 py-12'>
    <motion.div
        variants={stagger(2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='2xl:max-w-[1280px] flex flex-col  justify-center items-center p-2 xl:h-svh w-full  m-auto  '>
       <div className='flex flex-col xl:justify-evenly md:space-y-4 xl:space-y-0  xl:h-full  w-full'>
         <motion.div
         variants={FadeIn("right","tween",0.75,0.5)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true}}
          className='flex flex-col justify-between items-start p-2  w-full md:w-[400px] lg:w-[480px] xl:w-[800px] '><h1 className='text-white text-[24px] md:text-[40px] font-semibold'>History of {title}</h1>
         <p className='text-white font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid qui nulla magnam mollitia. Pariatur exercitationem praesentium minima, quos quo nemo soluta eaque ullam qui libero corrupti. Maiores iusto qui aut! Repudiandae deserunt alias distinctio ipsa?</p>
         </motion.div>
         <motion.div 
         variants={SlideIn2("right","tween",0.8,0.4)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true}}
         className='hidden md:block absolute -top-4 xl:top-0 right-0 h-full '><img src="/planets.jpg" alt="" className='w-[200px] lg:w-[400px] h-full object-cover'/></motion.div>
         <div className=' hidden md:block absolute top-[50%] z-10 md:right-[16px] lg:right-[214px] rotate-90'>
           <TypingTitle4 style={customStyle.planetStyle} title='Planets'/>
           </div>
        <motion.div
         variants={FadeIn("right","tween",0.75,1)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true}}
        className='flex flex-col justify-between items-start p-2  w-full md:w-[400px] lg:w-[480px] xl:w-[800px]'>
            <h1 className='text-white text-[24px] md:text-[40px] font-semibold'>Recent Update</h1>
            <p className='text-white font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos a, tempora illum voluptatum, quis vel accusamus, minima sed asperiores mollitia ex eaque iste porro adipisci reprehenderit suscipit! Sapiente error et facilis ullam odit nisi quis deleniti atque ab aut. Laborum impedit autem eum doloremque, blanditiis obcaecati, necessitatibus facilis veritatis delectus corporis pariatur ullam tempore odio, numquam ducimus ipsam ratione ut sunt cum voluptates voluptate dicta. Ipsam in sequi dignissimos modi.</p>
        </motion.div>
        <motion.div
         variants={FadeIn("right","tween",0.75,1.5)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true}}

          className='flex flex-col justify-between items-start p-2  w-full md:w-[400px] lg:w-[480px] xl:w-[800px]'>
            <h1 className='text-white text-[24px] md:text-[40px] font-semibold'>Meta Research</h1>
            <p className='text-white font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos a, tempora illum voluptatum, quis vel accusamus, minima sed asperiores mollitia ex eaque iste porro adipisci reprehenderit suscipit! Sapiente error et facilis ullam odit nisi quis deleniti atque ab aut. Laborum impedit autem eum doloremque, blanditiis obcaecati, necessitatibus facilis veritatis delectus corporis pariatur ullam tempore odio, numquam ducimus ipsam ratione ut sunt cum voluptates voluptate dicta. Ipsam in sequi dignissimos modi.</p>
        </motion.div>
       </div>
      </motion.div>
     </section>
  )
}

export default History;

{/* <div className='absolute top-[50%] z-10 right-[214px] rotate-90 text-[70px] font-extrabold  tracking-[1rem] text-white '><span className='bg-clip-text text-transparent bg-gradient-to-r from-white from-[12%] to-gray-600 '>Planets</span></div> */}