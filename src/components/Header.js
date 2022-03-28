import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import BackgroundContext from '../store/background-context';
import '../styles/header.css';

const Header = () => {
  const setBackground = useContext(BackgroundContext);
  const [checked, setChecked] = useState(false);

  const headerClassName = checked ? 'active' : '';

  const check = () => {
    setChecked(!checked);
  };
  return (
    <div className={`header ${headerClassName}`}>
      <Link
        to="/"
        className="logo"
        onClick={() => {
          setChecked(false);
          setBackground('home-background');
        }}
      >
        hsuwala
      </Link>
      <label>
        <input
          type="checkbox"
          onChange={check}
          checked={checked}
          value={checked}
        />
        <span className="menu">
          <span className="hamburger" />
        </span>
        <ul className="list">
          <li>
            <Link
              className="link"
              to="/about"
              onClick={() => {
                setChecked(false);
                setBackground('about-background');
              }}
            >
              O mnie
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="/projects"
              onClick={() => {
                setChecked(false);
                setBackground('projects-background');
              }}
            >
              Projekty
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="/contact"
              onClick={() => {
                setChecked(false);
                setBackground('contact-background');
              }}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </label>
    </div>
  );
};

export default Header;
