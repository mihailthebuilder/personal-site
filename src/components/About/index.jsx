import { useEffect, useState } from "react";
import { sleep, startAnimationFunction } from "../../resources/functions.js";
import "./About.scss";
import ProfileImage from "./ProfileImage.png";

const About = ({ typewriterText, startAnimations }) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const animation = async () => {
      startAnimationFunction(".about-image", setAnimationStep);
      await sleep(400);
      startAnimationFunction(".about-description>div", setAnimationStep);
      await sleep(400);
      startAnimationFunction(".competencies-title", setAnimationStep);
      await sleep(400);
      startAnimationFunction(".competencies-detail", setAnimationStep);
    };

    if (startAnimations) {
      animation();
    }
  }, [startAnimations]);

  return (
    <section id="about" className="section-padding">
      <div className="section-title">
        {typewriterText}
        <span className="typewriter-cursor">|</span>
      </div>
      <div className="about-content">
        <div className="about-description">
          <img
            className={`about-image ${
              animationStep >= 1 ? "fade-in" : "fade-out"
            }`}
            src={ProfileImage}
            alt="Profile"
          />
          <div className={animationStep >= 2 ? "fade-in" : "fade-out"}>
            <p>
              Hi, my name is Mihail and I'm a front-end developer who loves
              building UIs that work splendidly across all devices. I specialise
              in React web apps that are powered by Firebase backend services.
            </p>
            <p>
              I taught myself how to code without paying for any course, so it's
              safe to say that I can learn any new, complex concepts on my own.
              My previous life in software sales has also made me great at
              teamwork and effective communication. Last but not least, I can
              understand product-market strategies very well, having worked on a
              number of B2B and B2C startups.
            </p>
          </div>
        </div>
        <div className="competencies-container">
          <div
            className={`competencies-title ${
              animationStep >= 3 ? "fade-in" : "fade-out"
            }`}
          >
            Competencies
          </div>
          <div
            className={`competencies-detail ${
              animationStep >= 4 ? "fade-in" : "fade-out"
            }`}
          >
            <div>
              <h3>Languages & Frameworks</h3>
              <p>
                JavaScript, React, jQuery, HTML, CSS, Sass, Bootstrap 4, SQL
              </p>
            </div>
            <div>
              <h3>Dev Tools & Software</h3>
              <p>
                Firebase, Git, GitHub, GitHub Pages, NPM, Webpack, Visual Studio
                Code, Figma, Webflow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
