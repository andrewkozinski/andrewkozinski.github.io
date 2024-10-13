import {Project} from '../types.ts';

const ProjectDisplay = (project: Project) => {

    return (
        <div className="inner-tab background project">

            <div className="project-inner-upper">
                <a href={project.projLink}><img src={project.previewImg} height="69px" width="184px" /></a>
                <a href={project.projLink}><p style={{ color: 'white', paddingLeft: '15px' }}>{project.title}</p></a>
            </div>

            <div className="project-inner-lower align-items-center">
                <p style={{ color: 'white' }}>Languages Used</p>
                <p style={{ paddingLeft: '8px', paddingRight: '8px' }}>5 of 118</p>
                <div className="proj-languages"></div>
            </div>

        </div>
    );
}

export default ProjectDisplay;