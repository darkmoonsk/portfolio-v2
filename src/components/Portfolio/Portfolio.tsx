import PortfolioContent from "./PortfolioContent";

function Portfolio() {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
        <video 
          autoPlay
          muted
          loop
          className="rotate-180 absolute h-full w-full top-[-340px] left-0 z[-1] object-cover"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
      <PortfolioContent />
    </div>
  );
}

export default Portfolio;
