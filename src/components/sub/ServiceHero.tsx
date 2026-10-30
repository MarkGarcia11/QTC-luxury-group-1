"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { SplitLines } from "../ui/Reveal";

type ServiceHeroProps = {
  eyebrow: string;
  titleLines: string[];
  italicIndexes?: number[];
  description: string;
  image: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function ServiceHero({
  eyebrow,
  titleLines,
  italicIndexes = [],
  description,
  image,
  primaryCta,
  secondaryCta,
}: ServiceHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      ref={ref}
      className="relative h-[85vh] min-h-[640px] w-full overflow-hidden bg-espresso"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
      </motion.div>

      <div className="noise-overlay z-10" />

      <div className="relative z-20 h-full flex flex-col">
        <Container size="wide" className="flex-1 flex flex-col justify-end pb-24 md:pb-32 pt-32">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-accent text-[0.7rem] tracking-[0.35em] uppercase text-champagne mb-8"
            >
              {eyebrow}
            </motion.p>
            <h1 className="font-serif text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] font-light text-ivory mb-8">
              <SplitLines
                lines={titleLines}
                italicLineIndexes={italicIndexes}
                delay={0.85}
              />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-ivory/80 text-[0.95rem] md:text-base leading-relaxed max-w-xl font-light mb-10"
            >
              {description}
            </motion.p>

            {(primaryCta || secondaryCta) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
              >
                {primaryCta && (
                  <Button href={primaryCta.href} size="lg">
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button href={secondaryCta.href} variant="outline" size="lg">
                    {secondaryCta.label}
                  </Button>
                )}
              </motion.div>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
}
