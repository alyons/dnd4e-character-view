import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const InventoryItem = ({ item, eventKey }) => (
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
            {item.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={eventKey}>
            <Card.Body>
                {item.flavor}
            </Card.Body>
        </Accordion.Collapse>
    </Card>
);

export default InventoryItem;
