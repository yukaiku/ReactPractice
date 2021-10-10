import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.bg{
    background-image: url('./images/dish.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center center;
    background-attachment: fixed;
    background-color: #464646;

}

@media only screen and (max-width: 1200px) {
    .bg {
      background-image: url('./images/dishXs.png');
    }

`;

export const Layout = (props) => (
  <Styles>
    <div className="bg">
      <Container>
        {props.children}
      </Container>
    </div>
  </Styles>
  
  
)
