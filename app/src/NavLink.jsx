import React from 'react';
import Styled from 'styled-components';
import './App.css';


const Link = Styled.a`
  box-sizing: border-box;
  text-align: center;
  color: white;
  background-color: hsl(0,0%,30%);
  padding: 0.5em 1em;
  margin: 1em;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 5px 5px hsl(0,0%,15%);
  width: 140px;
  display: inline-block;
  &:hover {
    background-color: hsl(0,0%,40%);
  }
`;

function NavLink({label, href}) {
  return (
    <Link href={href} target="_blank">
      { label }
    </Link>
  );
}

export default NavLink;
