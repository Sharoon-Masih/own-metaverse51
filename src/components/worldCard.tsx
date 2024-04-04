'use client';
import React from 'react';
import { motion } from "framer-motion";
import { stagger } from '@/utils/motion';
import { TypingTitle3, TypingTitle2 } from '@/components/CustomTexts';


const customStyle = {
    heroText: " font-bold lg:text-[100px] md:text-[80px] sm:text-[60px] xl:text-[120px] text-[34px] lg:leading-[150.4px] md:leading-[110.4px] sm:leading-[74.4px] leading-[60.4px] uppercase text-white",
    heroDText:
        'md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]'

}
interface Iexplore {
    id: string,
    imgUrl: string,
    title: string
  }
const WorldCard = ({title,id}:Iexplore) => {

  return (
    <motion.div
    variants={stagger(2, 1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className='2xl:max-w-[1280px] flex flex-col justify-center items-center p-2 w-full m-auto'>
    <div className='flex justify-center flex-col items-center'>
        <TypingTitle2 style={customStyle.heroText} title='Welcome to the' key={id}/>
        <TypingTitle3 style={customStyle.heroText} title={title} key={id}/>
    </div>
</motion.div>
  )
}

export default WorldCard