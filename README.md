# Tingilin App

Frontend Ionic/Angular pour le parcours utilisateur (auth, home, raffles, tickets, profile, notifications).

## Prerequis

- Node.js 20+
- npm 10+
- JDK 21 pour compiler le projet Android Capacitor 8
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

`src/environments/environment.prod.ts` utilise l'API de production. Verifier
l'URL avant chaque release.

### Google Sign-In (Web + Android)

Google Auth utilise un **Client OAuth de type Application Web** comme audience
de l'ID token. La valeur est publique, mais elle doit etre identique dans:

- `googleWebClientId` dans `src/environments/environment.ts`;
- `googleWebClientId` dans `src/environments/environment.prod.ts`;
- `GOOGLE_CLIENT_ID` dans le `.env` de `tingilin-api`.

Dans le client OAuth **Application Web** de Google Cloud, configurer aussi:

- Origines JavaScript autorisees:
  `https://tinguilin.yaba-in.com` et `http://localhost:8100`;
- URI de redirection autorisees:
  `https://tinguilin.yaba-in.com/auth/login` et
  `http://localhost:8100/auth/login`.

L'URI doit correspondre exactement, sans slash final supplementaire. Elle est
declaree dans `googleRedirectUrl` dans les deux fichiers d'environnement.

En production, ajouter `GOOGLE_CLIENT_ID` dans les variables d'environnement
du serveur puis redemarrer l'API. Le fichier `.env` local n'est pas envoye au
serveur. Cette valeur est le Client ID Web public, pas un ID token utilisateur
et pas un Client Secret.

Dans Google Cloud Console, creer aussi un **Client OAuth Android** dans le meme
projet avec:

- package: `com.tinguilin.app`;
- SHA-1 debug actuel:
  `07:94:99:56:6B:8D:47:3A:B0:21:0C:01:82:A0:D8:6D:CD:4A:95:DF`;
- un autre Client Android pour la cle release et un autre pour la cle Play App
  Signing, si elles ont des SHA-1 differents.

Le Client Android n'est pas copie dans le code. Le `webClientId` doit rester le
Client **Web**, jamais le Client Android. Si l'ecran de consentement est en mode
test, ajouter les comptes Google utilises dans la liste des testeurs.

Au premier Google Sign-In, l'API cree automatiquement le compte avec l'email,
le nom et l'avatar verifies par Google. L'application demande ensuite seulement
la region et attend son enregistrement avant d'ouvrir l'espace connecte. Aux
connexions suivantes, les routes protegees relisent `/auth/me`; le choix de
region n'est redemande que s'il manque encore.

L'empreinte debug depend de `~/.android/debug.keystore`. La regenerer avec
`cd android; .\gradlew.bat signingReport` si la cle ou la machine change.

Apres un changement de dependance ou de configuration native:

```powershell
npm run build
npx cap sync android
npx cap open android
```

Verifier que `JAVA_HOME` pointe vers un JDK 21 avant d'executer Gradle. Le JDK
embarque par une version recente d'Android Studio peut aussi etre selectionne
dans les parametres Gradle d'Android Studio.

Pour un emulateur qui appelle une API locale, utiliser `10.0.2.2` a la place de
`localhost`. Un telephone physique doit utiliser une URL HTTPS joignable.

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
npx cap sync android
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
