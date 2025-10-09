import {
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaAt, FaYoutube } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="w-full h-full bg-transparent border-t-2 border-zinc-500 text-gray-200 shadow-lg p-4">
      <div className="w-full flex flex-col py-3 items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[25]">
            <h3 className="font-bold text-lg">Community</h3>
            <p className="flex flex-row items-center my-4 cursor-pointer">
              <FaYoutube className="text-2xl mr-2" />
              <span className="text-lg ml-2">Youtube</span>
            </p>
            <p className="flex flex-row items-center my-4 cursor-pointer">
              <RxGithubLogo className="text-2xl mr-2" />
              <a href="https://github.com/darkmoonsk" target="_blank">
                <span className="text-lg ml-2">Github</span>
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[25]">
            <h3 className="font-bold text-lg">Social Media</h3>
            <p className="flex flex-row items-center my-4 cursor-pointer">
              <RxLinkedinLogo className="text-2xl mr-2" />
              <a
                href="https://www.linkedin.com/in/brunosouzadkm/"
                target="_blank"
              >
                <span className="text-lg ml-2">Linkedin</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-4 cursor-pointer">
              <RxInstagramLogo className="text-2xl mr-2" />
              <a
                href="https://www.instagram.com/brunosouzza__/"
                target="_blank"
              >
                <span className="text-lg ml-2">Instagram</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-4 cursor-pointer">
              <RxTwitterLogo className="text-2xl mr-2" />
              <a href="https://twitter.com/brunobotelho10" target="_blank">
                <span className="text-lg ml-2">Twitter</span>
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[25]">
            <h3 className="font-bold text-lg">About</h3>
            <p className="flex flex-row items-center my-4 cursor-pointer">
              <FaAt className="text-2xl mr-2" />
              <span className="text-lg ml-2">contact@brunosouzadev.com</span>
            </p>
            <p className="flex flex-row items-center my-4 cursor-pointer">
              <SiBloglovin className="text-2xl mr-2" />
              <a href="https://www.brunosouzadev.com/" target="_blank">
                <span className="text-lg ml-2">Blog</span>
              </a>
            </p>
          </div>
        </div>

        <div className="mt-20 text-lg purple-fire-text text-center">
          <p>© {year} Bruno Souza - All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
