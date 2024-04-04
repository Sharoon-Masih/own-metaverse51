import React from 'react';
import Link from 'next/link';
import { navConst } from '@/constants/const';
import { usePathname } from 'next/navigation';

const Menu = () => {
    const path=usePathname()
  return (
    <div className='z-0 flex flex-col justify-center items-center absolute w-[125px] border-[1px] glassmorphism2 border-gray-300 rounded-2xl h-40 -right-[10px] -top-[10px]  '>
   {navConst.map((page)=>(<Link key={page.name} href={page.link}><span className={path === page.link ? "font-bold hover:font-semibold text-[14px] text-white":"hover:font-semibold text-[14px] text-white"}>{page.name}</span></Link>))} 
    </div>
  )
}

export default Menu