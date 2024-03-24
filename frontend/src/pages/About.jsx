import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Header />
      <div
        style={{ fontFamily: "Manrope, sans-serif" }}
        className="container mx-auto px-4 lg:px-8 py-8"
      >
        <h1 className="text-3x1 font-bold mb-4">About AM Agency</h1>
        <div className="bg-white shadow-md rounded-lg p-6"></div>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          suscipit illum earum veniam saepe, odio similique vitae ratione dolor
          minus vero sint architecto doloribus facere excepturi est. Totam,
          voluptas suscipit?
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          asperiores corporis velit eos tempore dolores iste odio sint
          necessitatibus optio illum perspiciatis accusamus rem magni in dolor,
          maxime, officia deleniti?
        </p>
        <h2>Test</h2>
      </div>
      <Footer />
    </div>
  );
}

export default About;
