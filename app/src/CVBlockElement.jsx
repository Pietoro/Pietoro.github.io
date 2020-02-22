import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

function CVBlockElement({ label, progress, sub }) {
  return (
    <li>
      {label}
      {progress != undefined
        ? <progress value={progress} /> : undefined}
      <ul>
        {sub
          ? sub
            .map((element) => (
              <CVBlockElement
                label={element.label}
                progress={element.progress}
                sub={element.sub}
              />
            ))
          : undefined}
      </ul>
    </li>
  );
}

CVBlockElement.propTypes = {
  label: PropTypes.string,
  progress: PropTypes.number,
  sub: PropTypes.array,
};

export default CVBlockElement;
