import { useEffect, useState } from "react";

export const Header: React.FC<{ handleViewToggle: (newView: string) => void }> = (props) => {
  const [iconFocus, setIconFocus] = useState("");
  const [iconBounce, setIconBounce] = useState("");

  useEffect(() => {
    setIconBounce("fa-bounce");
    setIconFocus("github");
    setTimeout(() => {
      setIconFocus("linkedin");
    }, 800);
    setTimeout(() => {
      setIconFocus("email");
    }, 1600);
    setTimeout(() => {
      setIconFocus("");
    }, 2400);
  }, [])

  function handleHoverMouseEnter(icon: string) {
    setIconFocus(icon);
    setIconBounce("fa-bounce");
  }

  function handleHoverMouseLeave() {
    setIconFocus("");
    setIconBounce("");
  }

  return (
    <div className="Header">
      <h1>kasey valdez</h1>
      <h2>full-stack developer</h2>
      <div className="links">
        <a
          href="https://github.com/kaseyvee"
          target="_blank"
          rel="noreferrer noopener"
          onMouseEnter={() => handleHoverMouseEnter("github")}
          onMouseLeave={handleHoverMouseLeave}
        >
          <i className={`fa-brands fa-github-alt ${iconFocus === "github" && iconBounce}`}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/kasey-valdez/"
          target="_blank"
          rel="noreferrer noopener"
          onMouseEnter={() => handleHoverMouseEnter("linkedin")}
          onMouseLeave={handleHoverMouseLeave}
        >
          <i className={`fa-brands fa-linkedin-in ${iconFocus === "linkedin" && iconBounce}`}></i>
        </a>
        <div
          onMouseEnter={() => handleHoverMouseEnter("email")}
          onMouseLeave={handleHoverMouseLeave}
        >
          <i
            className={`fa-solid fa-envelope ${iconFocus === "email" && iconBounce}`}
            onClick={() => props.handleViewToggle("contact")}
          >
          </i>
        </div>
      </div>
      <a href="https://www.youtube.com/watch?v=r3-Y31ONZuI&ab_channel=nathanfielder">special portal</a>
    </div>
  );
}

export default Header;