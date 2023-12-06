'use client'

import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollToTop = () => {

  const handleScrollToTop = () => {
    // Hacer scroll hacia la parte superior de la página
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <div onClick={handleScrollToTop} className="hidden sticky bottom-8 h-[50px] w-full md:flex justify-end items-center">
      <div className="border border-white bg-black/80 hover:bg-black hover:cursor-pointer h-full w-[50px] mr-8 rounded-full flex items-center justify-center ease-in duration-300">
        <FaArrowUpLong size={25} className="text-white" />
      </div>
    </div>
  );
};

export default ScrollToTop;
