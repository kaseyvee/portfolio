export const Header: React.FC<{ handleViewToggle: (newView: string) => void }> = (props) => {
  return (
    <div className="Header">
      <h1>kasey valdez</h1>
      <h2>full-stack developer</h2>
      <div className="links">
      <a href="https://github.com/kaseyvee" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-github-alt"></i></a>
      <a href="https://www.linkedin.com/in/kasey-valdez/" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-linkedin-in"></i></a>
      <i className="fa-solid fa-envelope" onClick={() => props.handleViewToggle("contact")}></i>
      </div>
    </div>
  );
}

export default Header;