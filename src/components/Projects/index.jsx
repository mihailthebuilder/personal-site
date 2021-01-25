import fire from "../../resources/fire.js";
import { useState, useEffect } from "react";

import { ReactComponent as LeftArrow } from "./LeftArrow.svg";
import { ReactComponent as RightArrow } from "./RightArrow.svg";

import SectionTitle from "../SectionTitle";

import { sleep, startAnimationFunction } from "../../resources/functions.js";
import "./Projects.scss";

const Projects = ({ typewriterText, startAnimations }) => {
  const [projectList, setProjectList] = useState([]);
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
      })
      .catch((error) => {
        console.log("Error getting project data", error);
      });
  }, []);

  const [animationStep, setAnimationStep] = useState(0);
  useEffect(() => {
    if (startAnimations && projectList.length > 0) {
      const animation = async () => {
        startAnimationFunction(".project-image", setAnimationStep);
        await sleep(200);
        startAnimationFunction(".arrow-right", setAnimationStep);
        startAnimationFunction(".project-info>h2", setAnimationStep);
        startAnimationFunction(".project-description", setAnimationStep);
        await sleep(200);
        startAnimationFunction(".project-links", setAnimationStep);
      };

      animation();
    }
  }, [startAnimations, projectList]);

  const [focusProject, setFocusProject] = useState({
    id: "",
    image_src: "",
    description: "",
    title: "",
    website_link: "",
    github_link: "",
  });
  const [projectIndex, setProjectIndex] = useState(0);
  useEffect(() => {
    if (projectList.length > 0) {
      const project = projectList[projectIndex];

      fire
        .storage()
        .ref()
        .child(`img/${project.id}.png`)
        .getDownloadURL()
        .then((url) => {
          setFocusProject({ image_src: url, ...project });
        })
        .catch((error) => {
          console.log("Error getting image: ", error);
        });
    }
  }, [projectIndex, projectList]);

  const [newProjectLoad, setNewProjectLoad] = useState(false);
  const imageLoaded = () => {
    setNewProjectLoad(false);
  };

  const getOlderProject = async () => {
    setNewProjectLoad(true);
    await sleep(200);
    setProjectIndex((previousValue) => {
      if (previousValue < projectList.length - 1) {
        return previousValue + 1;
      } else {
        return previousValue;
      }
    });
  };

  const getNewerProject = async () => {
    setNewProjectLoad(true);
    await sleep(200);
    setProjectIndex((previousValue) => {
      if (previousValue > 0) {
        return previousValue - 1;
      } else {
        return previousValue;
      }
    });
  };

  return (
    <section id="projects" className="section-styling">
      <SectionTitle text={typewriterText} />
      <div className="project-chooser">
        {projectIndex >= 1 ? (
          <button
            className={`arrow-left ${
              animationStep >= 2 && !newProjectLoad
                ? "project-show"
                : "project-hide"
            }`}
            onClick={getNewerProject}
          >
            <LeftArrow />
          </button>
        ) : (
          <div className="arrow-left"></div>
        )}
        <img
          className={`project-image ${
            animationStep >= 1 && !newProjectLoad
              ? "project-show"
              : "project-hide"
          }`}
          src={focusProject.image_src}
          alt={focusProject.title}
          onLoad={imageLoaded}
        />

        {projectIndex <= projectList.length - 2 ? (
          <button
            className={`arrow-right ${
              animationStep >= 2 && !newProjectLoad
                ? "project-show"
                : "project-hide"
            }`}
            onClick={getOlderProject}
          >
            <RightArrow />
          </button>
        ) : (
          <div className="arrow-right"></div>
        )}
        <div className="project-info">
          <h2
            className={`${
              animationStep >= 3 && !newProjectLoad
                ? "project-show"
                : "project-hide"
            }`}
          >
            {focusProject.title}
          </h2>
          <p
            className={`project-description ${
              animationStep >= 4 && !newProjectLoad
                ? "project-show"
                : "project-hide"
            }`}
          >
            {focusProject.description}
          </p>
          <p
            className={`project-links ${
              animationStep >= 5 && !newProjectLoad
                ? "project-show"
                : "project-hide"
            }`}
          >
            {"website_link" in focusProject && (
              <span>
                <a
                  href={focusProject.website_link}
                  rel="noreferrer"
                  target="_blank"
                >
                  Website
                </a>{" "}
                |
              </span>
            )}
            {"github_link" in focusProject && (
              <span>
                {" "}
                <a
                  href={focusProject.github_link}
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
