import React from 'react';
import { Products } from '@/constants/const';
import ItemCard from '@/components/item';

export function generateStaticParams(){
  return Products.map((product)=>(
     {item:product.id}
  ))
}

const Item = ({params}:{params:{item:string}}) => {  //remember kabhi be dynamic route ma ek or dynamic route nahi bnayega bcuz that will become messy and difficult also to define route segment while passing URL like:example.com/dynamicroute1/dynamic2 (messy)

   const getCard=Products.find((item)=> item.id === params.item)
  return (
    <section className='  w-full sm:p-16 xs:p-8 p-6 py-12'>
     { typeof getCard !== "undefined" && <ItemCard {...getCard}/>}
    </section>
  )
}
export default Item;