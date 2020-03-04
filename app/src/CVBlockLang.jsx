import React from 'react';
import CVBlock from './CVBlock';
import './App.css';


function CVBlockLang() {
  return (
    <CVBlock
      title="Languages spoken"
      elements={[
        { label: 'Polish', progress: 100 },
        { label: 'English', progress: 70 },
        { label: 'French', progress: 15 },
        { label: 'Italian', progress: 10 },
      ]}
    />
  );
}

export default CVBlockLang;