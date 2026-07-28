#!/bin/bash
set -e
REPO=~/onclick

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

echo "→ popravljam vlasništvo (Apache/CloudLinux SuExec workaround)..."
sudo chown -R www-data:www-data "$REPO/out"

echo "✓ Deployed! Static files are in $REPO/out"
