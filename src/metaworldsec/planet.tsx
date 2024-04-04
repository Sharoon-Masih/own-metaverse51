"use client";
import React from 'react'
import {motion,useAnimation} from "framer-motion"

export const Planet = () => {
  const control=useAnimation()
  return (
    <section className='hidden md:block sm;p-16 xs:p-8 p-8 py-12 relative '>
       <div className='w-full p-2  flex  h-[300px] flex-col items-center justify-between '>
        <div className='flex justify-between items-center'>
            <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={()=>{control.start({
              x:"-170%"
            })}}>Left</button>
            <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={()=>{control.start({
              x:"170%"
            })}}>Right</button>
            <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'  onClick={()=>{control.start({
              borderRadius:"100%"
            })}}>Circle</button>
            <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
            onClick={()=>{control.start({
              borderRadius:"0%"
            })}}>Square</button>
            <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
            onClick={()=>{control.stop()}}>Stop</button>
        </div>
        <motion.div animate={control} transition={{duration:1.5}} className='md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px] rounded-md  bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 flex justify-center items-center text-white font-semibold text-[25px]'>
          explore
          
        </motion.div>

       </div>
    </section>
  )
}

 