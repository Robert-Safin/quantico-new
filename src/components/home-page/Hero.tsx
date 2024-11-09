import Container from "../ui/Container";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <video
        className="absolute -z-20 h-screen w-screen object-cover min-w-[375px] min-h-[650px]"
        src="/vid.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute bg-black w-full h-screen -z-10 bg-opacity-60 min-w-[375px] min-h-[650px]" />
      <Container>
        <div className="h-screen w-full flex flex-col justify-center space-y-20 desktop:space-y-32  min-h-[650px]">
          <div className="flex flex-col space-y-4">
            <h1 className="hero-header text-gold">Empowering</h1>
            <h1 className="hero-header text-gold">Global Trade</h1>
          </div>
          <div className="flex flex-col space-y-7 max-w-[250px] desktop:max-w-[360px]">
            <p className="small-text text-white">
              Your 24/7 global trade partner with deep industry knowledge and
              diverse streams, ensuring top-tier knowledge
            </p>
            <Link href="/services">
              <button className="small-text text-white underline underline-offset-[6px] text-left">
                Our Services
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
