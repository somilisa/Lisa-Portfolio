import React from "react";
import Hero from "./Components/Hero";
import Bio from "./Components/Bio";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // intersection observer otions
    let options = {
      root: null,
      rootMargin: "10px",
      threshold: 0.2,
    };

    // intersection observer callback function
    let callback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        console.log(entries);

        if (entry.isIntersecting) {
          entry.target.classList.add("project-container-animation");
          // observer.unobserve(targets);
        }
      });
    };

    // new intersection observer
    let observer = new IntersectionObserver(callback, options);
    // element being observed
    let targets = document.querySelectorAll(".project-container");
    targets.forEach((target) => {
      observer.observe(target!);
    });
  });
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
