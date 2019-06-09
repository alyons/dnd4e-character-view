import { VitalityActions } from '../../src/actions/index';

describe('vitality actions', () => {
    it('should create an action to heal', () => {
        const health = 9;
        const expectedAction = {
            type: VitalityActions.HEAL_HIT_POINTS,
            health
        };
        expect(VitalityActions.heal(health)).toEqual(expectedAction);
    });

    it('should create an action to take damage', () => {
        const damage = 7;
        const expectedAction = {
            type: VitalityActions.TAKE_DAMAGE,
            damage
        };
        expect(VitalityActions.takeDamage(damage)).toEqual(expectedAction);
    });

    it('should create an action to set temp hit hoints', () => {
        const tempHitPoints = 5;
        const expectedAction = {
            type: VitalityActions.SET_TEMP_HIT_POINTS,
            tempHitPoints
        };
        expect(VitalityActions.setTempHP(tempHitPoints)).toEqual(expectedAction);
    });

    it('should create an action to spend a healing surge', () => {
        const regainHealth = true;
        const extraHitPoints = 5;
        const expectedAction = {
            type: VitalityActions.SPEND_HEALING_SURGE,
            regainHealth,
            extraHitPoints
        };
        expect(VitalityActions.spendHealingSurge(regainHealth, extraHitPoints)).toEqual(expectedAction);
    });
});
