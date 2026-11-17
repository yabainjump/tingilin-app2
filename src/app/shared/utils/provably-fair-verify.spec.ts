import { verifyDrawLocally, DrawVerificationInput } from './provably-fair-verify';

// Valeurs calculees avec le module crypto de Node (meme algorithme que l'API).
const FIXTURE: DrawVerificationInput = {
  raffleId: '665f1a2b3c4d5e6f7a8b9c0f',
  serverSeed: '9f2c1e7a4b3d5f60718293a4b5c6d7e8f90112233445566778899aabbccddeef',
  commitment: '9489af19a3f934636b6c94094fb51d90ac6e1116d734e08cbd6c17536836b2f3',
  orderedSerials: ['TG-0001-A1B2', 'TG-0002-C3D4', 'TG-0003-E5F6', 'TG-0004-G7H8'],
  ticketsetHash: 'b11b43998f5df3999c2730116ae3d0cafd9020b4989e7015b794a8ed96323e96',
  winningIndex: 2,
  winningTicketSerial: 'TG-0003-E5F6',
};

describe('verifyDrawLocally', () => {
  it('confirms an honest draw on the device', async () => {
    const res = await verifyDrawLocally(FIXTURE);
    expect(res.commitmentOk).toBeTrue();
    expect(res.ticketsetOk).toBeTrue();
    expect(res.winnerOk).toBeTrue();
    expect(res.computedSerial).toBe('TG-0003-E5F6');
    expect(res.valid).toBeTrue();
  });

  it('detects a seed that does not match the published commitment', async () => {
    const res = await verifyDrawLocally({ ...FIXTURE, serverSeed: 'f'.repeat(64) });
    expect(res.commitmentOk).toBeFalse();
    expect(res.valid).toBeFalse();
  });

  it('detects a ticket list changed after the draw', async () => {
    const res = await verifyDrawLocally({
      ...FIXTURE,
      orderedSerials: [...FIXTURE.orderedSerials, 'TG-9999-ZZZZ'],
    });
    expect(res.ticketsetOk).toBeFalse();
    expect(res.valid).toBeFalse();
  });

  it('detects an announced winner that is not the computed one', async () => {
    const res = await verifyDrawLocally({
      ...FIXTURE,
      winningIndex: 0,
      winningTicketSerial: 'TG-0001-A1B2',
    });
    expect(res.winnerOk).toBeFalse();
    expect(res.valid).toBeFalse();
  });

  it('fails closed when the seed is not revealed yet', async () => {
    const res = await verifyDrawLocally({ ...FIXTURE, serverSeed: null });
    expect(res.valid).toBeFalse();
  });
});
