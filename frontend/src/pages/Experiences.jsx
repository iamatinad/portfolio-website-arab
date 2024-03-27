import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import background2 from "../assets/background2.png"
import { apiGetAllExperiences } from "../services/experiences.services";

function Experiences() {
  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const results = await apiGetAllExperiences()
        // console.log(results.data)
        setExperiences(results.data)

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
      {
            experiences.map((experiences, index) => (
              <div class="" key={index}>
                <h3 class="font-bold">{experiences.role}</h3>
                <p class="font-semibold">{experiences.company}</p>
                <p>{experiences.duration}</p>
                <p>{experiences.responsibilities}</p>
                <img src={experiences.logo} alt="logo image" />
              </div>
            ))
          }
      </div>
      </div>

      
      <Footer />
    </div>
  );
}

export default Experiences;
