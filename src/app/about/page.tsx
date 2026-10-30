"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SplitLines, TextReveal } from "@/components/ui/Reveal";

export default function AboutPage() {
  return (
    <main className="bg-ivory">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-ivory">
        <Container size="wide">
          <p className="font-accent text-[0.7rem] tracking-[0.35em] uppercase text-bronze mb-8">
            About QTC Luxury Group
          </p>
          <h1 className="font-serif text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-light text-espresso max-w-5xl">
            <SplitLines
              lines={["Born from care.", "Built around you."]}
              italicLineIndexes={[1]}
            />
          </h1>
        </Container>
      </section>

      {/* Story Section */}
      <section className="pb-24 md:pb-36">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/intro-chauffeur.jpg"
                  alt="QTC chauffeur welcoming a passenger"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 lg:pl-8">
              <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-bronze mb-8">
                Our Story
              </p>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.08] font-light text-espresso mb-10">
                It started with a simple observation.
              </h2>
              <div className="space-y-6 text-espresso/75 leading-[1.9] text-[0.95rem] font-light max-w-xl">
                <p>
                  <TextReveal delay={0.1}>
                    QTC Luxury Group was inspired by its founder&apos;s personal
                    experiences with travel and her professional background in
                    healthcare. Through her work, she observed families
                    struggling to coordinate transportation and arrangements for
                    elderly family members — often during some of life&apos;s
                    most important moments.
                  </TextReveal>
                </p>
                <p>
                  She recognized an opportunity to make these experiences easier
                  through thoughtful transportation and personalized assistance.
                  The vision subsequently expanded to include airport transfers,
                  special occasions, chauffeur services, corporate events,
                  concierge care, and lifestyle management.
                </p>
                <p className="font-serif italic text-xl text-bronze border-l-2 border-champagne pl-6 mt-8 leading-relaxed">
                  Two ideas guide everything we do: the sophistication of
                  premium transportation, and the human understanding that
                  personal care brings.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-36 bg-espresso text-ivory relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/service-concierge.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-espresso/70" />
        <Container size="wide" className="relative z-10">
          <div className="max-w-2xl mb-20">
            <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-champagne mb-8">
              What We Believe
            </p>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-light">
              Three principles guide
              <br />
              <em className="italic">every interaction.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ivory/10">
            {[
              {
                title: "Elegance",
                body: "Sophistication in presentation, vehicles, and communication — without pretense or excess.",
              },
              {
                title: "Convenience",
                body: "Arrangements designed to make your life easier, not more complicated. Simplicity where it matters.",
              },
              {
                title: "Care",
                body: "A genuine, thoughtful approach that recognizes every customer is a person, not a reservation.",
              },
            ].map((p, i) => (
              <div
                key={p.title}
                className="bg-espresso p-10 md:p-12 hover:bg-espresso/50 transition-colors duration-500"
              >
                <span className="font-accent text-[0.65rem] tracking-[0.28em] text-champagne block mb-5">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-3xl font-light mb-5">{p.title}</h3>
                <p className="text-ivory/70 leading-[1.85] text-[0.9rem] font-light">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-sand/30">
        <Container size="narrow" className="text-center">
          <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-bronze mb-8">
            Experience QTC
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] font-light text-espresso mb-8">
            We look forward to
            <br />
            <em className="italic">arranging something thoughtful for you.</em>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button href="/contact" size="lg">
              Request an Experience
            </Button>
            <Button href="/#services" variant="secondary" size="lg">
              Explore Services
            </Button>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
