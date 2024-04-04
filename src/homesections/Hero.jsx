'use client';
import { motion } from "framer-motion";
import { SlideIn, stagger, TextVariant } from "@/utils/motion";
import Image from "next/image";
// import Link from "next/link";
const customStyle = {
  heroText: " font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white",
  heroDText:
    'md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]'

}

const Hero = () => (
  <section className=" pl-6 sm:pl-16  sm:py-16 xs:py-8 py-12">
    <motion.div
      variants={stagger(2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full flex flex-col items-center justify-center mx-auto ">
      <div className="relative flex justify-center items-center z-10"><motion.h1 variants={TextVariant(1.1)} viewport={{ once:true}} initial="hidden" whileInView="show" className={`${customStyle.heroText}`}>METAVERSE</motion.h1></div>
      <motion.div variants={TextVariant(1.2)} viewport={{ once:true}} initial="hidden" whileInView="show" className="relative flex justify-center flex-row items-center z-10"><h1 className={`${customStyle.heroText}`}>Ma</h1>
        <div className={`${customStyle.heroDText}`}></div>
        <div className={`${customStyle.heroText}`}>Ness</div>
      </motion.div>
      <motion.div className="relative w-full  -mt-[12px] md:-mt-[20px] mx-auto" variants={SlideIn("right", "tween", "0.8", "1")} viewport={{ once:true}}>
        <div className="hero-gradient w-full h-[270px]  absolute rounded-tl-[140px] -top-[30px] z-0 bottom-0 overflow-hidden">
        </div>
        <Image src={"/cover.png"} height={1000} width={1000} alt={"planet"} className=" relative w-full  z-0 rounded-tl-[140px] object-cover sm:h-[500px] h-[350px]" />
        <div className="w-full flex justify-end items-center   z-10 relative sm:-mt-[80px] -mt-[50px] pr-[40px]">
          <a href="#explore">
            <Image src={"/stamp.png"} height={100} width={100} alt="btn"></Image></a>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
