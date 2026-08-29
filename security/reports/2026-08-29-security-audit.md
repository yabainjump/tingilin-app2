# Audit de securite Ionic — 2026-08-29

Le client Ionic a ete analyse avec la checklist Vibe Check adaptee au projet.

## Resultats

- Le lien de redirection retourne par le fournisseur de paiement est maintenant
  parse puis limite a HTTPS avant toute navigation.
- Le journal d'erreur de paiement ne reproduit plus la reponse brute du backend.
- Angular est passe a `20.3.30` et le toolchain a `20.3.35`.
- Lint, build et 41 tests sont reussis.
- `npm audit --omit=dev` retourne 0 vulnerabilite de production.

## Risque residuel

Sept alertes transitives restent limitees au toolchain de developpement. Le
correctif force propose par npm regresse vers un ancien Angular et n'est pas
acceptable. Ne jamais publier le serveur `ng serve`; deployer uniquement le
build statique derriere HTTPS et les en-tetes de securite du reverse proxy.

Le rapport transversal et les controles d'exploitation sont conserves dans le
depot backend sous `security/reports/2026-08-29-security-audit.md`.

