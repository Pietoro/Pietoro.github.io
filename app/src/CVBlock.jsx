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
      linear-gradient(180deg, hsl(40,85%,63%) 60px, hsl(0,0%,35%) 60px);
  box-shadow: -7px 7px hsl(0,0%,20%);
`;

const Text = styled.div`
  color: white;
  white-space: pre-line;
  line-height: 2em;
  margin: 30px 15px;
  font-weight: 600;
`;

function CVBlock({ elements, title, text }) {
  return (
    <Div>
      <h3 className="block-header">{title}</h3>
      {elements != undefined
        ? (<ul>
          {elements
            .map((element) => (
              <CVBlockElement
                label={element.label}
                progress={element.progress}
                sub={element.sub}
              />
            ))}
        </ul>)
        : undefined}
        {text != undefined
          ? <Text>{text}</Text>
          : undefined }
    </Div>
  );
}

CVBlock.propTypes = {
  elements: PropTypes.object,
  title: PropTypes.string,
};

export default CVBlock;
