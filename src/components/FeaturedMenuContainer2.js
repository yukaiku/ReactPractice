import React from 'react'
import styled from 'styled-components';
const Styles = styled.div`
    
    .featuredContainer {
        width: 100%;
        padding-top:15%;
        padding-bottom: 5%;
        -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 1s; /* Firefox < 16 */
        -ms-animation: fadein 1s; /* Internet Explorer */
        -o-animation: fadein 1s; /* Opera < 12.1 */
        animation: fadein 1s;
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
    .banner {
        padding:15px;
        text-align:center;
        border-radius: 25px;
        color: white;
        & h1{
            color: Gold;
        }
    }
    

    @media (max-width: 800px) {
    }
`;


function FeaturedMenuContainer2() {
    return (
        <Styles>
            <div className="featuredContainer">
                <div className="banner">
                <div className="banner-content">
                <h1>MENU</h1>
                        <p>Click the button below to download the PDF version</p>
                <a href="pdf/menu.pdf" className="btn btn-dark"><i class="fa fa-download"></i>Download</a>
                </div>
                </div>
            </div>
        </Styles>
    )
}

export default FeaturedMenuContainer2
