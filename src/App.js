import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
} from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import './styles/app.css';

function App() {
  const [background, setBackground] = useState('');

  return (
    <Router>
      <div className={`app ${background}`}>
        <Header onBackground={setBackground} />
        <Routes>
          <Route
            path="/Portfolio"
            element={<Home onBackground={setBackground} />}
          />
          <Route
            path="/Portfolio/about"
            element={<About onBackground={setBackground} />}
          />
          <Route
            path="/Portfolio/projects"
            element={<Projects onBackground={setBackground} />}
          />
          <Route
            path="/Portfolio/contact"
            element={<Contact onBackground={setBackground} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
