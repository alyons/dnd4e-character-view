import vitality from '../vitalityReducer';
import { 
    HEAL_HIT_POINTS,
    SET_TEMP_HIT_POINTS,
    SPEND_HEALING_SURGE,
    TAKE_DAMAGE
} from '../../actions/vitalityActions';

describe('vitality reducer', () => {
    let state = { };
    let action = { };

    beforeEach(() => {
        state = {
            hitPoints: 36,
            maxHitPoints: 41,
            tempHitPoints: 3,
            healingSurges: 7,
            maxHealingSurges: 10,
            surgeValue: 10
        };

        action = {
            type: 'UNKOWN_ACTION'
        }
    });

    it('should return default state for bad actions', () => {
        const expectedState = state;
        expect(vitality(state, action)).toEqual(expectedState);
    });

    describe('should handle HEAL_HIT_POINTS', () => {
        beforeEach(() => {
            action = {
                type: HEAL_HIT_POINTS
            }
        });

        it('heal for the amount given', () => {
            const health = 4;
            action.health = health
            const expectedState = Object.assign({}, state, { hitPoints: state.hitPoints + health });
            expect(vitality(state, action)).toEqual(expectedState);
        });
        
        it('should only heal to maxHitPoints', () => {
            const expectedState = Object.assign({}, state, { hitPoints: state.maxHitPoints });
            action.health = Number.MAX_SAFE_INTEGER;
            expect(vitality(state, action)).toEqual(expectedState);
        });
    });

    it('should handle SET_TEMP_HIT_POINTS', () => {
        const tempHitPoints = 10;
        const expectedState = Object.assign({}, state, { tempHitPoints });
        expect(vitality(state, { type: SET_TEMP_HIT_POINTS, tempHitPoints })).toEqual(expectedState);
    });

    describe('should handle SPEND_HEALING_SURGE', () => {
        beforeEach(() => {
            state = Object.assign({}, state, { hitPoints: 25 });
            action = {
                type: SPEND_HEALING_SURGE,
                useSurgeValue: true
            };
        });

        it('should heal for the surge value', () => {
            const expectedState = Object.assign({}, state, { hitPoints: state.hitPoints + state.surgeValue, healingSurges: state.healingSurges - 1 });
            expect(vitality(state, action)).toEqual(expectedState);
        });

        it('should heal with bonuses if included', () => {
            const extraHitPoints = 5;
            action = Object.assign({}, action, { useSurgeValue: true, extraHitPoints });
            const expectedState = Object.assign({}, state, { hitPoints: state.hitPoints + state.surgeValue + extraHitPoints, healingSurges: state.healingSurges - 1 });
            expect(vitality(state, action)).toEqual(expectedState);
        });

        it('should not heal if useSurgeValue is false', () => {
            action.useSurgeValue = false;
            const expectedState = Object.assign({}, state, { healingSurges: state.healingSurges - 1 });
            expect(vitality(state, action)).toEqual(expectedState);
        });

        it('should only heal for bonus value', () => {
            const extraHitPoints = 5;
            action = Object.assign({}, action, { useSurgeValue: false, extraHitPoints });
            const expectedState = Object.assign({}, state, { hitPoints: state.hitPoints + extraHitPoints, healingSurges: state.healingSurges - 1 });
            expect(vitality(state, action)).toEqual(expectedState);
        });
    });

    describe('should handle TAKE_DAMAGE', () => {
        beforeEach(() => {
            action = {
                type: TAKE_DAMAGE,
                damage: 0
            };
        });

        it('should reduce hit points by damage taken', () => {
            state.tempHitPoints = 0;
            const damage = 10;
            action.damage = damage;
            const expectedState = Object.assign({}, state, { hitPoints: state.hitPoints - damage });
            expect(vitality(state, action)).toEqual(expectedState);
        });

        it('should use temp Hit Points before regular hit points', () => {
            const damage = 10;
            action.damage = damage;
            const expectedState = Object.assign({}, state, {
                hitPoints: state.hitPoints - (damage - state.tempHitPoints),
                tempHitPoints: 0
            });
            expect(vitality(state, action)).toEqual(expectedState);
        });

        it('should not let hit points go below 0', () => {
            const damage = Number.MAX_SAFE_INTEGER;
            action.damage = damage;
            const expectedState = Object.assign({}, state, {
                hitPoints: 0,
                tempHitPoints: 0
            });
            expect(vitality(state, action)).toEqual(expectedState);
        })
    });
});