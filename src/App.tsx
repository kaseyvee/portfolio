import './App.scss';
import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/views/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <About />
    </div>
  );
}

export default App;
