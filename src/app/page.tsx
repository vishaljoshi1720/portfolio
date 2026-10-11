import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import { Experience } from "@/components/experience";
import { Stack } from "@/components/stack";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ClientChrome } from "@/components/client-chrome";

export default function Home() {
  return (
    <>
      <ClientChrome />
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Experience />
        <Stack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
