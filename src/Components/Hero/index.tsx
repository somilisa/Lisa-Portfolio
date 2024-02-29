import React from "react";
import background from "../../Assets/Hero-bg.svg";
import "./style.scss";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section className="black-section">
      <div className=" content hero-content">
        <div className="hero-bg">
          <img src={background} alt="background svg" />
        </div>
        <header>
          <div>
            <h2>Hi,I’m Lisa</h2>
          </div>
          <span>
            {/* <Typewriter
              options={{
                strings: ["Frontend Developer"],
                autoStart: true,
                loop: false,
              }}
            /> */}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello World!")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .callFunction(() => {
                    console.log("All strings were deleted");
                    const cursor = document.querySelector(
                      ".Typewriter__cursor"
                    );
                    cursor?.setAttribute("style", "display:none");
                  })
                  .start();
              }}
            />
          </span>
        </header>
        <div className="contact-name">
          <p>Lisa Okafor</p>
          <a href="mailto: somilisa1010@gmail.com">somilisa1010@gmail.com</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
