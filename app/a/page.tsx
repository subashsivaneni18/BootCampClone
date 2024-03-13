"use client"
import React from "react";
import Link from "next/link";

const SinglePage = () => {
  const scrollToSection = (sectionId:any) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ height: "200vh", overflowY: "auto" }}>
      <h1>Welcome to Single Page</h1>

      <div>
        <Link href="#section1">Go to Section 1</Link>
        <Link href="#section2">Go to Section 2</Link>
        <Link href="#section3">Go to Section 3</Link>
      </div>

      <div id="section1" className="w-screen h-screen">
        <h2>Section 1</h2>
        <p>This is the content of section 1.</p>
      </div>

      <div id="section2" className="w-screen h-screen">
        <h2>Section 2</h2>
        <p>This is the content of section 2.</p>
      </div>

      <div id="section3" className="w-screen h-screen">
        <h2>Section 3</h2>
        <p>This is the content of section 3.</p>
      </div>
    </div>
  );
};

export default SinglePage;
