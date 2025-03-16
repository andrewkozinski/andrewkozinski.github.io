import Navbar from "../components/Navbar";
import {useParams} from "react-router-dom";

const ProjectPage = () => {

  let params = useParams();
  console.log(params);

  return (
    <>
        <Navbar/>
        <div className="main-body" id="main-body">
            <p>{params.data}</p>
        </div>
    </>
  );
};

export default ProjectPage;