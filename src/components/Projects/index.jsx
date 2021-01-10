import fire from "../../resources/fire.js";
import { useState, useEffect } from "react";

import "./Projects.scss";

const Projects = ({ typewriterText, startAnimations }) => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [projectList, setProjectList] = useState([]);
  const [focusProject, setFocusProject] = useState({
    id: "",
    image_src: "",
    description: "",
    title: "",
    website_link: "",
    github_link: "",
  });

  useEffect(() => {
    fire
      .firestore()
      .collection("projects")
      .orderBy("publication_date", "desc")
      .get()
      .then((querySnapshot) => {
        let newProjectList = [];
        querySnapshot.forEach((doc) => {
          const project = { id: doc.id, ...doc.data() };
          newProjectList = newProjectList.concat(project);
        });
        setProjectList(newProjectList);
      });
  }, []);

  useEffect(() => {
    if (projectList.length > 0) {
      const project = projectList[projectIndex];
      const imageSrc = fire.storage().ref(`img/${project.id}.png`);
      setFocusProject({ image_src: imageSrc, ...project });
    }
  }, [projectIndex, projectList]);

  useEffect(() => {
    console.log(focusProject);
  }, [focusProject]);

  return (
    <section id="projects" className="section-padding">
      <div className="section-title">
        {typewriterText}
        <span className="typewriter-cursor">|</span>
      </div>
      <div className="project-chooser">
        <img src={focusProject.image_src} alt="Project" />
      </div>
    </section>
  );
};

export default Projects;
