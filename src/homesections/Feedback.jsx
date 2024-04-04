'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { Fade, FadeIn, TextVariant, planetVariants, stagger, zoomIn } from "@/utils/motion";
const Feedback = () => (
  <section className="sm:p-16 xs:p-8 px-6 py-12  w-full relative">
    <motion.div
      variants={stagger(2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full flex  flex-col lg:flex-row  lg:justify-around justify-between  items-center p-2 m-auto relative z-10 space-y-6 lg:space-y-0 lg:space-x-5 xl:justify-center ">
      <motion.div
        variants={FadeIn("right", "tween", 0.75, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true}}
        className="lg:max-w-[370px] gradient-05 border-[1px] border-[#6a6a6a] rounded-[32px] flex flex-col relative w-full sm:p-8 p-4 space-y-[18px] lg:h-[610px] lg:justify-end justify-center items-start">
        <div className="feedback-gradient"></div>
        <div className="z-20 relative flex justify-between items-start flex-col">
          <h4 className="text-white font-bold sm:leading-[40px] leading-[32px] text-[26px] sm:text-[32px]">
            Samantha
          </h4>
          <h5 className="text-gray-300 text-[14px] sm:text-[18px] ">Founder | Metaverse</h5>
        </div>
        <div className="z-10 flex justify-center pb-[50px] items-center lg:pb-0 ">
          <p className="font-normal text-[18px]  sm:leading-[45.6px] sm:text-[24px] leading-[39px] text-white">“With the development of today&apos;s technology, metaverse is very useful for today&apos;s work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
        </div>
        <motion.div
          variants={zoomIn(0.75, 0.75)}
          initial="hidden"
          whileInView="show"
          className="absolute hidden lg:block top-[4rem] -right-[4rem] z-20">
          <Image src={"/stamp.png"} height={100} width={100} alt={"btn"} />
        </motion.div>
      </motion.div>
      <motion.div
        variants={FadeIn("left", "tween", 0.75, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true}}
        className="flex justify-center items-center">
        <img src="/planet-09.png" alt="p9" className="w-full h-auto lg:h-[610px] lg:w-[768px] rounded-[32px] object-cover " />
      </motion.div>


    </motion.div>
  </section>
);

export default Feedback;
