import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div
      className="
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
      <h1
        className="
        text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20
      "
      >
        My Projects
      </h1>
      <div
        className="
        h-full w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 px-4 items-center justify-center
      "
      >
        <ProjectCard
          src="/projects/blog.png"
          hoverSrc="/projects/videos/blog.webm"
          link="https://www.brunosouzadev.com/"
          repo="https://github.com/darkmoonsk/blog"
          title="Modern Blog with Next.js and TailwindCSS"
          description={[
            "My personal blog, built with Next.js, TailwindCSS, and TypeScript, aimed at sharing knowledge and experiences about programming and science. It follows a Headless CMS approach.",
          ]}
        />
        <ProjectCard
          src="/projects/cebuano-learning-app.png"
          link="https://cebuanolearningapp.brunosouzadev.com/"
          repo="https://github.com/darkmoonsk/cebuano-learning-app"
          title="Cebuano Learning APP"
          description={[
            "A modern learning experience for Cebuano/Bisaya vocabulary learning built with Next.js, Tailwind, shadcn/ui, and MongoDB. Learners review curated flashcards with an adaptive spaced repetition algorithm, track their progress over time, and manage their own accounts.",
          ]}
        />
        <ProjectCard
          src="/projects/kmi-portfolio.png"
          link="https://kmiportafolio.brunosouzadev.com/"
          repo="https://github.com/darkmoonsk/kmi-portfolio"
          title="Cosplayer Portfolio"
          description={[
            "A modern portfolio for a cosplayer built with Next.js, Tailwind, shadcn/ui. The portfolio is a modern and responsive website that showcases the cosplayer's work and projects.",
          ]}
        />
        <ProjectCard
          src="/projects/quantic-learn.png"
          link="https://quanticlearn.com/"
          title="Quantic Learn - Open learning platform"
          description={[
            "Quantic Learn is an online open learning platform dedicated to democratizing knowledge through technology. It was born from my core belief that technology is a powerful means to provide high-quality education accessible to everyone and as my capstone project for my Software Engineering degree.",
            "It is a project committed to making learning more accessible and effective, allowing individuals from all backgrounds to acquire knowledge in a transformative way. Currently focused on English learning, with more languages and domains coming soon.",
          ]}
        />
        <ProjectCard
          src="/projects/dinoapi.jpg"
          link="https://dinoapi.brunosouzadev.com/"
          repo="https://github.com/darkmoonsk/dinoapi"
          title="Dinoapi - Dinosaur data API"
          description={[
            "An API that provides historical data about several dinosaurs. Built using the PaleoDB database, the largest open-source paleontology database in the world.",
            "The returned data is easy to understand and useful for people who are not paleontologists.",
          ]}
        />
        <ProjectCard
          src="/projects/rapidtalks.jpg"
          hoverSrc="/projects/videos/rapidtalks.webm"
          link="https://rapidtalks.brunosouzadev.com/"
          repo="https://github.com/darkmoonsk/rapid-talks"
          title="RapidTalks - Real-time chat platform"
          description={[
            "Rapid Talks is a proof of concept of a dynamic, interactive chat application built to enable real-time communication, using a combination of modern technologies and advanced development practices.",
          ]}
        />
        <ProjectCard
          src="/projects/hadasclima.png"
          hoverSrc="/projects/videos/hadasclima.webm"
          link="https://proyecto-hadasclima.vercel.app/"
          repo="https://github.com/darkmoonsk/project-weather"
          title="HadasClima - Weather information"
          description={[
            "A web app that provides real-time weather information by consuming the OpenWeather API.",
          ]}
        />
      </div>
    </div>
  );
}

export default Projects;
