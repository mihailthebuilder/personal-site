import "./Landing.scss";
import { useState, useEffect } from "react";
import { sleep, startAnimationFunction } from "../../resources/functions.js";

const Landing = ({ typewriterText, startAnimations }) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const animation = async () => {
      startAnimationFunction("#landing li:nth-of-type(1)", setAnimationStep);
      await sleep(200);
      startAnimationFunction("#landing li:nth-of-type(2)", setAnimationStep);
      await sleep(200);
      startAnimationFunction("#landing li:nth-of-type(3)", setAnimationStep);
    };

    if (startAnimations) {
      animation();
    }
  }, [startAnimations]);

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
          <li className={animationStep < 1 ? "slide-out" : ""}>
            <a href="#about">ABOUT</a>
          </li>
          <li className={animationStep < 2 ? "slide-out" : ""}>
            <a href="#projects">PROJECTS</a>
          </li>
          <li className={animationStep < 3 ? "slide-out" : ""}>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Landing;
