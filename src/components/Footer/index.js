// @flow
import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  padding: 0 5rem;
  background: #ffffff;
  border-top: 2px solid #dddddd;
`;

function Footer() {
  return <Container />;
}

export default Footer;
