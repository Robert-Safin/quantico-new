"use client";
import {
  animate,
  useTransform,
  motion,
  useMotionValue,
  useInView,
} from "framer-motion";
import Container from "../ui/Container";
import { useEffect, useRef } from "react";

const Strip = () => {
  const revenue = useMotionValue(0);
  const revenueRounded = useTransform(revenue, Math.round);

  const partners = useMotionValue(0);
  const partnersRounded = useTransform(partners, Math.round);

  const years = useMotionValue(0);
  const yearsRounded = useTransform(years, Math.round);

  const ref = useRef(null);
  const inView = useInView(ref, { amount: 1, once: true });

  useEffect(() => {
    if (inView) {
      animate(revenue, 500, { duration: 1.5, delay: 0.2 });
      animate(partners, 25, { duration: 2.5, delay: 0.2 });
      animate(years, 250, { duration: 3, delay: 0.2 });
    }
  }, [inView, partners, revenue, years]);

  return (
    <div className="w-full bg-gold" ref={ref}>
      <Container>
        <div className="flex flex-col tablet:flex-row py-6 tablet:py-12 space-y-7 tablet:space-y-0 tablet:justify-between">
          <div>
            <div className="flex">
              <motion.h2 className="stats-figs">{revenueRounded}</motion.h2>
              <h2 className="stats-figs">M+</h2>
            </div>
            <p className="caps-text">AED turnover in 2023</p>
          </div>

          <div>
            <motion.h2 className="stats-figs">{partnersRounded}</motion.h2>
            <p className="caps-text">INTERNATIONAL PARTNERS</p>
          </div>

          <div>
            <motion.h2 className="stats-figs">{yearsRounded}</motion.h2>
            <p className="caps-text">YEARS OF COMBINED EXPERIENCE</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Strip;
