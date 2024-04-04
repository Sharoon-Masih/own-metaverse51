"use client"
import React, { useState } from 'react'
import { Products } from '@/constants/const';
import ProductCard from './productCard';
const AllProduct = () => {
    console.log("click All");
  return (
    Products.map((product)=>(<ProductCard {...product} key={product.name}/>))
  )
}

export default AllProduct;