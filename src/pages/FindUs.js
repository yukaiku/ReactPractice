import React from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout';

const Styles = styled.div`
    height: 100vh;
    padding-top: 15%;
    .banner {
        padding:15px;
        text-align:center;
        & h1{
            color: Gold;
            border-radius: 25px;
            width: fit-content;
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%);
        }
        
    }
`;

function FindUs() {
    return (
        <Layout>
            <Styles>
                <div className="banner">
                <div className="banner-content">
                <h1>&nbsp; FIND US  &nbsp;</h1>
                </div>
            </div>
                <div class="powr-store-locator" id="c251010c_1634713489"></div>
            </Styles>
        </Layout>
        
    )
}

export default FindUs
