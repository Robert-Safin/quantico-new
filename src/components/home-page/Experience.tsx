import Image from "next/image";
import Container from "../ui/Container";
import SquareButton from "../ui/buttons/SquareButton";
import Link from "next/link";

const Experience = () => {
  return (
    <div className="relative">
      <Image
        src="/fabric.png"
        width={3000}
        height={3000}
        alt="bg"
        className="absolute -z-10 w-full h-full object-cover"
      />
      <Container>
        <div className="py-16 tablet:py-28 flex flex-col">
          <h3 className="section-header text-gold mb-16 tablet:w-full">
            Unveiling Our Trading Expertise
          </h3>

          <p className="text-medium text-text-white-on-black tablet:ml-40 laptop:ml-96 desktop:ml-[600px] laptop:py-4 desktop:py-10">
            We specialize in international general trade, concentrating on
            various categories such as consumer electronics, fashion and
            sportswear, cosmetics, and household chemicals. Additionally, we
            operate a standalone business stream in non-manufactured gold trade.
          </p>

          <Link href="/about" className="mt-12 tablet:ml-40 laptop:ml-96 desktop:ml-[600px]">
            <SquareButton col={"white"} text="Learn More" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
