import Navbar from "../components/Navbar";
import {useParams} from "react-router-dom";

const ProjectPage = () => {

  let params = useParams();
  
  return (
    <>
        <Navbar/>
        <div className="main-body" id="main-body">
            
        </div>
    </>
  );
};

export default ProjectPage;