import Encryption from "@/components/Main/Encryption";
import Portfolio from "@/components/Main/Portfolio";
import Projects from "@/components/Main/Projects";
import Skills from "@/components/Main/Skills";

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
