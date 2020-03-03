import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import CVBlockElement from './CVBlockElement';
import Styled from 'styled-components';

const Div = Styled.div`
  border-radius: 5px;
  padding: 0.1em 1em;
  margin: 1.5em 1em;
  width: 370px;
  background-image: 
      linear-gradient(180deg, hsl(40,85%,63%) 55px, hsl(0,0%,40%) 55px), 
      linear-gradient(180deg, hsl(0,0%,40%) 100%, hsl(0,0%,40%) 99.99%, hsl(0,0%,40%) 100%);
  box-shadow: -7px 7px hsl(0,0%,25%);
`;

function CVBlock({ elements, title }) {
  return (
    <Div>
      <h3 className="block-header">{title}</h3>
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
    </Div>
  );
}

CVBlock.propTypes = {
  elements: PropTypes.object,
  title: PropTypes.string,
};

export default CVBlock;
