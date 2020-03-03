import React from 'react';
import './App.css';
import CVBlock from './CVBlock';

function CVBlockTech() {
  return (
    <CVBlock
      title="Technologies, tools, frameworks"
      elements={[
        { label: 'HTML5', progress: 40 },
        {
          label: 'CSS3',
          progress: 40,
          sub: [
            { label: 'SASS (SCSS)', progress: 30 },
          ],
        },
        { label: 'JavaScript ES6+', progress: 20},
        { label: 'React', progress: 10 },
        {
          label: 'Java 11+',
          progress: 40,
          sub: [
            { label: 'JUnit, AssertJ', progress: 10 },
            { label: 'JavaFX', progress: 10 },
            { label: 'Maven', progress: 30 },
          ],
        },
        { label: 'VBA', progress: 40 },
        { label: 'SQL (Oracle, MySQL)', progress: 10 },
        { label: 'Git', progress: 40 },
        { label: 'Linux', progress: 25 },
        { label: 'Inkscape', progress: 20 },
        { label: 'Figma', progress: 20 },
      ]}
    />
  );
}


export default CVBlockTech;
