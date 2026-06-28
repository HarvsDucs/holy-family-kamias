import Header from "./components/Header";
import Hero from "./components/Hero";
import GalleryManual from "./components/GalleryManual";
import About from "./components/About";
import MassSchedule from "./components/MassSchedule";
import Sacraments from "./components/Sacraments";
import OfficeServices from "./components/OfficeServices";
import Ministries from "./components/Ministries";
import Visit from "./components/Visit";
import SuggestionBox from "./components/SuggestionBox";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <GalleryManual />
      <About />
      <MassSchedule />
      <Sacraments />
      <OfficeServices />
      <Ministries />
      <Visit />
      <SuggestionBox />
      <Footer />
    </main>
  );
}
