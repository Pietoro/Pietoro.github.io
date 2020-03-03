import React from 'react';
import './App.css';
import CVBlock from './CVBlock';

function CVBlockLang() {
  return (
    <CVBlock
      title="Languages"
      elements={[
        { label: 'Polish', progress: 1.0 },
        { label: 'English', progress: 0.7 },
        { label: 'French', progress: 0.15 },
        { label: 'Italian', progress: 0.1 },
      ]}
    />
  );
}

export default CVBlockLang;