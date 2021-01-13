import fire from "../../resources/fire.js";
import { useState, useEffect } from "react";

import { ReactComponent as LeftArrow } from "./LeftArrow.svg";
import { ReactComponent as RightArrow } from "./RightArrow.svg";

import SectionTitle from "../SectionTitle";

import { sleep, startAnimationFunction } from "../../resources/functions.js";
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

  const [animationStep, setAnimationStep] = useState(0);
  useEffect(() => {
    const animation = async () => {
      startAnimationFunction(".project-image", setAnimationStep);
      await sleep(200);
      startAnimationFunction(".project-info>h2", setAnimationStep);
      startAnimationFunction(".project-description", setAnimationStep);
      await sleep(200);
      startAnimationFunction(".project-links", setAnimationStep);
      startAnimationFunction(".arrow-right", setAnimationStep);
    };

    if (startAnimations) {
      animation();
    }
  }, [startAnimations]);

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
      const loadImage = async () => {
        const project = projectList[projectIndex];

        fire
          .storage()
          .ref()
          .child(`img/${project.id}.png`)
          .getDownloadURL()
          .then((url) => {
            setFocusProject({ image_src: url, ...project });
          });
      };

      loadImage();
    }
  }, [projectIndex, projectList]);

  const getOlderProject = async () => {
    //setAnimationStep(0);
    //await sleep(200);
    setProjectIndex((previousValue) => previousValue + 1);
    //await sleep(500);
    //setAnimationStep(4);
  };

  const getNewerProject = async () => {
    //setAnimationStep(0);
    //await sleep(200);
    setProjectIndex((previousValue) => previousValue - 1);
    //await sleep(500);
    //setAnimationStep(4);
  };

  return (
    <section id="projects" className="section-styling">
      <SectionTitle text={typewriterText} />
      <div className="project-chooser">
        {projectIndex >= 1 ? (
          <button
            className={`arrow-left ${
              animationStep >= 4 ? "project-show" : "project-hide"
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
            animationStep >= 1 ? "project-show" : "project-hide"
          }`}
          src={focusProject.image_src}
          alt={focusProject.title}
        />

        {projectIndex <= projectList.length - 2 ? (
          <button
            className={`arrow-right ${
              animationStep >= 4 ? "project-show" : "project-hide"
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
              animationStep >= 2 ? "project-show" : "project-hide"
            }`}
          >
            {focusProject.title}
          </h2>
          <p
            className={`project-description ${
              animationStep >= 3 ? "project-show" : "project-hide"
            }`}
          >
            {focusProject.description}
          </p>
          <p
            className={`project-links ${
              animationStep >= 4 ? "project-show" : "project-hide"
            }`}
          >
            <a
              href={focusProject.website_link}
              rel="noreferrer"
              target="_blank"
            >
              Website
            </a>{" "}
            |{" "}
            <a href={focusProject.github_link} rel="noreferrer" target="_blank">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
