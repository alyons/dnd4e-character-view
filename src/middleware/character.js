import { CharacterActions, VitalityActions } from '../actions';

const actionWhiteList = [
    CharacterActions.CHARACTER_LOAD_SUCCESS
];

const actionInWhiteList = action => {
    return actionWhiteList.includes(action.type);
};

const characterMiddleware = store => next => action => {
    next(action);

    if (!actionInWhiteList(action)) {
        return;
    }

    const { character } = action;
    if (!character) return;
    const { stats } = character;
    if (!stats) return;

    let vitality = {
        maxHitPoints: parseInt(stats.hitPoints),
        maxHealingSurges: parseInt(stats.healingSurges)
    };

    vitality.hitPoints = vitality.maxHitPoints;
    vitality.healingSurges = vitality.maxHealingSurges;
    vitality.surgeValue = Math.floor(vitality.maxHitPoints / 4);

    store.dispatch(VitalityActions.setVitality(vitality));
};

export default characterMiddleware;
