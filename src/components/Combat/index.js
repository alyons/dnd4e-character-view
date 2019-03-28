import React from 'react';
import { connect } from 'react-redux';
import { HealthActions } from '../../actions';
import Health from './HealthComponent';
import './Combat.css'

const mapStateToProps = state => ({
    hitPoints: state.vitality.hitPoints,
    maxHitPoints: state.vitality.maxHitPoints,
    tempHitPoints: state.vitality.tempHitPoints
});

const mapDispatchToProps = dispatch => ({
    takeDamage: damage => dispatch(HealthActions.takeDamage(damage)),
    heal: health => dispatch(HealthActions.heal(health)),
    setTempHP: tempHP => dispatch(HealthActions.setTempHP(tempHP))
});

const Combat = ({ hitPoints, maxHitPoints, tempHitPoints, takeDamage, heal, setTempHP }) => (
    <div>
        <Health />
        <p>{`Temp HP: ${tempHitPoints}`}</p>
        <p>{`Health: ${hitPoints}/${maxHitPoints}`}</p>
        <button onClick={() => takeDamage(5)}>Take Damage: 5</button>
        <button onClick={() => heal(7)}>Heal: 7</button>
        <button onClick={() => setTempHP(6)}>Set Temp: 6</button>
    </div>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Combat);
