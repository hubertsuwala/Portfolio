import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import BackgroundContext from './store/background-context';
import './styles/app.css';

function App() {
  const [background, setBackground] = useState('');

  return (
    <Router basename="/Portfolio">
      <BackgroundContext.Provider value={setBackground}>
        <div className={`app ${background}`}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BackgroundContext.Provider>
    </Router>
  );
}

export default App;
