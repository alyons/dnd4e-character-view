import characterMiddleware from '../../src/middleware/character';
import { CHARACTER_LOAD_SUCCESS } from '../../src/actions/characterActions';
import { setVitality } from '../../src/actions/vitalityActions';

describe('character middleware', () => {
    let store;
    let next;

    beforeEach(() => {
        store = { };
        store.dispatch = jest.fn();

        next = jest.fn();
    });

    it('should pass the action to next', () => {
        const action = { type: 'TEST_ACTION' };
        characterMiddleware(store)(next)(action);

        expect(store.dispatch.mock.calls.length).toBe(0);
        expect(next.mock.calls.length).toBe(1);
        expect(next.mock.calls[0][0]).toEqual({ type: 'TEST_ACTION' });
    });

    it('should set the vitality state appropriately', () => {
        const character = { hitPoints: 20, healingSurges: 10 };
        const action = { type: CHARACTER_LOAD_SUCCESS, character };

        characterMiddleware(store)(next)(action);

        expect(store.dispatch.mock.calls.length).toBe(1);
        expect(store.dispatch.mock.calls[0][0]).toEqual(setVitality({
            maxHitPoints: 20,
            maxHealingSurges: 10,
            hitPoints: 20,
            healingSurges: 10,
            surgeValue: 5
        }));
        expect(next.mock.calls.length).toBe(1);
        expect(next.mock.calls[0][0]).toEqual({ type: CHARACTER_LOAD_SUCCESS, character });
    });

    it('should not do more if the character is missing data', () => {
        const character = { name: 'Test Character' };
        const action = { type: CHARACTER_LOAD_SUCCESS, character };

        characterMiddleware(store)(next)(action);

        expect(store.dispatch.mock.calls.length).toBe(0);
        expect(next.mock.calls.length).toBe(1);
        expect(next.mock.calls[0][0]).toEqual({ type: CHARACTER_LOAD_SUCCESS, character });
    });
});
