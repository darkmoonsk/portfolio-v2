import Image from "next/image";



function Logo() {
  return (
      <a 
        href="#about-me"
        className="h-auto w-auto flex flex-row items-center"
      >
        <Image 
          src={"/NavLogo.png"}
          alt="Logo da Navbar"
          width={70}
          height={70}
          className="cursor-pointer hover:animate-spin"
        />
        <span className="font-bold ml-3 hidden md:block text-gray-300">Bruno Souza</span>
      </a>
  )
}

export default Logo;