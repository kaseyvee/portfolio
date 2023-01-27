import { completedProjects, inProgressProjects } from '../database/projects';

interface ProjectList {
  name: string;
  description: string;
  image: string;
  techStack: string[];
  repo: string;
  demo: string;
}

interface Props {
  view: string;
  projectType: ProjectList[];
  handleViewCompleted: () => void;
  handleViewInProgress: () => void;
  handleViewToggle: (newView: string) => void;
}

export const Menu: React.FC<Props> = (props) => {

  
  return (
    <div className="Menu">
      <h2
        onClick={() => props.handleViewToggle("about")}
        className={`${props.view === "about" && "underline"}`}
      >about</h2>
      <div>
        <h2
          onClick={() => props.handleViewToggle("projects")}
          className={`${props.view === "projects" && "underline"}`}
        >projects</h2>
        <div className="projects-dropdown">
          {props.view === "projects" &&
            <>
              <h3
                onClick={props.handleViewCompleted}
                className={`${props.projectType === completedProjects && "highlight"}`}
              >completed</h3>
              <h3
                onClick={props.handleViewInProgress}
                className={`${props.projectType === inProgressProjects && "highlight"}`}
              >in progress</h3>
            </>
          }
        </div>
      </div>
      <h2
        onClick={() => props.handleViewToggle("contact")}
        className={`${props.view === "contact" && "underline"}`}
      >contact</h2>
      <a href="https://resume.creddle.io/resume/hje8hgzfv4a" target="_blank" rel="noreferrer noopener"><h2>resume</h2></a>
    </div>
  );
}