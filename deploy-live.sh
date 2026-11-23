#!/bin/bash
# Pokrece deploy on-click.hr s lokalnog racunala (Git Bash):  bash deploy-live.sh
# 1. provjeri da je sve pushano na GitHub (server povlaci s GitHuba, ne s ovog racunala)
# 2. spoji se kao onclick@vps.on-click.hr lozinkom iz ssh.txt (red "pass:") i pokrene ~/deploy.sh
# ssh.txt je u .gitignore i nikad se ne ispisuje.
set -euo pipefail
cd "$(dirname "$0")"

[ -f ssh.txt ] || { echo "Nema ssh.txt (redovi host:, user:, pass:)."; exit 1; }

git fetch -q origin main
if [ -n "$(git log origin/main..HEAD --oneline)" ]; then
  echo "STOP: imas lokalne commitove koji nisu pushani (git push), server bi deployao staru verziju."
  exit 1
fi

HOST=$(sed -n 's/^host:[[:space:]]*//p' ssh.txt | head -1 | tr -d '\r\n')
USR=$(sed -n 's/^user:[[:space:]]*//p' ssh.txt | head -1 | tr -d '\r\n')
HOST=${HOST:-vps.on-click.hr}
USR=${USR:-onclick}

ASK=$(mktemp)
trap 'rm -f "$ASK"' EXIT
printf '#!/bin/sh\nsed -n "s/^pass:[[:space:]]*//p" "%s" | head -1 | tr -d "\\r\\n"\n' "$(pwd)/ssh.txt" > "$ASK"
chmod 700 "$ASK"

echo "→ deploy na $USR@$HOST (commit $(git rev-parse --short HEAD))..."
# samo JEDAN pokusaj lozinke - vise pogresnih pokusaja = fail2ban/CrowdSec zabrana IP-a na nekoliko sati
SSH_ASKPASS="$ASK" SSH_ASKPASS_REQUIRE=force DISPLAY=:0 \
  ssh -o NumberOfPasswordPrompts=1 -o PubkeyAuthentication=no -o PreferredAuthentications=password \
  "$USR@$HOST" 'bash ~/deploy.sh' < /dev/null
