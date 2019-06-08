import { VitalityActions } from '../actions';

const initialState = {
    hitPoints: 0,
    maxHitPoints: 0,
    tempHitPoints: 0,
    healingSurges: 0,
    maxHealingSurges: 0,
    surgeValue: 0
};

const vitality = (state = initialState, action) => {
    switch (action.type) {
        case VitalityActions.HEAL_HIT_POINTS:
            return Object.assign({}, state, {
                hitPoints: Math.min(state.maxHitPoints, state.hitPoints + action.health)
            });
        case VitalityActions.SET_TEMP_HIT_POINTS:
            return Object.assign({}, state, {
                tempHitPoints: action.tempHitPoints
            });
        case VitalityActions.TAKE_DAMAGE:
            let overflow = state.tempHitPoints - action.damage;
            return Object.assign({}, state, {
                tempHitPoints: (overflow > 0) ? overflow : 0,
                hitPoints: (overflow < 0) ? Math.max(state.hitPoints + overflow, 0) : state.hitPoints
            });
        case VitalityActions.SPEND_HEALING_SURGE:
            let toHeal = (action.useSurgeValue) ? state.surgeValue : 0;
            toHeal += (action.extraHitPoints) ? action.extraHitPoints : 0;
            return Object.assign({}, state, {
                hitPoints: Math.min(state.maxHitPoints, state.hitPoints + toHeal),
                healingSurges: Math.max(0, state.healingSurges - 1)
            });
        case VitalityActions.SET_VITALITY:
            return Object.assign({}, state, action.vitality);
        default:
            return state;
    }
}

export default vitality;
