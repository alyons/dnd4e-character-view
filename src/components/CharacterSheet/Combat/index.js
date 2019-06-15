import React from 'react';
import { connect } from 'react-redux';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';

import { VitalityActions } from '../../../actions';
import Health from './HealthComponent';
import PowerList from './PowerList';
import FeatureTable from './FeatureTable';
import SkillTable from './SkillTable';
import QuickStats from './QuickStats';
import './Combat.css'

const mapStateToProps = state => ({
    details: state.character.details,
    stats: state.character.stats,
    hitPoints: state.vitality.hitPoints,
    maxHitPoints: state.vitality.maxHitPoints,
    tempHitPoints: state.vitality.tempHitPoints
});

const mapDispatchToProps = dispatch => ({
    takeDamage: damage => dispatch(VitalityActions.takeDamage(damage)),
    heal: health => dispatch(VitalityActions.heal(health)),
    setTempHP: tempHP => dispatch(VitalityActions.setTempHP(tempHP))
});

const Combat = ({ details, stats }) => {
    let raceFeatTableProps = {
        name: 'Racial Features',
        features: details.racialFeatures
    };
    let classFeatTableProps = {
        name: 'Class/Other Features',
        features: details.classFeatures
    };
    let featTableProps = {
        name: 'Feats',
        features: details.feats
    };
    return (
        <Container>
            {/* <Row>
                <Col>
                    <div>
                        <Health />
                        <p>{`Temp HP: ${tempHitPoints}`}</p>
                        <p>{`Health: ${hitPoints}/${maxHitPoints}`}</p>
                        <button onClick={() => takeDamage(5)}>Take Damage: 5</button>
                        <button onClick={() => heal(7)}>Heal: 7</button>
                        <button onClick={() => setTempHP(6)}>Set Temp: 6</button>
                    </div>
                </Col>
                <Col>
                    <QuickStats />
                </Col>
            </Row>
            <Row>
                <PowerList />
            </Row> */}
            <Row>
                <Col>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="conditionCard">
                                Conditions
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="conditionCard">
                                <Card.Body>
                                    This is where conditions will go; if I had them.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="featureCard">
                                Features
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="featureCard">
                                <Card.Body>
                                    <FeatureTable {...raceFeatTableProps} />
                                    <FeatureTable {...classFeatTableProps} />
                                    <FeatureTable {...featTableProps} />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="skillCard">
                                Skills
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="skillCard">
                                <Card.Body>
                                    <SkillTable {...stats} />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
            <Row>
                <Col><PowerList /></Col>
            </Row>
        </Container>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Combat);
