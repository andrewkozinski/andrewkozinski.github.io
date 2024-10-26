import { useState } from 'react';
import './App.css';
import profilePicture from "./resources/images/linkedin.jpg";
import profileOverlay from "./resources/images/steamoverlay.png";
import farmingdaleStateCollege from "./resources/images/farmingdalestatecollege.jfif";
import ProjectDisplay from './components/ProjectDisplay';
import { useEffect } from 'react';
//Project interface definition in types.ts
import { Project } from './types.ts';
import Navbar from './components/Navbar.tsx';


function App() {

  const [projects, setProjects] = useState<Project[]>([]);

  const loadProjects = async () => {
    const response = await fetch('https://raw.githubusercontent.com/andrewkozinski/andrewkozinski.github.io/main/projects.json');
    const data = await response.json();
    console.log(data);
    setProjects(data);
  }

  useEffect(() => {
    //Load projects from the JSON in the GitHub repository
    loadProjects().catch(console.error);
  }, []);
  

  return (
    <>
    
      <Navbar />

      <div className="main-body" id="main-body">
        <div className="heading" id="heading">
          
          <div className="pfp-container">
            <img src={profilePicture} className="pfp" />
            <img src={profileOverlay} className="top" />
          </div>

          <div className="user-info">
            <p style={{ fontSize: '24px' }}>Andrew Kozinski</p>
            <p style={{ color: '#c4c4c4', fontSize: '16px' }}>🇺🇸 United States</p>
          </div>

          <div className="attending" id="schoolAttended">
            <img width="54" height="54" src={farmingdaleStateCollege} id="fsc"/>
            <div>
              <p>Farmingdale State College</p>
              <p>2022-2025</p>
            </div>
          </div>

        </div>


        <div className="main-content">

          <div className="left-content">
            <div className="info-tab">

              <div className="upper-tab" id="aboutMe">
                <p>About me:</p>
              </div>

              <div className="lower-tab">
                <div className="inner-tab background align-items-center">
                  <div>
                    <p>Hello and welcome to my website! My name is Andrew Kozinski and currently I am a Senior at Farmingdale State College majoring in Computer Science.  I am someone who has a passion for technology and I have a solid background in Java, C, Python, SQL, HTML/CSS, JavaScript and TypeScript.</p>
                    <p>I have a love of learning and am always eager to learn and pick up new skills even outside of programming and technology.</p>
                    <p>If you're interested in working with me or just wanna chat, feel free to send me an email or connect with me on LinkedIn. Whatever works best for you! In the meantime though, feel free to take look around this website, view some of my previous projects and view my resume.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-tab projects">
              <div className="upper-tab">
                <p>Recent Activity</p>
              </div>

              <div className="lower-tab" id="projects-section">
                {projects.length != 0 ? projects.map((item : Project) => <ProjectDisplay title={item.title} projImg={item.projImg} previewImg={item.previewImg} technologiesUsed={item.technologiesUsed} projLink={item.projLink}/>): <p>Loading...</p>}
              </div>

            </div>
          </div>

          <div className="right-content" id="right-content">
            <p id="online-status">Other Information</p>

            <p>
              <a>Technologies<span className="profile-label"> 10</span></a><a id="setArrow"> ▶</a>
            </p>

            <img title="Java" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" height="50px" width="50px" />
            <img title="C" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" height="50px" width="50px" />
            <img title="HTML" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" height="50px" width="50px" />
            <img title="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" height="50px" width="50px" />
            <img title="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" height="50px" width="50px" />
            {/*<i className="devicon-react-original colored" style={{ fontSize: '50px' }}></i>*/}
            <img title="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" height="50px" width="50px"/>
            <img title="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height="50px" width="50px"/>
            <img title="SQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" height="50px" width="50px" />
            <img title="Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" height="50px" width="50x" />
            <img title="Firebase" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" height="50px" width="50px"/>

            <p>
              <a href="">Projects <span className="profile-label"></span></a>
            </p>
            <p>
              <a>Resume</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/andrew-kozinski-392613252/">LinkedIn </a>
            </p>
            <p>
              <a>Certifications <span className="profile-label">4</span></a>
            </p>
            {/* Commented out for now
            <p>
              <a>Friends <span className="profile-label">35</span></a>
            </p>
            */}
            

          </div>

        </div>
      </div>

    </>
  )
}

export default App;
