import React from 'react';
import styled from 'styled-components';
import './App.css';


const Link = styled.a`
  box-sizing: border-box;
  text-align: center;
  color: white;
  font-size: 1.2em;
  background-color: hsl(198, 100%, 23%);
  padding: 0.5em 1em;
  margin: 1.7em;
  font-weight: 600;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: -5px 5px hsl(0,0%,20%);
  width: 180px;
  display: inline-block;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: hsl(198, 100%, 40%);
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
