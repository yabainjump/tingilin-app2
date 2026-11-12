import type { PaymentMethodCode } from 'src/app/core/api/payments-api.service';

/**
 * Operateur mobile money d'un numero camerounais, d'apres les plages publiees
 * par Digikuntz (doc /dev/api-doc, section direct-charge):
 *   Orange CM : 655-659, 686-689, 690-699
 *   MTN CM    : 650-654, 670-679, 680-685
 * Meme regle que l'API (tingilin-api/src/common/utils/phone.util.ts), qui
 * reste l'autorite: ce helper ne sert qu'au confort de saisie.
 */
export function detectCameroonMobileOperator(
  input: unknown,
): PaymentMethodCode | null {
  let digits = String(input ?? '').replace(/\D/g, '');
  if (digits.startsWith('00237')) digits = digits.slice(5);
  else if (digits.startsWith('237')) digits = digits.slice(3);
  if (!/^6\d{8}$/.test(digits)) return null;

  const prefix = Number(digits.slice(0, 3));
  if ((prefix >= 655 && prefix <= 659) || (prefix >= 686 && prefix <= 699)) {
    return 'ORANGE';
  }
  if ((prefix >= 650 && prefix <= 654) || (prefix >= 670 && prefix <= 685)) {
    return 'MTN';
  }
  return null;
}
