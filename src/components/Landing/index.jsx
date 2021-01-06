import "./Landing.scss";
import TypedText from "../TypedText";

const Landing = () => {
  return (
    <header className="main-header">
      <div className="landing-title-wrapper">
        <div className="landing-title-name">MIHAIL MARIAN,</div>
        <div className="landing-title-role">
          <TypedText text="FRONT-END DEVELOPER." />
        </div>
      </div>
      <nav>
        <ul>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
};

export default Landing;
