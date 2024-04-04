"use client";
import React from 'react'
import {motion} from "framer-motion";
import { NavVariants } from '@/utils/motion';
import { storeNavConst } from '@/constants/const';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const StoreNav = () => {
  const path =usePathname(); 
  console.log(path); //remember path will return the absolute path means ka yeh srf last route segment nahi return krega balka whole path return krega.isi lia 
  return (
    <nav className='w-full  p-6 xs:px-8 sm:px-16 py-3'>
    <motion.div 
    variants={NavVariants}
    initial="hidden"
    whileInView="show"
    viewport={{once:true,amount:0.25}}
    className='w-[70%] rounded-3xl p-2 m-auto bg-gray-900 border-[3px] border-gray-300 flex flex-col lg:flex-row justify-center items-center space-y-2 lg:space-y-0 lg:space-x-5 '>
      {storeNavConst.map((product)=>(<Link key={product.name} href={`${product.link}`}><li  className={`${path === product.link ? "list-none text-lg font-semibold text-white hover:font-semibold" : "list-none hover:font-semibold text-lg font-normal text-white"}`}>{product.name}</li></Link> ))}
    </motion.div>
    </nav>
  )
}

export default StoreNav;