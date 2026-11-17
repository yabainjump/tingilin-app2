import { rewardGoal } from './reward-progress.component';
import { WinnersLiveSocketService, LiveActivity } from 'src/app/services/winners/winners-live-socket.service';
import { normalizeWinner, WinnerDto } from 'src/app/services/winners/winners-api.service';
import { hexMod } from '../utils/provably-fair-verify';

describe('Engagement helpers', () => {
  describe('rewardGoal', () => {
    it('counts what is left before the NEXT free ticket', () => {
      expect(rewardGoal(0, 5)).toEqual({ count: 0, target: 5, remaining: 5, percent: 0 });
      expect(rewardGoal(3, 5)).toEqual({ count: 3, target: 5, remaining: 2, percent: 60 });
      // Ticket deja gagne a 5: on repart vers le palier suivant.
      expect(rewardGoal(5, 5).remaining).toBe(5);
      expect(rewardGoal(9, 10).remaining).toBe(1);
    });

    it('never divides by zero on bad input', () => {
      expect(rewardGoal(NaN, 0)).toEqual({ count: 0, target: 1, remaining: 1, percent: 0 });
    });
  });

  describe('live activity stream', () => {
    let service: WinnersLiveSocketService;
    let last: LiveActivity[] = [];

    beforeEach(() => {
      service = new WinnersLiveSocketService();
      service.activity().subscribe((items) => (last = items));
    });

    it('keeps only well-formed events, bounded and without duplicates', () => {
      service.pushActivity([
        { id: 'a', displayName: 'Paul M.', quantity: 3, raffleId: 'r', prizeTitle: 'PS5', at: 'x' },
        { id: 'a', displayName: 'Paul M.', quantity: 3 },
        { id: '', displayName: 'Sans id' },
        { id: 'b', displayName: 'X'.repeat(200), quantity: 1e9, phone: '699000000' },
        'pas un objet',
      ]);
      expect(last.map((a) => a.id)).toEqual(['a', 'b']);
      expect(last[1].displayName.length).toBe(32);
      expect(last[1].quantity).toBe(999);
      expect((last[1] as any).phone).toBeUndefined();
    });

    it('ignores a non-array payload', () => {
      service.pushActivity({ id: 'z', displayName: 'Z' });
      expect(last).toEqual([]);
    });
  });

  describe('normalizeWinner', () => {
    const api = 'https://backend.example.com/api/v1';
    const base: WinnerDto = {
      raffleId: 'r1',
      drawnAt: '',
      prizeTitle: 'PS5',
      winnerName: 'Awa',
      ticketCode: 'AB12',
    };

    it('resolves delivery photos served by the API and is idempotent', () => {
      const once = normalizeWinner(
        { ...base, deliveryProof: { imageUrl: '/uploads/deliveries/d-1.webp', testimonial: 'Merci', publishedAt: null } },
        api,
      );
      expect(once.deliveryProof?.imageUrl).toBe('https://backend.example.com/uploads/deliveries/d-1.webp');
      expect(normalizeWinner(once, api).deliveryProof?.imageUrl).toBe(once.deliveryProof?.imageUrl);
    });

    it('drops a delivery photo pointing anywhere else', () => {
      const res = normalizeWinner(
        { ...base, deliveryProof: { imageUrl: 'https://evil.example/x.webp', testimonial: '', publishedAt: null } },
        api,
      );
      expect(res.deliveryProof).toBeNull();
    });
  });

  it('hexMod matches big-integer modulo', () => {
    // 0xff = 255 ; 0x1234 = 4660
    expect(hexMod('ff', 7)).toBe(255 % 7);
    expect(hexMod('1234', 13)).toBe(4660 % 13);
  });
});
