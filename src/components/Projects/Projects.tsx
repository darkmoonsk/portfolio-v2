import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="
      flex flex-col items-center justify-center mt-5 mb-32 z-[20]
    "
    id="projects"
    >
      <h1 className="
        text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20
      ">
        Meus Projetos
      </h1>
      <div className="
        h-full w-full flex flex-col md:flex-row gap-10 px-4 items-center justify-center
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