import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import CVBlockElement from './CVBlockElement';

function CVBlock({ elements, title }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {elements
          .map((element) => (
            <CVBlockElement
              label={element.label}
              progress={element.progress}
              sub={element.sub}
            />
          ))}
      </ul>
    </div>
  );
}

CVBlock.propTypes = {
  elements: PropTypes.object,
  title: PropTypes.string,
};

export default CVBlock;
