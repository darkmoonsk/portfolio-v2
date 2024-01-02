import Encryption from "@/components/Main/Encryption";
import Portfolio from "@/components/Portfolio/Portfolio";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Portfolio />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  )
}
