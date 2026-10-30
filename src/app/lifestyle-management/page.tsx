"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/sub/ServiceHero";
import Container from "@/components/ui/Container";
import { SplitLines, TextReveal } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const lifestyleAreas = [
  {
    title: "Travel Planning Support",
    description:
      "Thoughtful coordination for personal travel — from airport logistics to on-the-ground arrangements.",
  },
  {
    title: "Experience Curation",
    description:
      "Help planning special outings, celebrations, cultural experiences, dining, and personal occasions.",
  },
  {
    title: "Personal Arrangements",
    description:
      "Assistance with scheduling, coordination, and logistics for the arrangements that make up daily life.",
  },
  {
    title: "Family & Guest Support",
    description:
      "Coordination for visiting family, guests, or loved ones to ensure their time is smooth and welcoming.",
  },
];

export default function LifestyleManagementPage() {
  return (
    <main className="bg-ivory">
      <Navigation />
      <ServiceHero
        eyebrow="Lifestyle Management"
        titleLines={["More Time for", "What Matters."]}
        italicIndexes={[1]}
        description="Personalized lifestyle arrangements and thoughtful coordination that help make everyday plans and special experiences easier."
        image="/images/service-lifestyle.jpg"
        primaryCta={{ label: "Inquire About Lifestyle Support", href: "/contact" }}
        secondaryCta={{ label: "All Services", href: "/#services" }}
      />

      {/* Philosophy */}
      <section className="py-24 md:py-36">
        <Container size="narrow">
          <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-bronze mb-8 text-center">
            Lifestyle, On Your Terms
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-light text-espresso text-center mb-12">
            Give yourself the gift of
            <br />
            <em className="italic text-bronze">time and ease.</em>
          </h2>
          <div className="space-y-6 text-espresso/75 leading-[1.9] text-[1.05rem] font-light">
            <p className="text-center">
              <TextReveal delay={0.1}>
                Lifestyle Management at QTC is about thoughtful, personalized
                support for the arrangements that matter — whether that&apos;s
                planning a special trip, organizing a full schedule, or simply
                taking everyday logistics off your plate.
              </TextReveal>
            </p>
            <p className="text-center font-serif italic text-bronze text-xl pt-4">
              No packages. No rigid tiers. Just support shaped around your life.
            </p>
          </div>
        </Container>
      </section>

      {/* Areas */}
      <section className="py-24 md:py-36 bg-sand/30">
        <Container size="wide">
          <div className="mb-20">
            <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-bronze mb-6">
              How We Support You
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] font-light text-espresso max-w-2xl">
              Arrangements tailored
              <br />
              <em className="italic text-bronze">to how you live.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-16 lg:gap-x-24">
            {lifestyleAreas.map((area, i) => (
              <div key={area.title} className="group">
                <div className="flex items-start gap-5 mb-4">
                  <span className="font-accent text-[0.7rem] tracking-[0.24em] text-bronze pt-2 min-w-[36px]">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-2xl md:text-[1.9rem] font-light text-espresso group-hover:text-bronze transition-colors duration-500 leading-tight">
                    {area.title}
                  </h3>
                </div>
                <div className="pl-14">
                  <p className="text-espresso/65 leading-[1.85] text-[0.92rem] font-light">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Editorial Quote */}
      <section className="py-28 md:py-44 bg-ivory relative overflow-hidden">
        <Container size="narrow" className="text-center">
          <div className="w-16 h-px bg-bronze mx-auto mb-14" />
          <blockquote className="font-serif text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.3] font-light text-espresso">
            <em className="italic">
              &ldquo;Luxury, in its truest form, is having someone who
              understands what you need before you have to ask.&rdquo;
            </em>
          </blockquote>
          <div className="w-16 h-px bg-bronze mx-auto mt-14" />
        </Container>
      </section>

      {/* Combined */}
      <section className="py-24 md:py-36 bg-espresso text-ivory relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/service-truck.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-espresso/80" />
        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-champagne mb-8">
                A Complete QTC Experience
              </p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] font-light mb-8">
                Bring everything
                <br />
                <em className="italic">together.</em>
              </h2>
              <p className="text-ivory/70 leading-[1.9] font-light text-[0.95rem] max-w-lg mb-10">
                Lifestyle Management pairs naturally with Black Truck Service
                and Concierge Care for a truly seamless experience —
                transportation, coordination, and ongoing support, all arranged
                together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/black-truck-service"
                  className="group text-ivory/70 hover:text-champagne transition-colors inline-flex items-center gap-2 font-accent text-[0.72rem] tracking-[0.2em] uppercase"
                >
                  Black Truck Service
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
                <Link
                  href="/concierge-care"
                  className="group text-ivory/70 hover:text-champagne transition-colors inline-flex items-center gap-2 font-accent text-[0.72rem] tracking-[0.2em] uppercase"
                >
                  Concierge Care
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>
            <div className="aspect-[4/3] relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/scene-occasion.jpg"
                alt="Elegant evening event with QTC transportation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <Container size="narrow" className="text-center">
          <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-bronze mb-8">
            Custom Arrangements
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] font-light text-espresso mb-8">
            Let&apos;s design the
            <br />
            <em className="italic">support you need.</em>
          </h2>
          <p className="text-espresso/70 leading-[1.9] font-light text-[0.95rem] max-w-lg mx-auto mb-12">
            Share what you&apos;re looking for — even if it&apos;s just a rough
            idea. Our team will help you think through the possibilities.
          </p>
          <Button href="/contact" size="lg">
            Request Lifestyle Support
          </Button>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
