import "./Landing.scss";
import { useState, useEffect } from "react";
import { sleep } from "../../resources/functions.js";

const Landing = ({ typewriterText, startCompAnim }) => {
  const [slideAbout, setSlideAbout] = useState("slide-out");
  const [slideProjects, setSlideProjects] = useState("slide-out");
  const [slideContact, setSlideContact] = useState("slide-out");

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
  };

  return (
    <section id="landing">
      <div className="landing-title-wrapper">
        <div className="landing-title-name">MIHAIL MARIAN,</div>
        <div className="landing-title-role">
          <span>{typewriterText}</span>
          <span className="typewriter-cursor">|</span>
        </div>
      </div>
      <nav>
        <ul>
          <li className={slideAbout}>ABOUT</li>
          <li className={slideProjects}>PROJECTS</li>
          <li className={slideContact}>CONTACT</li>
        </ul>
      </nav>
    </section>
  );
};

export default Landing;
