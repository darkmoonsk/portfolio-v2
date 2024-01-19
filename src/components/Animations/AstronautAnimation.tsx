import { DotLottiePlayer } from "@dotlottie/react-player";


function AstronautAnimation() {
  return (
    <div>
      <DotLottiePlayer 
        src="/animations/astronaut.lottie"
        autoplay
        loop
      />
    </div>
  );
}

export default AstronautAnimation;