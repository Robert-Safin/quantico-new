import Image from "next/image";


const Hero = () => {
  return (
    <div className="relative h-[550px] tablet:h-[800px] laptop:h-[650px] desktop:h-[900px]">
      <Image
        src="/ship.png"
        width={3000}
        height={3000}
        alt="Crate Yard"
        className="object-cover w-full h-full absolute top-0 -z-10"
      />
      <div className="max-w-screen-desktop mx-auto w-full px-4 tablet:px-12 desktop:px-14">
        <div className="flex flex-col h-[550px] tablet:h-[800px] laptop:h-[650px] desktop:h-[900px] justify-end">
          <div className="text-left mb-52">
            <h1 className="page-header text-gold">Driving Growth</h1>
            <h1 className="page-header text-white">Building Connections</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
