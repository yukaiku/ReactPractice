import React from 'react';
// import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Slideshow from '../components/Slideshow';
import { Container } from 'react-bootstrap';

function Layout(props) {
  // const [backgroundURL, setBackgroundURL] = useState("./images/dish.png");
  // const [backgroundMediaURL, setBackgroundMediaURL] = useState("./images/dishXs.png");
  // const usePathname = () => {
  //   const location = useLocation();
  //   return location.pathname;
  // }
  // const pathName = usePathname();
  // useEffect(() => {
  //   if (pathName == "/Menu" || pathName == "/Opportunities") {
  //     menuBG();
  //   } else {
  //     normalBG();
  //   }
  // });
  // const normalBG = () => {
  //   setBackgroundURL(backgroundURL => "./images/dish.png");
  //   setBackgroundMediaURL(backgroundMediaURL => "./images/dishXs.png");
  // }
  // const menuBG = () =>{
  //     setBackgroundURL(backgroundURL => "./images/logo.png");
  //     setBackgroundMediaURL(backgroundMediaURL => "./images/logo.png");
  // }
  
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
      <Slideshow/>
      <div className="bg">
        <Container>
         {props.children}
        </Container>
      </div>
  </Styles>
  )
}

export default Layout
