"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh"}}
      animate={{ y: "0%"}}
      transition={{ duration: 1}}
    >
    <div className="h-full flex flex-col lg:flex-row  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain"/>
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center items-center gap-5">
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">Crafting Digital Experiences, Designing Tomorrow.</h1>
        {/* DESCRIPTION */}
        <p className="text-sm md:text-xl">Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
        </p>
        {/* BUTTONS */}
        <div className="flex self-start gap-4">
          <Link href="/portfolio">
            <button className="p-4 ring-1 ring-black rounded-lg bg-black text-white">View My Work</button>
          </Link>
          <Link href="/contact">
            <button className="p-4 ring-1 ring-black rounded-lg">Contact Me</button>
          </Link> 
        </div>
      </div>
    </div>
    </motion.div>
  )
};

export default Homepage;
