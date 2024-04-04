'use client';
import {motion} from "framer-motion"
import { FadeIn, TextVariant3, TextVariant2, textContainer, TextVariant4, TextVariant5,} from "@/utils/motion";
import { ReactNode } from "react";

interface Itext{ 
  title:string,
  style:string
}

export const TypingText = ({title,style}:{title:string,style:string}) => { 
  console.log("click type");
  return (
  <motion.p variants={textContainer} className={`font-normal ${style} text-[14px] text-gray-300 relative z-10`}>
     {Array.from(title).map((letter:string,i)=>{  //"Array.from() this is also a method to create array by using the from() method of class Array."
      return (
        <motion.span variants={TextVariant2}  key={i}>
          {letter === " " ? "\u00a0" : letter}
        </motion.span>
      )
     })}
  </motion.p>
);
}

export const TitleText = () => {
  return (
  <motion.p variants={FadeIn("up","tween",1,0.8)} viewport={{ once:true}}
  initial="hidden" whileInView="show" className="text-center text-gray-300 relative z-10"><strong className="text-white">Metaverse</strong> is a new thing in the future, where you can enjoy the virtual world by feeling like it&apos;s really real, you can feel what you feel in this metaverse world, because this is really the <strong className="text-white">madness of the metaverse</strong> of today, using only <strong className="text-white">VR devices</strong> you can easily explore the metaverse world you want, turn your dreams into reality. Let&apos;s <strong className="text-white">explore</strong> the madness of the metaverse by scrolling down</motion.p>)
  };

 export const BoldText=({Text,style}:{Text:ReactNode,style:string}):ReactNode =>{
  
 return ( <motion.div variants={TextVariant2} viewport={{ once:true}}
  initial="hidden"
  whileInView="show"
  className={`text-white ${style}  md:text-[64px] text-[40px] font-bold relative z-10`}>
    {Text}
  </motion.div>)

 }


 export const TypingTitle1=({title,style}:{title:string,style:string})=>{

  
  return (
    <motion.p
    variants={textContainer}
    className="flex flex-row justify-center items-center">
  
        {Array.from(title).map((letter:string,i)=>{
          return (
            <motion.span variants={TextVariant3} key={i} /*im confuse that yeh animation work kasa kr rhi hai halaka humna just variant prop dia hai "initial" and "whileInview" wala prop toh pass hi nhi kia, So basically ho iss tarah sa raha hai kay humna "TextVariant3" ma jab delay hi pass nahi kia toh usna just yeh kia ka "variants" ma "hidden" and "show" ek convention properties hain toh agr hum unko na be pass krwaya "initial" and "whileInview" may toh wo understand krlega ka first hidden hoga then show toh wo bina delay ka automatically animate krega buut agr hum isko "initial" and "whileInview" prop pass krdein toh wo pura "span" ko target krega single ko nhi iss lia ek sth show krega.  */ className={`${style}`} >
           { letter === " " ? "\u00a0": letter}
            </motion.span>
          )
        })}

    </motion.p>
  )
 }
 export const TypingTitle2=({title,style}:{title:string,style:string})=>{
 return (
    <motion.p
    variants={textContainer}
    viewport={{once:true}}
    className="flex flex-row justify-center items-center">
  
        {Array.from(title).map((letter:string,i)=>{
          return (
            <motion.span key={i} variants={TextVariant4} viewport={{once:true}} initial="hidden" whileInView="show" /*  */ className={`${style}`} >
           { letter === " " ? "\u00a0": letter}
            </motion.span>
          )
        })}

    </motion.p>
  )
 }

 export const TypingTitle3=({title,style}:{title:string,style:string})=>{

  
  return (
    <motion.p
    variants={textContainer}
    className="flex flex-row justify-center items-center">
  
        {Array.from(title).map((letter:string,i)=>{
          return (
            <motion.span variants={TextVariant5} key={i}/*im confuse that yeh animation work kasa kr rhi hai halaka humna just variant prop dia hai "initial" and "whileInview" wala prop toh pass hi nhi kia, So basically ho iss tarah sa raha hai kay humna "TextVariant3" ma jab delay hi pass nahi kia toh usna just yeh kia ka "variants" ma "hidden" and "show" ek convention properties hain toh agr hum unko na be pass krwaya "initial" and "whileInview" may toh wo understand krlega ka first hidden hoga then show toh wo bina delay ka automatically animate krega buut agr hum isko "initial" and "whileInview" prop pass krdein toh wo pura "span" ko target krega single ko nhi iss lia ek sth show krega.  */ className={`${style}`} >
           { letter === " " ? "\u00a0": letter}
            </motion.span>
          )
        })}

    </motion.p>
  )
 }

 export const TypingTitle4=({title,style}:{title:string,style:string})=>{

  
  return (
    <motion.p
    variants={textContainer}
    className="flex flex-row justify-center items-center">
  
        {Array.from(title).map((letter:string,i)=>{
          return (
            <motion.span variants={TextVariant2} key={i}/*im confuse that yeh animation work kasa kr rhi hai halaka humna just variant prop dia hai "initial" and "whileInview" wala prop toh pass hi nhi kia, So basically ho iss tarah sa raha hai kay humna "TextVariant3" ma jab delay hi pass nahi kia toh usna just yeh kia ka "variants" ma "hidden" and "show" ek convention properties hain toh agr hum unko na be pass krwaya "initial" and "whileInview" may toh wo understand krlega ka first hidden hoga then show toh wo bina delay ka automatically animate krega buut agr hum isko "initial" and "whileInview" prop pass krdein toh wo pura "span" ko target krega single ko nhi iss lia ek sth show krega.  */ className={`${style}`} >
           { letter === " " ? "\u00a0": letter}
            </motion.span>
          )
        })}

    </motion.p>
  )
 }