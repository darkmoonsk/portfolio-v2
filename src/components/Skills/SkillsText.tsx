"use client";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

function SkillsText() {
  return (
    <div
      className="
      w-full h-auto flex flex-col items-center justify-center
    "
    >
      <motion.div
        variants={slideInFromTop}
        className="welcome-box py-4 px-8 border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] w-5 h-5" />
        <h1 className="welcome-text text-lg font-bold">My Skills</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-3xl text-white font-medium mt-3 text-center mb-4"
      >
        My focus is to build web applications with the best designs and user
        experiences.
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="cursive text-3xl text-gray-200 mb-10 mt-3 text-center"
      >
        Throughout my career, I have learned and developed skills in various
        areas and technologies, and I am in constant learning and evolution.
        Learning is my passion.
      </motion.div>
    </div>
  );
}

export default SkillsText;
