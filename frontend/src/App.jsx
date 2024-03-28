import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experiences from "./pages/Experiences"
import Blogs from "./pages/Blogs";
import Achievements from "./pages/Achievements";

import Projects from "./pages/Projects"
import "./App.css"

import Projects from "./pages/Projects";
import "./App.css";


function App() {
  // const isAboveMediumScreens =useMediaQuery("(min-width:1060px)");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/experiences" element={<Experiences />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/achievements" element={<Achievements />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
