import fire from "../../resources/fire.js";
import { useState, useEffect } from "react";

import { ReactComponent as LeftArrow } from "./LeftArrow.svg";
import { ReactComponent as RightArrow } from "./RightArrow.svg";

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

  const getOlderProject = () => {
    setProjectIndex((previousValue) => previousValue + 1);
  };

  const getNewerProject = () => {
    setProjectIndex((previousValue) => previousValue - 1);
  };

  return (
    <section id="projects" className="section-styling">
      <div className="section-title">
        {typewriterText}
        <span className="typewriter-cursor">|</span>
      </div>
      <div className="project-chooser">
        {projectIndex >= 1 ? (
          <button onClick={getNewerProject}>
            <LeftArrow />
          </button>
        ) : (
          <div></div>
        )}
        <div
          className="project-image"
          style={{ backgroundImage: `url(${focusProject.image_src})` }}
        >
          <div className="project-links-wrapper">
            <a href={focusProject.website_link}>
              <h3>Website</h3>
            </a>
            <a href={focusProject.github_link}>
              <h3>GitHub</h3>
            </a>
          </div>
        </div>
        {projectIndex <= projectList.length - 2 ? (
          <button onClick={getOlderProject}>
            <RightArrow />
          </button>
        ) : (
          <div></div>
        )}
        <div></div>
        <div className="project-info">
          <h2>{focusProject.title}</h2>
          <p>{focusProject.description}</p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Projects;
