import React from 'react'
import { Footer, Navbar } from '@/components';
// import "@/app/metastore/global.css"   //now remember jab hum nested layout bnayega toh its not important kay "global.css" usme import kray wo automatically kiu kay jo humari yeh layout hai yeh parent layout ma hi jaka render hogi hn agr hum chahty hain ka jo parent layout hai wo render na ho toh tab humay "route group" bnana hoga or then usme ek layout bnani hogi jo un hi sab folders pa apply hogi jo uska andar hain toh at that time global.css ki file zarori hai kiu kay uss time pa direct wo layout apply hogi parent layout ma jaka apply nahi hogi (but its not confirm about route group that whether there is need to create new global.css or not). 
import Hero from '@/metastoresec/hero';
import Box from '@/metastoresec/box';
import StoreNav from '@/metastoresec/storeNav';
import Slider from '@/components/slider';

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='overflow-hidden bg-gray-900'>
    <Navbar/>
    <Hero/>
    <Box/>
    <StoreNav/>
    {children}
    <Slider/>
    <Footer/>
    </div>
  )
}

export default layout;