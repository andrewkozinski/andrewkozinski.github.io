import { setTitle, setFavicon } from "../funcs";
import ProjectsPng from "../resources/images/projects.png";
import Navbar from "../components/Navbar";
import InfoTab from "../components/InfoTab";
import "../App.css";

const Projects = () => {

    setTitle("Projects - Andrew Kozinski");
    setFavicon(ProjectsPng);

    return (
        <>
            <Navbar/>
            <div className="main-body" id="main-body">
                <InfoTab text="Test" content={<>Project Page Placeholder</>}/>
            </div>
        </>
    );
}
export default Projects;