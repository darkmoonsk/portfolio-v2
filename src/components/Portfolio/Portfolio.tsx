import PortfolioContent from "./PortfolioContent";

function Portfolio() {
  return (
    <div className="relative flex flex-col h-full w-full">
        <video 
          autoPlay
          muted
          loop
          className=" md:rotate-6 absolute w-full h-full top-[-390px] sm:top-[-440px] md:top-[-340px] left-0 z[-1] object-cover"
        >
          <source src="/videos/blackhole-golden.webm" type="video/webm" />
        </video>
      <PortfolioContent />
    </div>
  );
}

export default Portfolio;
