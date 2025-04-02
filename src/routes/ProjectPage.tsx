import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {useParams} from "react-router-dom";
import { Project } from "../types";
import ProjectGallery from "../components/ProjectGallery";
import './ProjectPage.css'
import { SiGithub } from "react-icons/si";
import {Code2, FileText} from 'lucide-react';
import { setFavicon, setTitle } from "../funcs";
import Favicon from "../resources/images/documenticon.png";

{/*This page will display a single project based on the url*/}
{/*The project will be loaded from the projects.json file in the GitHub repository*/}
{/*For reference: react-icons and lucide links:  https://react-icons.github.io/react-icons/icons/si/ https://lucide.dev/icons/*/}

const ProjectPage = () => {

  let params = useParams();
  //console.log(params);

  setFavicon(Favicon);

  //const [projects, setProjects] = useState<Project[]>([]);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const loadProjects = async () => {
    const response = await fetch('https://raw.githubusercontent.com/andrewkozinski/andrewkozinski.github.io/main/projects.json');
    const data = await response.json();
    //console.log(data);
    //setProjects(data); 

    //Find the project with the name that matches the url
    let project = data.find((project: Project) => project.pageName === params.projname);
    if (project === undefined) {//If the project is not found, log an error and return
      console.error("Project not found");
      return;
    }
    setCurrentProject(project);
    setTitle(project.title + " - Andrew Kozinski");
  }

  useEffect(() => {
    //Load projects from the JSON in the GitHub repository
    //and find the project that matches the url
    loadProjects().catch(console.error);
  }, []);

  return (
    <>
        <Navbar/>
        <div className="main-body" id="main-body">
            
            <div className="info-tab" style={{ paddingTop: "35px" }}>

                    {currentProject === null ? <p>Loading...</p> :
                    
                    <>
                    
                      <div className="upper-tab" id="aboutMe">
                          <p>{currentProject?.title}</p>
                      </div>
                      <div className="inner-tab background ">
                          <ProjectGallery images={currentProject.projImg} />
                      </div> 
                      

                      <h1 className="project-title">
                        {currentProject?.title}
                        {currentProject?.projLink !== "EMPTY" && (
                          <a href={currentProject.projLink} target="_blank" rel="noopener noreferrer" className="github-link">
                            <SiGithub size={24} style={{ marginLeft: '10px' }} />
                          </a>
                        )}
                      </h1>

                      <div className="project-details-container">
                        <h2>
                          <FileText style={{ marginRight: '8px' }} />
                          Project Description
                        </h2>
                        <p>
                          {currentProject?.projDescription.split('\n').map((line, index) => (
                            <span key={index}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </p>
                      </div>

                      <div className="project-details-container">
                        <h2>
                          <Code2 style={{ marginRight: '8px' }} />
                          Technologies Used
                        </h2>
                        <div className="tech-list">
                          {currentProject?.technologyList.map((tech, index) => (
                            <span key={index} className="tech-item">{tech}</span>
                          ))}
                        </div>
                      </div>

                    </>

                    }

            </div> {/*End info tab*/}

        </div>
    </>
  );
};

export default ProjectPage;