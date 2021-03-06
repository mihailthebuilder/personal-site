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
              Hi, my name is Mihail and I'm a Full-Stack Web Developer who loves
              working on the weird and wonderful. I'm currently building things
              in React, Meteor and Django.
            </p>
            <p>
              I taught myself how to code, so it's safe to say that I can learn
              any new, complex concepts on my own. My previous life in software
              sales has also made me great at teamwork and effective
              communication. Last but not least, I can understand product-market
              strategies very well, having worked on a number of B2B and B2C
              startups.
            </p>
          </div>
        </div>
        <div className="competencies-container">
          <h2 className={animationStep >= 3 ? "" : "about-hide"}>
            Competencies
          </h2>
          <div className={animationStep >= 4 ? "" : "about-hide"}>
            <div>
              <h3>Languages & Frameworks</h3>
              <p>
                JavaScript, React, Meteor, Python, Django, jQuery, HTML, CSS,
                Sass, Bootstrap 4, SQL
              </p>
            </div>
            <div>
              <h3>Dev Tools & Software</h3>
              <p>
                Heroku, Firebase, Git, GitHub, GitHub Pages, NPM, Webpack,
                Visual Studio Code, Figma, Webflow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
