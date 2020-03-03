import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const Progress = Styled.progress`
  border: 1px solid black;
  appeareance: none;
  background-color: white;
  float: right;
  width: 150px;
`;

const Label = Styled.span`
  display: inline-block;
`;


function CVBlockElement({ label, progress, sub }) {
  return (
    <li>
      <Label>{label}</Label>
      {progress != undefined
        ? <Progress value={progress} /> : undefined}
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
