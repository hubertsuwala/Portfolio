import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/header.css';

const Header = ({ onBackground }) => {
  const [checked, setChecked] = useState(false);

  const headerClassName = checked ? 'active' : '';

  const check = () => {
    setChecked(!checked);
    console.log('test');
  };
  return (
    <div className={`header ${headerClassName}`}>
      <Link
        to="/Portfolio"
        className="logo"
        onClick={() => {
          setChecked(false);
          onBackground('home-background');
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
              to="/Portfolio/about"
              onClick={() => {
                setChecked(false);
                onBackground('about-background');
              }}
            >
              O mnie
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="/Portfolio/projects"
              onClick={() => {
                setChecked(false);
                onBackground('projects-background');
              }}
            >
              Projekty
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="/Portfolio/contact"
              onClick={() => {
                setChecked(false);
                onBackground('contact-background');
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
