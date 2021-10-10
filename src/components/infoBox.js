import React from 'react'
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

const Styles = styled.div`
    width:100%;
}
`;
function infoBox(props) {

    return (
        <Styles>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>{props.info.title}</Card.Title>
                    <Card.Text>
                    {props.info.description}
                    </Card.Text>
                </Card.Body>
                </Card>
        </Styles> 
    )
}

export default infoBox;
