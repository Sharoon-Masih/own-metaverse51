'use client';
// import React from 'react';
// import { motion } from "framer-motion";
// import { FadeIn, stagger } from '@/utils/motion';
import ProductCard from '@/components/productCard';
// import { Products } from '@/constants/const';

interface Iproducts {
    name: string,
    id: string,
    category: string,
    img: string,
    desc: string;
    price: string;
    check?: string;
}
const CateCard = ({ obj }: any) => {
    
    return (


        <ProductCard {...obj} key={obj.id} />




    )
}

export default CateCard

{/* {Category !== "all" ? CategoryArr.map((product) => (<ProductCard {...product} key={product.id} />)) : Products.map((product) => (<ProductCard {...product} key={product.name} />))} */ }

{/* "...product" its means to pass all properties at once and remember when pass prop by this method so there's no need to set name of prop like card={...product}. */ }

{/* {Category !== "all" ? CategoryArr.map((product)=>( <ProductCard {...product} key={product.id}/>)): <AllProduct/> } */ }

{/* {Category === "all" && <AllProduct/>} */ }