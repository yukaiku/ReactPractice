import React from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout';
// import FeaturedMenuContainer from '../components/FeaturedMenuContainer';
import FeaturedMenuContainer2 from '../components/FeaturedMenuContainer2';
import InformationMenuContainer from '../components/InformationMenuContainer';
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

    @media (max-width: 800px) {
        .divider{
            height: 5vh;
        }
    }


`;

function Menu() {
    return (
        <Layout>
        <Styles>
            <div className="menuContainer">
                <FeaturedMenuContainer2 />
                <InformationMenuContainer/>
            </div>
        </Styles>
        </Layout>
    )
}

export default Menu
