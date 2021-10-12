import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
    color: white;
    .headerBanner{
        display: flex;
        flex-direction: row;
        & .titleText{
            width: 50%;
        }
        & div {
            padding: 5%;
        }
        & .titleImg{
            width: 50%;
            text-align:center;
        }
        & .titleImg > Img {
            width: 50%;
            position: relative;
            top: 50%;
            transform: translate(-50%,-50%);
            left: 50%;
        }
        & .titleText > div{
            background-color: grey;
            border-radius: 2.5px;
            opacity: 0.9;
            & h1 {
                font-size: 5rem;
                color: gold;
            }
            & p{
                font-size: 2rem;
            }
        }

    }
    .jobContainer{
        display:flex;
        flex-direction: row;
        padding: 5%;
    }
    .jobContainer > div {
        padding: 5%;
        display:flex;
        flex-direction: column;
        width: 100%;
    }
    .featuredItem{
        width: 80%;
        padding: 5%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    .khContainer, .fohContainer{
        background-color: grey;
        border-radius: 2.5px;
        opacity: 0.9;
    }
    @media (max-width: 800px) {
        .headerBanner{
            text-align:center;
            flex-direction: column;
            & .titleText{
                width: 100%;
            }
            & .titleImg {
                width: 100%;
                & Img{
                    top: 0;
                    left: 0;
                    transform: inherit;
                }
            }
            
        }
        .jobContainer{
            flex-direction: column;
            text-align: center;
        }
        .featuredItem{
        width: 80%;
        padding: 5%;
        position: relative;
    }
    }
`;

function Opportunities() {
    return (
        <Styles>
            <div>
                <div className ="headerBanner">
                    <div className="titleText">
                        <div className="titleTextShrink">
                            <h1>Career</h1>
                            <p>Be a part of<br/>
                            &nbsp; Milton-Milton<br/>
                            &nbsp;&nbsp;&nbsp;Rangers now!</p>
                        </div>
                        
                    </div>
                    <div className="titleImg">
                        <img className="featuredItem" src={"./images/Food.jpeg"} />
                    </div>
                </div>
                <div className="jobContainer">
                    <div className="fohContainer">
                        <h3>Food Servers</h3>
                        <h4>Job Description</h4>
                        ....
                        <h4>Requirement</h4>
                        ....
                    </div>
                    <div className="imgContainer">
                        <img className="featuredItem" src={"./images/Food.jpeg"} />
                        <img className="featuredItem" src={"./images/Food.jpeg"} />
                        <img className="featuredItem" src={"./images/Food.jpeg"} />
                    </div>
                    <div className="khContainer">
                        <h3>Kitchen Hand</h3>
                        <h4>Job Description</h4>
                        ....
                        <h4>Requirement</h4>
                        ....
                    </div>
                </div>
            </div>
        </Styles>
        
    )
}

export default Opportunities
