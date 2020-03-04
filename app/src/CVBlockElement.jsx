import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProgressBar = styled.div`
  height: 11px;
  width: 150px;
  border: 3px solid white;
  border-radius: 8px;
  background-color: white;
  float: right;
  right: 10px;
  margin-top: 7px;
`;

const Progress = styled.div` 
  height: 11px;
  border-radius: 5px;
  width: ${props => props.value}%;
  background-color: hsl(198, 100%, 30%);
`;

const Label = styled.span`
  color: white;
`;

function CVBlockElement({label, progress, sub}) {
  return(
    <li>
      <Label>{label}</Label>
      {progress != undefined
          ? <ProgressBar>
              <Progress value={progress} />
            </ProgressBar> 
          : undefined}
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