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
      <div
        className="fixed top-[100px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-[800px] max-h-[500px]"
      >
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
            <h2 className="text-2xl font-bold">Sobre mim:</h2>
            <Image
              src="/bruno.png"
              alt="Foto de Bruno Souza"
              width={200}
              height={200}
              className="absolute hidden md:inline right-5 top-5 rounded-full"
            />
          </div>
          <div className="flex-1 flex flex-col font-semibold drop-shadow-lg gap-2 md:max-w-[75%]">
            <p>
              Desde muito jovem sou impulsionado por uma intensa curiosidade e uma
              dedicação ao mundo do desenvolvimento de software e a ciência. Minha
              paixão pela tecnologia começou com o desenvolvimento de jogos, um
              campo no qual me aventurei profundamente como freelancer, trabalhando
              em projetos inovadores de jogos indie.
            </p>
            <p>
              Atualmente, sou um desenvolvedor fullstack, com foco em ReactJS e
              NodeJS, e estou sempre buscando me aprimorar e aprender novas
              tecnologias.
            </p>
            <p>
              Minhas contribuições para os projetos em que participei incluem,
              criação de sistemas de inteligência artificial avançados (Jogos) até a
              geração de mapas procedurais (Jogos), o desenvolvimento de interfaces
              intuitivas e responsivas (Web e Jogos) e o desenvolvimento de sistemas
              de backend robustos e escaláveis (Web).
            </p>
            <p>
              Meu objetivo é me tornar uma referencia técnica na área de dev. de
              software, além disso mantenho uma paixão viva por Astronomia e
              Inteligência Artificial, áreas nas quais invisto tempo em pesquisa e
              colaboração, sempre buscando expandir e compartilhar conhecimento 
              por diversos meios, 
              como o <a href="https://www.brunosouzadev.com/" className="text-xl font-bold underline transition-all duration-200 ease-in-out hover:text-slate-300">meu blog</a>.
            </p>
          </div>
          <button
            className="button-primary w-full mt-2 max-w-[200px] p-3 self-center"
            onClick={onClose}
          >
            Fechar
          </button>
        </motion.div>
      </div>
    </Backdrop>
  );
}

export default Modal;
