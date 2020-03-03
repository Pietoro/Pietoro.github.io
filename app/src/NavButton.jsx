import React from 'react';
import Styled from 'styled-components';
import './App.css';

const Button = Styled.button`
  box-sizing: border-box;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2em;
  background-color: hsl(198, 100%, 30%);
  padding: 0.5em 1em;
  margin: 2em;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  box-shadow: -5px 5px hsl(0,0%,25%);
  width: 180px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: hsl(198, 100%, 40%);
  }
`;

function NavButton({ label, onClick }) {
  return (
    <Button onClick={onClick}>
      {label}
    </Button>
  );
}

export default NavButton;
