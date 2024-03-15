"use client";
import React from "react";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import SmallFooter from "@/components/SmallFooter";

function GalleryPage() {
  return (
    <div className="montserrat">
      <Header />
      <Gallery />
      <SmallFooter />
    </div>
  );
}

export default GalleryPage;
