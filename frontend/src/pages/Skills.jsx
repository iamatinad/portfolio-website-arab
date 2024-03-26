import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import {motion } from "framer-motion";


function Skills() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div>
      <Header />
      <div className="w-5/6 mx-auto md:h-full">Skills Page Goes Here</div>
      <LineGradient/>
      
      <Footer/>
      
    </div>
  );
}

export default Skills;
