import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import background2 from "../assets/background2.png"

function Experiences() {
  return (
    <div>
      <Header />
      <div style={{backgroundImage:`url(${background2})`}} class="h-screen p-10 w-full	bg-cover">

      </div>

      
      <Footer />
    </div>
  );
}

export default Experiences;
