import { useEffect } from 'react';
import '../../styles/about.css';

const About = ({ onBackground }) => {
  useEffect(() => {
    onBackground('about-background');
  });
  return (
    <div className="about">
      <p className="about-description">
        <span>Cześć</span>, mam na imię <span>HUBERT</span>,<br /> staram się
        nauczyć czegoś nowego,
        <br /> co sprawia mi <span>przyjemność.</span>
      </p>

      <div className="about-animation">O mnie.</div>
    </div>
  );
};

export default About;
