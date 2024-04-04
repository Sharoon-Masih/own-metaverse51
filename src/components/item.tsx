'use client';
import React from 'react';
import { motion } from "framer-motion";
import { FadeIn, stagger } from '@/utils/motion';
import ProductCard from '@/components/productCard';
import Image from 'next/image';

interface Iproducts {
    name: string,
    id: string,
    category: string,
    img: string,
    desc: string
    price: string
  }
const ItemCard = ({img,name,price,desc,}:Iproducts) => {
  return (
    <motion.div
    variants={FadeIn("up","tween",0.75,0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className=' m-auto bg-gray-200 w-full xl:w-[70%] 2xl:max-w-[1280px]  lg:h-[600px] flex flex-col lg:flex-row items-center justify-between p-2 '>
    <div className='flex flex-col items-center lg:items-start p-2 w-full h-[400px] lg:w-[400px] lg:h-full lg:flex-1    space-y-1'>
      <div className='flex flex-row w-full justify-center md:justify-between items-center h-[300px]  sm:h-[270px] lg:h-[400px]'>
        <div className='box-border border-[3px] w-[240px] h-full  flex items-center border-black lg:w-[300px] bg-white'><img src={img} alt='h4' className='object-cover w-[240px] lg:w-[300px] h-full ' /></div>
        <div className='hidden md:flex p-2 md:flex-1 lg:flex-none flex-col items-start justify-start w-[240px]  lg:w-[300px] h-full  box-border space-y-4 '>
          <div className='flex flex-col items-start '>
          <span className='text-[25px] text-slate-800 font-bold'>Rating</span>
          <Image src={"/products/star.png"} height={100} width={100} alt='star' /></div>
          <div className='flex flex-col items-start justify-center'>
          <span className='text-[25px] text-slate-800 font-bold'>Colour</span>
          <div className='w-full flex justify-start items-center space-x-2'>
            <div className='w-4 h-4 bg-black rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-orange-600 rounded-full'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-full'></div>
          </div>
          </div>

        </div>
      </div>
      <div className='text-[30px] font-bold text-slate-800'><span>{name}</span></div>
      <hr className=' bg-slate-600 h-[2px] w-full' />
      <div><p className='text-gray-500 text-center'>{desc}</p></div>
    </div>
    <div className='flex flex-col w-full  p-2 lg:w-[300px] lg:h-full bg-white space-y-3'>
      <div className='flex flex-col space-y-2'>
        <span className='text-[20px] font-semibold text-orange-700'>Payment Method:</span>
        <div className='w-full border-2 flex justify-center items-center h-8 border-gray-400 font-semibold'>cash on delivery</div>
        <div className='w-full flex items-center justify-evenly'>
          <Image src={"/bank/paypal.png"} width={50} height={50} alt='paypal' />
          <Image src={"/bank/visa.png"} width={50} height={50} alt='paypal' />
          <Image src={"/bank/bank.png"} width={25} height={25} alt='paypal' />
          <Image src={"/bank/payment-system.png"} width={40} height={40} alt='paypal' />
        </div>
      </div>
      <div className='flex flex-col space-y-3'>
      <span className='text-[20px] font-semibold text-orange-700'>Total amount:</span>
      <div className='w-full border-2 flex justify-center items-center h-8 border-gray-400 font-semibold'>{price}</div>
      <div className='flex justify-center items-cente w-full'><button className='px-3 py-2 bg-orange-600 active:bg-orange-700 text-white rounded-lg font-medium tracking-wide'>Confirm</button></div>
      </div>
    </div>

  </motion.div>
  )
}

export default ItemCard;