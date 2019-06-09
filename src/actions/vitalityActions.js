export const TAKE_DAMAGE = 'TAKE_DAMAGE';
export const HEAL_HIT_POINTS = 'HEAL_HIT_POINTS';
export const SET_TEMP_HIT_POINTS = 'SET_TEMP_HIT_POINTS';
export const SPEND_HEALING_SURGE = 'SPEND_HEALING_SURGE';
export const SET_VITALITY = 'SET_VITALITY';

export function takeDamage(damage) {
    return { type: TAKE_DAMAGE, damage };
}

export function heal(health) {
    return { type: HEAL_HIT_POINTS, health };
}

export function setTempHP(tempHitPoints) {
    return { type: SET_TEMP_HIT_POINTS, tempHitPoints };
}

export function spendHealingSurge(regainHealth, extraHitPoints) {
    return { type: SPEND_HEALING_SURGE, regainHealth, extraHitPoints };
}

export function setVitality(vitality) {
    return { type: SET_VITALITY, vitality };
}
