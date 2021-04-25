import { useEffect, useState } from "react";
import { sleep, startAnimationFunction } from "../../resources/functions.js";
import "./About.scss";
import ProfileImage from "./ProfileImage.png";
import SectionTitle from "../SectionTitle";

const About = ({ typewriterText, startAnimations }) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const animation = async () => {
      startAnimationFunction(".about-description>img", setAnimationStep);
      startAnimationFunction(".about-description>div", setAnimationStep);
      await sleep(200);
      startAnimationFunction(".competencies-container>h2", setAnimationStep);
      startAnimationFunction(".competencies-container>div", setAnimationStep);
    };

    if (startAnimations) {
      animation();
    }
  }, [startAnimations]);

  return (
    <section id="about" className="section-styling">
      <SectionTitle text={typewriterText} />

      <div className="about-content">
        <div className="about-description">
          <img
            className={animationStep >= 1 ? "" : "about-hide"}
            src={ProfileImage}
            alt="Profile"
          />
          <div className={animationStep >= 2 ? "" : "about-hide"}>
            <p>
              Hi there! My name is Mihail and I'm a Full-Stack Web Developer who
              loves building things in React, Meteor and Django. I currently
              work at{" "}
              <a
                className="small-link"
                href="https://connect4.app/"
                target="_blank"
                rel="noreferrer"
              >
                Connect4
              </a>{" "}
              , a B2B SaaS startup that wants to take online client meetings to
              another level.
            </p>
            <p>
              I taught myself how to code, so it's safe to say that I can learn
              any new, complex concepts on my own. My previous life in software
              sales has also made me great at teamwork and effective
              communication. Last but not least, I'm great at analysing
              product-market strategies, having worked on a number of startups
              myself.
            </p>
            <p>
              I love talking about anything at the intersection of business and
              tech, so{" "}
              <a className="small-link" href="#contact">
                send me a message
              </a>{" "}
              if you have a project in mind! At worst, I'll try to point you in
              the right direction. And at best, I might just help you build it
              :)
            </p>
          </div>
        </div>
        <div className="competencies-container">
          <h2 className={animationStep >= 3 ? "" : "about-hide"}>
            Competencies
          </h2>
          <div className={animationStep >= 4 ? "" : "about-hide"}>
            <div>
              <h3>Front-end</h3>
              <p>
                React, Styled Components, Sass, jQuery, BlazeJS, Bootstrap,
                Webpack
              </p>
            </div>
            <div>
              <h3>Back-end</h3>
              <p>Python, Django, Meteor, MongoDB, Firebase, Heroku, SQL</p>
            </div>
            <div>
              <h3>Other</h3>
              <p>
                Jest, Selenium, Cypress, Mocha, Sentry, LogDNA, Figma, Webflow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
