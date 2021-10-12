import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

function Layout(props) {
  const [backgroundURL, setBackgroundURL] = useState("./images/dish.png");
  const [backgroundMediaURL, setBackgroundMediaURL] = useState("./images/dishXs.png");
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }
  const pathName = usePathname();
  useEffect(() => {
    if (pathName == "/Menu" || pathName == "/Opportunities") {
      menuBG();
    } else {
      normalBG();
    }
  });
  const normalBG = () => {
    setBackgroundURL(backgroundURL => "./images/dish.png");
    setBackgroundMediaURL(backgroundMediaURL => "./images/dishXs.png");
  }
  const menuBG = () =>{
      setBackgroundURL(backgroundURL => "./images/logo.png");
      setBackgroundMediaURL(backgroundMediaURL => "./images/logo.png");
  }
  
  const Styles = styled.div`
  .bg{
      background-image: url(${backgroundURL});
      background-repeat: no-repeat;
      background-size: cover;
      background-position:center center;
      background-attachment: fixed;
      background-color: black;

  }

  @media only screen and (max-width: 1200px) {
      .bg {
        background-image: url(${backgroundMediaURL});
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
