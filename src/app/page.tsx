import Hero from "./components/Hero";
import Case from "./components/Case"
import About from "./components/About";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Case />
      <About />
      <Footer />
    </main>
  );
}
