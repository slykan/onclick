#!/bin/bash
REPO=~/onclick

cd $REPO
echo "→ git pull..."
git checkout -- .
git pull origin main

echo "→ npm install + build..."
npm install
npm run build

echo "✓ Deployed! Static files are in $REPO/out"
