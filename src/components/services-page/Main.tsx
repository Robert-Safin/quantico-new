"use client";
import Image from "next/image";
import Container from "../ui/Container";
import { useEffect, useRef } from "react";

const Main = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      const handleWheel = (event:WheelEvent) => {
        event.preventDefault();

        scrollContainer.scrollLeft += event.deltaY;
      };

      scrollContainer.addEventListener("wheel", handleWheel, {
        passive: false,
      });

      return () => {
        scrollContainer.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);
  return (
    <div className="bg-gold ">
      <Container>
        <h4 className="large-text pt-10 pb-8 tablet:pt-24 tablet:pb-16 desktop:pt-32 desktop:pb-24 tablet:w-1/2">
          <span className="font-bold">Quantico Trading </span>
          offers a comprehensive range of services tailored to meet the diverse
          needs of our clients.
        </h4>
        <div
          ref={scrollContainerRef}
          className="flex flex-col tablet:flex-row tablet:overflow-x-scroll w-full space-y-8 tablet:space-y-0 tablet:space-x-14 tablet:pb-6 desktop:pb-12"
        >
          <div className="bg-section-gray p-6 tablet:min-w-[490px] desktop:min-w-[690px]">
            <div className="flex flex-col justify-start ">
              <h5 className="text-gold slide-numbers mb-12 tablet:mb-20 desktop:mb-36">
                1/6
              </h5>
              <div>
                <h6 className="text-gold sans-header mb-4 tablet:mb-6 desktop:mb-8">
                  Trading
                </h6>
                <p className="text-gold small-text-narrow">
                  We specialize in trading a wide variety of products including
                  agricultural goods, precious metals, metallurgical products,
                  energy resources, clothing, accessories, electronics,
                  cosmetics, medications, and more.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-section-gray p-6 tablet:min-w-[490px] desktop:min-w-[690px]">
            <div className="flex flex-col justify-start ">
              <h5 className="text-gold slide-numbers mb-12 tablet:mb-20 desktop:mb-36">
                2/6
              </h5>
              <div>
                <h6 className="text-gold sans-header mb-4 tablet:mb-6 desktop:mb-8">
                  Import and Export Facilitation
                </h6>
                <p className="text-gold small-text-narrow">
                  Our team facilitates seamless import and export operations
                  between different regions and countries. This includes
                  handling customs documentation, managing delivery logistics,
                  and ensuring smooth transportation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-section-gray p-6 tablet:min-w-[490px] desktop:min-w-[690px]">
            <div className="flex flex-col justify-start ">
              <h5 className="text-gold slide-numbers mb-12 tablet:mb-20 desktop:mb-36">
                3/6
              </h5>
              <div>
                <h6 className="text-gold sans-header mb-4 tablet:mb-6 desktop:mb-8">
                  Supply Chain Management
                </h6>
                <p className="text-gold small-text-narrow">
                  We excel in optimizing supply chain processes, ensuring
                  efficient movement of goods from manufacturers to end
                  consumers. Our services include storage, warehousing, and
                  transportation solutions to streamline distribution.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-section-gray p-6 tablet:min-w-[490px] desktop:min-w-[690px]">
            <div className="flex flex-col justify-start ">
              <h5 className="text-gold slide-numbers mb-12 tablet:mb-20 desktop:mb-36">
                4/6
              </h5>
              <div>
                <h6 className="text-gold sans-header mb-4 tablet:mb-6 desktop:mb-8">
                  Storage and Warehousing
                </h6>
                <p className="text-gold small-text-narrow">
                  Quantico Trading provides reliable warehouse and storage
                  facility services to store goods before their sale or
                  transportation to their final destinations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-section-gray p-6 tablet:min-w-[490px] desktop:min-w-[690px]">
            <div className="flex flex-col justify-start ">
              <h5 className="text-gold slide-numbers mb-12 tablet:mb-20 desktop:mb-36">
                5/6
              </h5>
              <div>
                <h6 className="text-gold sans-header mb-4 tablet:mb-6 desktop:mb-8">
                  Quality Control and Inspection
                </h6>
                <p className="text-gold small-text-narrow">
                  We prioritize the quality of delivered goods, ensuring
                  compliance with all applicable standards in export, transit,
                  and import countries. Our team organizes inspections and
                  quality control checks at every stage of the delivery process.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-section-gray p-6 tablet:min-w-[490px] desktop:min-w-[690px]">
            <div className="flex flex-col justify-start ">
              <h5 className="text-gold slide-numbers mb-12 tablet:mb-20 desktop:mb-36">
                6/6
              </h5>
              <div>
                <h6 className="text-gold sans-header mb-4 tablet:mb-6 desktop:mb-8">
                  Document Management and Compliance
                </h6>
                <p className="text-gold small-text-narrow">
                  Our experienced specialists manage all aspects of trade
                  documentation and compliance procedures. From obtaining
                  necessary documents from competent authorities to ensuring
                  regulatory compliance, we handle transportation documents,
                  certificates of origin, and other necessary paperwork with
                  precision and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Image
        src="/crate-yard2.png"
        width={3000}
        height={3000}
        alt="Crate Yard"
        className="object-cover w-full h-[170px] desktop:h-[300px] mt-16 tablet:mt-28"
      />
    </div>
  );
};

export default Main;
