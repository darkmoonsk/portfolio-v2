import Image from "next/image";
import { motion } from "framer-motion";
import { dropIn } from "@/utils/motion";
import Backdrop from "../VFX/Backdrop";

interface ModalProps {
  onClose: () => void;
}

function Modal({ onClose }: ModalProps) {
  return (
    <Backdrop handleClose={onClose}>
      <div className="fixed top-[100px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-[800px] max-h-[500px]">
        <motion.div
          onClick={(e) => e.stopPropagation()}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="
        w-full overflow-y-scroll fixed shadow-lg shadow-[#2A0E61]/50
        bg-[#03001417] backdrop-blur-md z-50 px-10 mx-3 max-w-[800px] max-h-[500px] text-white flex flex-col gap-2 p-4
        "
        >
          <div>
            <h2 className="text-2xl font-bold">About me:</h2>
            <Image
              src="/bruno.png"
              alt="Photo of Bruno Souza"
              width={200}
              height={200}
              className="absolute hidden md:inline right-5 top-5 rounded-full"
            />
          </div>
          <div className="flex-1 flex flex-col font-semibold drop-shadow-lg gap-2 md:max-w-[75%]">
            <p>
              From a very young age, I have been driven by intense curiosity and
              a dedication to the world of software development and science. My
              passion for technology began with game development, a field in
              which I delved deeply as a freelancer, working on innovative indie
              game projects.
            </p>
            <p>
              Currently, I am a fullstack developer focused on ReactJS and
              NodeJS, and I am always looking to improve and learn new
              technologies.
            </p>
            <p>
              My contributions to the projects I have participated in range from
              building advanced artificial intelligence systems (Games) to
              generating procedural maps (Games), developing intuitive and
              responsive interfaces (Web and Games), and developing robust and
              scalable backend systems (Web).
            </p>
            <p>
              My goal is to become a technical reference in software
              development. I also maintain a strong passion for Astronomy and
              Artificial Intelligence, areas in which I invest time in research
              and collaboration, always seeking to expand and share knowledge
              through various means, such as{" "}
              <a
                href="https://www.brunosouzadev.com/"
                className="text-xl font-bold underline transition-all duration-200 ease-in-out hover:text-slate-300"
              >
                my blog
              </a>
              .
            </p>
          </div>
          <button
            className="button-primary w-full mt-2 max-w-[200px] p-3 self-center"
            onClick={onClose}
          >
            Close
          </button>
        </motion.div>
      </div>
    </Backdrop>
  );
}

export default Modal;
