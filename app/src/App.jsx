import React, { useState } from 'react';
import './App.css';

import Header from './Header';
import NavButton from './NavButton';
import CV from './CV';
import MyProjects from './MyProjects';
import NavLink from './NavLink';


function App() {
  const [displayed, setDisplayed] = useState(<CV />);

  return (
    <div>
      <Header />
      <nav>
        <NavButton label="CV" onClick={() => setDisplayed(<CV />)} />
        <NavButton label="My projects" onClick={() => setDisplayed(<MyProjects />)} />
        <NavLink label="My Linkedin" href="https://www.linkedin.com/in/ewelina-kania-6188bb143/" />
        <NavLink label="My Github" href="https://github.com/Pietoro" />
      </nav>
      {displayed}
      <footer>Ef</footer>
    </div>
  );
}

export default App;
