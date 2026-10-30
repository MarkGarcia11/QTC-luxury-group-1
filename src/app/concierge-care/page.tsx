"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/sub/ServiceHero";
import Container from "@/components/ui/Container";
import { SplitLines, TextReveal } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const conciergeAreas = [
  {
    title: "Travel Coordination",
    description:
      "Help arranging the details that make travel smoother — from arrival planning to coordination with other service providers.",
  },
  {
    title: "Special Arrangements",
    description:
      "Thoughtful coordination for birthdays, anniversaries, family gatherings, and personal milestones.",
  },
  {
    title: "Appointment & Errands",
    description:
      "Support with scheduling, coordination, and assistance for everyday tasks that benefit from an extra hand.",
  },
  {
    title: "Guest & Visitor Support",
    description:
      "Arrangements for visiting family, guests, or clients — helping them feel welcomed and cared for.",
  },
];

export default function ConciergeCarePage() {
  return (
    <main className="bg-ivory">
      <Navigation />
      <ServiceHero
        eyebrow="Concierge Care"
        titleLines={["Thoughtful Assistance.", "Personalized Attention."]}
        italicIndexes={[1]}
        description="Because some arrangements deserve more than a standard solution. Discover personalized concierge assistance designed around your needs."
        image="/images/service-concierge.jpg"
        primaryCta={{ label: "Request Concierge Care", href: "/contact" }}
        secondaryCta={{ label: "All Services", href: "/#services" }}
      />

      {/* Philosophy */}
      <section className="py-24 md:py-36 bg-sand/30">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-bronze mb-8">
                Our Approach
              </p>
              <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] font-light text-espresso mb-8">
                <SplitLines
                  lines={[
                    "Help when you need it,",
                    "in the way you need it.",
                  ]}
                  italicLineIndexes={[1]}
                />
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-8">
              <div className="space-y-6 text-espresso/75 leading-[1.9] text-[1rem] font-light">
                <p>
                  <TextReveal delay={0.1}>
                    QTC Concierge Care is built around the belief that small
                    acts of thoughtfulness can transform ordinary arrangements
                    into easy, enjoyable experiences. Whether you need help
                    coordinating travel, supporting a family member, or simply
                    organizing a busy schedule, we approach every request with
                    attention, professionalism, and genuine care.
                  </TextReveal>
                </p>
                <p className="font-serif italic text-xl text-bronze border-l-2 border-champagne pl-6">
                  We start by listening. Then we help make it easier.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Areas of Assistance */}
      <section className="py-24 md:py-36">
        <Container size="wide">
          <div className="mb-20 max-w-2xl">
            <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-bronze mb-6">
              How We Can Help
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] font-light text-espresso">
              Areas of concierge
              <br />
              <em className="italic text-bronze">assistance.</em>
            </h2>
            <p className="text-espresso/65 leading-[1.9] text-[0.92rem] font-light mt-6 max-w-lg">
              Below are a few examples of arrangements we regularly support.
              Your needs may look different — we encourage you to share what
              would help most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone/40">
            {conciergeAreas.map((area, i) => (
              <div
                key={area.title}
                className="bg-ivory p-8 md:p-12 group hover:bg-sand/30 transition-colors duration-500"
              >
                <span className="font-accent text-[0.65rem] tracking-[0.28em] text-bronze block mb-6">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl md:text-[1.85rem] font-light text-espresso mb-5 group-hover:text-bronze transition-colors duration-500 leading-tight">
                  {area.title}
                </h3>
                <p className="text-espresso/65 leading-[1.85] text-[0.9rem] font-light max-w-md">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 md:p-10 bg-espresso text-ivory">
            <p className="font-serif italic text-xl md:text-2xl leading-[1.5] font-light max-w-3xl">
              &ldquo;Concierge care is not about being lavish. It&apos;s about
              being thoughtful. It&apos;s about making life a little easier, one
              arrangement at a time.&rdquo;
            </p>
          </div>
        </Container>
      </section>

      {/* Combined Services */}
      <section className="py-24 md:py-36 bg-sand/30">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/scene-personal.jpg"
                alt="Curated personal arrangements"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-bronze mb-8">
                Combined With Transportation
              </p>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.05] font-light text-espresso mb-8">
                Add concierge support to
                <br />
                <em className="italic">your QTC experience.</em>
              </h2>
              <p className="text-espresso/70 leading-[1.9] font-light text-[0.95rem] mb-8 max-w-lg">
                Many of our clients pair concierge care with our Black Truck
                Service for a seamless experience — whether that means
                coordinating an airport pickup with additional arrangements, or
                planning a full day of travel and support.
              </p>
              <Link
                href="/black-truck-service"
                className="group inline-flex items-center gap-3 font-accent text-[0.72rem] tracking-[0.2em] uppercase text-espresso hover:text-bronze transition-colors duration-400"
              >
                <span className="relative">
                  Explore Black Truck Service
                  <span className="absolute left-0 -bottom-1 w-0 h-px bg-bronze transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                </span>
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-espresso relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/service-concierge.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-espresso/60" />
        <Container size="narrow" className="relative z-10 text-center">
          <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-champagne mb-8">
            Let&apos;s Talk
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] font-light text-ivory mb-8">
            Tell us what would
            <br />
            <em className="italic">make things easier.</em>
          </h2>
          <p className="text-ivory/70 leading-[1.9] font-light text-[0.95rem] max-w-lg mx-auto mb-12">
            There&apos;s no standard package. Share what you have in mind and
            we&apos;ll work with you to find the right support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" variant="primary">
              Request Concierge Care
            </Button>
            <Button href="/lifestyle-management" variant="outline" size="lg">
              Explore Lifestyle Management
            </Button>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
