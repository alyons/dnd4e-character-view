export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export function logIn(credentials) {
    return { type: LOG_IN, credentials };
}

export function logOut() {
    return { type: LOG_OUT };
}

import * as HealthActions from './healthActions';

export {
    HealthActions
};
