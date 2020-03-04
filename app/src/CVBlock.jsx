import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import CVBlockElement from './CVBlockElement';
import styled from 'styled-components';

const Div = styled.div`
  border-radius: 7px;
  padding: 0.1em 1em;
  margin: 1.5em 1em;
  background-image: 
      linear-gradient(180deg, hsl(40,85%,63%) 60px, hsl(0,0%,40%) 60px), 
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
