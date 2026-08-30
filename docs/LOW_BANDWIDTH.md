# Mode faible connexion

L'application adapte automatiquement son comportement lorsque le navigateur
signale l'economiseur de donnees, une connexion 2G/3G ou un debit descendant
inferieur ou egal a 1,5 Mbit/s.

## Comportement

- les donnees d'accueil enregistrees sont affichees avant une nouvelle requete ;
- les actualisations automatiques sont suspendues ;
- une actualisation manuelle reste toujours disponible ;
- les images des listes sont chargees uniquement a l'approche de l'ecran ;
- le service worker precharge seulement les six fichiers du shell applicatif ;
- les autres pages, medias, traductions et icones sont charges a la demande ;
- un echec reseau ne declenche plus deux requetes de compatibilite, sauf si le
  serveur indique explicitement que le nouvel endpoint n'existe pas.

Le paiement n'est jamais mis en file hors ligne. L'utilisateur doit etre
connecte afin d'obtenir une intention fraiche et de suivre la redirection HTTPS
du fournisseur.

## Verification manuelle

Dans Chrome DevTools, utiliser Network > Slow 3G, puis :

1. ouvrir l'accueil une premiere fois ;
2. le rouvrir et verifier que le contenu memorise apparait rapidement ;
3. faire defiler la liste et verifier que les images arrivent progressivement ;
4. utiliser le pull-to-refresh pour forcer une mise a jour ;
5. couper le reseau et verifier le message hors-ligne ;
6. retablir le reseau et verifier la synchronisation des actions en attente.

