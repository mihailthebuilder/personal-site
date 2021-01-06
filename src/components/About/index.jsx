import "./About.scss";

const About = ({ typewriterText, startCompAnim }) => {
  console.log(typewriterText);

  return (
    <section id="about">
      <div className="section-title">
        {typewriterText}
        <span className="typewriter-cursor">|</span>
      </div>
    </section>
  );
};

export default About;
