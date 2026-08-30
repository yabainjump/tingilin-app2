import { isConstrainedConnection } from './network-status.service';

describe('isConstrainedConnection', () => {
  it('honours the browser data saver preference', () => {
    expect(isConstrainedConnection({ saveData: true })).toBeTrue();
  });

  it('detects slow mobile network classes', () => {
    expect(isConstrainedConnection({ effectiveType: '2g' })).toBeTrue();
    expect(isConstrainedConnection({ effectiveType: '3g' })).toBeTrue();
  });

  it('keeps an unconstrained 4g connection in normal mode', () => {
    expect(
      isConstrainedConnection({ effectiveType: '4g', downlink: 10 }),
    ).toBeFalse();
  });
});
