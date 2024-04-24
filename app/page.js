"use client";
import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "../lib/index";
import Footer from "./components/Footer";
import FullWidthImage from "./components/FullWidthImage";
import Cards from "./components/Cards";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import HalfSquares from "./components/HalfSquares";

export default function Home({ params }) {
  const [entry, setEntry] = useState({});

  const getContent = async () => {
    const entry = await Stack.getElement(
      "blt83a107d22f925d49",
      "home_page"
      // ["modular_blocks.image_grid.images.page"]
    );
    console.log(entry);
    setEntry(entry);
  };

  useEffect(() => {
    onEntryChange(getContent);
  }, []);

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
      <Footer />
    </>
  );
}
