import React, {useState} from 'react'
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InfoBox from "./infoBox";
import styled from 'styled-components';
import { Viewport } from 'react-is-in-viewport';
const Styles = styled.div`
    
    padding-top:2%;

    .contents{
      width:100%;
      overflow:auto;
    }
    .content:nth-child(odd){
      width:60%;
      float:right;
      clear:right;
    }
    .content:nth-child(even){
      width:60%;
      float:left;
      clear:left;
    }
    .content:last-child{
      padding-bottom:5%;
    }
    .content{
        padding-top: 5%;
    }
    .fadeOut{
     opacity:0;
     transition: width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s;

    }
    .fadeIn{
        opacity:1;
        transition: width 0.5s, height 0.5s, opacity 0.5s 0.5s;

    }

    @media only screen and (max-width: 1200px) {
    .content {
      width: 100% !important;
    }
}
}
`;


function HomeContainer() {
  const aboutUs = { title: "About Us", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." };
  const ourStory = { title: "Our Story", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." };
  const discoverTheFood = { title: "Discover The Food", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." };
  const culinarySecrets = { title: "Culinary Secrets", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." };
  const [aboutUsState, setAboutUs] = useState(false);
  const [ourStoryState, setOurStoryState] = useState(false);
  const [discoverTheFoodState, setDiscoverTheFoodState] = useState(false);
  const [culinarySecretsState, setCulinarySecretsState] = useState(false);
  const onEnterAboutUs =()=> {
    console.log('enter');
    setAboutUs(aboutUsState => true);
    console.log(aboutUsState);
  }
  const onEnterStoryState = ()=> {
    setOurStoryState(ourStoryState => true);
  }
  const onEnterDiscoverTheFoodState = () => {
    setDiscoverTheFoodState(discoverTheFoodState => true);
  }
  const onEnterCulinarySecretsState = () => {
    setCulinarySecretsState(culinarySecretsState => true);
    console.log(aboutUsState);
  }
  const onLeaveAboutUs =()=> {
    console.log('enter');
    setAboutUs(aboutUsState => false); 
  }
  const onLeaveStoryState = ()=> {
    setOurStoryState(ourStoryState => false);
  }
  const onLeaveDiscoverTheFoodState = () => {
    setDiscoverTheFoodState(discoverTheFoodState => false);
  }
  const onLeaveCulinarySecretsState = () => {
    setCulinarySecretsState(culinarySecretsState => false); 
  }
  
  return (
      <Styles>
        <section style={{ textAlign: "center" }}>
          <header style={{fontSize:"30px", fontWeight:"bold", color:"gold"}}>Your Food Journey</header>
          <bold style={{fontSize:"20px", fontWeight:"bold"}}>Starts Here</bold>
          <br/>
          <FontAwesomeIcon icon="angle-down" size="3x" color="gold" />
          <br/>
        </section>
        <section className="contents">
          <Viewport className="content"
            type="fit"
            onEnter={onEnterAboutUs}
            onFocusOut={onLeaveAboutUs}
            >
              <div className={` ${aboutUsState ? 'fadeIn' : 'fadeOut'}`}>
                <InfoBox info={aboutUs}/>
            </div>
          </Viewport>
          <Viewport className="content"
            type="fit"
            onEnter={onEnterStoryState}
            onFocusOut={onLeaveStoryState}
          >
            <div className={` ${ourStoryState ? 'fadeIn' : 'fadeOut'}`}>
              <InfoBox info={ourStory} />
            </div>
          </Viewport>
          <Viewport className="content"
            type="fit"
            onEnter={onEnterDiscoverTheFoodState}
            onFocusOut={onLeaveDiscoverTheFoodState}
          >
            <div className={` ${discoverTheFoodState ? 'fadeIn' : 'fadeOut'}`}>
              <InfoBox info={discoverTheFood} />
            </div>
          </Viewport>
          <Viewport className="content"
            type="fit"
            onEnter={onEnterCulinarySecretsState}
            onFocusOut={onLeaveCulinarySecretsState}
          >
            <div className={` ${culinarySecretsState ? 'fadeIn' : 'fadeOut'}`}>
              <InfoBox info={culinarySecrets} />
            </div>
          </Viewport>
          </section>
          <section>
          </section>
        
      </Styles>
  )
}

export default HomeContainer
