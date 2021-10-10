import React from 'react'
import './Slideshow.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'images/slide_1.jpg',
  'images/slide_1.jpg',
  'images/slide_1.jpg'
];



function Slideshow() {
    return (
        <div>
        <Slide easing="ease">
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
        </Slide>
      </div>
    )
}

export default Slideshow
