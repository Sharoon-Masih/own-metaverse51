'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { Fade, FadeIn, TextVariant, footerVariants, planetVariants, stagger, zoomIn } from "@/utils/motion";
import { socials } from "@/constants/const";
const Footer = () => (
  <div className="bg-gray-900">
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className=" z-10 w-full sm:pt-16 xs:pt-8 px-6 flex flex-col items-center relative justify-between">
      <div className="flex flex-col md:flex-row justify-between items-center 2xl:max-w-[1280px]  space-y-3 md:space-y-0 w-full m-auto  relative z-10 pb-[70px]">
        <div className="footer-gradient"></div>
        <h1 className="text-[40px] sm:text-[64px] text-center md:text-start  font-bold text-white z-10">Enter the Metaverse</h1>
        <a href="#Home"><button className="px-3 py-2 rounded-3xl flex justify-between items-center space-x-2 bg-[#25618B] z-10">
          <Image src={"/headset.svg"} width={24} height={24} alt="vr" />
          <h6 className="uppercase text-[16px] font-normal text-white">Enter Metaverse</h6>
        </button></a>
      </div>
      <div className="flex flex-col flex-wrap justify-between items-center 2xl:max-w-[1280px]  w-full  m-auto  bottom-0 z-10">
        <div className="w-full bg-[#FFFFFF] opacity-10 h-[2px]"></div>
        <div className="flex flex-col md:flex-row justify-between  w-full items-center py-[25px] space-y-3 md:space-y-0">
          <h1 className="font-extrabold text-[24px] text-white">METAVERUS</h1>
          <span className="text-[14px] font-normal text-[#FFFFFF] opacity-70 text-center">Copyright © 2021 - 2022 Metaversus. All rights reserved.</span>
          <div className="flex justify-between space-x-3 items-center">
            {socials.map((logo) => (
              <Image key={logo.name} src={logo.url} width={24} height={24} alt={logo.name} className="text-white" />
            ))}

          </div>

        </div>

      </div>
    </motion.footer>
  </div>
);

export default Footer;
