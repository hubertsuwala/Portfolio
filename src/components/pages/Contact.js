import { useEffect, useContext } from 'react';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons';
import BackgroundContext from '../../store/background-context';

import '../../styles/contact.css';

const Contact = () => {
  const setBackground = useContext(BackgroundContext);
  useEffect(() => {
    setBackground('contact-background');
  });

  return (
    <div className="contact">
      <p className="contact-description">
        Jeśli masz jakiekolwiek pytania,
        <br />
        pisz śmiało
        <br />
        <span>hubert.suwalah@gmail.com</span>
      </p>
      <div className="icon-container">
        <a
          className="social-links"
          target="_blank"
          href="https://github.com/hubertsuwala"
          rel="noreferrer"
        >
          <IconBrandGithub />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/hubert-suwała-803443ba/"
          rel="noreferrer"
        >
          <IconBrandLinkedin />
        </a>
      </div>
      <div className="contact-animation">Kontakt.</div>
    </div>
  );
};

export default Contact;
