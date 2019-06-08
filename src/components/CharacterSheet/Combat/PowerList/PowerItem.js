import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

const PowerItem = ({ power, eventKey }) => {
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={eventKey}>
                    {power.name}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>{power.flavor}</Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

export default PowerItem;