import { DotLottiePlayer, Controls } from "@dotlottie/react-player";


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