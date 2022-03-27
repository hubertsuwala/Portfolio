import { useEffect } from 'react';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons';

import '../../styles/contact.css';

const Contact = ({ onBackground }) => {
  useEffect(() => {
    onBackground('contact-background');
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
