import React from "react"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import image from "../assets/grouppic.png"
function About() {
  return (
    // use a type writer effect for (Hey There, we are team Arab Money on the picture we are about to use for )
    
    <div>
      <Header />
      <section className="flex flex-wrap "> 
        <div  style={{
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: 700, 
      width: '100%',
      position: 'relative'
    }} />
    <div className="absolute top-0 left-0">
      <h1 >Hey There,<br/>We are Arab Money</h1>
      </div>
      </section>
     
      <section
        style={{ fontFamily: "Manrope, sans-serif" }}
        className="container mx-auto px-4 lg:px-8 py-8"
      >
        <h1 className="text-3x1 font-bold mb-4">About AM Agency</h1>
        <div className="bg-white shadow-md rounded-lg p-6"></div>
        <p className="text-lg mb-4">
          Welcome to Arab Money, a powerhouse team of four passionate web
          developers dedicated to crafting extraordinary digital experiences.
          With a shared love for innovation and a commitment to excellence, we
          bring a wealth of expertise and creativity to every project we
          undertake. Our journey began with a vision to redefine web
          development, blending cutting-edge technologies with timeless design
          principles. As a team, we thrive on challenges, pushing boundaries to
          deliver solutions that not only meet but exceed expectations. At Arab
          Money, we understand the value of collaboration. Each member brings a
          unique set of skills and perspectives, allowing us to approach
          projects from multiple angles and deliver holistic, tailored
          solutions. From dynamic websites to robust web applications, we have
          the knowledge and experience to bring your ideas to life.
          <br />
          Our mission is simple: to empower businesses and individuals alike
          with the tools they need to succeed in the digital world. Whether
          you're looking to create a stunning online presence or streamline your
          processes with custom web solutions, Arab Money is here to turn your
          vision into reality.
          <br />
          Join us on this exciting journey and discover the endless
          possibilities of web development with Arab Money.
        </p>

        <h2>Test</h2>
      </section>
      <Footer />
    </div>
  );
}

<section></section>

export default About;
