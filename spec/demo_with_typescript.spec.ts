import { add } from './utils';

describe('writing specs in typescript', () => {
    it('is easy', () => {
        expect(false).toBe(false);
    });
    it('can add', () => {
        expect(add(2, 2)).toBe(4);
    });
});
describe('writing a basic spec', () => {
    it('is an example of this', () => {
        const o = 'Patronus';
        expect(o).toBe('Patronus');
    });
});
