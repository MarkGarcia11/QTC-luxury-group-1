"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import { SplitLines } from "../ui/Reveal";

const services = [
  {
    number: "01",
    title: "Black Truck Service",
    description:
      "Travel comfortably and arrive with confidence. From airport transfers and special occasions to hourly chauffeur arrangements, enjoy transportation tailored to your plans.",
    offerings: [
      "Airport pickups & drop-offs",
      "Point-to-point transportation",
      "Hourly chauffeur service",
      "Special occasions & events",
      "Corporate event transportation",
    ],
    image: "/images/service-truck.jpg",
    href: "/black-truck-service",
    imagePosition: "left" as const,
  },
  {
    number: "02",
    title: "Concierge Care",
    description:
      "Thoughtful assistance and personalized coordination to help make your plans easier, more organized, and more convenient.",
    offerings: [
      "Personalized coordination",
      "Travel & arrival assistance",
      "Special arrangement support",
      "Everyday conveniences",
    ],
    image: "/images/service-concierge.jpg",
    href: "/concierge-care",
    imagePosition: "right" as const,
  },
  {
    number: "03",
    title: "Lifestyle Management",
    description:
      "Personalized arrangements and thoughtful coordination designed to give you more time, convenience, and flexibility to enjoy what matters.",
    offerings: [
      "Travel planning support",
      "Experience coordination",
      "Personal arrangements",
      "Customized assistance",
    ],
    image: "/images/service-lifestyle.jpg",
    href: "/lifestyle-management",
    imagePosition: "left" as const,
  },
];

function ServiceItem({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const textFirst = service.imagePosition === "right";

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
        index !== services.length - 1 ? "mb-28 md:mb-40" : ""
      }`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: textFirst ? 40 : -40 }}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: textFirst ? 40 : -40 }
        }
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`lg:col-span-7 ${textFirst ? "lg:order-2" : ""} group`}
      >
        <Link href={service.href} className="block">
          <div className="img-zoom relative aspect-[16/10] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
            <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/10 transition-colors duration-700" />
          </div>
        </Link>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: textFirst ? -40 : 40 }}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: textFirst ? -40 : 40 }
        }
        transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={`lg:col-span-5 ${textFirst ? "lg:order-1 lg:pr-6" : "lg:pl-6"}`}
      >
        <div className="flex items-center gap-4 mb-5">
          <span className="font-accent text-[0.7rem] tracking-[0.28em] uppercase text-bronze">
            {service.number}
          </span>
          <span className="flex-1 h-px bg-champagne/50 max-w-8" />
        </div>
        <h3 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-light text-espresso mb-5">
          {service.title}
        </h3>
        <p className="text-espresso/70 leading-[1.8] text-[0.92rem] font-light mb-8 max-w-md">
          {service.description}
        </p>
        <ul className="space-y-2 mb-10">
          {service.offerings.map((item) => (
            <li
              key={item}
              className="text-espresso/60 text-[0.82rem] tracking-wide flex items-center gap-3"
            >
              <span className="w-1 h-px bg-bronze" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          href={service.href}
          className="group inline-flex items-center gap-3 font-accent text-[0.72rem] tracking-[0.22em] uppercase text-espresso hover:text-bronze transition-colors duration-400"
        >
          <span className="relative">
            Explore {service.number === "01" ? "Transportation" : service.number === "02" ? "Concierge Care" : "Lifestyle Management"}
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-bronze transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
          </span>
          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-44 bg-sand/30 relative">
      <div className="noise-overlay opacity-30" />
      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 md:mb-36">
          <p className="font-accent text-[0.7rem] tracking-[0.35em] uppercase text-bronze mb-6">
            The QTC Experience
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-light text-espresso mb-8">
            <SplitLines
              lines={[
                "Three Ways to Experience",
                "More With QTC.",
              ]}
              italicLineIndexes={[1]}
            />
          </h2>
          <p className="text-espresso/70 text-[1rem] leading-[1.85] font-light max-w-xl mx-auto">
            From premium transportation to personalized arrangements, explore
            services designed around the way you live, travel, and celebrate.
          </p>
        </div>

        {/* Service Items */}
        {services.map((service, i) => (
          <ServiceItem key={service.number} service={service} index={i} />
        ))}
      </Container>
    </section>
  );
}
