import React from "react";
import "./style.scss";
import blackBg from "../../Assets/Black-bg.svg";

function Bio() {
  return (
    <section className="bio-container">
      <img src={blackBg} alt="black-sqaures" className="top-bg" />
      <div className="bio-content">
        <h3 className="bio-header">Welcome to my corner of the internet!</h3>
        <p>
          Hi, I am Lisa Okafor. I make visually appealing functional user
          interface for the web by implementing design elements. And I’ve been
          at it for 3 years. I am constantly learning more about  web design
          trends and responsive design techniques to create engaging and
          accessible websites. I’m not just a developer, I provide brilliant
          solutions that elevate user experiences.
        </p>
      </div>
      <img src={blackBg} alt="black-sqaures" className="bottom-bg" />
    </section>
  );
}

export default Bio;
