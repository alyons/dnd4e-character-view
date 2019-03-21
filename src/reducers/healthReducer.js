import { HealthActions } from '../actions';

const initialState = {
    hitPoints: 0,
    maxHitPoints: 0,
    tempHitPoints: 0
};

const health = (state = initialState, action) => {
    switch (action.type) {
        case HealthActions.HEAL_HIT_POINTS:
            return Object.assign({}, state, {
                hitPoints: Math.min(state.maxHitPoints, state.hitPoints + action.health)
            });
        case HealthActions.SET_TEMP_HIT_POINTS:
            return Object.assign({}, state, {
                tempHitPoints: action.tempHP
            });
        case HealthActions.TAKE_DAMAGE:
            let overflow = state.tempHitPoints - action.damage;
            return Object.assign({}, state, {
                tempHitPoints: (overflow > 0) ? overflow : 0,
                hitPoints: (overflow < 0) ? Math.max(state.hitPoints + overflow, 0) : state.hitPoints
            })
        default:
            return state;
    }
}

export default health;
