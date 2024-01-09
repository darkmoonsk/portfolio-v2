"use client"
import { slideInFromTop } from "@/utils/motion"
import { motion } from "framer-motion"
import Image from "next/image"

function Encryption() {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-5xl font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}&{" "}
          </span>
          Segurança
        </motion.div>
      </div>
      <div className="
        flex flex-col items-center justify-center translate-y-14 absolute z-20 w-auto h-auto
      ">
        <Image 
          src="/LockTop.png"
          alt="Lock top"
          width={50}
          height={50}
          className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
        />
        <Image 
          src="/LockMain.png"
          alt="Lock Main"
          width={70}
          height={70}
          className="z-10"
        />
      </div>

      <div className="
        welcome-box px-3 py-2 my-5 z-20 border border-[#7042f88b] opacity-[0.9
      ">
        <h1 className="
          welcome-text text-lg text-center text-white
        ">Encryption</h1>
      </div>
      <div className="absolute z-20 bottom-3 px-2">  
        <div className="
          cursive text-2xl font-medium text-center text-gray-300
        ">
          Tenho a segurança e a performance do software como parte fundamental do meu trabalho.
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <div
          className="absolute w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-75"
        />
        <video 
          muted
          autoPlay
          loop
          playsInline
          preload="false"
          className="w-full h-auto opacity"
          src="/videos/encryption.webm"
        />
      </div>
    </div>
  )
}

export default Encryption;