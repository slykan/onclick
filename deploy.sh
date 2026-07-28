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

echo "→ sync u public_html (bez diranja invoice/ i oldweb/)..."
rsync -a --delete --exclude=invoice --exclude=oldweb "$REPO/out/" "$DEST/"

echo "✓ Deployed!"
