import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import { Menu } from './components/Menu';
import About from './components/views/About';
import Contact from './components/views/Contact';
import { Projects } from './components/views/Projects';
import { completedProjects, inProgressProjects } from './database/projects';

function App() {
  const [view, setView] = useState("about");
  const [projectType, setProjectType] = useState(completedProjects);
  const [projectIndex, setProjectIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  function endLoading() {
    setTimeout(() => {
      setLoading(false);
    }, 750);
  }

  useEffect(() => {
    setLoading(true);
    endLoading();
  }, [])

  function handleViewCompleted() {
    if (projectType !== completedProjects) {
      setLoading(true);
      setTimeout(() => {
        setProjectIndex(0);
        setProjectType(completedProjects);
      }, 375);
      endLoading();
    }
  }

  function handleViewInProgress() {
    if (projectType !== inProgressProjects) {
      setLoading(true);
      setTimeout(() => {
        setProjectIndex(0);
        setProjectType(inProgressProjects);
      }, 375);
      endLoading();
    }
  }

  function handleViewToggle(newView: string) {
    if (view !== newView) {
      setLoading(true);
      setTimeout(() => {
        setView(newView);
      }, 375);
      endLoading();
    }
  }

  function handlePreviousProject() {
    if (projectType[projectIndex - 1]) {
      setLoading(true);
      setTimeout(() => {
        setProjectIndex(projectIndex - 1);
      }, 500);
      endLoading();
    }
  }

  function handleNextProject() {
    if (projectType[projectIndex + 1]) {
      setLoading(true);
      setTimeout(() => {
        setProjectIndex(projectIndex + 1);
      }, 500);
      endLoading();
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
      {loading && <div className='curtain'></div>}
      {view === "about" && <About loading={loading}/>}
      {view === "projects" &&
        <Projects
          loading={loading}
          projectType={projectType}
          projectIndex={projectIndex}
          handlePreviousProject={handlePreviousProject}
          handleNextProject={handleNextProject}
        />
      }
      {view === "contact" && <Contact loading={loading}/>}
    </div>
  );
}

export default App;
