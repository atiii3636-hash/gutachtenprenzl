# Gutachten Prenzl – Projektnotizen

## Deployment
- **Live-Domain:** `gutachtenprenzl.de` + `www.gutachtenprenzl.de` (www leitet per `middleware.ts` auf die Hauptdomain um)
- **Vercel-Projekt:** `gutachtenprenzl-next` (nicht das alte `gutachtenprenzl`-Projekt!)
- Deploy-Befehl: `npx vercel --prod` im Projektordner
- Nach dem Deploy müssen **beide** Domains neu verknüpft werden:
  ```
  npx vercel alias set <neue-deployment-url> gutachtenprenzl.de
  npx vercel alias set <neue-deployment-url> www.gutachtenprenzl.de
  ```
  → **Dieser Schritt ist praktisch immer nötig.** `npx vercel --prod` deployt zwar, aber die Domains zeigen danach weiterhin auf das alte Deployment. Die `www`-Domain hing dadurch am 17.08.2026 sogar 111 Tage lang am alten, separaten `gutachtenprenzl`-Projekt fest (falsches Zertifikat + veralteter Inhalt) — seitdem läuft sie über `gutachtenprenzl-next` und muss bei jedem Deploy mit-aliast werden, sonst fällt sie wieder zurück. Nach jedem Deploy prüfen:
  ```
  curl -s https://gutachtenprenzl.de | grep -o '<h1[^>]*>.\{0,80\}'
  curl -sI https://www.gutachtenprenzl.de | grep -i "^HTTP\|^location"
  ```

## Lokale Entwicklung
- Dev-Server: `npm run dev` → läuft auf Port 3001
- Projektpfad: `/Users/atakan/Claude/gutachtenprenzl-next`
