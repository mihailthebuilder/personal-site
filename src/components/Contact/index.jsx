import "./Contact.scss";
import SectionTitle from "../SectionTitle";
import Cat from "./Cat.gif";

const Contact = ({ typewriterText, startAnimations }) => {
  return (
    <section id="contact" className="section-styling">
      <SectionTitle text={typewriterText} />
      <img src={Cat} alt="Cat typing" />
      <h2>Want to chat? Feel welcome to send me a message via:</h2>
      <ul>
        <li>
          <a href="mailto:mihail.marian@woondering.com">EMAIL</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mihailmarian"
            rel="noreferrer"
            target="_blank"
          >
            LINKEDIN
          </a>
        </li>
        <li>
          <a
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
