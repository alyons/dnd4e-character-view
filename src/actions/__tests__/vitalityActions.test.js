import { VitalityActions } from '../index';

describe('vitality actions', () => {
    it('should create an action to heal', () => {
        const health = 9;
        const expectedAction = {
            type: VitalityActions.HEAL_HIT_POINTS,
            health
        };
        expect(VitalityActions.heal(health)).toEqual(expectedAction);
    });
});
