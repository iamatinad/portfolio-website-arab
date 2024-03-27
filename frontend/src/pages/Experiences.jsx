import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import background2 from "../assets/background2.png"
import apiGetAllExperiences from "../"

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
    <div>
      <Header />
      <div style={{backgroundImage:`url(${background2})`}} class="h-screen p-10 w-full	bg-cover">
      <h1 class="mb-8 font-bold text-8xl	" >EXPERIENCES</h1>
      <h2 class=" text-4xl mt-8 font-bold">HEROES ARE MADE</h2>
      <div class=" grid	 grid-rows-3 gap-5  mix-blend-darken		mt-10	 bg-slate-200	">
      <div class="">
        <h3 class="font-bold">Agro-eCommerce Website</h3>
        <p class="font-semibold	">Recognized for spearheading the development and launch <br/>of a groundbreaking product, driving increased sales and customer engagement.
        </p>
      </div>
      <div>
        <h3  class="font-bold		">Movies Streaming Website</h3>
        <p class="font-semibold"> Received top honors for consistently exceeding client expectations, delivering <br/>exceptional service and results.</p>
      </div>
      </div>
      </div>

      
      <Footer />
    </div>
  );
}

export default Experiences;
