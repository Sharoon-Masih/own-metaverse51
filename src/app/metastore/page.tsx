'use client';
import React from 'react';
import { motion } from "framer-motion";
import { FadeIn, stagger } from '@/utils/motion';
import ProductCard from '@/components/productCard';
import { Products } from '@/constants/const';

const Store = () => {
  return (
    <section className=' w-full sm:p-16 xs:p-8 p-6 py-12'>
      <motion.div
        variants={stagger(2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className=' m-auto  w-full 2xl:max-w-[1280px] flex items-center justify-center p-2 '>
       
      </motion.div>
    </section>
  )
}

export default Store;