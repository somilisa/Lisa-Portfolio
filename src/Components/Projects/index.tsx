import React from "react";
import "./style.scss";
import Project from "../Project";
import ToDo from "../../Assets/ToDo-App.png";
import Coffetto from "../../Assets/Coffetto(2).png";
import Nexeri from "../../Assets/Nexeri(2).png";
import GoFoodsNG from "../../Assets/GoFoodsNG(2).png";
import blackBg from "../../Assets/Black-bg.svg";
import One from "../../Assets/01.svg";

function Projects() {
  return (
    <section>
      <img src={blackBg} alt="black squares" className="top-bg" />
      <div className="projects-container">
        <Project
          numberImg={One}
          title="To-do App"
          description="A crud application that provides a clean and intuitive user interface for managing daily tasks."
          imageUrl={ToDo}
          imageAlt="A to-do list web app"
          link="https://github.com/somilisa/ToDo-App"
        />
        <Project
          numberImg={One}
          title="Coffetto"
          description="A responsive landing page for Coffetto; a coffee company built with React and Typescript "
          imageUrl={Coffetto}
          imageAlt="Coffetto Landing Page"
          link="https://github.com/somilisa/coffee-app"
        />
        <Project
          numberImg={One}
          title="Nexeri"
          description="A blog built with nextJS, typescript and integrated with contentful CMS"
          imageUrl={Nexeri}
          imageAlt="Screenshot of Nexeri"
          link="https://github.com/somilisa/nextjs-contentful-blog"
        />
        <Project
          numberImg={One}
          title="GoFoodsNG"
          description="GoFoodsNG is a restaurant listing website that allows people to discover, get details about, and leave ratings or reviews on restaurants in an area of their choice."
          imageUrl={GoFoodsNG}
          imageAlt="Screenshot of GoFoodsNG"
          link="https://github.com/somilisa/GoFoodsNG"
        />
      </div>
      <img src={blackBg} alt="black squares" className="bottom-bg" />
    </section>
  );
}

export default Projects;
