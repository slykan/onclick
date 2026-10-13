#!/bin/bash
set -e
REPO=~/web
DEST=~/public_html

if [ ! -d "$REPO/.git" ]; then
  echo "→ Repo ne postoji, kloniram..."
  git clone https://github.com/slykan/onclick.git "$REPO"
fi

cd "$REPO"
echo "→ git pull..."
git checkout -- .
git pull origin main

echo "→ npm install + build..."
npm install
npm run build

echo "→ sync u public_html (bez diranja invoice/, oldweb/, pzvrbnik/, geotopo/ i drugih domena)..."
rsync -a --delete --chmod=D755,F644 \
  --exclude=invoice \
  --exclude=oldweb \
  --exclude=agro-log.on-click.hr \
  --exclude=agrolog.on-click.hr \
  --exclude=vrebac \
  --exclude=pzvrbnik \
  --exclude=geotopo \
  --exclude=.well-known \
  --exclude=apps \
  "$REPO/out/" "$DEST/"

# suPHP (PHP 8.x u pzvrbnik/ i ostalim podfolderima) odbija skripte ispod
# group-writable foldera -> public_html mora ostati 755, inace sve PHP stranice daju 500
chmod 755 "$DEST"

echo "✓ Deployed!"
