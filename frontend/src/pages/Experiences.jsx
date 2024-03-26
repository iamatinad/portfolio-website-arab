import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import background1 from "../assets/background1.png"

function Experiences() {
  return (
    <div>
      <Header />
      <div>
      <div style={{backgroundImage:`url(${background1})`}} class="h-screen p-10 w-full	bg-cover">
      <h1 class="mb-8 font-bold text-8xl	" >EXPERIENCES</h1>
      <h2 class=" text-4xl mt-8 font-bold">Heroes Are Made with Experience</h2>
      <div class=" grid	 grid-rows-3 gap-5  mix-blend-darken		mt-10	 bg-slate-200	">
      <div class="">
        <h3 class="font-medium		">Agro Produck Marketplace</h3>
        <p class="">Recognized for spearheading the development and launch <br/>of a groundbreaking product, driving increased sales and customer engagement.
        </p>
      </div>
      <div>
        <h3  class="font-medium		">Movie Streaming App</h3>
        <p> Received top honors for consistently exceeding client expectations, delivering <br/>exceptional service and results.</p>
      </div>
      </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Experiences;
