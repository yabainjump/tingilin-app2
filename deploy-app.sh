#!/usr/bin/env bash
# =============================================================================
# Deploiement APP UTILISATEUR (Ionic/Angular) sur cPanel.
# Build statique -> copie dans le docroot du domaine. Pas de PM2 (c'est du statique).
# A lancer sur le serveur depuis le dossier du repo:
#     bash ./deploy-app.sh
#
# Variables surchargeables:
#   BRANCH    branche git                         (defaut: new_dev)
#   REPO_DIR  dossier du repo                      (defaut: ce dossier)
#   DOCROOT   docroot servi par cPanel pour
#             tinguilin.yaba-in.com                (A DEFINIR si different)
# =============================================================================
set -euo pipefail

BRANCH="${BRANCH:-new_dev}"
REPO_DIR="${REPO_DIR:-$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)}"
# Docroot DEDIE du site (PAS le public_html partage qui contient tous les sites).
DOCROOT="${DOCROOT:-$HOME/public_html/tinguilin.yaba-in.com}"
BUILD_DIR="www"                                   # outputPath de angular.json

# --- Garde-fous anti-catastrophe (rsync --delete) ------------------------------
case "$DOCROOT" in
  "" ) echo "ERREUR: DOCROOT non defini."; exit 1 ;;
  "$HOME/public_html" | "$HOME/public_html/" )
    echo "ERREUR: DOCROOT ne doit JAMAIS etre le public_html partage (il contient tous tes sites)."
    echo "Utilise le dossier dedie du site, ex: DOCROOT=\$HOME/public_html/tinguilin.yaba-in.com"
    exit 1 ;;
esac
# Le repo ne doit PAS etre a l'interieur du docroot (sinon rsync --delete recursif).
case "$REPO_DIR/" in
  "$DOCROOT"/* )
    echo "ERREUR: le repo ($REPO_DIR) est DANS le docroot ($DOCROOT)."
    echo "Clone le repo hors docroot, ex: ~/repos/tinguilin-app"
    exit 1 ;;
esac

if [ -z "${NODE_BIN:-}" ]; then
  if   [ -d /opt/cpanel/ea-nodejs22/bin ]; then NODE_BIN="/opt/cpanel/ea-nodejs22/bin"
  elif [ -d /opt/cpanel/ea-nodejs20/bin ]; then NODE_BIN="/opt/cpanel/ea-nodejs20/bin"
  elif command -v node >/dev/null 2>&1;    then NODE_BIN="$(dirname "$(command -v node)")"
  else echo "Node introuvable. Definis NODE_BIN."; exit 1
  fi
fi
export PATH="$NODE_BIN:$PATH"
NPM="${NPM:-$NODE_BIN/npm}"
# Build Angular gourmand en RAM: relever la limite V8 si besoin.
export NODE_OPTIONS="${NODE_OPTIONS:---max-old-space-size=2048}"

echo "==> App deploy | repo=$REPO_DIR | branch=$BRANCH | docroot=$DOCROOT"
cd "$REPO_DIR"

git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"
git clean -fd -e node_modules/

if [ -f package-lock.json ]; then "$NPM" ci --no-audit --no-fund; else "$NPM" install --no-audit --no-fund; fi
"$NPM" run build
[ -d "$BUILD_DIR" ] || { echo "ERREUR: dossier de build '$BUILD_DIR' absent apres build"; exit 1; }

mkdir -p "$DOCROOT"

# Ecrit le .htaccess SPA (routing Angular cote client) AVANT la synchro,
# puis l'exclut de --delete pour ne pas l'effacer.
cat > "$BUILD_DIR/.htaccess" <<'HTACCESS'
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
HTACCESS

echo "==> Synchronisation vers $DOCROOT"
if command -v rsync >/dev/null 2>&1; then
  rsync -a --delete \
    --exclude '.well-known' \
    "$BUILD_DIR"/ "$DOCROOT"/
else
  # Fallback sans rsync: on prend soin de garder .well-known
  find "$DOCROOT" -mindepth 1 -maxdepth 1 ! -name '.well-known' -exec rm -rf {} +
  cp -a "$BUILD_DIR"/. "$DOCROOT"/
fi

echo "✅ Deploy app OK -> https://tinguilin.yaba-in.com"
