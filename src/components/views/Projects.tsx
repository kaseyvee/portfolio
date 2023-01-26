import { useState } from "react";
import { completedProjects, inProgressProjects } from "../../database/projects";
import { Badge } from "../Badge";

function Projects() {
  const [currentProject, setCurrentProject] = useState({});

  // const completedProjectsList = completedProjects.map((project) => {
  //   return (

  //   )
  // })

  return (
    <div className="modal">
      <div className="Projects">
        <div className="text">
          <div className="title">
            <h4>teebo</h4>
            <div className="links">
              <p>github</p>|<p>demo</p>
            </div>
          </div>
          <p className="description">A discourse app that caters to passionate tv fans who want to have active discussions about their favourite shows.</p>
        </div>
        <div className="techstack">
          <Badge text="node.js"/>
          <Badge text="express.js"/>
          <Badge text="postgresql"/>
          <Badge text="react.js"/>
          <Badge text="sass.js"/>
        </div>
      </div>
    </div>
  );
}

export default Projects;