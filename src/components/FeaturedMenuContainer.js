import React from 'react'
import styled from 'styled-components';
const Styles = styled.div`
    
    .featuredContainer {
        width: 100%;
    }
    
    .featuredRow1, .featuredRow2{
        display:flex;
        flex-direction:row;
        width: 100%;
        justify-content: space-between;
        text-align:center;
    }
    .featuredRow2{
        padding-bottom: 2%;
    }
    .featuredRowItem1, .featuredRowItem2, .featuredRowItem3 {        
        padding-top 2%;
        width: 33%;
        text-align:center;
        & img{
            width: 75%;
        }
    }
    

    @media (max-width: 800px) {
        .featuredRow1, .featuredRow2{
            flex-direction: column;
        }
        .featuredRow1 > div, .featuredRow2 > div {
            width: 100%;
        }
        .featuredRow1 > div > img, .featuredRow2 > div > img {
            display:block;
            margin-left:auto;
            margin-right: auto;
            width: 50%;
            padding-top: 2%;
            padding-left: 0;
            padding-right: 0;
        }
    }
`;

function FeaturedMenuContainer() {
    return (
        <Styles>
        <div className="featuredContainer">
            <div className="featuredRow1">
                <div className="featuredRowItem1">
                    <img className="featuredItem" src={"./images/Food.jpeg"} alt="food"/>
                </div>
                <div className="featuredRowItem2">
                    <img className="featuredItem" src={"./images/Food.jpeg"} alt="food" />
                </div>
                <div className="featuredRowItem3">
                    <img className="featuredItem" src={"./images/Food.jpeg"} alt="food"/>
                </div>
            </div>
            <div className="featuredRow2">
                <div className="featuredRowItem1">
                    <img className="featuredItem" src={"./images/Food.jpeg"} alt="food"/>
                </div>
                <div className="featuredRowItem2">
                    <img className="featuredItem" src={"./images/menuLogo.png"} alt="food"/>
                </div>
                <div className="featuredRowItem3">
                    <img className="featuredItem" src={"./images/Food.jpeg"} alt="food"/>
                </div>
            </div>
        </div>
        </Styles>
    )
}

export default FeaturedMenuContainer
