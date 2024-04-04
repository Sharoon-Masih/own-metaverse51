import React from 'react'
import {Hero,Planet,World} from '@/metaworldsec/index.js';
import { Footer, Navbar } from '@/components';
const Page = () => {
  return (
  <div className='overflow-hidden bg-gray-900'>
   <Navbar/>
   <Hero/>
   <Planet/>
   <World/>
   <Footer/>
  </div>
  )
}

export default Page;