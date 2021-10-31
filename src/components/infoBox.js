import React from 'react'
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

const Styles = styled.div`
    width:100%;

    .cardBody{
        background-color: rgba(232, 232, 232, 0.1);  
    }
    
}
`;
function InfoBox(props) {

    return (
        <Styles>
            <Card style={{ width: '100%' }}>
                <Card.Body className="cardBody">
                    <Card.Title>{props.info.title}</Card.Title>
                    <Card.Text>
                    {props.info.description}
                    </Card.Text>
                </Card.Body>
                </Card>
        </Styles> 
    )
}

export default InfoBox;
