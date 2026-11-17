/**
 * Verification INDEPENDANTE d'un tirage, executee sur le telephone du joueur
 * (Web Crypto), sans faire confiance au champ `verified` renvoye par le
 * serveur. Reproduit exactement l'algorithme de l'API:
 *
 *   commitment    = SHA256(serverSeed)                     (publie AVANT le tirage)
 *   ticketsetHash = SHA256(orderedSerials.join(","))       (liste figee au tirage)
 *   winningIndex  = HMAC_SHA256(serverSeed, raffleId + ":" + ticketsetHash) mod N
 */

export type DrawVerificationInput = {
  raffleId: string;
  commitment: string | null;
  serverSeed: string | null;
  orderedSerials: string[];
  ticketsetHash: string;
  winningIndex: number;
  winningTicketSerial?: string | null;
};

export type DrawVerificationResult = {
  /** Le secret revele correspond bien a l'engagement publie avant le tirage. */
  commitmentOk: boolean;
  /** La liste des tickets n'a pas ete modifiee apres le tirage. */
  ticketsetOk: boolean;
  /** Le calcul donne bien le ticket annonce comme gagnant. */
  winnerOk: boolean;
  computedIndex: number | null;
  computedSerial: string | null;
  valid: boolean;
};

const encoder = new TextEncoder();

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function sha256Hex(value: string): Promise<string> {
  return toHex(await crypto.subtle.digest('SHA-256', encoder.encode(value)));
}

export async function hmacSha256Hex(key: string, message: string): Promise<string> {
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    encoder.encode(key),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  return toHex(await crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(message)));
}

/**
 * (entier hexadecimal) mod n, chiffre par chiffre: equivalent exact de
 * BigInt('0x' + hex) % n sans BigInt (cible ES2017 de l'app). Reste exact
 * tant que n * 16 < 2^53, tres largement au-dessus du nombre de tickets.
 */
export function hexMod(hex: string, n: number): number {
  let r = 0;
  for (const ch of hex) {
    r = (r * 16 + parseInt(ch, 16)) % n;
  }
  return r;
}

export function isWebCryptoAvailable(): boolean {
  return typeof crypto !== 'undefined' && !!crypto.subtle;
}

export async function verifyDrawLocally(
  input: DrawVerificationInput,
): Promise<DrawVerificationResult> {
  const seed = String(input.serverSeed ?? '');
  const serials = (input.orderedSerials ?? []).map((s) => String(s ?? ''));
  const empty: DrawVerificationResult = {
    commitmentOk: false,
    ticketsetOk: false,
    winnerOk: false,
    computedIndex: null,
    computedSerial: null,
    valid: false,
  };
  if (!seed || !serials.length) return empty;

  const commitmentOk =
    (await sha256Hex(seed)) === String(input.commitment ?? '').toLowerCase();

  const ticketsetHash = await sha256Hex(serials.join(','));
  const ticketsetOk = ticketsetHash === String(input.ticketsetHash ?? '').toLowerCase();

  const digest = await hmacSha256Hex(seed, `${input.raffleId}:${ticketsetHash}`);
  const computedIndex = hexMod(digest, serials.length);
  const computedSerial = serials[computedIndex] ?? null;

  const announcedSerial = input.winningTicketSerial ?? null;
  const winnerOk =
    computedIndex === Number(input.winningIndex) &&
    (!announcedSerial || announcedSerial === computedSerial);

  return {
    commitmentOk,
    ticketsetOk,
    winnerOk,
    computedIndex,
    computedSerial,
    valid: commitmentOk && ticketsetOk && winnerOk,
  };
}
