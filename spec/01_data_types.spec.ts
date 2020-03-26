describe('declaring variables in typescript', () => {
    describe('typing', () => {
        it('implicity typed variables', () => {
            let name = 'Joe';
            name = 'Ray';
            const age = 50;
        });
        it('explicitly typed variables', () => {
            let name: string;
            name = 'Joe';
        });
        it('union types', () => {
            let thingy: string | number | string[] = 'Tacos';
            thingy = 'Apples';
            thingy = 42;
            thingy = ['Hot', 'Dogs'];
        });
        it('type aliases', () => {
            type ThingWithLettersAndStuff = string;
            const name: ThingWithLettersAndStuff = 'Joe';
            type MathOperation = (a: number, b: number) => number;
            const add: MathOperation = (a, b) => a + b;
            expect(add(2, 2)).toBe(4);
        });
    });
});
