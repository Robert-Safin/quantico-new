import Image from "next/image";
import Container from "../ui/Container";

const Advantage = () => {
  return (
    <div>
      <Container>
        <h3 className="page-header text-text-white-on-black mt-10 mb-16 tablet:mt-32 tablet:mb-20 desktop:mt-44 desktop:mb-32">
          Our Advantage
        </h3>
        <div className="grid grid-cols-2 laptop:grid-cols-3 gap-y-10 gap-x-6 tablet:gap-x-9 tablet:gap-y-16 desktop:gap-y-36">
          <div
            className="border-t border-white pt-5 tablet:pt-11 desktop:pt-16
          space-y-3 tablet:space-y-6 desktop:space-y-16
          "
          >
            <h5 className="large-text text-text-white-on-black">
              Global Presence
            </h5>
            <p className="small-text-narrow text-text-white-on-black">
              With representation in ME (HQ), Europe, SEA, and APAC, we offer
              comprehensive global coverage to serve your trading needs
              seamlessly
            </p>
          </div>

          <div
            className="border-t border-white pt-5 tablet:pt-11 desktop:pt-16
          space-y-3 tablet:space-y-6 desktop:space-y-16
          "
          >
            <h5 className="large-text text-text-white-on-black">
              24/7 Availability
            </h5>
            <p className="small-text-narrow text-text-white-on-black">
              Our round-the-clock availability ensures prompt and reliable
              support for our clients, anytime, anywhere
            </p>
          </div>

          <div
            className="border-t border-white pt-5 tablet:pt-11 desktop:pt-16
          space-y-3 tablet:space-y-6 desktop:space-y-16
          "
          >
            <h5 className="large-text text-text-white-on-black">
              Comprehensive Experience
            </h5>
            <p className="small-text-narrow text-text-white-on-black">
              With over 200 years of combined experience in banking, logistics,
              and commodity trading, we bring a wealth of expertise to every
              transaction
            </p>
          </div>

          <div
            className="border-t border-white pt-5 tablet:pt-11 desktop:pt-16
          space-y-3 tablet:space-y-6 desktop:space-y-16
          "
          >
            <h5 className="large-text text-text-white-on-black">
              Extensive Expertise
            </h5>
            <p className="small-text-narrow text-text-white-on-black">
              Backed by deep knowledge and a vast professional network in
              trading and logistics communities, we provide unparalleled
              insights and connections to meet your requirements
            </p>
          </div>

          <div
            className="border-t border-white pt-5 tablet:pt-11 desktop:pt-16
          space-y-3 tablet:space-y-6 desktop:space-y-16
          "
          >
            <h5 className="large-text text-text-white-on-black">
              Diverse Business Streams
            </h5>
            <p className="small-text-narrow text-text-white-on-black">
              Diverse Business Streams: Our diversified business streams enable
              us to cater to a wide range of trading flows, from 0.5 mUSD to 50
              mUSD per week, ensuring flexibility and scalability.
            </p>
          </div>

          <div
            className="border-t border-white pt-5 tablet:pt-11 desktop:pt-16
          space-y-3 tablet:space-y-6 desktop:space-y-16
          "
          >
            <h5 className="large-text text-text-white-on-black">
              Stringent Compliance
            </h5>
            <p className="small-text-narrow text-text-white-on-black">
              As holders of a gold-trading license, we adhere to the strictest
              AML, CTF, Anti-corruption, and international compliance standards,
              ensuring the highest level of integrity and transparency in our
              operations
            </p>
          </div>
        </div>
      </Container>
      <Image
        src="/crate.png"
        width={3000}
        height={3000}
        alt="Crate"
        className="object-cover w-full h-[175px] tablet:h-[400px] laptop:h-[350px]
        mt-10 tablet:mt-32 desktop:mt-44
        "
      />
    </div>
  );
};

export default Advantage;
