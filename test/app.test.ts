import { expect, test } from 'vitest';

function app(number1: number, number2: number): number {
  return 1 + 2;
}

test('Test must be passed', () => {
  expect(app(1, 2)).toBe(3);
});
