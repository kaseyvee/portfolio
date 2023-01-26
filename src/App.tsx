import './App.scss';
import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/views/About';
import Projects from './components/views/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      {/* <About /> */}
      <Projects />
    </div>
  );
}

export default App;
