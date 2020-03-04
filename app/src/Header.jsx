import React from 'react';
import './App.css';
import styled from 'styled-components';

const Head = styled.div`
  box-sizing: border-box;
  color: white;
  margin: 0;
  height: 100px;
  text-align: center;
  padding: 20px 0 20px 0;
  font-size: 3em;
  
`;

function Header() {
  return (
    <Head>
      Hi! I'm an aspiring front-end developer
    </Head>
  );
}

export default Header;
