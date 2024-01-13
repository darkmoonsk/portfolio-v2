"use client"
import { cn } from "@/utils"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import VideoPreview from "./VideoPreview"

interface ProjectCardProps {
  title: string
  description: string
  src: string
  hoverSrc: string
  repo: string
  link: string
}

function ProjectCard({ title, description, src, hoverSrc, link, repo }: ProjectCardProps) {

  return (
    <div className="
      relative overflow-hidden w-full rounded-lg shadow-lg border-[#2A0E61]
    ">
      <VideoPreview 
        src={src}
        hoverSrc={hoverSrc}
        link={link}
        title={title}
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold fire-text">
          {title}
        </h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <div className="flex gap-2">
        <Link href={link} target="_blank" className="flex-1 w-full cursor-pointer py-2 text-white text-center bg-[#2A0E61] hover:bg-[#1D0B34] transition duration-200">
            Ver Site
        </Link>
        <Link href={repo} target="_blank" className="flex-1 w-full py-2 cursor-pointer text-white text-center bg-[#2A0E61] hover:bg-[#1D0B34] transition duration-200">
            Ver Projeto
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard