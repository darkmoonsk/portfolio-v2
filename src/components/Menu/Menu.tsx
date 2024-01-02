import { Socials } from "@/app/constants"
import Logo from "./Logo"
import Image from "next/image"
import MenuItem from "./MenuItem"

function Menu() {
  return (
    <nav className="
      w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10
    ">
      <div className="
        w-full h-full flex flex-row items-center justify-between m-auto px-3
      ">
      <Logo />
      <div className="
        w-[500px] h-full flex flex-row items-center justify-between md:mr-20
      ">
        <ul className="flex items-center justify-between w-full h-auto border text-zinc-300 border-[#7042F861] bg-[#0300145E] mr-4 px-5 py-3 rounded-full">
          <MenuItem text="Sobre mim" url="#about-me" />
          <MenuItem text="Skills" url="#skills" />
          <MenuItem text="Projetos" url="#projects" />
        </ul>
      </div>
        <div className="
          flex flex-row gap-5
        ">
          {Socials.map((social) => (
            <Image 
              key={social.name}
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
              className="cursor-pointer hover:animate-spin"
              />
          ))}
        </div>
      </div>
      
    </nav>
  )
}

export default Menu