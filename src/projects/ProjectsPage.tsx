import { MOCK_PROJECTS } from "./MockProjects";
import PropTypes from 'prop-types';

interface ProjectPageProps {
    first: string;
    // other prop definitions
  }

function ProjectPage(props: ProjectPageProps) {
    
    // props.first = 'Dave';

    return (
        <>
            <h1>Projects {props.first}</h1>
            <pre>
                {JSON.stringify(MOCK_PROJECTS)}
            </pre>
        </>
    )
}

ProjectPage.propTypes = {
    first: PropTypes.string.isRequired,
  };

export default ProjectPage;