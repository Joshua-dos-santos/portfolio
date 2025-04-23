import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SkillsProjects from './pages/SkillsProjects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills-projects" element={<SkillsProjects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
