"use client";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

function PortfolioContent() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      initial={"hidden"}
      animate={"visible"}
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="welcome-box py-4 px-8 border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] w-5 h-5" />
          <h1 className="welcome-text text-lg">Desenvolvedor Fullstack</h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
      >
        Provendo
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          A Melhor Experiência
        </span>
        de Desenvolvimento de Software
      </motion.div>
      <motion.p
        variants={slideInFromLeft(0.8)}
        className="text-lg text-gray-400 my-5 max-w-[600px]"
      >
        Tenho {currentYear - 1997} anos e sou Engenheiro de Software com{" "}
        {currentYear - 2021} anos de experiencia trabalhando Desenvolvimento
        Fullstack.
      </motion.p>
      <motion.a
        variants={slideInFromLeft(1.1)}
        className="p-2 button-primary text-center - text-white cursor-pointer rounded-lg max-w-[200px]"
      >
        Saiba mais!
      </motion.a>
      </div>
      
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image 
          src="/mainIconsdark.svg"
          width={650}
          height={650}
          alt="Work Icons"
        />
      </motion.div>
    </motion.div>
  );
}

export default PortfolioContent;
