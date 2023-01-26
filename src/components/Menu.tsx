interface Props {
  handleViewCompleted: () => void;
  handleViewInProgress: () => void;
}

export const Menu: React.FC<Props> = (props) => {
  return (
    <div className="Menu">
      <h2>about</h2>
      <div>
        <h2>projects</h2>
        <div className="projects-dropdown">
          <h3 onClick={props.handleViewCompleted}>completed</h3>
          <h3 onClick={props.handleViewInProgress}>in progress</h3>
        </div>
      </div>
      <h2>contact</h2>
      <h2>resume</h2>
    </div>
  );
}