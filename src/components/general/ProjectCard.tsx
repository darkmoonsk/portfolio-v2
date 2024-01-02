import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  src: string
  link?: string
}

function ProjectCard({ title, description, src, link }: ProjectCardProps) {
  return (
    <div className="
      relative overflow-hidden rounded-lg shadow-lg border-[#2A0E61]
    ">
      <Image 
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">
          {title}
        </h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard