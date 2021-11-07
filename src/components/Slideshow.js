import React from 'react'
import './Slideshow.css';
// import { Slide } from 'react-slideshow-image';
import styled from 'styled-components';

const Styles = styled.div`
  .each-slide > div {
    height: 100vh;
  }
  div{
    height: 100vh;
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
`;



const slideImages = [
  'images/slide1.jpg',
  'images/slide2.png',
  'images/slide3.png'
];



function Slideshow() {
    return (
      <Styles>
        <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
        </div>
        {/* <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <div className="slideShowBox">
                <span>MiltonMilton</span>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <div className="slideShowBox">
                <span>Coming Soon</span>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <div className="slideShowBox">
                <span>To an area near you!</span>
              </div>
            </div>
          </div> 
      </Slide> */}
      </Styles>
    )
}

export default Slideshow
