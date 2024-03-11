import Image from "next/image";
import { useRef } from "react";

interface VideoPreviewProps {
  src: string
  hoverSrc: string
  link: string
  title: string
}

function VideoPreview({ src, hoverSrc, link, title }: VideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseOver = () => {
    if (videoRef.current) {
      videoRef.current.style.display = "block";
      videoRef.current.play();
    }
  };

  const handleMouseOut = () => {
    if (videoRef.current) {
      videoRef.current.style.display = "none";
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
        <div 
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="relative w-full overflow-hidden hover:scale-105 transition duration-500"
        >
          <a 
          href={link} 
          target="_blank"
          >
            <Image 
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain  cursor-pointer"/>
          </a>
          <a 
          href={link} 
          target="_blank"
          >
            {
              hoverSrc !== "" ?? (
                <video 
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  className="
                    absolute top-0 left-0 w-full hidden object-cover
                  "
                >
                  <source src={hoverSrc} type="video/webm" />
                </video>
              )
            }
          </a>
    </div>
  )
}

export default VideoPreview