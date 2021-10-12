import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
    .menuContainer{
        padding-top: 2%;
        padding-bottom: 2%;
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    .menuContainer::after {
        content: "";
        clear: both;
        display: table;
    }
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
    .informationContainer{
        display:flex;
        flex-direction: row;
    }
    .leftContainer, .rightContainer{
        width: 45%;
    }
    .dishSection{
        background-color: rgba(232, 232, 232, 0.9);
        padding: 2%;
        border-radius:2.5px;
    }
    .divider {
        height: 5vh;
        background-color: rgba(232, 232, 232, 0.0);
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
        .informationContainer{
        padding-bottom: 2%;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        }
        .leftContainer, .rightContainer {
            width: 100%;
        }
        .divider{
            height: 5vh;
        }
    }


`;

function Menu() {
    return (
        <Styles>
            <div className="menuContainer">
                <div className="featuredContainer">
                    <div className="featuredRow1">
                        <div className="featuredRowItem1">
                            <img className="featuredItem" src={"./images/Food.jpeg"} />
                        </div>
                        <div className="featuredRowItem2">
                            <img className="featuredItem" src={"./images/Food.jpeg"} />
                        </div>
                        <div className="featuredRowItem3">
                            <img className="featuredItem" src={"./images/Food.jpeg"} />
                        </div>
                    </div>
                    <div className="featuredRow2">
                        <div className="featuredRowItem1">
                            <img className="featuredItem" src={"./images/Food.jpeg"} />
                        </div>
                        <div className="featuredRowItem2">
                            <img className="featuredItem" src={"./images/menuLogo.png"} />
                        </div>
                        <div className="featuredRowItem3">
                            <img className="featuredItem" src={"./images/Food.jpeg"} />
                        </div>
                    </div>
                </div>
                <div className="informationContainer" style={{ width: '100%', justifyContent: 'space-between'}}>
                    <div className="leftContainer">
                        <div className="dishSection">
                            <h3 style={{ textDecoration: 'underline' }}>Dish</h3>
                            <div className="dishInfo" style={{display:'flex' }}>
                                <div className="dishName" style={{ width: '50%'}}>
                                    <p>MAC AND CHEESE</p>
                                    <p>BURGER XL</p>
                                    <p>MILTON SPECIAL</p>
                                </div>
                                <div className="dishPrice" style={{ width: '50%'}}>
                                    <p>$2</p>
                                    <p>$10</p>
                                    <p>$15</p>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="dishSection">
                            <h3 style={{ textDecoration: 'underline' }}>Dish</h3>
                            <div className="dishInfo" style={{display:'flex' }}>
                                <div className="dishName" style={{ width: '50%'}}>
                                    <p>MAC AND CHEESE</p>
                                    <p>BURGER XL</p>
                                    <p>MILTON SPECIAL</p>
                                </div>
                                <div className="dishPrice" style={{ width: '50%'}}>
                                    <p>$2</p>
                                    <p>$10</p>
                                    <p>$15</p>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                    </div>
                    
                    <div className="rightContainer">
                        <div className="dishSection">
                            <h3 style={{ textDecoration: 'underline' }}>Dish 2</h3>
                            <div className="dishInfo" style={{display:'flex' }}>
                                <div className="dishName" style={{ width: '50%'}}>
                                    <p>MAC AND CHEESE</p>
                                    <p>BURGER XL</p>
                                    <p>MILTON SPECIAL</p>
                                </div>
                                <div className="dishPrice" style={{ width: '50%'}}>
                                    <p>$2</p>
                                    <p>$10</p>
                                    <p>$15</p>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="dishSection">
                            <h3 style={{ textDecoration: 'underline' }}>Dish 2</h3>
                            <div className="dishInfo" style={{display:'flex' }}>
                                <div className="dishName" style={{ width: '50%'}}>
                                    <p>MAC AND CHEESE</p>
                                    <p>BURGER XL</p>
                                    <p>MILTON SPECIAL</p>
                                </div>
                                <div className="dishPrice" style={{ width: '50%'}}>
                                    <p>$2</p>
                                    <p>$10</p>
                                    <p>$15</p>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                    </div>                
                </div>
            </div>
        </Styles>
    )
}

export default Menu
