import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const PowerItem = ({ power, eventKey }) => {
    let bg = "light";
    let text = "dark";

    switch(power.powerUsage) {
        case "At-Will":
            bg = "success";
            text = "white";
            break;
        case "Daily":
            bg = "secondary";
            text = "white";
            break;
        case "Encounter":
        case "Encounter (Special)":
            bg = "danger";
            text = "white";
            break;
    }

    return (
        <Card bg={bg} text={text}>
            <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
                {power.name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>
                    {power.flavor}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

export default PowerItem;
