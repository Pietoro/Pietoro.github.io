import React from 'react';
import Styled from 'styled-components';
import './App.css';

const Button = Styled.button`
  background-color: red;
`;

function NavButton({ label, onClick }) {
  return (
    <Button onClick={onClick}>
      {label}
    </Button>
  );
}

export default NavButton;
