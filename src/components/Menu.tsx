interface Props {
  handleViewCompleted: () => void;
  handleViewInProgress: () => void;
  handleViewToggle: (newView: string) => void;
}

export const Menu: React.FC<Props> = (props) => {
  return (
    <div className="Menu">
      <h2 onClick={() => props.handleViewToggle("about")}>about</h2>
      <div>
        <h2 onClick={() => props.handleViewToggle("projects")}>projects</h2>
        <div className="projects-dropdown">
          <h3 onClick={props.handleViewCompleted}>completed</h3>
          <h3 onClick={props.handleViewInProgress}>in progress</h3>
        </div>
      </div>
      <h2 onClick={() => props.handleViewToggle("contact")}>contact</h2>
      <a href="https://resume.creddle.io/resume/hje8hgzfv4a" target="_blank" rel="noreferrer noopener"><h2>resume</h2></a>
    </div>
  );
}