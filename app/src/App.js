import React, {useState} from 'react';
import './App.css';

import Header from './Header.js';
import NavButton from './NavButton.js';
import CV from './CV.js';
import MyProjects from './MyProjects.js';


function App() {
  const [displayed, setDisplayed] = useState('CV');
  const display = s => {
    switch(s) {
      case 'CV': 
        return <CV/>;
        break;
      case 'MyProjects':
        return <MyProjects/>;
        break;
      default:
        return <CV />
    }
  };

  return (
    <div>
      <Header />
      <nav>
        <NavButton label="CV" onClick={() => setDisplayed('CV') }/>
        <NavButton label="My projects" onClick={() => setDisplayed('MyProjects') }/>
      </nav>
      {display(displayed)}
      <footer></footer>
    </div>
  );
}

export default App;
