'use client';
import Image from "next/image";
import { motion } from "framer-motion"
import { Fade, FadeIn, TextVariant, planetVariants, stagger } from "@/utils/motion";
import { TypingText } from "@/components";
import { newFeatures } from "@/constants/const";
const World = () => (
<section className="sm:p-16 xs:p-8 px-6 py-12  w-full relative   ">
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full flex flex-col lg:flex-row  lg:justify-around justify-between  items-center p-2 m-auto relative z-10 ">
      <div className="flex flex-col items-center justify-evenly space-y-3  p-2 ">
        <TypingText style="text-center" title="| people on the world" key={"world"}/>
        <motion.h1 variants={TextVariant(0.75)} initial="hidden" viewport={{once:true}}whileInView="show" className="font-bold text-[40px]  md:text-[64px] text-center text-white">Track friends around you and <br className="hidden md:block"/> invite them to play together in the same world</motion.h1>
        <motion.div variants={FadeIn("up","tween",1,0.8)} initial="hidden" whileInView="show" viewport={{once:true}} className="pt-16  relative">
          <Image src={"/map.png"} height={800} width={800} alt="map" className="object-contain"/>
          <Image src={"/people-01.png"} width={58} height={58} alt="p1" className="absolute bottom-20 right-14 shadow-lg rounded-full shadow-orange-500/50"></Image>
          <Image src={"/people-03.png"} width={60} height={60} alt="p1" className=" shadow-blue-500/50 shadow-lg rounded-full absolute bottom-2/4 right-2/4"></Image>
          <Image src={"/people-02.png"} width={60} height={60} alt="p1" className="absolute bottom-3 left-[20px] sm:top-[75px] sm:left-20 shadow-lg shadow-pink-500/50 rounded-full"></Image>
          <Image src={"/l1.png"} width={90} height={90} alt="p1" className="hidden sm:block absolute top-1 sm:top-[50px] sm:right-32 hover:shadow-md hover:shadow-purple-500/50 rounded-lg"></Image>
          
          <Image src={"/loc.png"} width={90} height={90} alt="p1" className=" hidden sm:block absolute top-5 right-[40px] sm:left-[115px] sm:top-[250px] hover:shadow-md hover:shadow-purple-500/50 rounded-lg"></Image>
          
        </motion.div>
      </div>

      </motion.div>
</section>
);

export default World;
{/* <Image src={"/loc.png"} width={80} height={80} alt="p1" className="absolute top-5 right-[40px] sm:bottom-0 sm:left-20 hover:shadow-md hover:shadow-purple-500/50 rounded-lg"></Image> */}