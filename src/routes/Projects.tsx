import { setTitle, setFavicon } from "../funcs";
import ProjectsPng from "../resources/images/projects.png";
import Navbar from "../components/Navbar";

const Projects = () => {

    setTitle("Projects - Andrew Kozinski");
    setFavicon(ProjectsPng);

    return (
        <>
            <Navbar/>
        </>
    );
}
export default Projects;