import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import BrandIntro from "@/components/home/BrandIntro";
import Services from "@/components/home/Services";
import PersonalizedSection from "@/components/home/PersonalizedSection";
import ClientTypes from "@/components/home/ClientTypes";
import WhyQtc from "@/components/home/WhyQtc";
import EditorialStatement from "@/components/home/EditorialStatement";
import BookingSection from "@/components/home/BookingSection";
import ContactCta from "@/components/home/ContactCta";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <BrandIntro />
      <Services />
      <PersonalizedSection />
      <ClientTypes />
      <WhyQtc />
      <EditorialStatement />
      <BookingSection />
      <ContactCta />
      <Footer />
    </main>
  );
}
