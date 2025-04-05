import React from "react";
import "./style.scss";
import Project from "../Project";
import ToDo from "../../Assets/ToDo-App.png";
import Wordle from "../../Assets/Wordle.png";
import Coffetto from "../../Assets/Coffetto(2).png";
import Nexeri from "../../Assets/Nexeri(2).png";
import GoFoodsNG from "../../Assets/GoFoodsNG(2).png";
import blackBg from "../../Assets/Black-bg.svg";
import One from "../../Assets/01.svg";
import Two from "../../Assets/02.svg";
import Three from "../../Assets/03.svg";
import Four from "../../Assets/04.svg";

function Projects() {
  return (
    <section className="container">
      <img src={blackBg} alt="black squares" className="top-bg" />
      <div className="projects-container">
        <Project
          numberImg={Four}
          title="Wordle Clone"
          description="A fully responsive Wordle-inspired game in React.js, featuring real-time feedback, state-managed guess tracking, and optimized game logic for a seamless user experience."
          imageUrl={Wordle}
          imageAlt="A wordle clone"
          previewLink="https://wordle-clone-wheat-nine.vercel.app/"
          deploymentLink="https://github.com/somilisa/Wordle-Clone"
        />
        <Project
          numberImg={Three}
          title="Coffetto"
          description="A responsive landing page for Coffetto; a coffee company built with React and Typescript "
          imageUrl={Coffetto}
          imageAlt="Coffetto Landing Page"
          previewLink="https://coffee-app-mu.vercel.app/"
          deploymentLink="https://github.com/somilisa/coffee-app"
        />
        <Project
          numberImg={Two}
          title="Nexeri"
          description="A blog built with nextJS, typescript and integrated with contentful CMS"
          imageUrl={Nexeri}
          imageAlt="Screenshot of Nexeri"
          previewLink="https://nextjs-contentful-blog-beta.vercel.app/"
          deploymentLink="https://github.com/somilisa/nextjs-contentful-blog"
        />
        <Project
          numberImg={One}
          title="GoFoodsNG"
          description="GoFoodsNG is a restaurant listing website that allows people to discover, get details about, and leave ratings or reviews on restaurants in an area of their choice."
          imageUrl={GoFoodsNG}
          imageAlt="Screenshot of GoFoodsNG"
          previewLink="https://go-foods-ng.vercel.app/"
          deploymentLink="https://github.com/somilisa/GoFoodsNG"
        />
      </div>
      <img src={blackBg} alt="black squares" className="bottom-bg" />
    </section>
  );
}

export default Projects;
