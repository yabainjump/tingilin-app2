# Tingilin App

Frontend Ionic/Angular pour le parcours utilisateur (auth, home, raffles, tickets, profile, notifications).

## Prerequis

- Node.js 20+
- npm 10+
- API backend lancee sur `http://localhost:3000/api/v1`

## Installation

```powershell
cd d:\personnel\Tinguilin\tingilin-app
npm install
```

## Configuration

### Environnement dev

`src/environments/environment.ts`:

```ts
apiBaseUrl: 'http://localhost:3000/api/v1'
```

### Environnement prod

`src/environments/environment.prod.ts` contient encore un placeholder.
Avant un build prod, remplacer:

```ts
apiBaseUrl: 'https://TON_DOMAINE/api/v1'
```

## Lancer en local

Important: le backend autorise CORS pour `http://localhost:8100`.

```powershell
npm start -- --port 8100
```

App dispo sur `http://localhost:8100`.

## Commandes utiles

```powershell
npm run build
npm run lint
npm run test
```

## Spec Kit

Ce dépôt utilise GitHub Spec Kit `v1.0.1` avec l'intégration Codex. Les règles
UX, accessibilité, sécurité client et qualité sont définies dans
`.specify/memory/constitution.md`; les skills sont dans `.agents/skills/`.

Pour une nouvelle fonctionnalité, ouvrir Codex depuis ce dossier puis suivre :

```text
$speckit-specify → $speckit-clarify → $speckit-plan
→ $speckit-tasks → $speckit-analyze → $speckit-implement
→ $speckit-converge
```

Les artefacts de la fonctionnalité sont versionnés dans `specs/`. Toute
modification du contrat REST ou Socket.IO doit référencer une spec compagnon
dans `tingilin-api`.

## Onboarding dev recommande

1. Ouvrir `/landing`, puis inscription/login.
2. Verifier acces onglets `/tabs/...` apres auth.
3. Completer profil (`/tabs/edit-profile`).
4. Tester parcours raffles:
   - listes (`home`, `winners`)
   - details (`/tabs/raffle-details/:id`)
   - achat ticket + confirmation paiement
5. Verifier notifications (`/tabs/notifications`).

## Roles et navigation

- Un compte `USER` accede aux parcours standards.
- Les ecrans admin (creation raffle, admin APIs) demandent role `ADMIN` cote backend.
- La promotion admin se fait via l'endpoint setup du backend (voir README API).

## Troubleshooting

- `401` en boucle: verifier tokens en localStorage, puis logout/login.
- `431 Request Header Fields Too Large`: vider le localStorage et se reconnecter.
- `CORS blocked`: verifier que l'app tourne bien sur port `8100` ou ajuster CORS backend.
- `GET /null` sur avatar: verifier `avatar` user (string valide ou vide).
