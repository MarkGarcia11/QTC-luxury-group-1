"use client";

import Container from "../ui/Container";
import { SplitLines } from "../ui/Reveal";
import BookingForm from "../booking/BookingForm";

export default function BookingSection() {
  return (
    <section id="book" className="py-28 md:py-44 bg-ivory relative">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="font-accent text-[0.7rem] tracking-[0.3em] uppercase text-bronze mb-8">
              Request an Experience
            </p>
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] font-light text-espresso mb-10">
              <SplitLines
                lines={[
                  "Let's Make Your Next",
                  "Experience Effortless.",
                ]}
                italicLineIndexes={[1]}
              />
            </h2>
            <p className="text-espresso/70 text-[1rem] leading-[1.9] font-light max-w-md mb-10">
              Tell us a little about what you have planned. Whether you need
              transportation, personalized assistance, or a combination of
              services, our team will help you explore the right arrangements.
            </p>
            <div className="space-y-5 text-espresso/60 text-[0.85rem] leading-relaxed font-light">
              <p>
                <strong className="text-espresso font-medium">
                  Please note:
                </strong>{" "}
                All submissions are considered booking requests. A member of our
                team will reach out to confirm availability, review details, and
                finalize arrangements.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-stone/50">
              <p className="font-accent text-[0.65rem] tracking-[0.28em] uppercase text-bronze mb-4">
                Prefer to connect directly?
              </p>
              <p className="text-espresso/70 text-[0.88rem] leading-relaxed font-light">
                Reach us through our contact page — we&apos;re happy to help
                with questions or custom arrangements.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <div className="bg-sand/40 backdrop-blur-sm p-8 md:p-12 border border-stone/30">
              <BookingForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
