import React from 'react';
import { connect } from 'react-redux';
import { Accordion, Card } from 'react-bootstrap';

const mapStateToProps = state => ({
    feats: state.character.details.feats
});

const FeatList = ({ feats }) => {
    let featItems = [];
    for(let i = 0; i < feats.length; i++) {
        let feat = feats[i];
        featItems.push(
            <Card key={feat.name.replace(/\s/g, '')}>
                <Accordion.Toggle as={Card.Header} eventKey={i}>
                    {feat.name}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={i}>
                    <Card.Body>
                        {feat.longDescription}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }

    return (
        <Accordion>
            {featItems}
        </Accordion>
    );
};

export default connect(mapStateToProps)(FeatList);
