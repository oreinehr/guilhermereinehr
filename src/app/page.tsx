import Hero from "./components/Hero";
import Case from "./components/Case";
import Footer from "./components/Footer";

import SectionDivider from "./components/motion/SectionDivider";

import Manifesto from "./components/sections/Manifesto";
import Clients from "./components/sections/Clients";
import Disciplines from "./components/sections/Disciplines";
import Process from "./components/sections/Process";
import Playground from "./components/sections/Playground";
import ContactCTA from "./components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <main className="overflow-x-clip">
        <Hero />
        <Case />

        <Manifesto />
        <SectionDivider />

        <Clients />

        <SectionDivider />
        <Disciplines />

        <Process />

        <SectionDivider />
        <Playground />

        <ContactCTA />
        <Footer />
      </main>
    </>
  );
}
