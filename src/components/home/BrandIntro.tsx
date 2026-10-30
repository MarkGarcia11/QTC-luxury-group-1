"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { SplitLines, TextReveal } from "../ui/Reveal";

export default function BrandIntro() {
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-40 bg-ivory relative">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div ref={imageRef} className="lg:col-span-6 relative">
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={
                imageInView
                  ? { clipPath: "inset(0 0% 0 0)" }
                  : { clipPath: "inset(0 100% 0 0)" }
              }
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/intro-chauffeur.jpg"
                alt="Professional chauffeur welcoming a passenger at a luxury SUV"
                className="w-full h-full object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </motion.div>

            {/* Decorative offset box */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              animate={
                imageInView
                  ? { opacity: 1, x: 0, y: 0 }
                  : { opacity: 0, x: -30, y: 30 }
              }
              transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:block absolute -bottom-10 -left-10 bg-sand/60 backdrop-blur-sm p-8 max-w-xs"
            >
              <p className="font-serif italic text-2xl text-espresso leading-tight">
                &ldquo;Every journey deserves a little more care.&rdquo;
              </p>
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-6 lg:pl-8">
            <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-bronze mb-8">
              The QTC Philosophy
            </p>
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.02] font-light text-espresso mb-10">
              <SplitLines
                lines={["More Than a Journey.", "A Thoughtful Experience."]}
                italicLineIndexes={[1]}
              />
            </h2>
            <div className="space-y-6 text-espresso/75 leading-[1.85] text-[0.95rem] font-light max-w-xl mb-10">
              <p>
                <TextReveal delay={0.2}>
                  At QTC Luxury Group, we believe every journey and every
                  arrangement deserves thoughtful attention. Whether you&apos;re
                  traveling, celebrating a special occasion, coordinating an
                  important event, or simply making everyday plans easier,
                  we&apos;re here to bring everything together with care and
                  elegance.
                </TextReveal>
              </p>
            </div>

            <p className="font-serif italic text-xl text-bronze mb-10 border-l-2 border-champagne pl-6 leading-relaxed">
              Personalized around your needs. Delivered with attention to
              detail.
            </p>

            <Button href="/about" variant="secondary" size="md">
              Discover The QTC Experience
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
