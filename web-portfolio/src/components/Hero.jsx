import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/nicolasProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 lg:pb-28">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              // initial={{ x: -100, opacity: 0 }}
              // animate={{ x: 0, opacity: 1 }}
              // transition={{ duration: 0.5, delay: 1 }}
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Nicolás Buszczak
            </motion.h1>
            <motion.span 
            variants={container(0.75)}
            initial='hidden'
            animate='visible'
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.span 
            variants={container(0.75)}
            initial='hidden'
            animate='visible'
            className="ml-32 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              &
            </motion.span>
            <motion.span 
            variants={container(0.75)}
            initial='hidden'
            animate='visible'
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Electronics Engineer
            </motion.span>
            {HERO_CONTENT.map((paragraph,index)=><motion.p
            key={index}
            variants={container(1.5)}
            initial='hidden'
            animate='visible'
            className="mt-4 max-w-xl py-1 font-light tracking-tighter">
              {paragraph}
            </motion.p>)}
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center xl:justify-end">
            <motion.img
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
            className="rounded-l-full w-2/3"
            src={profilePic} alt="Profile pic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
