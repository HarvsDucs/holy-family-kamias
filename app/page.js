import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import MassSchedule from "./components/MassSchedule";
import Sacraments from "./components/Sacraments";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <MassSchedule />
      <Sacraments />
      <Visit />
      <Footer />
    </main>
  );
}
