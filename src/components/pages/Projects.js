import { useEffect, useContext } from 'react';
import BackgroundContext from '../../store/background-context';
import '../../styles/projects.css';

const Projects = () => {
  const setBackground = useContext(BackgroundContext);
  useEffect(() => {
    setBackground('projects-background');
  });

  return (
    <div className="projects">
      <div className="projects-animation">Projekty.</div>
      <div className="projects-background--color" />
      <ul className="projects-list">
        <li className="project-name">
          <div className="project-name--h1">
            <a
              target="_blank"
              href="https://github.com/hubertsuwala/Portfolio/tree/master"
              rel="noreferrer"
            >
              source
            </a>
            <a
              target="_blank"
              href="https://hubertsuwala.github.io/Portfolio"
              rel="noreferrer"
            >
              live
            </a>
            <p>Portfolio</p>
          </div>
          <div className="tech">
            <p>React</p>
          </div>
          <div className="project-describe">
            <p>
              Portfolio zawierajce najwaniejsze informacje o mnie, stworzone za
              pomocą React, React Router
            </p>
          </div>
        </li>
        <li className="project-name">
          <div className="project-name--h1">
            <a
              target="_blank"
              href="https://www.w3schools.com/"
              rel="noreferrer"
            >
              source
            </a>
            <a
              target="_blank"
              href="https://www.w3schools.com/"
              rel="noreferrer"
            >
              live
            </a>
            <p>Pokedex</p>
          </div>
          <div className="tech">
            <p>React</p>
            <p>Rest API</p>
          </div>
          <div className="project-describe">
            <p>
              Zabawa z Pokemonami, wczytanie z zewętrznego źródła i
              przedstawienie ich w postaci listy, dodałem kilka filtrów dzięki,
              którym poruszanie się po stronie jest znacznie prostsze.
            </p>
          </div>
        </li>
        <li className="project-name">
          <div className="project-name--h1">
            <a
              target="_blank"
              href="https://github.com/hubertsuwala/CV"
              rel="noreferrer"
            >
              source
            </a>
            <a
              target="_blank"
              href="https://hs-resume.netlify.app"
              rel="noreferrer"
            >
              live
            </a>
            <p>CV</p>
          </div>
          <div className="tech">
            <p>JavaScript</p>
            <p>HTML5</p>
            <p>CSS3</p>
          </div>
          <div className="project-describe">
            <p>
              Moja pierwsza strona, w postaci CV, przedstawiłem moje osiągnięcia
              oraz doświadczenie zawodowe. Na stronie umieściłem mapę z
              projektami, w których brałem udział przez ostatnie 3 lata.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
