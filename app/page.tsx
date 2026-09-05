import Header from "@/app/component/Header";
import Hero from "@/app/component/Hero";
import Carousel from "@/app/component/Carousel";
import ServicesRows from "@/app/component/Services_rows";
import FAQSection from "@/app/component/FAQsection";
import Footer from "@/app/component/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main>
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="scroll-mt-24"
        >
          <Hero />
        </section>

        <section
          id="services"
          aria-labelledby="services-heading"
          className="scroll-mt-24"
        >
          <ServicesRows />
        </section>

        <section
          id="gallery"
          aria-labelledby="gallery-heading"
          className="scroll-mt-24"
        >
          <Carousel />
        </section>

        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="scroll-mt-24"
        >
          <FAQSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}