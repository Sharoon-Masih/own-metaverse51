"use client";
import React from 'react'
import { motion } from "framer-motion"
import { FadeIn, rotateVariant } from '@/utils/motion'
import Image from 'next/image';
import { TypingText } from '@/components';
const Vr = () => {
    const {animate,transition}=rotateVariant;
    return (
        <section className='sm:p-16 xs:p-8 px-6 py-12  relative '>
            <div className='2xl:max-w-[1280px] w-full h-[46rem] sm:h-[40rem]  justify-between  lg:h-[17rem] flex flex-col lg:flex-row  p-2 lg:justify-evenly items-center z-10  m-auto '>
                <motion.div animate={animate}  transition={transition} viewport={{once:true}} //remember yaha hum vraiants prop ka tjrough nhi krsktay bcuz in rotateVriant we are using "keychains"
                    className='w-[17rem] h-[17rem] bg-gray-700 rounded-[10%] '>
                    <Image src={"/virtual-reality.png"} alt='vr2' height={500} width={500} className='object-contain' />
                </motion.div>
                <motion.div variants={FadeIn("left", "tween", 0.75,0.75)} viewport={{once:true}} initial="hidden" whileInView="show" className=' sm:w-[23rem]  text-lg text-center font-medium  text-gray-300 p-2  '>
                    The term <strong className='text-white'> virtual reality</strong> refers to a three-dimensional, computer-generated environment that is presented to our senses as if it were really present and can be interacted with. Just like our sensory organs and the brain help us perceive the world around us, they can also be presented with a virtual world that can be perceived to be real or a virtual reality.
                </motion.div>
            </div>

        </section>
    )
}

export default Vr;

{/*  */ }