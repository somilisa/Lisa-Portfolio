import React from "react";
import "./style.scss";
import whiteBg from "../../Assets/White-bg.svg";
import HTML from "../../Assets/icon-html.svg";
import CSS from "../../Assets/icon-css.svg";
import JS from "../../Assets/icon-javascript.svg";
import TS from "../../Assets/icon-typescript.svg";
import react from "../../Assets/icon-react.svg";
import Next from "../../Assets/icon-nextjs.svg";

function Skills() {
  return (
    <section className="black-section">
      <img src={whiteBg} alt="white-squares" className="top-bg" />
      <div className="skills">
        <h3 className="h3-margin-bottom">Skills</h3>
        <ul className="skills-list">
          <li>
            <img src={HTML} alt="" />
            <p>HTML</p>
          </li>
          <li>
            <img src={CSS} alt="" />
            <p>(S)CSS</p>
          </li>
          <li>
            <img src={JS} alt="" />
            <p>Javascript</p>
          </li>
          <li>
            <img src={react} alt="" />
            <p>React</p>
          </li>
          <li>
            <img src={TS} alt="" />
            <p>Typescript</p>
          </li>
          <li>
            <img src={Next} alt="" />
            <p>NextJS</p>
          </li>
        </ul>
      </div>
      <img src={whiteBg} alt="black-squares" className="bottom-bg" />
    </section>
  );
}

export default Skills;
