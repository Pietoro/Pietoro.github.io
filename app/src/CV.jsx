import React from 'react';
import './App.css';
import CVBlock from './CVBlock';

function CV() {
  return (
    <main>
      CV
      <CVBlock
        title="Title"
        elements={[
          { label: 'HTML5', progress: 0.4 },
          { label: 'CSS3', progress: 0.4 },
          {
            label: 'JavaScript ES6+',
            progress: 0.2,
            sub: [
              { label: 'React', progress: 0.1 },
            ],
          },
        ]}
      />
    </main>
  );
}

export default CV;
