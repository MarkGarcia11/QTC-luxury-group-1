"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import { SplitLines } from "@/components/ui/Reveal";
import BookingForm from "@/components/booking/BookingForm";

export default function ContactPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <Navigation />

      {/* Hero Spacer */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 bg-espresso relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-main.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 to-espresso" />
        <Container size="wide" className="relative z-10">
          <p className="font-accent text-[0.7rem] tracking-[0.35em] uppercase text-champagne mb-8">
            Contact & Inquiries
          </p>
          <h1 className="font-serif text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-light text-ivory max-w-4xl">
            <SplitLines
              lines={["Let's Arrange", "Your Experience."]}
              italicLineIndexes={[1]}
            />
          </h1>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="font-accent text-[0.7rem] tracking-[0.28em] uppercase text-bronze mb-6">
                The Process
              </p>
              <h3 className="font-serif text-2xl font-light text-espresso mb-6 leading-tight">
                Every inquiry is a request, not a confirmed booking.
              </h3>
              <p className="text-espresso/70 leading-[1.9] font-light text-[0.92rem] mb-6">
                After you submit your request, a member of our team will review
                your arrangements and reach out to confirm availability, discuss
                any details, and walk through next steps.
              </p>
              <p className="text-espresso/70 leading-[1.9] font-light text-[0.92rem] mb-10">
                We value thoughtful communication over instant confirmations,
                ensuring every arrangement is considered before it&apos;s
                finalized.
              </p>

              <div className="space-y-5 pt-8 border-t border-stone/50">
                <div>
                  <p className="font-accent text-[0.65rem] tracking-[0.24em] uppercase text-bronze mb-2">
                    Email
                  </p>
                  <p className="text-espresso font-serif text-lg italic">
                    inquiries@qtcluxurygroup.com
                  </p>
                  <p className="text-espresso/50 text-xs font-light mt-1">
                    This email will be active upon launch.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 lg:pl-8">
              <div className="bg-sand/40 border border-stone/30 p-8 md:p-12">
                <BookingForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
