import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import background1 from "../assets/background1.png"
import { apiGetAllAchievements } from "../services/achievements.services";




function Achievements() {
  const [achievements, setAchievements] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const results = await apiGetAllAchievements()
        // console.log(results.data)
        setAchievements(results.data)

      } catch (error) {
        console.error(error)
      }
    })();
  }, [])

  return (
    <>
      <Header />
      <div style={{ backgroundImage: `url(${background1})` }} class="h-screen p-10 w-full	bg-cover">
        <h1 class="mb-8 font-bold text-8xl	" >ACHIEVEMENTS</h1>
        <h2 class=" text-4xl mt-8 font-bold">We Made Our Mark</h2>
        <div class=" grid	grid-rows-3 gap-5  mix-blend-darken	mt-10	bg-slate-200	">
          {
            achievements.map((achievement, index) => (
              <div class="" key={index}>
                <h3 class="font-bold">{achievement.achievement}</h3>
                <p class="font-semibold">{achievement.description}</p>
                <img src={achievement.image} alt="achievement image" />
              </div>
            ))
          }
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Achievements;
