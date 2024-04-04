'use client';
import { motion } from "framer-motion";
import { FadeIn, stagger } from "@/utils/motion";
import { ExploreCard, TypingText } from "@/components";
import { useState } from "react";

import { ExploreWorlds } from "@/constants/const";
import { BoldText } from "@/components/CustomTexts";
export const Explore = () => {
  const [Active, setActive] = useState("world-2")
  console.log("click explore")

  return (
    <section id="explore" className="sm:p-16 xs:p-8 px-6 py-12">
      <motion.div variants={stagger(2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once:true, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full flex   mx-auto space-y-2 flex-col">
        <TypingText title="| The world" style="text-center" />
        <BoldText Text={<>Choose the world you want <br className="md:block hidden" />to explore</>} style="text-center" />
        <div className="flex flex-col lg:flex-row  space-y-7 lg:space-x-3 py-[8px] lg:space-y-0 min-h-[80vh] ">
          {ExploreWorlds.map((card, index) => {
            return (
              <ExploreCard
                index={index} //here we will get index no of every card one by one 
                key={card.id}
                {...card} //here we are using spread operator its mean to pass all property of "card" at once,So that we dont need to individually pass property like : name={card.name}  etc... , As we know that normally "JS" will not allow to use spread like this alone, But remember when we are working with "JSX" so it allow us to use spread operator and this means that it will pass all property of card object.

                active={Active}
                handleClick={setActive} />

            )
          })}
        </div>
      </motion.div>
    </section>
  )
};

