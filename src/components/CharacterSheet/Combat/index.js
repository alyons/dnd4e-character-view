import React from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';

import { VitalityActions } from '../../../actions';
import Health from './HealthComponent';
import PowerList from './PowerList';
import './Combat.css'

const mapStateToProps = state => ({
    hitPoints: state.vitality.hitPoints,
    maxHitPoints: state.vitality.maxHitPoints,
    tempHitPoints: state.vitality.tempHitPoints
});

const mapDispatchToProps = dispatch => ({
    takeDamage: damage => dispatch(VitalityActions.takeDamage(damage)),
    heal: health => dispatch(VitalityActions.heal(health)),
    setTempHP: tempHP => dispatch(VitalityActions.setTempHP(tempHP))
});

const Combat = ({ hitPoints, maxHitPoints, tempHitPoints, takeDamage, heal, setTempHP }) => (
    <Container>
        <Row>
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
                Quick Stats
            </Col>
        </Row>
        <Row>
            <PowerList />
        </Row>
    </Container>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Combat);
