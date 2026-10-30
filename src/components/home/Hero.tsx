"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { SplitLines } from "../ui/Reveal";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[720px] w-full overflow-hidden bg-espresso"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          initial={{ scale: 1.25, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 2.2,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-main.jpg"
            alt="Black Cadillac Escalade outside upscale hotel entrance"
            className="w-full h-full object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 hero-overlay" />
      </motion.div>

      {/* Subtle noise texture */}
      <div className="noise-overlay absolute inset-0 z-10 pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col"
      >
        <Container size="wide" className="flex-1 flex flex-col justify-center">
          <div className="max-w-3xl pt-24 lg:pt-16">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-accent text-[0.7rem] tracking-[0.35em] uppercase text-champagne mb-8"
            >
              QTC Luxury Group
            </motion.p>

            {/* Headline */}
            <h1 className="font-serif text-[clamp(3.5rem,10vw,8rem)] leading-[0.92] font-light text-ivory mb-10">
              <SplitLines
                lines={["Elegance", "in Motion."]}
                italicLineIndexes={[1]}
                delay={1.0}
              />
            </h1>

            {/* Body Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-ivory/80 text-[0.95rem] md:text-base leading-relaxed max-w-xl font-light mb-12 tracking-wide"
            >
              Elevated transportation, thoughtful concierge care, and
              personalized lifestyle experiences — thoughtfully arranged around
              you.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center"
            >
              <Button
                href="/#services"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore Our Services
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Request an Experience
              </Button>
            </motion.div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.6 }}
          className="pb-10 flex justify-center"
        >
          <div className="flex flex-col items-center gap-3 text-ivory/60">
            <span className="font-accent text-[0.6rem] tracking-[0.3em] uppercase">
              Scroll
            </span>
            <ArrowDown size={16} className="animate-scroll" strokeWidth={1.25} />
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative vertical line on right */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ originY: 0 }}
        className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 z-20 w-px h-52 bg-gradient-to-b from-transparent via-champagne/40 to-transparent"
      />
    </section>
  );
}
