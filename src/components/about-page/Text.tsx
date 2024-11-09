"use client";
import Container from "../ui/Container";

const Text = () => {

  return (
    <div className="bg-gold pb-20">
      <Container>
        <p className="large-text text-black pt-9 pb-8 desktop:mb-20 desktop:pt-32">
          <span className="font-semibold">
            Quantico Trading Company Co. L.L.C,{" "}
          </span>
          is a dynamic global trading company founded in 2022 in Dubai, United
          Arab Emirates. Led by founder and sole shareholder, Mohamed Ali
          Faisal, an Indian citizen and resident of Dubai, UAE, we bring a
          wealth of experience and expertise to the international trading arena.
        </p>
      </Container>
      <div className="bg-black w-full h-[1px]" />
      <Container>
        <div className="flex flex-col tablet:flex-row  w-full">
          <p className="small-text-narrow tablet:border-r border-black pr-6 pt-6 pb-12 laptop:pr-12 laptop:pt-12
          tablet:w-2/3 desktop:pb-32">
            Quantico Trading holds a commercial license issued by the Dubai
            Ministry of Economy and Tourism, granting us the authority to engage
            in both General Trading and Non-manufactured Precious Metal Trading.
            <br />
            <br />
            We specialize in consumer electronics, fashion and sportswear,
            cosmetics, and household chemicals, and non-manufactured gold trade.
          </p>
        </div>
      </Container>
      <div className="bg-black w-full h-[1px]" />
      <Container>
        <div className="flex space-x-6 pb-23 pt-6 tablet:pt-8 desktop:pt-20 desktop:pb-20 desktop:space-x-20">
          <p className="large-text tablet:w-1/2">
            We pride ourselves on being a next-generation international trading
            company, dedicated to revolutionizing the industry to better serve
            our clients&apos; evolving needs.{" "}
          </p>
          <p className="small-text-narrow tablet:w-1/2">
            By meticulously analyzing every stage of the supply chain,
            leveraging the expertise of industry leaders with global
            recognition, and applying our unique approach, we have redefined the
            trading process.
            <br />
            <br />
            From sourcing top-quality goods to orchestrating secure logistics
            and ensuring prompt delivery, we have streamlined every aspect to
            provide our clients with stability, transparency, and unparalleled
            simplicity. Join us as we redefine the standards of global trade,
            one innovative solution at a time.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Text;
