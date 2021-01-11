import "./SectionTitle.scss";

const SectionTitle = ({ text }) => {
  return (
    <div className="section-title">
      {text}
      <span className="typewriter-cursor">|</span>
    </div>
  );
};

export default SectionTitle;
