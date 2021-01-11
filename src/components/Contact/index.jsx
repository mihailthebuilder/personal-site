import "./Contact.scss";
import SectionTitle from "../SectionTitle";

const Contact = ({ typewriterText, startAnimations }) => {
  return (
    <section id="contact" className="section-styling">
      <SectionTitle text={typewriterText} />
    </section>
  );
};

export default Contact;
