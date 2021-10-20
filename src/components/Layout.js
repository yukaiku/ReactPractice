import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

function Layout(props) {
  const Styles = styled.div`
  .bg{
      background-repeat: no-repeat;
      background-size: cover;
      background-position:center center;
      background-attachment: fixed;
      background-color: black;

  }
  `;

  return (
    
  <Styles>
    <div className="bg">
      <Container>
        {props.children}
      </Container>
    </div>
  </Styles>
  )
}

export default Layout
