import { connect } from 'react-redux';
import Combat from '../components/Combat';
import { HealthActions } from '../actions';

const mapStateToProps = state => ({
    hitPoints: state.health.hitPoints,
    maxHitPoints: state.health.maxHitPoints,
    tempHitPoints: state.health.tempHitPoints
});

const mapDispatchToProps = dispatch => ({
    takeDamage: damage => dispatch(HealthActions.takeDamage(damage)),
    heal: health => dispatch(HealthActions.heal(health)),
    setTempHP: tempHP => dispatch(HealthActions.setTempHP(tempHP))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Combat);
