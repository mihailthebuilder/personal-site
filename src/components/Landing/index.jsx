import "./Landing.scss";
import { sleep } from "../../resources/functions.js";
import { useState, useEffect } from "react";

const Landing = () => {
  const [navOpacity, setNavOpacity] = useState("nav-hide");

  const [{ content, carriage }, setContent] = useState({
    content: "",
    carriage: 0,
  });

  useEffect(() => {
    let renderedText = "FRONT-END DEVELOPER. ";

    if (carriage === renderedText.length) {
      setTimeout(() => {
        setNavOpacity("nav-show");
      }, 300);

      return;
    }
    const delay = setTimeout(async () => {
      if (content === "") {
        await sleep(2000);
      }
      setContent({
        content: content + renderedText[carriage],
        carriage: carriage + 1,
      });
      clearTimeout(delay);
    }, 70);
  }, [content, carriage]);

  return (
    <header className="main-header">
      <div className="landing-title-wrapper">
        <div className="landing-title-name">MIHAIL MARIAN,</div>
        <div className="landing-title-role">
          <span>{content}</span>
          <span className="typewriter-cursor">|</span>
        </div>
      </div>
      <nav>
        <ul className={navOpacity}>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
};

export default Landing;
