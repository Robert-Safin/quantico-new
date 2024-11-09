"use client";
import Image from "next/image";
import Container from "../ui/Container";
import { useEffect, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

const Choose = () => {
  const items = useMemo(() => [
    {
      title: "Professional Team",
      text: "Experts and partners in Trading, Logistics, Legal, Compliance, Risks and Finance with global representation",
      image: "/office.png",
    },
    {
      title: "Global Partners",
      text: "Relationships with over 25 partners around the globe with focus on UAE, India, South East Asia and East Africa",
      image: "/dubai.png",
    },
    {
      title: "Trade Impact",
      text: "Turnover of 500+ AED in 2023",
      image: "/boxes.png",
    },
    {
      title: "AML Assurance",
      text: "Active goAML member (UAE governmental AML approach)",
      image: "/working.png",
    },
  ], []);
  const [item, setItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setItem((prev) => (prev === 3 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const getNextItem = useCallback((currentItemIndex: number) => {
    return currentItemIndex === 3 ? 0 : currentItemIndex + 1;
  }, []);

  return (
    <div
      className="relative w-full h-full"
      style={{
        backgroundImage: "url('/waves.png')",
        backgroundSize: "cover",

        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <div className="flex flex-col tablet:flex-row tablet:py-20 w-full overflow-hidden">
          <div className="self-end">
            <h2 className="section-header text-gold py-12 max-w-[290px] laptop:max-w-[350px]">
              Why Choose Quantico?
            </h2>

            <div className="pt-9  hidden tablet:flex">
              <button
                className={`slide-numbers px-4 transition-all duration-700
              ${item === 0 ? "text-text-white-on-black" : "text-accent"}
              `}
                onClick={() => setItem(0)}
              >
                01
              </button>

              <div
                className={`relative transition-all duration-700
              ${item === 0 ? "w-8" : "w-0"}
              `}
              >
                {item === 0 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 32 }}
                    transition={{ duration: 6, delay: 2 }}
                    className={`h-[2px] bg-white mt-[9px] desktop:mt-[11px] z-10`}
                  />
                )}
              </div>

              <button
                className={`slide-numbers px-4 transition-all duration-700
              ${item === 1 ? "text-text-white-on-black" : "text-accent"}
              `}
                onClick={() => setItem(1)}
              >
                02
              </button>

              <div
                className={`relative transition-all duration-700
              ${item === 1 ? "w-8" : "w-0"}
              `}
              >
                {item === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 32 }}
                    transition={{ duration: 6, delay: 2 }}
                    className={`h-[2px] bg-white mt-[9px] desktop:mt-[11px]`}
                  />
                )}
              </div>

              <button
                className={`slide-numbers px-4 transition-all duration-700
              ${item === 2 ? "text-text-white-on-black" : "text-accent"}
              `}
                onClick={() => setItem(2)}
              >
                03
              </button>

              <div
                className={`relative transition-all duration-700
              ${item === 2 ? "w-8" : "w-0"}
              `}
              >
                {item === 2 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 32 }}
                    transition={{ duration: 6, delay: 2 }}
                    className={`h-[2px] bg-white mt-[9px] desktop:mt-[11px]`}
                  />
                )}
              </div>

              <button
                className={`slide-numbers px-4 transition-all duration-700
              ${item === 3 ? "text-text-white-on-black" : "text-accent"}
              `}
                onClick={() => setItem(3)}
              >
                04
              </button>
              <div
                className={`relative transition-all duration-700
              ${item === 3 ? "w-8" : "w-0"}
              `}
              >
                {item === 3 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 32 }}
                    transition={{ duration: 6, delay: 2 }}
                    className={`h-[2px] bg-white mt-[9px] desktop:mt-[11px]`}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-[280px] h-[380px] tablet:w-[350px] tablet:h-[470px] desktop:w-[500px] desktop:h-[670px] overflow-hidden">
            <div>
              <Image
                src={items[item].image}
                alt="office"
                className="object-cover w-[280px] h-[380px] tablet:w-[350px] tablet:h-[470px] desktop:w-[500px] desktop:h-[670px]"
                width={500}
                height={500}
                priority
              />
              <div className="absolute top-0 w-full h-full flex flex-col justify-between p-4 laptop:p-8">
                <h4 className="sans-header text-white">{items[item].title}</h4>
                <p className="text text-white text-right">{items[item].text}</p>
              </div>
            </div>

            <motion.div
              className="absolute top-0"
              initial={{ x: "100%" }}
              animate={{ x: ["100%", "0%"] }}
              transition={{ duration: 0.8, times: [0.2, 1] }}
              key={item}
            >
              <Image
                src={items[getNextItem(item)].image}
                alt="office"
                className="object-cover w-[280px] h-[380px] tablet:w-[350px] tablet:h-[470px] desktop:w-[500px] desktop:h-[670px]"
                width={500}
                height={500}
                priority
              />
              <div className="absolute top-0 w-full h-full flex flex-col justify-between p-4 laptop:p-8">
                <h4 className="sans-header text-white">
                  {items[getNextItem(item)].title}
                </h4>
                <p className="text text-white text-right">
                  {items[getNextItem(item)].text}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="hidden laptop:flex flex-col justify-center laptop:w-[100px] desktop:w-[150px] overflow-hidden">
            <div className="relative laptop:w-[150px] laptop:h-[370px] desktop:w-[200px] desktop:h-[520px]">
              <Image
                src={items[getNextItem(getNextItem(item))].image}
                alt="office"
                width={500}
                height={500}
                className="object-cover laptop:w-[150px] laptop:h-[370px] desktop:w-[200px] desktop:h-[520px]"
                priority
              />

              <motion.div
                initial={{ x: "0%" }}
                animate={{ x: ["0%", "-100%"] }}
                transition={{ duration: 0.8, times: [0.2, 1] }}
                key={item}
                className="absolute top-0"
              >
                <Image
                  src={items[getNextItem(item)].image}
                  alt="office"
                  width={500}
                  height={500}
                  className="object-cover laptop:w-[150px] laptop:h-[370px] desktop:w-[200px] desktop:h-[520px]"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>

        <Container>
          <div className="flex space-x-8 pt-9 pb-12 tablet:hidden">
            <button
              className={`slide-numbers
              ${item === 0 ? "text-text-white-on-black" : "text-accent"}
              `}
              onClick={() => setItem(0)}
            >
              01
            </button>
            <button
              className={`slide-numbers
              ${item === 1 ? "text-text-white-on-black" : "text-accent"}
              `}
              onClick={() => setItem(1)}
            >
              02
            </button>
            <button
              className={`slide-numbers
              ${item === 2 ? "text-text-white-on-black" : "text-accent"}
              `}
              onClick={() => setItem(2)}
            >
              03
            </button>
            <button
              className={`slide-numbers
              ${item === 3 ? "text-text-white-on-black" : "text-accent"}
              `}
              onClick={() => setItem(3)}
            >
              04
            </button>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Choose;
