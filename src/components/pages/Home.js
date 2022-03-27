import TypeAnimation from 'react-type-animation';

import '../../styles/home.css';

const Home = () => (
  <div className="home">
    <TypeAnimation
      cursor
      sequence={['Don’t wait for opportunity. ', 2000, 'Create it.']}
      wrapper="h1"
      repeat={1}
    />
  </div>
);

export default Home;
