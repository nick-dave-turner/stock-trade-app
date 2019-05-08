// @flow
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Header = styled.div`
  padding: 0.625rem 1.25rem;
  background: #999999;
  border-radius: 0.625rem 0.625rem 0 0;
`;

const Body = styled.div`
  padding: 1.25rem;
  background: #ffffff;
  border-radius: ${props => (props.title ? '0 0 .625rem .625rem' : '.625rem')};
`;

const Title = styled.h4`
  margin: 0;
  color: #ffffff;
`;

type WidgetProps = {
  children: React.Node,
  title?: string
};

function Widget(props: WidgetProps) {
  return (
    <Container>
      {props.title && (
        <Header>
          <Title>{props.title}</Title>
        </Header>
      )}
      <Body title={props.title}>{props.children}</Body>
    </Container>
  );
}

export default Widget;
