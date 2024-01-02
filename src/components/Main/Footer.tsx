import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4">
      <div className="w-full flex flex-col py-3 items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <h3 className="font-bold text-lg">Comunidade</h3>
            <p className="flex flex-row items-center my-4 cursor-pointer">
              <FaYoutube className="text-2xl mr-2" />
              <span className="text-lg ml-2">Youtube</span>
            </p>
            <p className="flex flex-row items-center my-4 cursor-pointer">
              <RxGithubLogo className="text-2xl mr-2" />
              <span className="text-lg ml-2">Github</span>
            </p>
            <p className="flex flex-row items-center my-4 cursor-pointer">
              <RxDiscordLogo className="text-2xl mr-2" />
              <span className="text-lg ml-2">Discord</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <h3 className="font-bold text-lg">Redes Sociais</h3>
            <p className="flex flex-row items-center my-4 cursor-pointer">
              <FaYoutube className="text-2xl mr-2" />
              <span className="text-lg ml-2">Instagram</span>
            </p>
            <p className="flex flex-row items-center my-4 cursor-pointer">
              <RxGithubLogo className="text-2xl mr-2" />
              <span className="text-lg ml-2">Twitter</span>
            </p>
            <p className="flex flex-row items-center my-4 cursor-pointer">
              <RxDiscordLogo className="text-2xl mr-2" />
              <span className="text-lg ml-2">Linkedin</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <h3 className="font-bold text-lg">Sobre</h3>
            <p className="flex flex-row items-center my-4 cursor-pointer">
              <FaYoutube className="text-2xl mr-2" />
              <span className="text-lg ml-2">Youtube</span>
            </p>
            <p className="flex flex-row items-center my-4 cursor-pointer">
              <RxGithubLogo className="text-2xl mr-2" />
              <span className="text-lg ml-2">Github</span>
            </p>
            <p className="flex flex-row items-center my-4 cursor-pointer">
              <RxDiscordLogo className="text-2xl mr-2" />
              <span className="text-lg ml-2">Discord</span>
            </p>
          </div>
        </div>
        
        <div className="mt-20 text-lg text-center">
          <p>© {year} Bruno Souza - Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  )
}

export default Footer