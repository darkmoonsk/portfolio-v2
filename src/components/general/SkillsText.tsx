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
          <h1 className="welcome-text text-lg">Lorem ipsum</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-3xl text-white font-medium mt-3 text-center mb-4"
      >
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="cursive text-3xl text-gray-200 mb-10 mt-3 text-center"
      >
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </motion.div>
    </div>
  )
}

export default SkillsText;