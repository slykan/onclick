#!/bin/bash
# on-click.hr deploy - pokrece se NA SERVERU kao onclick@vps.on-click.hr: bash ~/deploy.sh
# (kopija ove datoteke je /home/onclick/deploy.sh; od 23.11.2026. server je Hestia).
# git pull -> npm install + build -> rsync out/ u ~/public_html (= ~/web/on-clik.hr/public_html)
set -e
REPO=~/onclick-site   # NE ~/web - na Hestiji je ~/web mapa s web domenama
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

echo "→ sync u public_html (bez diranja invoice/, oldweb/, pzvrbnik/, geotopo/, puls/ i drugih domena)..."
# invoice, oldweb, pzvrbnik, geotopo, puls su linkovi na druge web domene - nikad ih ne brisati
rsync -a --delete --chmod=D755,F644 \
  --exclude=invoice \
  --exclude=oldweb \
  --exclude=agro-log.on-click.hr \
  --exclude=agrolog.on-click.hr \
  --exclude=vrebac \
  --exclude=pzvrbnik \
  --exclude=geotopo \
  --exclude=puls \
  --exclude=.well-known \
  --exclude=apps \
  "$REPO/out/" "$DEST/"

echo "✓ Deployed!"
