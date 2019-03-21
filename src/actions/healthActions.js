export const TAKE_DAMAGE = 'TAKE_DAMAGE';
export const HEAL_HIT_POINTS = 'HEAL_HIT_POINTS';
export const SET_TEMP_HIT_POINTS = 'SET_TEMP_HIT_POINTS';

export function takeDamage(damage) {
    return { type: TAKE_DAMAGE, damage };
}

export function heal(health) {
    return { type: HEAL_HIT_POINTS, health };
}

export function setTempHP(tempHP) {
    return { type: SET_TEMP_HIT_POINTS, tempHP };
}
