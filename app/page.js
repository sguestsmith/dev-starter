import Image from "next/image";
import SplitHero from "./components/SplitHero";
import Footer from "./components/Footer";
import Facts from "./components/Facts";
import FullWidthImage from "./components/FullWidthImage";
import Cards from "./components/Cards";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import HalfSquares from "./components/HalfSquares";

export default function Home() {
  return (
    <>
    <Hero />
    





      <CTA />
      <div class="py-24 md:flex md:flex-row justify-center bg-sky-50">
      <Cards />
      <Cards />
    </div>
    <FullWidthImage />
      <HalfSquares />
      {/* <SplitHero /> */}
 
      {/* <Facts /> */}

      <Footer />
    </>
  );
}
