import React from 'react'
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Home = () => (
  <>
    <section style={{ textAlign: "center" }}>
      <header style={{fontSize:"30px", fontWeight:"bold", color:"gold"}}>Your Food Journey</header>
      <bold style={{fontSize:"20px", fontWeight:"bold"}}>Starts Here</bold>
      <br/>
      <FontAwesomeIcon icon="angle-down" size="3x" color="gold" />
    </section>
    <section>
      <div className="row">
        <div className="col-lg-3">
          <header>About Us</header>
          <p>Hello ......</p>
        </div>
        <div className="col-lg-6">
          wewe
        </div>
        <div className="col-lg-3">
          <header>Our Story</header>
          <p>Text</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          wewe
        </div>
        <div className="col-lg-6">
          wewe
        </div>
        <div className="col-lg-3">
          wewe
        </div>
      </div>
    </section>
    
  </>

)
