"use client"
import React, { useEffect, useState } from 'react'
import { Products } from '@/constants/const';
import ProductCard from './productCard';

const t1Card = ({ Category }: { Category: string }) => {
    const [product, Setproduct] = useState(Products);
    useEffect(() => {
        if (Category === "all") {
            Setproduct(Products);
        }
        const updateProduct = Products.filter((item) => item.category === Category)
     Setproduct(updateProduct)
    })
    console.log(product);
    return (
        <section className=' w-full sm:p-16 xs:p-8 p-6 py-12'>
      <div
        className=' m-auto  w-full 2xl:max-w-[1280px] flex items-center justify-center p-2 '>
        <div className='grid grid-cols-1 md:grid-cols-2 h-full m-auto lg:grid-cols-3  items-center gap-y-12 md:gap-x-12 justify-center'>
          {product.map((item)=> <ProductCard {...item} key={item.id}/>)}

        </div>
      </div>
    </section>
    )
}

export default t1Card