import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProgramPage from './pages/ProgramPage';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ResidencyPage from './pages/ResidencyPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/citizenship/:id" element={<ProgramPage />} />
          <Route path="/residency/:id" element={<ResidencyPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
