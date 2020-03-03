import React from 'react';
import './App.css';
import CVBlock from './CVBlock';

function CVBlockTech() {
  return (
    <CVBlock
      title="Title"
      elements={[
        { label: 'HTML5', progress: 0.4 },
        {
          label: 'CSS3',
          progress: 0.4,
          sub: [
            { label: 'SASS', progress: 0.3 },
          ],
        },
        {
          label: 'JavaScript ES6+',
          progress: 0.2,
          sub: [
            { label: 'React', progress: 0.1 },
          ],
        },
        {
          label: 'Java 11+',
          progress: 0.4,
          sub: [
            { label: 'JUnit, AssertJ', progress: 0.1 },
            { label: 'JavaFX', progress: 0.1 },
            { label: 'Maven', progress: 0.3 },
          ],
        },
        { label: 'VBA', progress: 0.4 },
        { label: 'Git', progress: 0.4 },
        { label: 'Linux', progress: 0.2 },
        { label: 'Inkscape', progress: 0.2 },
        { label: 'Figma', progress: 0.2 },
      ]}
    />
  );
}


export default CVBlockTech;
