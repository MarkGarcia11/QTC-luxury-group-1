"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/sub/ServiceHero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SplitLines, TextReveal } from "@/components/ui/Reveal";

const corporateOfferings = [
  "Executive airport transfers",
  "Point-to-point executive transportation",
  "Corporate event and meeting transportation",
  "Coordinated multi-passenger travel",
  "Hourly or full-day chauffeur arrangements",
  "Roadshows and multi-stop schedules",
  "Client hospitality transportation",
  "Team and group event coordination",
];

export default function CorporatePage() {
  return (
    <main className="bg-ivory">
      <Navigation />
      <ServiceHero
        eyebrow="Corporate & Business Services"
        titleLines={["Professional Travel.", "Seamlessly Arranged."]}
        italicIndexes={[1]}
        description="Executive transportation and coordinated business travel, designed to reflect the standard of your organization."
        image="https://images.pexels.com/photos/35776811/pexels-photo-35776811.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
        primaryCta={{ label: "Request Corporate Services", href: "/contact" }}
        secondaryCta={{ label: "Personal Services", href: "/#services" }}
      />

      {/* Intro */}
      <section className="py-24 md:py-32 bg-sand/30">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-bronze mb-8">
                Business Transportation
              </p>
              <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] font-light text-espresso">
                <SplitLines
                  lines={[
                    "Transportation that",
                    "reflects your business.",
                  ]}
                  italicLineIndexes={[1]}
                />
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-8">
              <div className="space-y-6 text-espresso/75 leading-[1.9] text-[1rem] font-light">
                <p>
                  <TextReveal delay={0.1}>
                    QTC provides professional transportation and coordination
                    for businesses that value reliability, presentation, and
                    attention to detail. Whether you&apos;re arranging travel
                    for executives, planning a corporate event, or managing
                    multi-stop schedules, we approach every arrangement with the
                    same standard of care.
                  </TextReveal>
                </p>
                <p>
                  We understand that corporate travel is about more than getting
                  from point A to B — it&apos;s about punctuality, presentation,
                  discretion, and making sure the people you care about arrive
                  prepared and at ease.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Offerings */}
      <section className="py-24 md:py-36">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-bronze mb-8">
                Corporate Services
              </p>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.05] font-light text-espresso mb-8">
                Arrangements built around
                <br />
                <em className="italic">professional needs.</em>
              </h2>
              <p className="text-espresso/65 leading-[1.9] text-[0.92rem] font-light mb-10 max-w-md">
                Every business is different. We&apos;ll work with you to
                understand your specific needs and build a transportation plan
                that supports them.
              </p>
              <Button href="/contact" variant="secondary">
                Discuss Your Requirements
              </Button>
            </div>
            <div className="lg:col-span-7 lg:pl-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                {corporateOfferings.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 py-4 border-b border-stone/50"
                  >
                    <span className="w-4 h-4 mt-1 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 bg-bronze rounded-full" />
                    </span>
                    <span className="text-espresso/80 text-[0.92rem] leading-relaxed font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why corporate */}
      <section className="py-24 md:py-36 bg-espresso text-ivory relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/37418846/pexels-photo-37418846.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-espresso/80" />
        <Container size="narrow" className="relative z-10 text-center">
          <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-champagne mb-8">
            The QTC Standard for Business
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] font-light mb-12">
            Reliable. Professional.
            <br />
            <em className="italic">Thoughtfully arranged.</em>
          </h2>
          <p className="text-ivory/70 leading-[1.9] font-light text-[1rem] max-w-lg mx-auto">
            We don&apos;t treat corporate accounts as one-size-fits-all. You
            work with a team that understands your preferences, your travelers,
            and your standards.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-bronze mb-8">
                Let&apos;s Talk
              </p>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.05] font-light text-espresso mb-8">
                Ready to discuss your
                <br />
                <em className="italic">organization&apos;s needs?</em>
              </h2>
              <p className="text-espresso/70 leading-[1.9] font-light text-[0.95rem] mb-10 max-w-lg">
                Whether you need a single executive transfer or a recurring
                transportation program, we&apos;re happy to discuss your
                requirements and design an arrangement that works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Submit a Corporate Inquiry
                </Button>
                <Link
                  href="/#services"
                  className="group inline-flex items-center gap-3 font-accent text-[0.72rem] tracking-[0.2em] uppercase text-espresso hover:text-bronze transition-colors duration-400 pt-5"
                >
                  <span className="relative">
                    Explore All Services
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
            <div className="aspect-[4/5] relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/scene-corporate.jpg"
                alt="Professional corporate transportation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
