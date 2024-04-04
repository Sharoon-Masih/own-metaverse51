import React from 'react'
import { Footer, Navbar } from "@/components";
import { About, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from "@/homesections"
import { Explore } from '@/homesections/Explore'; //yaha explore ko iss lia alg say import kiu krwana par raha hai bcuz error aa raha hai ask sir for this.
import Vr from "@/homesections/Vr";

const Page = () => {
  return (
    <div className='bg-gray-900 overflow-hidden'>
      <Navbar />
      <Hero />
      <div className='relative'>
        <About />
        <div className="gradient-03 z-0 ">
        </div>
        <Explore />
        <Vr />
      </div>
      <div className='relative'>
        <GetStarted />
        <div className="gradient-04  z-0 "></div>
        <WhatsNew />
      </div>
      <World />
      <div className='relative'>
        <Insights />
        <div className="gradient-04  z-0 ">
        </div>
        <div>
        <Feedback />
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Page