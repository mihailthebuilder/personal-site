import "./Landing.scss";
import TypedText from "../TypedText";
import { useState } from "react";

const Landing = () => {
  const [showLinks, setShowLinks] = useState(false);

  useEffect();

  return (
    <header className="main-header">
      <div className="landing-title-wrapper">
        <div className="landing-title-name">MIHAIL MARIAN,</div>
        <div className="landing-title-role">
          <TypedText text="FRONT-END DEVELOPER." />
        </div>
      </div>
      <nav>
        {showLinks && (
          <ul>
            <li>ABOUT</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Landing;
