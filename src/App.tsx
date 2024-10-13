//import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import profilePicture from "./resources/images/linkedin.jpg";
import profileOverlay from "./resources/images/steamoverlay.png";
import farmingdaleStateCollege from "./resources/images/farmingdalestatecollege.jfif";
import Project from './components/Project';

function App() {

  

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
            <img width="54" height="54" src={farmingdaleStateCollege} />
            <p>Farmingdale State College 2022-2026</p>
          </div>

        </div>


        <div className="main-content">

          <div className="left-content">
            <div className="info-tab">

              <div className="upper-tab">
                <p>About me:</p>
              </div>

              <div className="lower-tab">
                <div className="inner-tab background align-items-center">
                  <p>Hello, my name is Andrew Kozinski and currently, I am a Junior at Farmingdale State College majoring in Computer Science. I am an aspiring software engineer with a passion for technology and a solid background in Java, SQL, HTML/CSS and JavaScript.</p>
                </div>
              </div>
            </div>

            <div className="info-tab projects">
              <div className="upper-tab">
                <p>Recent Activity</p>
              </div>

              <div className="lower-tab" id="projects-section">

              </div>

            </div>
          </div>

          <div className="right-content" id="right-content">
            <p id="online-status">Other Information</p>

            <p>
              <a>Technologies<span className="profile-label"> 3</span></a><a id="setArrow"> ▶</a>
            </p>

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" height="50px" width="50px" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" height="50px" width="50px" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" height="50px" width="50px" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" height="50px" width="50px" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" height="50px" width="50px" />
            <i className="devicon-react-original colored" style={{ fontSize: '50px' }}></i>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" height="50px" width="50px" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" height="50px" width="50x" />


            <p>
              <a href="">Projects <span className="profile-label"></span></a>
            </p>
            <p>
              <a>Inventory</a>
            </p>
            <p>
              <a>Reviews <span className="profile-label">4</span></a>
            </p>
            <p>
              <a>Groups <span className="profile-label">15</span></a>
            </p>
            <p>
              <a>Friends <span className="profile-label">35</span></a>
            </p>

          </div>

        </div>
      </div>

    </>
  )
}

export default App;
