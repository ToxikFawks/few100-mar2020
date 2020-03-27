export const add = (a: number, b: number) => a + b;

export const applicationName = 'Super Angular Application';

export class Monkey {
    public name: string;
    private age: number;
}

export function formatName(first: string, last: string): { formattedName: string; numberOfLetters: number; } {
    const name = `${last}, ${first}`;
    return {
        formattedName: name,
        numberOfLetters: name.length
    };
}

export function isEven(n: number) {
    return n % 2 === 0;
}
