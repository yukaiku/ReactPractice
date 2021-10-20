import React from 'react'
import styled from 'styled-components';
const Styles = styled.div`
    color: white;
    .headerBanner{
        display: flex;
        flex-direction: row;
        text-align:center;
        & .titleText{
            width: 100%;
        }
        & div {
            padding: 5%;
        }
        & .titleText > div{
            & h1 {
                font-size: 5rem;
                color: gold;
                -webkit-animation: fadein2 4s; /* Safari, Chrome and Opera > 12.1 */
                -moz-animation: fadein2 4s; /* Firefox < 16 */
                -ms-animation: fadein2 4s; /* Internet Explorer */
                -o-animation: fadein2 4s; /* Opera < 12.1 */
                animation: fadein2 4s;
            }
            & p{
                font-size: 2rem;
                -webkit-animation: fadein2 4s; /* Safari, Chrome and Opera > 12.1 */
                -moz-animation: fadein2 4s; /* Firefox < 16 */
                -ms-animation: fadein2 4s; /* Internet Explorer */
                -o-animation: fadein2 4s; /* Opera < 12.1 */
                animation: fadein2 4s;
            }
        }

    }
    
    @media (max-width: 800px) {
    }
`;
function OpportunitiesBanner() {
    return (
        <Styles>
            <div className ="headerBanner">
                <div className="titleText">
                    <div className="titleTextShrink">
                        <h1>Career</h1>
                        <p>Be a part of Milton Milton Rangers<br/>
                        Now!<br/></p>
                    </div>
                    
                </div>
            </div>
        </Styles>
    )
}

export default OpportunitiesBanner
