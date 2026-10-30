"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import { SplitLines } from "../ui/Reveal";

// Using a corporate-appropriate image from Pexels for the right panel
const corporateImg =
  "https://images.pexels.com/photos/35776811/pexels-photo-35776811.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400";

export default function ClientTypes() {
  return (
    <section className="py-28 md:py-44 bg-ivory relative">
      <Container size="wide">
        {/* Section header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-bronze mb-6">
            For Every Kind of Journey
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5.5vw,5rem)] leading-[1.02] font-light text-espresso">
            <SplitLines
              lines={["Designed Around Every", "Kind of Journey."]}
              italicLineIndexes={[1]}
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Individuals & Families */}
          <div className="group relative overflow-hidden bg-espresso aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/individuals-family.jpg"
              alt="Family and personal luxury transportation"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-85"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/25 to-espresso/50" />
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 lg:p-14">
              <p className="font-accent text-[0.65rem] tracking-[0.3em] uppercase text-champagne mb-5">
                For Individuals & Families
              </p>
              <h3 className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.05] font-light text-ivory mb-5">
                Personal, thoughtful, and perfectly arranged.
              </h3>
              <p className="text-ivory/75 text-[0.88rem] leading-[1.8] font-light max-w-md mb-8">
                Whether you&apos;re planning an airport transfer, a birthday
                celebration, or transportation for someone important to you, QTC
                makes it easier to arrange an experience that feels personal.
              </p>
              <Link
                href="/#services"
                className="group/link inline-flex items-center gap-3 font-accent text-[0.7rem] tracking-[0.22em] uppercase text-ivory hover:text-champagne transition-colors duration-400 w-fit"
              >
                <span className="relative">
                  Explore Personal Services
                  <span className="absolute left-0 -bottom-1 w-0 h-px bg-champagne transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:w-full" />
                </span>
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                />
              </Link>
            </div>
          </div>

          {/* Corporate & Business */}
          <div className="group relative overflow-hidden bg-espresso aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] lg:mt-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={corporateImg}
              alt="Corporate luxury SUV outside modern office building"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-80"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/20 to-espresso/45" />
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 lg:p-14">
              <p className="font-accent text-[0.65rem] tracking-[0.3em] uppercase text-champagne mb-5">
                For Corporate & Business
              </p>
              <h3 className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.05] font-light text-ivory mb-5">
                Professional, reliable, beautifully executed.
              </h3>
              <p className="text-ivory/75 text-[0.88rem] leading-[1.8] font-light max-w-md mb-8">
                From executive transportation to coordinated event travel, QTC
                helps businesses arrange professional transportation experiences
                with attention to detail.
              </p>
              <Link
                href="/corporate"
                className="group/link inline-flex items-center gap-3 font-accent text-[0.7rem] tracking-[0.22em] uppercase text-ivory hover:text-champagne transition-colors duration-400 w-fit"
              >
                <span className="relative">
                  Explore Corporate Services
                  <span className="absolute left-0 -bottom-1 w-0 h-px bg-champagne transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:w-full" />
                </span>
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
