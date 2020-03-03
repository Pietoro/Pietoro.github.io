import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const PB = Styled.div`
  height: 11px;
  width: 150px;
  border: 3px solid white;
  border-radius: 8px;
  background-color: white;
  float: right;
`;

const Progress = Styled.div` 
  height: 11px;
  border-radius: 5px;
  width: ${props => props.value}%;
  background-color: hsl(198, 100%, 23%);
`;

const Label = Styled.span`
  
`;

function CVBlockElement({label, progress, sub}) {
  return(
    <li>
      <Label>{label}</Label>
      <PB>
        {progress != undefined
          ? <Progress value={progress} /> : undefined}
      </PB>
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