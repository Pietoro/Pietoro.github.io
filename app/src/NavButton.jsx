import React from 'react';
import Styled from 'styled-components';
import './App.css';

const Button = Styled.button`
  box-sizing: border-box;
  color: white;
  background-color: hsl(0,0%,30%);
  padding: 0.5em 1em;
  margin: 1em;
  font-weight: 600;
  border: none;
  box-shadow: 5px 5px hsl(0,0%,15%);
  width: 130px;
  cursor: pointer;
  &:hover {
    background-color: hsl(0,0%,40%);
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
