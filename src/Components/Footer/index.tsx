import React from "react";
import "./style.scss";
import footerImg from "../../Assets/footer-img.png";

function Footer() {
  return (
    <section className="black-section">
      <div className=" content footer-content">
        <h3>let’s work together!</h3>
        <div className="footer-img">
          <img src={footerImg} alt="coworkers" />
        </div>
        <div className="contact">
          <div className="contact-name">
            <p>Lisa Okafor</p>
            <a href="mailto: somilisa1010@gmail.com" className="link-underline">
              somilisa1010@gmail.com
            </a>
          </div>

          <ul className="contact-links">
            <li>
              <a href="https://github.com/somilisa" className="link-underline">
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/_somilisa/status/1337293246138101761?s=21"
                className="link-underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lisa-okafor-810a1321"
                className="link-underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="contact-form">
          <form action="post">
            <input
              type="text"
              className="half"
              name="name"
              placeholder="Name"
            />
            <input
              type="email"
              className="half"
              name="email"
              placeholder="Email"
            />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea
              name="message"
              id="message"
              rows={5}
              cols={30}
              placeholder="Message"
            ></textarea>
            <input type="button" value="Send" />
          </form>
        </div> */}
      </div>
    </section>
  );
}

export default Footer;
