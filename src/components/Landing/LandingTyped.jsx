import "./Landing.scss";

const LandingTyped = ({ typewriterText }) => {
  return (
    <div className="landing-title-wrapper">
      <div className="landing-title-name">MIHAIL MARIAN,</div>
      <div className="landing-title-role">
        <span>{typewriterText}</span>
        <span className="typewriter-cursor">|</span>
      </div>
    </div>
  );
};

export default LandingTyped;
