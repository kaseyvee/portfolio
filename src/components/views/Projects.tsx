import { useState } from "react";
import { completedProjects, inProgressProjects } from "../../database/projects";
import { Badge } from "../Badge";

function Projects() {
  const [projectIndex, setProjectIndex] = useState(0);

  let currentProject = completedProjects[projectIndex]

  // const completedProjectsList = completedProjects.map((project) => {
  //   return (

  //   )
  // })

  function handlePreviousProject() {
    if (completedProjects[projectIndex - 1]) {
      return setProjectIndex(projectIndex - 1);
    }
  }

  function handleNextProject() {
    if (completedProjects[projectIndex + 1]) {
      return setProjectIndex(projectIndex + 1);
    }
  }

  const backgroundImage = {
    background: `linear-gradient(#000000b3, #000000b3
    ), url(${currentProject.image})`
  }

  return (
    <div className="modal">
      <div className="nav-btns">
        <i onClick={handlePreviousProject} className="fa-solid fa-circle-arrow-left"></i>
        <i onClick={handleNextProject} className="fa-solid fa-circle-arrow-right"></i>
      </div>
      <div className="Projects" style={backgroundImage}>
        <div className="text">
          <div className="title">
            <h4>{currentProject.name}</h4>
            <div className="links">
              <a href={currentProject.repo} target="_blank" rel="noreferrer noopener">github</a>
              {currentProject.demo &&
                <>
                  <p>|</p><a href={currentProject.demo}>demo</a>
                </>
              }
            </div>
          </div>
          <p className="description">{currentProject.description}</p>
        </div>
        <div className="techstack">
          {currentProject.techStack.map(stack => {
            return <Badge text={stack}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;