import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import { Menu } from './components/Menu';
import About from './components/views/About';
import { Projects } from './components/views/Projects';
import { completedProjects, inProgressProjects } from './database/projects';

function App() {
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
      <Header />
      <Menu
        handleViewCompleted={handleViewCompleted}
        handleViewInProgress={handleViewInProgress}
      />
      {/* <About /> */}
      <Projects
        projectType={projectType}
        projectIndex={projectIndex}
        handlePreviousProject={handlePreviousProject}
        handleNextProject={handleNextProject}
      />
    </div>
  );
}

export default App;
