import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Team } from "@/components/sections/team";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <About />
        <Team />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}