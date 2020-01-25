import React from 'react';
import './App.css';
import CVBlock from './CVBlock.js';

function CV() {
  return (
    <main>
      CV
      <CVBlock
        elements={[
          {label: 'HTML5', progress: 0.4},
          {label: 'CSS3', progress: 0.4}
        ]}
      />
    </main>
  );
}

export default CV;
