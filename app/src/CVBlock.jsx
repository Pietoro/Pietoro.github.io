import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import CVBlockElement from './CVBlockElement';
import Styled from 'styled-components';

const Div = Styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 1em;
  margin: 1em;
  width: 400px;
`;



function CVBlock({ elements, title }) {
  return (
    <Div>
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
    </Div>
  );
}

CVBlock.propTypes = {
  elements: PropTypes.object,
  title: PropTypes.string,
};

export default CVBlock;
