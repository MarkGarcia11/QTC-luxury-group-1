"use client";

import Container from "../ui/Container";
import Button from "../ui/Button";
import { SplitLines } from "../ui/Reveal";

export default function ContactCta() {
  return (
    <section className="relative bg-espresso py-28 md:py-44 overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/service-lifestyle.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/85 to-espresso" />
      <div className="noise-overlay" />

      <Container size="narrow" className="relative z-10 text-center">
        <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-champagne mb-8">
          Get in Touch
        </p>
        <h2 className="font-serif text-[clamp(2.5rem,6vw,5.25rem)] leading-[1.03] font-light text-ivory mb-10">
          <SplitLines
            lines={["Your Next Experience", "Starts Here."]}
            italicLineIndexes={[1]}
          />
        </h2>
        <p className="text-ivory/70 text-[1rem] leading-[1.9] font-light max-w-xl mx-auto mb-12">
          Have a specific occasion in mind or need help arranging something
          special? We&apos;d love to hear what you&apos;re planning.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Button href="/contact" variant="primary" size="lg">
            Request an Experience
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Get in Touch
          </Button>
        </div>
      </Container>
    </section>
  );
}
