"use client"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

function SkillsText() {
  return (
    <div className="
      w-full h-auto flex flex-col items-center justify-center
    ">
      <motion.div
          variants={slideInFromTop}
          className="welcome-box py-4 px-8 border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] w-5 h-5" />
          <h1 className="welcome-text text-lg font-bold">Minhas Habilidades</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-3xl text-white font-medium mt-3 text-center mb-4"
      >
        Meu foco é desenvolver aplicações web com os melhores designs e experiências para os usuários.
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="cursive text-3xl text-gray-200 mb-10 mt-3 text-center"
      >
        Ao longo da minha carreira tenho aprendido e desenvolvido habilidades em diversas áreas e tecnologias, e estou em constante aprendizado e evolução. Aprender é a minha paixão.
      </motion.div>
    </div>
  )
}

export default SkillsText;