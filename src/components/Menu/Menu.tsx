import { Socials } from "@/constants";
import Logo from "./Logo";
import Image from "next/image";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <nav
      className="
      w-full h-auto md:h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10
    "
    >
      <div
        className="
        w-full h-full flex flex-col sm:flex-row items-center justify-between m-auto px-3 gap-2
      "
      >
        <Logo />
        <div
          className="
        max-w-[500px] w-full h-full flex flex-row items-center justify-between md:mr-20
      "
        >
          <ul className="flex items-center justify-between w-full h-auto border text-zinc-300 border-[#7042F861] bg-[#0300145E] mr-4 px-5 py-3 rounded-full">
            <MenuItem text="About me" url="#about-me" />
            <MenuItem text="Skills" url="#skills" />
            <MenuItem text="Projects" url="#projects" />
          </ul>
        </div>
        <div
          className="
          flex flex-row gap-5
        "
        >
          {Socials.map((social) => (
            <a key={social.name} href={social.url} target="_blank">
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="cursor-pointer hover:animate-spin"
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Menu;
