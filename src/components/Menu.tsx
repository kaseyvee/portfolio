import { NONAME } from 'dns';
import { useEffect, useRef, useState } from 'react';
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
  const [burger, setBurger] = useState(false);
  const clickRef = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("click", handleOutsideMenuClick, true);
  }, [])

  function handleOutsideMenuClick(e: any) {
    if (!clickRef.current.contains(e.target)) {
      setBurger(false);
    }
  }

  function handleToggleBurger() {
    if (burger) {
      return setBurger(false);
    }
    return setBurger(true);
  }

  const burgerToggleStyle = {
    display: 'block'
  }
  
  return (
    <div className="Menu" ref={clickRef}>
      <i className="fa-solid fa-burger" onClick={handleToggleBurger}></i>
      <div className="menu-items" style={burger ? burgerToggleStyle : {}}>
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
    </div>
  );
}