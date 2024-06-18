import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:0.5}}
          className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about img" />
          </motion.div>
        </div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2">
          <div className="flex flex-col justify-center lg:justify-start">
            {ABOUT_TEXT.map((paragraph,index)=><p key={index} className="my-1 max-w-xl py-4">{paragraph}</p>)}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
