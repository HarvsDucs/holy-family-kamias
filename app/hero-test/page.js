import Header from "../components/Header";
import Hero from "../components/Hero";
import GalleryAuto from "../components/GalleryAuto";
import Footer from "../components/Footer";

export const metadata = {
  title: "Hero Test | Holy Family Parish – Kamias",
  robots: { index: false, follow: false },
};

export default function HeroTestPage() {
  return (
    <main>
      <Header />
      {/* A/B test: same hero, exterior church photo as background */}
      <Hero bgImage="/assets/outside_church.jpg" />
      {/* A/B test: auto-scrolling gallery variant */}
      <GalleryAuto />
      <Footer />
    </main>
  );
}
