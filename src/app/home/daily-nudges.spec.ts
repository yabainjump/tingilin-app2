import { DAILY_NUDGES_KEY, claimDailyNudges, localDayKey } from './daily-nudges';

function memoryStore(initial: Record<string, string> = {}) {
  const data = { ...initial };
  return {
    data,
    getItem: (k: string) => (k in data ? data[k] : null),
    setItem: (k: string, v: string) => void (data[k] = v),
  };
}

describe('daily nudges', () => {
  it('formats the local day', () => {
    expect(localDayKey(new Date(2026, 0, 5, 23, 59))).toBe('2026-01-05');
  });

  it('shows once per day, then again the next day', () => {
    const store = memoryStore();
    const morning = new Date(2026, 10, 25, 8, 0);
    const evening = new Date(2026, 10, 25, 21, 0);
    const tomorrow = new Date(2026, 10, 26, 7, 0);

    expect(claimDailyNudges(morning, store)).toBeTrue();
    expect(store.data[DAILY_NUDGES_KEY]).toBe('2026-11-25');
    expect(claimDailyNudges(evening, store)).toBeFalse();
    expect(claimDailyNudges(tomorrow, store)).toBeTrue();
  });

  it('still shows when storage is unavailable', () => {
    const broken = {
      getItem: () => {
        throw new Error('blocked');
      },
      setItem: () => undefined,
    };
    expect(claimDailyNudges(new Date(), broken)).toBeTrue();
    expect(claimDailyNudges(new Date(), null)).toBeTrue();
  });
});
