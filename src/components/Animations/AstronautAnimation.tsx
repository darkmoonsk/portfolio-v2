"use client"
import { DotLottiePlayer, Controls } from "@dotlottie/react-player";
import '@dotlottie/react-player/dist/index.css';


function AstronautAnimation() {
  return (
    <div>
      <DotLottiePlayer 
        src="/animations/astronaut.lottie"
        autoplay
        loop
      >
      </DotLottiePlayer>
    </div>
  );
}

export default AstronautAnimation;