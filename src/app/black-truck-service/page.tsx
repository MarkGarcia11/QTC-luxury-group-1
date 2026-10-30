"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/sub/ServiceHero";
import Container from "@/components/ui/Container";
import { SplitLines, TextReveal } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const offerings = [
  {
    title: "Airport Transfers",
    description:
      "Prompt, reliable pickups and drop-offs at major airports, with flight tracking and chauffeur meet-and-greet where requested.",
  },
  {
    title: "Point-to-Point Transportation",
    description:
      "Comfortable travel between destinations — whether across town or to an important meeting, dinner, or appointment.",
  },
  {
    title: "Round Trips",
    description:
      "Seamless round-trip arrangements for events, appointments, or occasions where you'll need transportation in both directions.",
  },
  {
    title: "Hourly Chauffeur Arrangements",
    description:
      "A dedicated vehicle and chauffeur for multiple stops, errands, or a full schedule — on your timeline.",
  },
  {
    title: "Full-Day Transportation",
    description:
      "Premium SUV and professional chauffeur reserved for your full day, ideal for packed schedules, events, or special days.",
  },
  {
    title: "Special Occasions",
    description:
      "Weddings, anniversaries, birthdays, galas, and celebrations — arrive and depart with elegance.",
  },
  {
    title: "Corporate Event Transportation",
    description:
      "Coordinated travel for executive meetings, team events, conferences, and client hospitality.",
  },
];

export default function BlackTruckServicePage() {
  return (
    <main className="bg-ivory">
      <Navigation />
      <ServiceHero
        eyebrow="Black Truck Service"
        titleLines={["Arrive With", "Elegance."]}
        italicIndexes={[1]}
        description="Premium transportation for everyday journeys, special occasions, airport transfers, and professional engagements."
        image="/images/service-truck.jpg"
        primaryCta={{ label: "Request Transportation", href: "/contact" }}
        secondaryCta={{ label: "All Services", href: "/#services" }}
      />

      {/* Intro */}
      <section className="py-24 md:py-32 bg-sand/30">
        <Container size="narrow">
          <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-bronze mb-8">
            Thoughtful Transportation
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] font-light text-espresso mb-10">
            <SplitLines
              lines={[
                "Transportation tailored to",
                "your plans, your schedule,",
                "your peace of mind.",
              ]}
              italicLineIndexes={[2]}
            />
          </h2>
          <div className="space-y-6 text-espresso/75 leading-[1.85] text-[1rem] font-light">
            <p>
              <TextReveal delay={0.15}>
                Our Black Truck Service is designed around how people actually
                travel. Whether you&apos;re heading to the airport, attending a
                special occasion, or managing a full day of appointments,
                you&apos;ll experience premium transportation with thoughtful
                attention to detail and a professional chauffeur who cares about
                your experience.
              </TextReveal>
            </p>
          </div>
        </Container>
      </section>

      {/* Offerings Grid */}
      <section className="py-24 md:py-36">
        <Container size="wide">
          <div className="mb-20 max-w-2xl">
            <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-bronze mb-6">
              What We Offer
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] font-light text-espresso">
              Every arrangement,
              <br />
              <em className="italic text-bronze">thoughtfully considered.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/40">
            {offerings.map((item, i) => (
              <div
                key={item.title}
                className="bg-ivory p-8 md:p-10 group hover:bg-sand/30 transition-colors duration-500"
              >
                <span className="font-accent text-[0.65rem] tracking-[0.28em] text-bronze block mb-5">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl font-light text-espresso mb-4 group-hover:text-bronze transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-espresso/65 leading-[1.8] text-[0.88rem] font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Editorial Split */}
      <section className="py-24 md:py-36 bg-espresso relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/scene-occasion.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/90 to-espresso/70" />
        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-champagne mb-8">
                The QTC Standard
              </p>
              <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-light text-ivory mb-8">
                Premium vehicles.
                <br />
                <em className="italic">Professional chauffeurs.</em>
              </h2>
              <p className="text-ivory/70 leading-[1.9] font-light text-[0.95rem] max-w-lg mb-10">
                Every journey is arranged with attention to timing, comfort,
                presentation, and clear communication — so you can focus on
                what&apos;s ahead.
              </p>
              <div className="grid grid-cols-2 gap-6 max-w-md">
                {[
                  "Premium SUVs",
                  "Professional chauffeurs",
                  "Flexible scheduling",
                  "Clear communication",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-6 h-px bg-champagne" />
                    <span className="text-ivory/80 text-sm font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/5] relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/intro-chauffeur.jpg"
                alt="Professional chauffeur with luxury SUV"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-sand/30">
        <Container size="narrow" className="text-center">
          <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-bronze mb-8">
            Ready to Arrange?
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] font-light text-espresso mb-8">
            Let&apos;s plan your
            <br />
            <em className="italic">next journey.</em>
          </h2>
          <p className="text-espresso/70 leading-[1.9] font-light text-[0.95rem] max-w-lg mx-auto mb-12">
            Tell us about your plans and our team will help arrange the right
            transportation experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Request Transportation
            </Button>
            <Link
              href="/concierge-care"
              className="group inline-flex items-center gap-3 font-accent text-[0.75rem] tracking-[0.2em] uppercase text-espresso hover:text-bronze transition-colors duration-400 pt-5"
            >
              <span className="relative">
                Explore Concierge Care
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-bronze transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
              </span>
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
