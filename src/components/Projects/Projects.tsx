import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="
      flex flex-col items-center justify-center mt-5 mb-32 z-[20]
    "
    id="projects"
    >
      <video 
        autoPlay
        muted
        loop
        className="rotate-180 absolute opacity-55 w-full z[-1] object-cover"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <h1 className="
        text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20
      ">
        Meus Projetos
      </h1>
      <div className="
        h-full w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 px-4 items-center justify-center
      ">
        <ProjectCard 
          src="/projects/blog.png"
          link="https://www.brunosouzadev.com/"
          repo="https://github.com/darkmoonsk/blog"
          title="Blog Moderno com Next.js e TailwindCSS"
          description="Meu blog pessoal, feito com Next.js, TailwindCSS e Typescript, com o objetivo de compartilhar conhecimento e experiências. Ele possui a visão de CMS Headless."
        />
        <ProjectCard
          src="/projects/fernanda.png"
          link="https://www.fernandaschubert.com/"
          repo="https://github.com/darkmoonsk/project-nanda"
          title="Fernanda Schubert - Site de captura para professora de idiomas"
          description="Site para uma professora de idiomas, com tradução em alemão, espanhol e português, também conta com um formulário funcional."
        />
        <ProjectCard
          src="/projects/ministry.png"
          link="https://ministry.brunosouzadev.com/"
          repo="https://github.com/darkmoonsk/app_ministry"
          title="Ministry - Gestão de relatórios"
          description="Aplicativo web para controle de relatórios de serviço de pregação das Testemunhas de Jeová, com autenticação, dashboard do usuário e usa o banco de dados firestore do Firebase."
        />
        <ProjectCard
          src="/projects/disneyplus.png"
          link="https://disneyplus.brunosouzadev.com/"
          repo="https://github.com/darkmoonsk/disney-plus"
          title="Front-end do Disney Plus"
          description="Recriação de uma parte do front-end do disney plus com React e styled-components, com o objetivo de praticar o uso de animações, transições e estilização de componentes."
        />
        <ProjectCard
          src="/projects/hadasclima.png"
          link="https://proyecto-hadasclima.vercel.app/"
          repo="https://github.com/darkmoonsk/project-weather"
          title="HadasClima - Informações meteorológicas"
          description="Um web app que fornece informações meteorológicas em tempo real, consumindo a api OpenWeather. "
        />
        <ProjectCard
          src="/projects/worldcup.png"
          link="https://worldcup2022.brunosouzadev.com/"
          repo="https://github.com/darkmoonsk/world-cup-2022"
          title="World Cup 2022 - Simulador da Copa Mundo de 2022"
          description='Um projeto que foi criado para um desafio de programação de curto prazo e que utiliza React e JavaScript para "simular" os jogos da Copa do Mundo de 2022.'
        />
      </div>
    </div>
  )
}

export default Projects;