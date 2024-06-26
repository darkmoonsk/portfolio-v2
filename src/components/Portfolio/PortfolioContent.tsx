"use client";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Modal from "../UI/Modal";
import Text from "../UI/Text";
import AstronautAnimation from "../Animations/AstronautAnimation";

function PortfolioContent() {
  const currentYear = new Date().getFullYear();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <>
      <AnimatePresence
        onExitComplete={() => null}
      >
        {showModal && (   
            <Modal onClose={toggleModal} /> 
          )
        }
      </AnimatePresence>
      <motion.div
        initial={"hidden"}
        animate={"visible"}
        className="flex flex-row items-center justify-center px-2 sm:px-20 mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center sm:text-start">
          <motion.div
            variants={slideInFromTop}
            className="welcome-box self-center sm:self-auto py-4 px-8 border border-[#4824b48b] font-black opacity-[0.9]"
          >
            <SparklesIcon className="text-[#a285fa] mr-[10px] w-5 h-5" />
            <h1 className="welcome-text text-base md:text-lg font-semibold" id="about-me">Desenvolvedor Fullstack</h1>
          </motion.div>
          <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl lg:text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          Proporcionando
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            A Melhor Experiência
          </span>
          Em Dev. de Software
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Tenho {currentYear - 1997} anos e sou Engenheiro de Software com{" "}
          {currentYear - 2021} anos de experiencia trabalhando com Desenvolvimento
          Fullstack usando <Text tag="span" theme="default">React, JavaScript, Typescript, Next e Node.</Text>
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1.1)}
          onClick={toggleModal}
          className="px-12 py-2 button-primary self-center sm:self-auto text-center fire-text cursor-pointer rounded-lg max-w-[200px]"
        >
          Saiba mais!
        </motion.a>
        </div>
        
        <motion.div
          variants={slideInFromRight(0.8)}
          className="hidden md:flex w-full h-full  justify-center items-center"
        >
          <AstronautAnimation />
        </motion.div>
      </motion.div>
    </>
  );
}

export default PortfolioContent;
