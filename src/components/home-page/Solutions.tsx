import Image from "next/image";
import Container from "../ui/Container";
import SquareButton from "../ui/buttons/SquareButton";
import Link from "next/link";

const Solutions = () => {
  return (
    <div className="flex flex-col tablet:flex-row bg-gold h-full">
      <Image
        src="/store.png"
        width={3000}
        height={3000}
        alt="store"
        className="object-cover w-full h-[110px] tablet:h-[1000px] laptop:h-[1000px] tablet:w-5/12 desktop:w-3/5 desktop:h-[1300px] "
      />

      <div className="p-12 tablet:p-20 desktop:p-24 tablet:w-7/12 desktop:w-2/5">
        <h3 className="section-header text-black pb-12 tablet:pb-20 desktop:pb-20 max-w-[270px] tablet:max-w-[405px] desktop:max-w-[580px]">
          Comprehensive Trading Solutions
        </h3>
        <div className="space-y-4 flex flex-col w-fit">
          <div className="text flex items-center space-x-2 border-y py-4 border-black">
            <div className="w-2 h-2 bg-black bg-opacity-50" />
            <p>Trading: commodity, industrial, consumer staples</p>
          </div>
          <div className="text flex items-center space-x-2 border-b pb-4 border-black">
            <div className="w-2 h-2 bg-black bg-opacity-50" />
            <p>Import & export services</p>
          </div>
          <div className="text flex items-center space-x-2 border-b pb-4 border-black">
            <div className="w-2 h-2 bg-black bg-opacity-50" />
            <p>Supply chain management</p>
          </div>
          <div className="text flex items-center space-x-2 border-b pb-4 border-black">
            <div className="w-2 h-2 bg-black bg-opacity-50" />
            <p>Market research and analysis</p>
          </div>
          <div className="text flex items-center space-x-2 border-b pb-4 border-black">
            <div className="w-2 h-2 bg-black bg-opacity-50" />
            <p>Trade finance</p>
          </div>
          <div className="text flex items-center space-x-2 border-b pb-4 border-black">
            <div className="w-2 h-2 bg-black bg-opacity-50" />
            <p>Quality control and inspection</p>
          </div>
          <div className="text flex items-center space-x-2 border-b pb-4 border-black">
            <div className="w-2 h-2 bg-black bg-opacity-50" />
            <p>Trade documentation & compliance</p>
          </div>
          <div className="text flex items-center space-x-2 border-b pb-4 border-black">
            <div className="w-2 h-2 bg-black bg-opacity-50" />
            <p>Client advisory</p>
          </div>
        </div>
        <div className="pt-12 tablet:pt-20 desktop:pt-32">
          <Link href="/services">
            <SquareButton col="black" text="Explore Services" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
