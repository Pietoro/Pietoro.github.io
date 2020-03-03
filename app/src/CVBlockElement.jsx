import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const ProgressBar = Styled.div`
  height: 11px;
  width: 150px;
  border: 3px solid white;
  border-radius: 8px;
  background-color: white;
  float: right;
  right: 10px;
  margin-top: 7px;
`;

const Progress = Styled.div` 
  height: 11px;
  border-radius: 5px;
  width: ${props => props.value}%;
  background-color: hsl(198, 100%, 30%);
`;

const Label = Styled.span`
  color: white;
`;

function CVBlockElement({label, progress, sub}) {
  return(
    <li>
      <Label>{label}</Label>
      <ProgressBar>
        {progress != undefined
          ? <Progress value={progress} /> : undefined}
      </ProgressBar>
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

export default CVBlockElement;