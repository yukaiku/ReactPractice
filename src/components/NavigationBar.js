import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    z-index: 999;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: gold;

    &:hover {
      color: white;
    }
  }

  .navBarTransparent {
        background-color: rgba(0, 0, 0,0.5);
    },
  .navBarSolid {
        background-color: #222;
    }
`;

function NavigationBar() {
  const [navBackground, setNavBackground] = useState('navBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 320
            if (show) {
                setNavBackground('navBarSolid')
            } else {
                setNavBackground('navBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <Styles>
    <Navbar collapseOnSelect expand="lg" variant="dark" className={navRef.current}>
      <Navbar.Brand href="/">
        <img
        src="./images/logo.png"
        width="50px"
        height="50px"
        padding-left="10%"
        className="d-inline-block"
        alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link eventKey="1">
              <Link to="/FindUs">FINDS US</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="1">
              <Link to="/Menu">MENU</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="1">
              <Link to="/Opportunities">OPPORTUNITIES</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="1">
              <Link to="/Contact">RATE US</Link>
            </Nav.Link>
          </Nav.Item>
            <Nav.Item>
              <a className="nav-link" href="https://www.doordash.com/en-AU/store/milton-milton-restaurant-milton-2353943/?gclid=Cj0KCQjw_fiLBhDOARIsAF4khR0zBCvikChurukx4YRLFhHLdd4xJojlv86ix0ZXbcFkkVvx3BH0OCoaAmD0EALw_wcB&gclsrc=aw.ds&ignore_splash_experience=true&utm_campaign=CX_AU_SE_GP_GO_ACQ_2742__%20&utm_medium=GPA_Ads&utm_source=Google" target="_blank">ORDER & PICK UP</a>
              {/* <Nav.Link eventKey="1">
                
              <Link to="/">ORDER & PICK UP</Link>
            </Nav.Link> */}
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
  )
}

export default NavigationBar
