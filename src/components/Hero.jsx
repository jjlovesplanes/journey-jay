import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/JayKimProfile.jpg";
import {animate, motion} from "framer-motion";

const container = (delay) => ({
  hidden: {x:-100, opacity:0 },
  visible: { x:0, opacity:1,
             transition: {duration: 0.5, delay:delay}}
})

export const Hero = () => {
  return (
  <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                    
                    variants={container(.50)}
                    initial= "hidden"
                    animate= "visible"

                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-1 lg:text-8xl">
                    Jay Kim
                </motion.h1>

                <motion.span 
                    
                    variants={container(1)}
                    initial= "hidden"
                    animate= "visible"

                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                  Software Developer & Educator & Aircraft Dispatcher
                </motion.span>

                <motion.p 
                    variants={container(1.50)}
                    initial= "hidden"
                    animate= "visible"
                    
                    className="my-2 max-w-xl py-1 font-light track-tighter">
                  {HERO_CONTENT}
                </motion.p>

            </div>
        </div>
    
    <div className="w-full lg:w-1/2 lg:p-8">
      <div className="flex justify-center">
        <motion.img 
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:1.3}}
            src={profilePic} alt="Jay Kim"/>
      </div>
    </div>
    
    </div>
  </div>
  
  
  )
}

export default Hero;