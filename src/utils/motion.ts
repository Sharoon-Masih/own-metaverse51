import { animate } from "framer-motion"


interface Inav {
    hidden: {
        opacity: number,
        y: number,
        transition: {
            type: string,
            stiffness: number,
            damping: number,
        }
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: string,
            stiffness: number,
            // damping: 140,
            delay: number
        }
    }
}

export const NavVariants: any = {
    hidden: {
        opacity: 0,
        y: -10,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 140,
        }
    }
    ,
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 60,
            // damping: 140,
            delay: 0.5
        }
    }
}

type slide = (direction: string, type: string, duration: number, delay: number) => any
export const SlideIn: slide = (direction, type, duration, delay) => {
    return {
        hidden: {
            x: direction === "left" ? "500%" : direction === "right" ? "500%" : 0,
            y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type: type,
                duration: duration,
                delay: delay,
                ease: "easeOut"
            }
        }

    }
}
export const SlideIn2: slide = (direction, type, duration, delay) => {
    return {
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
            opacity:0
        },
        show: {
            x: 0,
            y: 0,
            opacity:1,
            transition: {
                type: type,
                duration: duration,
                delay: delay,
                ease: "easeOut"
            }
        }

    }
}

interface Istagger {
    [hidden: string]: {},
    show: {
        transitions: {
            staggerChildren: number | string,
            delayChildren: number | string
        }
    }
}

export function stagger(staggerChildren: number, delayChildren: number): Istagger //remember if we are exporting func so then we have to export overloads as well.
export function stagger(staggerChildren: string, delayChildren: string): Istagger
export function stagger(staggerChildren: any, delayChildren: any): any {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren,
                delayChildren
            }
        }

    }
}

interface Itext {
    hidden: {
        y: number,
        opacity: number
    },
    show: {
        y: number,
        opacity: number,
        transition: {
            type: string,
            duration: number,
            delay: number

        }
    }
}
export const TextVariant: (delay: number) => any = (delay) => ({
    hidden: {
        y: 50,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring   ",
            duration: 1.25,
            delay

        }
    }
})

type FadeIn = (direction: string, type: string, duration: number, delay: number) => any
export const FadeIn: slide = (direction, type, duration, delay) => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? "-100%" : 0,
            y: direction === "up" ? 100 : direction === "down" ? "-100%" : 0,
            opacity: 0
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                duration: duration,
                delay: delay,
                ease: "easeOut"
            }
        }

    }
}


export const textContainer = {
    hidden: {
        opacity: 0,
    },
    show: (i = 1) => ({  //basically yaha yeh func iss lia banaya hai taka "i" ko ek default value dedi ka agr value specify na ho toh "1" ka A/c delay time set kro warna agr value mil jaye toh phr multiple hoka then delay set hoga wo iss taka animation start kitna time bd hogi uska liya or wo depend krega ka container ma kitna child hain toh basically "i" ko number of child provide krna hongay.  
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
};

export const TextVariant2 = {

    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            ease: "easeIn"
        }
    }
}

export const rotateVariant = {
    animate: {
        scale: [1, 1, 1.4, 1.4, 1],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        rotate: [0, 0, 270, 270, 0]

    },
    transition: {
        duration: 2,
        ease: "easeIn"
    }

}

export const planetVariants = (direction: string) => ({
    hidden: {
        x: direction === 'left' ? '-100%' : direction === "right" ? '100%' : 0,
        rotate: 120,
        opacity: 0
    },
    show: {
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: {
            type: 'spring',
            duration: 1.8,
            delay: 0.5,
        },
    },
})

export const Fade = () => ({
        hidden: {
            opacity: 0,
            x:20
        },
        show: {
            x:0,
            opacity: 1,
            transition: {
                type:"tween",
                duration:1,
                delay: 0.75
            }
        }
})

export const zoomIn =(delay:number,duration:number,scale:number=1)=>(
    { hidden:{
        scale:0,
        opacity:0
    },
    show:{
        scale,
        opacity:1,
        transition:{
            type:"tween",
            duration,
            delay,
            ease:"easeOut"
        }
    }
}
)

export const footerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        delay: 0.5,
      },
    },
  };

  export const TextVariant3 = {

    hidden: { 
        opacity: 1,
        y: 25
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            ease: "easeIn",
            // delay:0.3
        }
    }
}
  export const TextVariant4 = {

    hidden: { 
        opacity: 0,
        y: 25
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            ease: "easeIn",
            
        }
    }
}

export const TextVariant5 = {

    hidden: { 
        opacity: 1,
        y: -25
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            ease: "easeIn",
           
        }
    }
}

export const fill={
    hidden:{
        width:0
    },
    show:{
        width:"100%",
        transition:{
            type:"tween",
            duration:0.8,
            delay:0.4
        }
    } 
}