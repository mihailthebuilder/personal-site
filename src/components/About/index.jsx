//import { useEffect, useState } from "react";
import "./About.scss";
import ProfileImage from "./ProfileImage.png";

const About = ({ typewriterText, startCompAnim }) => {
  /*
  const [showImage, setShowImage] = useState("slide-out");
  const [showDescription, setShowDescription] = useState("slide-out");
  const [showCompetencies, setShowCompetencies] = useState("slide-out");

 
  useEffect(() => {
    if (startCompAnim) {
      animation();
    }
  }, [startCompAnim]);
  const animation = async () => {
    setSlideAbout("slide-in");
    await sleep(200);
    setSlideProjects("slide-in");
    await sleep(200);
    setSlideContact("slide-in");
  };*/

  return (
    <section id="about">
      <div className="section-title">
        {typewriterText}
        <span className="typewriter-cursor">|</span>
      </div>
      <div className="about-content">
        <div className="about-description">
          <img className="about-image" src={ProfileImage} alt="Profile" />
          <div>
            <p>
              Hi, my name is Mihail and I'm a front-end developer who loves
              building UIs that work splendidly across all devices. I specialise
              in React web apps that are powered by Firebase backend services.
            </p>
            <p>
              I taught myself how to code without paying for any course, so I'm
              more than capable of learning any new, complex concepts on my own.
              My previous life in software sales has also made me great at
              teamwork and effective communication. Last but not least, I can
              understand product-market strategies very well, having worked on a
              number of startups.
            </p>
          </div>
        </div>
        <div className="competencies-title">COMPETENCIES</div>
      </div>
    </section>
  );
};

export default About;
