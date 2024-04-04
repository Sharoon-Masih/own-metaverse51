'use client';
import { motion } from "framer-motion";
import { FadeIn, NavVariants, zoomIn } from "@/utils/motion";
import Image from "next/image";
import Menu from "./menu";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false)
  return (
    <div className="bg-gray-900 ">
      <motion.nav
        variants={NavVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className=" sm:px-16 px-6 w-full py-8 relative z-50" id="Home">
        <div className="absolute w-2/4 gradient-01 inset-0"></div>{/*this div is for gradient*/}
        <div className="2xl:max-w-[1280px] m-auto flex justify-between  gap-8">
          <Image src={"/search.svg"} alt="search" height={24} width={24} className="object-contain " />
          <h1 className="font-bold sm:font-extrabold text-2xl leading-[30px] text-white relative z-10">METAVERSUS</h1>
          {active ?
            <motion.div variants={NavVariants} initial="hidden"
              whileInView="show" className="relative z-50"
              viewport={{ once: true }}
              onClick={() => { setActive((prev) => !prev) }}>
              <div className="z-50">
                <Image src={"/menu.svg"} height={24} width={24} alt="menu" className="object-contain z-50 relative" />
                <Menu />
              </div>
            </motion.div>
            :
            <div className="relative z-50" onClick={() => { setActive((prev) => !prev) }}>
              <Image src={"/menu.svg"} height={24} width={24} alt="menu" className="object-contain z-50 relative" />
            </div>}
        </div>
      </motion.nav>
    </div>)
};

export default Navbar;
