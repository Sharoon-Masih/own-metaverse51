
'use client';
import { motion } from "framer-motion";
import { FadeIn, stagger } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";
const ExploreCard = ({ id, title, imgUrl, active, index, handleClick }: { id: string, title: string, imgUrl: string, active: string, index: number, handleClick: (id: string) => void }) => { //yaha "handleclick" ki return type void iss lia rakhi hai bcuz useState() may jo "Set" ka func kabhi be kuch return nhi krta bs wo current value ko "Set" krdeta hai,isilia valid type ka lia humna return type "void" rakhi hai. 
  
  console.log("click card")
  return (<motion.div variants={FadeIn("left", "spring", 0.75, index * 0.5)} viewport={{ once:true}} initial="hidden" whileInView="show" className={`relative flex justify-center  items-center ${active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"} min-w-[170px] h-[700px]  transition-[flex] duration-[0.7s] ease-in-out`} onClick={() => { handleClick(id) }} /*yaha par basic flow yeh chl raha hai ka "Explore" component sa mena ek prop pass kia jisma "setActive" func pass kiya waha par usko call nahi kia just pass kiya hai or waha say jo func pass kiya hai yaha par uska jo parameter hai wo provide krdia and then phr jab hum uspa click krenga toh dubara sa "explore" component render hoga bcuz its a parent component  then phr uska andar "ExploreCard" render hoga or phr usma jo "Active" prop hai uski wohi "id" hogi jo yaha par humna onClick ka func ma pass krwayi hai or wo uska A/c card ko update krdega. */ >  {/*here we set "index * 0.5" in delay wo iss lia ka all cards step by step appear hon ek sth na hon toh wo iss tarah hoga ka like 1st index "0*0.5" ,then 2nd "1*0.5" and so on toh wo automatically time increase hota jayega.*/}
    <img src={imgUrl} className="absolute object-cover w-full h-full rounded-lg" />
    {active !== id ? <h1 className=" absolute z-10  text-2xl font-bold text-white  lg:-rotate-90 lg:bottom-20 ">{title}</h1> : <div className=" absolute bottom-0 w-full justify-start glassmorphism  rounded-b-lg flex  p-8 text-white ">
      <div className="flex flex-col justify-center items-start w-full  lg:h-24 space-y-2">
        <Image src={"/headset.svg"} alt="vr" height={40} width={40} className=" z-10" />
        <h2>Enter the Metaverse</h2>
       <Link href={`/metaworlds/${id}`}><h2 className="font-semibold">{title}</h2></Link>
      </div>
    </div>
    }

  </motion.div>)
};

export default ExploreCard;
/*origin-center when text rotate so it rotate from center*/