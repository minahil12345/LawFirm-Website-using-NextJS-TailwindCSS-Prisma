import Hero from "@/components/Hero"
import Services from "@/components/Services";
import PracticeAreas from "@/components/PracticeAreas";
import Partners from "@/components/Partners";
import Attorneys from "@/components/Attorneys";
import News from "@/components/News";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import ClientPortal from "@/components/ClientPortal";


export default function HomePage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4">
      <Hero />
      <section id="services" className="py-4">
      <Services />
      </section>
      <section id="practice-areas" className="py-4">
        <PracticeAreas />
      </section>
      <section id="attorneys" className="py-4">
        <Attorneys />
      </section>
      <section id="news" className="py-4">
        <News />
      </section>
      <section id="partners" className="py-4">
        <Partners />
      </section>

      <section id="testimonials" className="py-4">
        <Testimonials />
      </section>
      <section id="contact" className="py-4">
        <Contact />
      </section>
      <section id="client-portal" className="py-4">
        <ClientPortal />
      </section>
    </main>
  );
}
