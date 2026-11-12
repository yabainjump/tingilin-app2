import { detectCameroonMobileOperator } from './mobile-operator';

describe('detectCameroonMobileOperator', () => {
  const cases: Array<[string, 'ORANGE' | 'MTN' | null]> = [
    ['655123456', 'ORANGE'],
    ['686123456', 'ORANGE'],
    ['691224472', 'ORANGE'],
    ['+237 699 12 34 56', 'ORANGE'],
    ['650123456', 'MTN'],
    ['677123456', 'MTN'],
    ['685123456', 'MTN'],
    ['237670000000', 'MTN'],
    ['00237680123456', 'MTN'],
    ['620123456', null],
    ['660123456', null],
    ['67712345', null],
    ['', null],
  ];

  cases.forEach(([phone, expected]) => {
    it(`maps "${phone}" to ${expected}`, () => {
      expect(detectCameroonMobileOperator(phone)).toBe(expected);
    });
  });
});
