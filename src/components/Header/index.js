// @flow
import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  position: fixed;
  display: flex;
  flex: 1;
  align-items: center;
  top: 0;
  width: 100%;
  height: 50px;
  padding: 0 5rem;
  background: #ffffff;
  border-bottom: 2px solid #dddddd;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
`;

function Header() {
  return (
    <Container>
      <Title>Stock Trades</Title>
    </Container>
  );
}

export default Header;
