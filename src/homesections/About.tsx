'use client';
import { motion } from "framer-motion";
import { FadeIn, stagger} from "@/utils/motion";
import { TitleText, TypingText } from "@/components/CustomTexts";
import Image from "next/image";

const About = () => (
  <section  className="sm:p-16 xs:p-8 px-6 py-12  relative z-10
    w-full ">
   <div className="gradient-02  z-0 relative"></div>
   <motion.div
   variants={stagger(2,1)}
   initial="hidden"
   whileInView="show"
   viewport={{once:true , amount:0.25}}
   className="2xl:max-w-[1280px] w-full flex justify-center items-center mx-auto space-y-1 flex-col">
   <TypingText title="| About Metaverse" style="text-center"/>
    <TitleText/>
    <motion.span className="pt-2 " variants={FadeIn("down","spring",0.4,1.2)} viewport={{ once:true}}
    initial="hidden" whileInView="show">
     <a href="#insight"> <Image src={"/arrow-down.svg"} height={18} width={18} alt="arrow" className="text-gray-300" /> </a>
    </motion.span>
   </motion.div>
  </section>
);

export default About;
