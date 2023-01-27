interface Props {
  view: string;
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
                // className={`${props.view === "co" && "underline"}`}
              >completed</h3>
              <h3
                onClick={props.handleViewInProgress}
                // className={`${props.view === "about" && "underline"}`}
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