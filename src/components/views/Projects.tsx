import { Badge } from "../Badge";

interface ProjectList {
  name: string;
  description: string;
  image: string;
  techStack: string[];
  repo: string;
  demo: string;
}

interface Props {
  loading: boolean;
  projectType: ProjectList[];
  projectIndex: number;
  handlePreviousProject: () => void;
  handleNextProject: () => void;
}

export const Projects: React.FC<Props> = (props) => {
  let currentProject = props.projectType[props.projectIndex]

  const backgroundImage = {
    background: `linear-gradient(#000000b3, #000000b3
    ), url(${currentProject.image})`
  }

  return (
    <div className="modal">
      {/* {props.loading && <div className="curtain"></div>} */}
      <div className="nav-btns">
        <i onClick={props.handlePreviousProject} className="fa-solid fa-circle-arrow-left"></i>
        <i onClick={props.handleNextProject} className="fa-solid fa-circle-arrow-right"></i>
      </div>
      <div className="Projects" style={backgroundImage}>
        <div className="text">
          <div className="title">
            <h4>{currentProject.name}</h4>
            <div className="links">
              <a href={currentProject.repo} target="_blank" rel="noreferrer noopener">github</a>
              {currentProject.demo &&
                <>
                  <p>|</p><a href={currentProject.demo} target="_blank" rel="noreferrer noopener">demo</a>
                </>
              }
            </div>
          </div>
          <p className="description">{currentProject.description}</p>
        </div>
        <div className="techstack">
          {currentProject.techStack.map(stack => {
            return <Badge key={currentProject.techStack.indexOf(stack)}text={stack}/>
          })}
        </div>
      </div>
    </div>
  );
}