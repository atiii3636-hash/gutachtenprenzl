#!/bin/bash
# Gibt den Wochenfall frei: Branch faelle-auto nach main uebernehmen und
# veroeffentlichen. Doppelklick im Finder genuegt.
#
# Warum ein Skript und nicht drei Befehle von Hand: Nach `vercel --prod` zeigen
# beide Domains weiterhin auf das alte Deployment, bis die Aliase neu gesetzt
# sind. Das wird regelmaessig vergessen (siehe CLAUDE.md) — hier passiert es
# automatisch, inklusive Kontrolle danach.
set -euo pipefail

cd /Users/atakan/Claude/gutachtenprenzl-next

if ! git rev-parse --verify faelle-auto >/dev/null 2>&1; then
  echo "Kein Branch faelle-auto da — diese Woche gibt es nichts freizugeben."
  exit 0
fi

echo "== Was freigegeben wird =="
git log --oneline main..faelle-auto
echo
read -r -p "Freigeben und veroeffentlichen? [j/N] " antwort
[[ "$antwort" == "j" || "$antwort" == "J" ]] || { echo "Abgebrochen."; exit 0; }

git checkout main
git merge --no-ff faelle-auto -m "faelle: Wochenfall freigegeben"
git push origin main

echo
echo "== Deploy =="
URL=$(npx vercel --prod | tail -n 20 | grep -Eo 'https://[a-zA-Z0-9.-]+\.vercel\.app' | tail -1)

if [[ -z "$URL" ]]; then
  echo "Deployment-URL nicht erkannt. Aliase bitte von Hand setzen:"
  echo "  npx vercel alias set <url> gutachtenprenzl.de"
  echo "  npx vercel alias set <url> www.gutachtenprenzl.de"
  exit 1
fi

echo "Deployment: $URL"
npx vercel alias set "$URL" gutachtenprenzl.de
npx vercel alias set "$URL" www.gutachtenprenzl.de

echo
echo "== Kontrolle =="
printf 'gutachtenprenzl.de/faelle     %s\n' "$(curl -s -o /dev/null -w '%{http_code}' https://gutachtenprenzl.de/faelle)"
printf 'www (erwartet 301/308)        %s\n' "$(curl -s -o /dev/null -w '%{http_code}' https://www.gutachtenprenzl.de)"

git branch -d faelle-auto
echo
echo "Fertig. Fenster kann zu."
