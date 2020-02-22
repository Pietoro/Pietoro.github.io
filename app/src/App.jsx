import React, { useState } from 'react';
import './App.css';

import Header from './Header';
import NavButton from './NavButton';
import CV from './CV';
import MyProjects from './MyProjects';


function App() {
  const [displayed, setDisplayed] = useState(<CV />);

  return (
    <div>
      <Header />
      <nav>
        <NavButton label="CV" onClick={() => setDisplayed(<CV />)} />
        <NavButton label="My projects" onClick={() => setDisplayed(<MyProjects />)} />
        {
        // TODO
        // <NavLink label="My Github" href="https://github.com/Pietoro" />
        // <NavLink label="My LinkedIn" href="tubydzielink" />
        }
      </nav>
      {displayed}
      <footer>Ef</footer>
    </div>
  );
}

export default App;
