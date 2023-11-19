'use client'
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="w-full h-[440px] relative">
        <Image
          src={"/images/bg.jpg"}
          alt="Hero Image"
          width={1200}
          height={500}
          priority
          className="w-full h-full object-cover"
        />
        <div           
          className="font-montserrat absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black to-transparent flex items-center px-20">
          <motion.h1 
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, x: 200 }}
            className="text-white text-right text-3xl lg:text-5xl italic w-full">
            Welcome to{" "}
            <span className="text-5xl font-bold lg:text-6xl bg-clip-text text-transparent pr-2 bg-gradient-to-r from-white to-red-400">
              GamesWorld
            </span>
          </motion.h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[30px] bg-gradient-to-t from-black to-transparent"></div>
      </div>      
    </>
  );
};

export default Hero;
