import "./Landing.scss";

const Landing = ({ typewriterText, opacity }) => {
  return (
    <section id="landing-section">
      <div className="landing-title-wrapper">
        <div className="landing-title-name">MIHAIL MARIAN,</div>
        <div className="landing-title-role">
          <span>{typewriterText}</span>
          <span className="typewriter-cursor">|</span>
        </div>
      </div>
      <nav>
        <ul className={opacity}>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </section>
  );
};

export default Landing;
