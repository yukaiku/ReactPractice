import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
    .informationContainer{
        display:flex;
        flex-direction: row;
        -webkit-animation: fadein 4s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 4s; /* Firefox < 16 */
        -ms-animation: fadein 4s; /* Internet Explorer */
        -o-animation: fadein 4s; /* Opera < 12.1 */
        animation: fadein 4s;
    }
    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Opera < 12.1 */
    @-o-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }


    .leftContainer, .rightContainer{
        width: 45%;
    }
    .dishSection{
        background-color: rgba(232, 232, 232, 0.7);
        padding: 2%;
        border-radius:2.5px;
    }
    .divider {
        height: 5vh;
        background-color: rgba(232, 232, 232, 0.0);
    }

    @media (max-width: 800px) {
        
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
function InformationMenuContainer() {
    return (
        <Styles>
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
        </Styles>
    )
}

export default InformationMenuContainer
