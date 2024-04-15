import Image from "next/image";
import SplitHero from "./components/SplitHero";
import Footer from "./components/Footer";
import Facts from "./components/Facts";
import FullWidthImage from "./components/FullWidthImage";
import Cards from "./components/Cards";
import CTA from "./components/CTA";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
    <Hero />
    


    <CTA />

      <FullWidthImage />
      <SplitHero />
      <div class="mt-36 py-24 flex flex-row justify-center bg-sky-50">
      <Cards />
      <Cards />
    </div>
      <Facts />

      <Footer />
    </>
  );
}
