import {Project} from '../types.ts';

const ProjectDisplay = (project: Project) => {

    return (
        <div className="inner-tab background project">

            <div className="project-inner-upper">
                <a href={project.projLink}><img src={project.previewImg} height="69px" width="184px" /></a>
                <a href={project.projLink} style={{paddingLeft: '15px', display: "block", marginBlockStart: ".5em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", fontSize: "15px"}}>{project.title}</a>
            </div>

            <div className="project-inner-lower align-items-center">
                <p style={{ color: 'white' }}>Technologies Used: {project.technologiesUsed}</p>
                {/*<p style={{ paddingLeft: '8px', paddingRight: '8px' }}>{project.technologiesUsed}</p> */}
                <div className="proj-languages"></div>
            </div>

        </div>
    );
}

export default ProjectDisplay;