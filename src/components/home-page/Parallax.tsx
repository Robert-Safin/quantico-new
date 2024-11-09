"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "-0%"]);

  return (
    <div
      className="w-full h-[160px] tablet:h-[280px] laptop:h-[440px] overflow-hidden"
      ref={targetRef}
    >
      <motion.img
        src="/parallax.png"
        alt="bg"
        className="object-cover h-[250px] tablet:h-[640px] desktop:h-[870px] w-full object-top will-change-auto"
        transition={{type: "tween"}}
        style={{ y }}
      />
    </div>
  );
};

export default Parallax;
