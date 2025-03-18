import {Project} from '../types.ts';
import {Link} from "react-router-dom";

const ProjectDisplay = (project: Project) => {

    return (
        <div className="inner-tab background project">

            <div className="project-inner-upper">
                <Link to={`/projects/${project.pageName}`}>
                    <a><img src={project.previewImg} height="69px" width="184px" /></a>
                </Link>
                <Link to={`/projects/${project.pageName}`}>
                <a style={{paddingLeft: '15px', display: "block", marginBlockStart: ".5em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", fontSize: "15px"}}>{project.title}</a>
                </Link>
            </div>

            <div className="project-inner-lower align-items-center">
                <p style={{ color: 'white' }}>Technologies Used: {project.technologiesUsed}</p>
                {/*<p style={{ paddingLeft: '8px', paddingRight: '8px' }}>{project.technologiesUsed}</p> */}
                <div className="proj-languages" style={{ display: 'flex', marginLeft: '10px', gap: '3px' }}>
                    {project.technologyDetails.map((tech) => {
                        return <img title={tech.name} src={tech.icon} height="35px" width="35px" />;
                    })}
                </div>
            </div>

        </div>
    );
}

export default ProjectDisplay;