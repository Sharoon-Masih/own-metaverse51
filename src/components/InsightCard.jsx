'use client';
import { motion } from "framer-motion";
import { FadeIn, stagger } from "@/utils/motion";
import Image from "next/image";
import { insights } from "@/constants/const";
import Link from "next/link";

const InsightCard = () => (
 insights.map((card,index)=>(   //now as im directly applying map on insight array in JS component so thats why we dont put it inside {} initially, means kay humna ek JS component bnaya or direct usma ek JS ka hi operation perform kr rhay hain as nhi ka pehla koi html use ki ho or usma JS use kr rhay hon agr wo case hota then hum {} use krtay.
 <motion.div
  variants={stagger(2,index * 0.2)}
  initial="hidden"
  whileInView="show"
  viewport={{ once:true, amount: 0.25 }}
  key={card.title}
  className="flex w-full flex-col lg:flex-row justify-between lg:justify-evenly pt-4 lg:pt-3 items-center relative p-2 space-y-5 lg:space-y-0">
  <div className=" flex flex-col items-center justify-between   lg:flex-row lg:justify-between w-full lg:w-[590px] space-y-2 lg:space-y-0 ">
    <motion.div
      variants={FadeIn("right", "tween", 0.75,index * 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{once:true}}
      className="flex flex-col items-start justify-between">
      <img src={card.imgUrl} alt="p" className="object-cover rounded-xl w-48 h-48 lg:w-44 lg:h-44" />
    </motion.div>
    <motion.div variants={FadeIn("up", "tween", 1,index * 0.8)} initial="hidden" whileInView="show" 
    viewport={{once:true}} className="flex flex-col justify-center items-center">
      <div className="text-[24px] md:w-96  text-center lg:text-start lg:[text-42px] text-white font-normal">{card.title}</div>
      <div className="text-[14px] md:w-[400px] lg:w-96 text-center lg:text-start text-gray-300 font-normal">{card.title}</div>
    </motion.div>
  </div>
  <motion.div variants={FadeIn("left","tween",0.75,index * 1.2)} initial="hidden" 
  whileInView="show"
  viewport={{once:true}}  
  className="border-2 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer">
   <Link href={card.link}><Image src={"/arrow.svg"} height={24} width={24} alt="arrow"></Image></Link>
  </motion.div>
</motion.div>))
);

export default InsightCard;
