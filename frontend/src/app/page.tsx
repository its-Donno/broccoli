import { Header } from "@/components/site/header";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <About />
      </main>
    </>
  );
}