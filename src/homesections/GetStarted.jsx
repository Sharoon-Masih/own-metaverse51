'use client';
import Image from "next/image";
import { motion } from "framer-motion"
import { FadeIn, TextVariant, planetVariants, stagger } from "@/utils/motion";
import { TypingText } from "@/components";
import { startingFeatures } from "@/constants/const";
import { features } from "process";

const GetStarted = () => (
  <section className="sm:p-16 xs:p-8 px-6 py-12  w-full relative   ">
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full flex flex-col  lg:flex-row lg:justify-around
       justify-between  items-center p-2 lg:h-[31rem] m-auto  relative z-10  ">
      <motion.div variants={planetVariants("left")} viewport={{once:true}} initial="hidden" whileInView="show" className=" flex items-center justify-center "><Image src={"/get-started.png"} height={400} width={400} alt="get-started" className="object-contain" /></motion.div>
      <div div className="flex flex-col justify-between items-start gap-[12px] w-full  lg:w-[30rem]  py-2.5 px-3 box-border ">
        <TypingText style="text-start" title="| How Metaverus Works" />
        <motion.h1 variants={FadeIn("left", "tween", 0.75, 0.75)} viewport={{once:true}}initial="hidden" whileInView="show" className="text-[40px] lg:w-[359px] sm:leading-[62px] sm:text-[64px] font-bold text-white ">
          Get started with few clicks
        </motion.h1>
        <div className="features flex-col items-start py-2 justify-between w-[20rem] space-y-2">
          {startingFeatures.map((features,index) => (
              <motion.div key={index} variants={TextVariant(0.5*index)} viewport={{once:true}} initial="hidden" whileInView="show" className="flex sm:flex-row flex-col sm:items-center sm:justify-between">
              <div className="glassmorphism2 w-[70px] h-[70px] rounded-[24px] flex items-center justify-center text-white text-[20px] font-bold">0{index+1}</div> {/*yaha index ka sth "+1" taka agr index 0 ho toh wo display ma "1" aye. in jsx we cannot use unary operator like "++" */}  
              <div className="w-[234px] h-[64px] text-[18px] font-normal text-white">{features}</div>
            </motion.div>))}
        </div>
      </div>

    </motion.div>

  </section>
);

export default GetStarted;
