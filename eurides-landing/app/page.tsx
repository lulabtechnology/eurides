import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { Credentials } from "@/components/Credentials";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div>
      <Header />
      <main id="contenido">
        <Hero />

        <SectionWrapper id="como-funciona" tone="soft">
          <HowItWorks />
        </SectionWrapper>

        <SectionWrapper id="servicios">
          <Services />
        </SectionWrapper>

        <SectionWrapper id="credenciales">
          <Credentials />
        </SectionWrapper>

        <SectionWrapper tone="soft">
          <Stats />
        </SectionWrapper>

        <SectionWrapper id="testimonios">
          <Testimonials />
        </SectionWrapper>

        <SectionWrapper id="precios" tone="soft">
          <Pricing />
        </SectionWrapper>

        <SectionWrapper id="faq">
          <FAQAccordion />
        </SectionWrapper>

        <SectionWrapper id="contacto" tone="soft">
          <Contact />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
