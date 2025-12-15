import Ethos from "./_components/Ethos";
import Featured from "./_components/Featured";
import Footer from "./_components/Footer";
import Gallery from "./_components/Gallery";
import Hero from "./_components/Hero";
import JoinCall from "./_components/JoinCall";
import Quotes from "./_components/Quotes";
import RequestBrand from "./_components/RequestBrand";
import ScrollSection from "./_components/ScrollSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Gallery />
      <JoinCall />
      <Ethos />
      <Featured />
      <Quotes />
      <RequestBrand />
      <ScrollSection />
      <Footer />
    </div>
  );
}
