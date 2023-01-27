import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import { Menu } from './components/Menu';
import About from './components/views/About';
import Contact from './components/views/Contact';
import { Projects } from './components/views/Projects';
import { completedProjects, inProgressProjects } from './database/projects';

function App() {
  const [view, setView] = useState("contact")
  const [projectType, setProjectType] = useState(completedProjects)
  const [projectIndex, setProjectIndex] = useState(0);

  function handleViewCompleted() {
      setProjectIndex(0);
      setProjectType(completedProjects);
  }

  function handleViewInProgress() {
      setProjectIndex(0);
      setProjectType(inProgressProjects);
  }

  function handleViewToggle(newView: string) {
    setView(newView);
  }

  function handlePreviousProject() {
    if (projectType[projectIndex - 1]) {
      setProjectIndex(projectIndex - 1);
    }
  }

  function handleNextProject() {
    if (projectType[projectIndex + 1]) {
      setProjectIndex(projectIndex + 1);
    }
  }

  return (
    <div className="App">
      <Header handleViewToggle={handleViewToggle} />
      <Menu
        view={view}
        projectType={projectType}
        handleViewCompleted={handleViewCompleted}
        handleViewInProgress={handleViewInProgress}
        handleViewToggle={handleViewToggle}
      />
      {view === "about" && <About />}
      {view === "projects" &&
        <Projects
          projectType={projectType}
          projectIndex={projectIndex}
          handlePreviousProject={handlePreviousProject}
          handleNextProject={handleNextProject}
        />
      }
      {view === "contact" && <Contact />}
    </div>
  );
}

export default App;
