import React from "react";
import Hero from "./Components/Hero";
import Bio from "./Components/Bio";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <Bio />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
