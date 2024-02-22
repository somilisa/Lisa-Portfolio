import React from "react";
import Hero from "./Components/Hero";
import Intro from "./Components/Bio";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <Intro />
      {/* <Skills />
      <Projects />
      <Footer /> */}
    </div>
  );
}

export default App;
