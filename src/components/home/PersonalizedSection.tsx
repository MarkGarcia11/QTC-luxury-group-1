"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";

const scenes = [
  {
    label: "Scene 01",
    title: "Arrive comfortably.",
    description:
      "From airport pickups to hotel arrivals, every detail is considered for a seamless experience.",
    image: "/images/scene-airport.jpg",
  },
  {
    label: "Scene 02",
    title: "Make every occasion memorable.",
    description:
      "Weddings, anniversaries, celebrations — arrive and depart with elegance and ease.",
    image: "/images/scene-occasion.jpg",
  },
  {
    label: "Scene 03",
    title: "Keep business moving smoothly.",
    description:
      "Executive transportation and coordinated corporate travel, professionally arranged.",
    image: "/images/scene-corporate.jpg",
  },
  {
    label: "Scene 04",
    title: "Bring your plans together.",
    description:
      "Combine transportation with concierge care and lifestyle support — however you need it.",
    image: "/images/scene-personal.jpg",
  },
];

function SceneContent({
  scene,
  progress,
  index,
  total,
}: {
  scene: (typeof scenes)[0];
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = start + (end - start) / 2;

  const opacity = useTransform(
    progress,
    [start, mid - 0.05, mid + 0.05, end],
    index === total - 1
      ? [0, 1, 1, 1]
      : index === 0
        ? [1, 1, 1, 0]
        : [0, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    [start, mid, end],
    index === total - 1 ? [40, 0, 0] : index === 0 ? [0, 0, -40] : [40, 0, -40]
  );

  const imgScale = useTransform(
    progress,
    [start, mid, end],
    [1.08, 1, 1.08]
  );
  const imgOpacity = useTransform(
    progress,
    [start, mid - 0.1, mid + 0.1, end],
    index === total - 1 ? [0, 1, 1, 1] : index === 0 ? [1, 1, 1, 0] : [0, 1, 1, 0]
  );

  return (
    <>
      <motion.div
        style={{ opacity: imgOpacity, scale: imgScale }}
        className="absolute inset-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={scene.image}
          alt={scene.title}
          className="w-full h-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 dark-overlay" />
      </motion.div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 text-center max-w-3xl mx-auto px-6"
      >
        <p className="font-accent text-[0.65rem] tracking-[0.35em] uppercase text-champagne mb-6">
          {scene.label}
        </p>
        <h3 className="font-serif text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.05] font-light text-ivory mb-6">
          {scene.title}
        </h3>
        <p className="text-ivory/75 text-[0.95rem] leading-[1.9] font-light max-w-lg mx-auto">
          {scene.description}
        </p>
      </motion.div>
    </>
  );
}

export default function PersonalizedSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative bg-espresso">
      <div className="h-[350vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          {/* Base layer - scenes stacked */}
          <div className="absolute inset-0">
            {scenes.map((scene, i) => (
              <SceneContent
                key={scene.label}
                scene={scene}
                progress={scrollYProgress}
                index={i}
                total={scenes.length}
              />
            ))}
          </div>

          {/* Progress indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {scenes.map((_, i) => {
              const start = i / scenes.length;
              const end = (i + 1) / scenes.length;
              const width = useTransform(
                scrollYProgress,
                [start, end - 0.02],
                ["0%", "100%"]
              );
              const active = useTransform(
                scrollYProgress,
                [start, start + 0.05, end - 0.05, end],
                [0.3, 1, 1, 0.3]
              );
              return (
                <div
                  key={i}
                  className="h-px bg-ivory/20 w-16 md:w-24 overflow-hidden relative"
                >
                  <motion.div
                    style={{ scaleX: width, originX: 0 }}
                    className="absolute inset-0 bg-champagne"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Closing CTA panel */}
      <div className="relative bg-ivory py-28 md:py-40">
        <Container size="narrow" className="text-center">
          <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-bronze mb-8">
            Bespoke Arrangements
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.05] font-light text-espresso mb-8">
            Your Plans.
            <br />
            Your Preferences.
            <br />
            <span className="italic font-light">One Thoughtful Experience.</span>
          </h2>
          <p className="text-espresso/70 text-[1rem] leading-[1.9] font-light max-w-xl mx-auto mb-12">
            Some occasions require a simple ride. Others call for a little more
            coordination. At QTC, our services can be arranged individually or
            brought together to create an experience that works around your
            needs.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Tell Us What You Have in Mind
          </Button>
        </Container>
      </div>
    </section>
  );
}
