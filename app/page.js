"use client";
import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "../lib/index";
import Footer from "./components/Footer";
import TextBlock from "./components/TextBlock";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ImageGallery from "./components/ImageGallery";

export default function Home({ params }) {
  const [entry, setEntry] = useState({});

  const getContent = async () => {
    const entry = await Stack.getElementWithRefs(
      "blt83a107d22f925d49",
      "home_page",
      ["hero_banner", "page_content.image_gallery.gallery_item.page"]
    );
    console.log(entry);
    setEntry(entry);
  };

  useEffect(() => {
    onEntryChange(getContent);
  }, []);

  return (
    <>
      <NavBar />

      {entry?.hero_banner?.length > 0 && <Hero content={entry.hero_banner} />}

      {entry?.page_content?.map((item, index) => {
        if (item.hasOwnProperty("text_block")) {
          return <TextBlock key={index} content={item.text_block} />;
        }
        if (item.hasOwnProperty("image_gallery")) {
          return <ImageGallery key={index} content={item.image_gallery} />;
        }
      })}

      <Footer />
    </>
  );
}
