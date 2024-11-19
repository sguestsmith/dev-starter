"use client"; // Indicates that this is a client-side component

// Import necessary hooks and components
import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "../lib/index";
import Footer from "./components/Footer";
import TextBlock from "./components/TextBlock";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ImageGallery from "./components/ImageGallery";
import ProductBlock from "./components/ProductBlock";
import ImageRow from './components/ImageRow';
import ImageGrid from './components/imageGrid';
import HalfSquares from './components/halfSquares';


// Main component function
export default function Home({ params }) {

  const [entry, setEntry] = useState({});
  // State to manage loading status
  const [loading, SetLoading] = useState(true);

  // Function to fetch content asynchronously
  const getContent = async () => {
    // Fetch entry data with specific references
    const entry = await Stack.getElementByTypeWtihRefs(
      "home_page",
      [
        "hero_banner", 
        "page_content.image_gallery.gallery_item.page",
        "page_content.bigcommerce_product"
      ]
    );
    // Set the fetched entry data to state
    setEntry(entry[0][0]);
    // Update loading status
    SetLoading(false);
  };

  // UseEffect hook to fetch content when the component mounts
  useEffect(() => {
    onEntryChange(getContent);
  }, []);  // Note: we still have a linter warning

  if (loading) {
    return null;
  }
  // Log the page content for debugging
  console.log('Entry page_content:', entry.page_content);

  // Render the component
  return (
    <>
      <NavBar />
      <Hero content={entry.hero_banner[0]} />
      <div 
        className={entry?.page_content?.length === 0 ? "visual-builder__empty-block-parent" : ""} 
        {...entry?.$?.page_content}
      >
        {entry.page_content?.map((item, index) => {
          // Generate a unique key for each item
          const uniqueKey = `${item.text_block?.id || item.image_gallery?.id || item.bigcommerce_product?.id || index}`;
          
          return (
            <div 
              key={uniqueKey} 
              {...entry?.$?.[`page_content__${index}`]}
            >
              {/* Render TextBlock if present */}
              {Object.prototype.hasOwnProperty.call(item, "text_block") && (
                <TextBlock 
                  key={`text-${uniqueKey}`} 
                  content={item.text_block} 
                />
              )}
              {/* Render ImageGallery if present */}
              {Object.prototype.hasOwnProperty.call(item, "image_gallery") && (
                <ImageGallery 
                  key={`gallery-${uniqueKey}`} 
                  content={item.image_gallery} 
                />
              )}
              {/* Render ProductBlock if present */}
              {Object.prototype.hasOwnProperty.call(item, "bigcommerce_product") && (
                console.log('Found bigcommerce_product:', item.bigcommerce_product) || 
                <ProductBlock 
                  key={`product-${uniqueKey}`} 
                  content={item.bigcommerce_product} 
                />
              )}
              {/* Render ImageRow if present */}
              {Object.prototype.hasOwnProperty.call(item, "image_row") && (
                <ImageRow 
                  key={`row-${uniqueKey}`} 
                  content={item.image_row} 
                />
              )}
              {/* Render ImageGrid if present */}
              {Object.prototype.hasOwnProperty.call(item, "image_grid") && (
                <ImageGrid 
                  key={`grid-${uniqueKey}`} 
                  content={item.image_grid} 
                />
              )}
              {/* Render TextAndImage if present */}
              {Object.prototype.hasOwnProperty.call(item, "text_and_image") && (
                <HalfSquares 
                  key={`text-and-image-${uniqueKey}`} 
                  content={item.text_and_image} 
                />
              )}
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}