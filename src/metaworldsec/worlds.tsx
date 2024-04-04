"use client";
import React from 'react'
import { motion } from "framer-motion"
import { stagger, SlideIn2, FadeIn, zoomIn } from '@/utils/motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExploreWorlds } from '@/constants/const';
export const World = () => {
    return (
        <section className='sm:p-16 xs:p-8   py-12 p-6 w-full flex flex-col relative z-40 '>
            <motion.div
                variants={stagger(2, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className='2xl:max-w-[1280px] bg- w-full flex justify-between items-center  p-2 text-white m-auto flex-col space-y-5'>
                {ExploreWorlds.map((card) => (
                    <motion.div
                        variants={stagger(2, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        key={card.id}
                        className='flex p-2 w-full flex-col justify-between items-center  space-y-3'>
                        <motion.div
                            variants={SlideIn2("left", "tween", 0.8, 1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }} >
                            <Image src={card.imgUrl} height={950} width={950} alt={card.title} className='object-contain' />
                        </motion.div>
                        <motion.div
                            variants={SlideIn2("right", "tween", 0.8, 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }} >
                            <span className='text-center text-[20px] sm:text-[40px] text-white font-medium hover:font-semibold cursor-pointer'>{card.title}</span>
                        </motion.div>
                        <motion.div
                            variants={zoomIn(0.2, 0.8, 1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }} >
                           <Link href={`/metaworlds/${card.id}`}>
                            <div className='border-[1px] w-[38px] h-[38px] flex justify-center items-center rounded-full '><Image src={"arrow.svg"} height={24} width={24} alt='arrow' /></div>
                            </Link>
                        </motion.div>
                    </motion.div>))}
            </motion.div>
        </section>
    )
}
// variants={SlideIn2("left", "tween", 0.8,1)} 