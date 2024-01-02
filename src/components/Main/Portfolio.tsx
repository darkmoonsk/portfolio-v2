import PortfolioContent from "../general/PortfolioContent";

function Portfolio() {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video 
        autoPlay
        muted
        loop
        className="rotate-100 absolute top-[-340px] left-0 z[-1] w-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <PortfolioContent />
    </div>
  );
}

export default Portfolio;
