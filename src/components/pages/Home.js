import { useEffect, useContext } from 'react';
import TypeAnimation from 'react-type-animation';
import BackgroundContext from '../../store/background-context';

import '../../styles/home.css';

const Home = () => {
  const setBackground = useContext(BackgroundContext);
  useEffect(() => {
    setBackground('home-background');
  });

  return (
    <div className="home">
      <TypeAnimation
        cursor
        sequence={['Don’t wait for opportunity. ', 2000, 'Create it.']}
        wrapper="h1"
        repeat={1}
      />
    </div>
  );
};

export default Home;
