import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Skills() {
  return (
    <div>
      <Header />
      <div className="text-center text-3xl mt-5">SKILLS</div>
      <div className="container mx-auto lg:px-5 lg:py-5">
        <div className="text-center">Your skills content here</div>
      </div>
      <Footer />
    </div>
  );
}
export default Skills;
