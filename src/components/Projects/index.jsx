import fire from "../../resources/fire.js";
import { useEffect } from "react";

import "./Projects.scss";

const Projects = ({ typewriterText, startAnimations }) => {
  useEffect(() => {
    fire
      .firestore()
      .collection("testing")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
        });
      });
  }, []);

  return (
    <section id="projects" className="section-padding">
      <div className="section-title">
        {typewriterText}
        <span className="typewriter-cursor">|</span>
      </div>
    </section>
  );
};

export default Projects;
