import { useEffect, useState } from "react";
import { sleep } from "../../resources/functions.js";
import "./About.scss";
import ProfileImage from "./ProfileImage.png";

const About = ({ typewriterText, startAnimations }) => {
  const [showImage, setShowImage] = useState("fade-out");
  const [showDescription, setShowDescription] = useState("fade-out");
  const [showCompetenciesTitle, setShowCompetenciesTitle] = useState(
    "fade-out"
  );
  const [showCompetenciesContent, setShowCompetenciesContent] = useState(
    "fade-out"
  );

  useEffect(() => {
    if (startAnimations) {
      animation();
    }
  }, [startAnimations]);

  const animation = async () => {
    setShowImage("fade-in");
    await sleep(400);
    setShowDescription("fade-in");
    await sleep(400);
    setShowCompetenciesTitle("fade-in");
    await sleep(400);
    setShowCompetenciesContent("fade-in");
  };

  return (
    <section id="about">
      <div className="section-title">
        {typewriterText}
        <span className="typewriter-cursor">|</span>
      </div>
      <div className="about-content">
        <div className="about-description">
          <img
            className={`about-image ${showImage}`}
            src={ProfileImage}
            alt="Profile"
          />
          <div className={showDescription}>
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
          <div className={`competencies-title ${showCompetenciesTitle}`}>
            Competencies
          </div>
          <div className={showCompetenciesContent}>
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
