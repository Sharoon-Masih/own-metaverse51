"use client"
import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';
import { FadeIn } from '@/utils/motion';

interface Iproducts {
  name: string,
  id: string,
  category: string,
  img: string,
  desc: string
  price: string
}
const ProductCard = ({ name, id, category, img, desc, price, }: Iproducts) => {
 
  return (
    <motion.div
    variants={FadeIn("up", "tween", 0.9, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}>
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      className='w-[250px] h-[390px] sm:w-[290px] lg:w-[270px] xl:w-[290px] sm:h-[395px] bg-white  flex flex-col items-center rounded-xl pt-2  relative overflow-hidden z-10'>
      <div className='flex flex-col  space-y-2 p-2 justify-evenly'>
        <div className='w-full flex justify-center items-center '><img src={img} alt='w1' className='object-cover rounded-lg w-[210px] h-[180px] md:w-[230px] shadow-lg shadow-gray-500' /></div>
        <div className='w-full flex justify-center items-center'><h1 className='text-[20px] font-medium'>{name}</h1></div>
        <div className='w-[80%] flex justify-center items-center  m-auto'><p className='text-center text-xs text-gray-400 font-light '>{desc}</p></div>
        <div className='w-full flex justify-center items-center text-black font-bold text-[20px]'>{price}</div>
        <div className='flex justify-center items-center w-full'><Image src={"/products/star.png"} height={85} width={85} alt='star' /></div>
      </div>
      <div className='bg-gray-500 w-full flex justify-center items-center text-[15px] font-semibold text-white rounded-b-lg absolute h-[40px] bottom-0 z-10'><Link href={`/metastore/Cart/${id}`}
      >Add to cart</Link></div>
    </motion.div>
    </motion.div>

  )
}

export default ProductCard;