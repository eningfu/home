import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
