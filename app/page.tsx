import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Trusted from "@/components/trusted/Trusted";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import Process from "@/components/process/Process";
import Testimonials from "@/components/testimonials/Testimonials";
import FAQ from "@/components/faq/FAQ";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      
    </>
  );
}