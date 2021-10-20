import React from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout';
import OpportunitiesBanner from '../components/OpportunitiesBanner';
const Styles = styled.div`
    color: white;
    padding-bottom: 5%;

    h3{
        color: gold;
        font-weight: bold;
    }
    .jumbotron {
        color: black;
        padding: 5%;
        opacity: 0.9;
    }
    .applyBtn{
        text-align: right;
    }
    @media (max-width: 800px) {

    }
`;

function Opportunities() {
    return (
        <Layout>
        <Styles>
                <div>
                <OpportunitiesBanner/>
                <div className="jobContainer">
                    <div className="fohContainer jumbotron">
                        <h3>Food Servers</h3>
                        <h4>Job Description</h4>
                        ....
                        <h4>Requirement</h4>
                            ....
                        <p class="applyBtn">
                            <a class="btn btn-dark" href="#" role="button">Apply Now</a>
                        </p>   
                    </div>
                    <div className="khContainer jumbotron">
                        <h3>Kitchen Hand</h3>
                        <h4>Job Description</h4>
                        ....
                        <h4>Requirement</h4>
                            ....
                        <p class="applyBtn">
                            <a class="btn btn-dark" href="#" role="button">Apply Now</a>
                        </p>    
                    </div>
                </div>
            </div>
        </Styles>
        </Layout>
    )
}

export default Opportunities
