"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../ui/Container";
import { SplitLines } from "../ui/Reveal";

const values = [
  {
    number: "01",
    title: "Personalized Attention",
    description:
      "Every arrangement begins with understanding what the customer needs — the details, the preferences, the occasion.",
  },
  {
    number: "02",
    title: "Thoughtful Coordination",
    description:
      "A smoother experience starts with careful planning, clear communication, and attention to logistics before the day arrives.",
  },
  {
    number: "03",
    title: "Professional Presentation",
    description:
      "From the first inquiry to the final arrangement, every interaction reflects the QTC standard of quality and care.",
  },
  {
    number: "04",
    title: "Flexible Experiences",
    description:
      "Individual services or combined arrangements, shaped around the occasion — as simple or as comprehensive as you need.",
  },
];

export default function WhyQtc() {
  return (
    <section className="relative bg-espresso py-28 md:py-44 overflow-hidden">
      {/* Background image layer - using hero image with heavy overlay */}
      <div className="absolute inset-0 opacity-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-main.jpg"
          alt=""
          className="w-full h-full object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-espresso via-espresso/90 to-espresso" />
      <div className="noise-overlay" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-champagne mb-8">
              The QTC Standard
            </p>
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4.75rem)] leading-[1.03] font-light text-ivory mb-10">
              <SplitLines
                lines={["The Difference Is in", "the Details."]}
                italicLineIndexes={[1]}
              />
            </h2>
            <p className="text-ivory/60 text-[0.95rem] leading-[1.9] font-light max-w-md">
              We don&apos;t believe in one-size-fits-all. Every arrangement is
              considered, every detail matters, and every customer deserves our
              full attention.
            </p>

            {/* Decorative line */}
            <div className="mt-12 w-20 h-px bg-champagne/30" />
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <div className="space-y-px bg-ivory/10">
              {values.map((value, i) => (
                <ValueItem key={value.number} value={value} index={i} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ValueItem({
  value,
  index,
}: {
  value: (typeof values)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 1, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="bg-espresso py-10 md:py-12 group hover:bg-espresso/80 transition-colors duration-500"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
        <span className="font-accent text-[0.7rem] tracking-[0.28em] text-champagne/70 pt-1 min-w-[40px]">
          {value.number}
        </span>
        <div className="flex-1">
          <h3 className="font-serif text-[1.75rem] md:text-2xl text-ivory font-light mb-3 group-hover:text-champagne transition-colors duration-500">
            {value.title}
          </h3>
          <p className="text-ivory/60 text-[0.9rem] leading-[1.85] font-light max-w-lg">
            {value.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
