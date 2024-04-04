'use client';
import Image from "next/image";
import { motion } from "framer-motion"
import { FadeIn, TextVariant, planetVariants, stagger } from "@/utils/motion";
import { TypingText } from "@/components";
import { newFeatures } from "@/constants/const";

const WhatsNew = () => (
  <section className="sm:p-16 xs:p-8 px-6 py-12 w-full relative   ">
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full flex flex-col  lg:flex-row  lg:justify-around justify-between  items-center p-2   lg:h-[30rem] m-auto relative z-10 ">
      <div div className="flex flex-col justify-around w-full lg:w-[30rem] items-start gap-[12px] py-2.5 px-2 box-border space-y-2">
        <TypingText style="text-start" title="| Whats New?" />
        <motion.h1 variants={FadeIn("right", "tween", 0.75, 0.75)} viewport={{once:true}} initial="hidden" whileInView="show" className="text-[40px] sm:leading-[62px] sm:text-[64px] font-bold text-white ">
          What&apos;s new about Metaversus?
        </motion.h1>
        <div className="features flex flex-col md:flex-row md:items-center justify-evenly   p-2 box-border w-full space-y-2 md:space-y-0 md:space-x-3">
          {newFeatures.map((features, index) => (
            <motion.div variants={TextVariant(0.5 * index)} initial="hidden"  viewport={{once:true}} whileInView="show" className="flex flex-col items-start justify-between space-y-2" key={index}>
              <div className="glassmorphism2 w-[70px] h-[70px] rounded-[24px] flex items-center justify-center text-white text-[18px] font-bold"><Image src={features.imgUrl} height={45} width={45} alt="whats-new" className="" /></div>
              <div className="text-white text-[24px] font-bold">{features.title}</div>
              <div className="w-[213px] h-[87px] text-[16px] font-normal text-white">{features.subtitle} {/*extra: remember in jsx we cannot return whole object at once like agr hum yun likhena <div>{feature}</div> so it will raise error. we can only properties bcuz there types are primitive so jsx will accept */}</div>
            </motion.div>))}
        </div>
      </div>
      <motion.div variants={planetVariants("right")} viewport={{once:true}}initial="hidden" whileInView="show" className=" flex items-center justify-center mt-12"><Image src={"/whats-new.png"} height={400} width={400} alt="what-new" className="object-contain" /></motion.div>
  </motion.div>

  </section>
);

export default WhatsNew;
