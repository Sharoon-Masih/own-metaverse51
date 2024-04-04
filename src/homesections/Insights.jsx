'use client';
import Image from "next/image";
import { motion } from "framer-motion"
import { Fade, FadeIn, TextVariant, planetVariants, stagger } from "@/utils/motion";
import { InsightCard, TypingText } from "@/components";
import { newFeatures } from "@/constants/const";
const Insights = () => (
  <section className="sm:p-16 xs:p-8 px-6 py-12  w-full relative" id="insight">
    <motion.div
      variants={stagger(2,1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full flex flex-col lg:flex-row  lg:justify-around justify-between  items-center p-2 m-auto relative z-10 ">
      <div className=" w-full  flex flex-col space-y-3 p-2">
        <TypingText style="text-center" title="| insights"/> 
        <motion.h1 variants={FadeIn("up","tween",1,0.8)} initial="hidden" whileInView="show" viewport={{once:true}} className=" text-[40px] sm:leading-tight sm:text-[64px] text-center text-white font-bold">Insight about metaverse</motion.h1>
       <div className="pt-16"><InsightCard/></div>

      </div>

    </motion.div>
  </section>
);

export default Insights;
