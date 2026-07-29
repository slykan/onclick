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

echo "→ sync u public_html (bez diranja invoice/, oldweb/ i drugih domena)..."
rsync -a --delete \
  --exclude=invoice \
  --exclude=oldweb \
  --exclude=agro-log.on-click.hr \
  --exclude=agrolog.on-click.hr \
  --exclude=royal \
  --exclude=vrebac \
  --exclude=.well-known \
  "$REPO/out/" "$DEST/"

echo "✓ Deployed!"
