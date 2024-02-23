import React from "react";
import background from "../../Assets/Hero-bg.svg";
import "./style.scss";

function Hero() {
  return (
    <section className="black-section">
      <div className="hero-content">
        <div className="hero-bg">
          <img src={background} alt="background svg" />
        </div>
        <header>
          <div>
            <h2>Hi,I’m Lisa</h2>
          </div>
          <p>Frontend Developer</p>
        </header>
        <div className="contact-info">
          <p>Lisa Okafor</p>
          <a href="mailto: somilisa1010@gmail.com">somilisa1010@gmail.com</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
