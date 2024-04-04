"use client"  //when using swiper make component as client component
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"; //also import this as well
import { Autoplay } from "swiper/modules" //also
import "swiper/css"; //remember must import this file it will provide pre css rules on swiper its built-in in swiper package.
import Image from 'next/image';
import { slides, socials } from '@/constants/const';
import { motion } from "framer-motion";
import { FadeIn, stagger,zoomIn } from '@/utils/motion';

const Slider = () => {
    return (
        <section className='  w-full  sm:p-16 xs:p-8 p-6 py-12'>
            <motion.div
        variants={stagger(2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }} className=' m-auto  flex-col h-[200px] md:h-[230px]  w-full 2xl:max-w-[1280px] flex items-center justify-between p-2 '>
                <motion.div variants={FadeIn("down","tween",0.75,0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}><span className='text-[35px] sm:text-[55px] text-center md:text-start  font-bold text-white z-10'>New <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-600'>Features</span></span>
                </motion.div>
                <motion.div
                variants={zoomIn(0.8,0.8)} 
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                className='w-full bg-gray-800 p-2 '>
                    <Swiper
                        slidesPerView={2}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            768:{
                                slidesPerView:3
                            },
                            1024:{
                                slidesPerView:4
                            },
                            1280:{
                                slidesPerView:6
                            }
                           }}
                        speed={5000}
                        modules={[Autoplay]}
                        className='w-full'>
                        {slides.map((img) => (
                            <SwiperSlide key={img.name}>
                                <div className="glassmorphism3 w-[70px] h-[70px] rounded-[24px] flex items-center justify-center text-white text-[18px] font-bold"><Image src={img.url} height={45} width={45} alt="whats-new" className="" /></div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Slider;