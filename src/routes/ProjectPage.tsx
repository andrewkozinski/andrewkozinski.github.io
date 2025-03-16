import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {useParams} from "react-router-dom";
import { Project } from "../types";

const ProjectPage = () => {

  let params = useParams();
  //console.log(params);

  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const loadProjects = async () => {
    const response = await fetch('https://raw.githubusercontent.com/andrewkozinski/andrewkozinski.github.io/main/projects.json');
    const data = await response.json();
    //console.log(data);
    setProjects(data); 

    //Find the project with the name that matches the url
    let project = data.find((project: Project) => project.pageName === params.projname);
    if (project === undefined) {//If the project is not found, log an error and return
      console.error("Project not found");
      return;
    }
    setCurrentProject(project);
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
                          
                      </div>
                    
                    </>

                    }

            </div> {/*End info tab*/}

        </div>
    </>
  );
};

export default ProjectPage;