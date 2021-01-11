import "./Contact.scss";
import SectionTitle from "../SectionTitle";
import Cat from "./Cat.gif";

import { useEffect, useState } from "react";
import { sleep, startAnimationFunction } from "../../resources/functions.js";

const Contact = ({ typewriterText, startAnimations }) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const animation = async () => {
      startAnimationFunction("#contact>img", setAnimationStep);
      await sleep(400);
      startAnimationFunction("#contact>h2", setAnimationStep);
      await sleep(400);
      startAnimationFunction("#contact li:nth-of-type(1)>a", setAnimationStep);
      startAnimationFunction("#contact li:nth-of-type(2)>a", setAnimationStep);
      startAnimationFunction("#contact li:nth-of-type(3)>a", setAnimationStep);
    };

    if (startAnimations) {
      animation();
    }
  }, [startAnimations]);

  return (
    <section id="contact" className="section-styling">
      <SectionTitle text={typewriterText} />
      <img
        className={animationStep >= 1 ? "" : "contact-hide"}
        src={Cat}
        alt="Cat typing"
      />
      <h2 className={animationStep >= 2 ? "" : "contact-hide"}>
        Want to chat? Feel welcome to send me a message via:
      </h2>
      <ul>
        <li>
          <a
            className={animationStep >= 3 ? "" : "contact-hide"}
            href="mailto:mihail.marian@woondering.com"
          >
            EMAIL
          </a>
        </li>
        <li>
          <a
            className={animationStep >= 4 ? "" : "contact-hide"}
            href="https://www.linkedin.com/in/mihailmarian"
            rel="noreferrer"
            target="_blank"
          >
            LINKEDIN
          </a>
        </li>
        <li>
          <a
            className={animationStep >= 5 ? "" : "contact-hide"}
            href="https://github.com/mihailthebuilder"
            rel="noreferrer"
            target="_blank"
          >
            GITHUB
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
