import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import background2 from "../assets/background2.png";
import { apiGetAllExperiences } from "../services/experiences.services";

function Experiences() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const results = await apiGetAllExperiences();
        setExperiences(results.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <div>
      <Header />
      <div
        style={{ backgroundImage: `url(${background2})` }}
        className="h-screen p-10 w-full bg-cover"
      >
        <h1 className="mb-8 font-bold text-8xl">EXPERIENCES</h1>
        <h2 className="text-4xl mt-8 font-bold">HEROES ARE MADE</h2>
        <div className="grid grid-rows-3 gap-5 mix-blend-darken mt-10 bg-slate-200">
          {experiences.map((experience, index) => (
            <div className="" key={index}>
              <h3 className="font-bold">{experience.role}</h3>
              <p className="font-semibold">{experience.company}</p>
              <p>{experience.duration}</p>
              <p>{experience.responsibilities}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Experiences;