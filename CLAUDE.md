# Gutachten Prenzl – Projektnotizen

## Deployment
- **Live-Domain:** `gutachtenprenzl.de` + `www.gutachtenprenzl.de` (www leitet per `middleware.ts` auf die Hauptdomain um)
- **Vercel-Projekt:** `gutachtenprenzl` (Stand 17.11.2026 hängen beide Domains daran). `gutachtenprenzl-next` ist nicht mehr das Produktionsprojekt.
- **Deploy = Git-Push auf `main`** (`git push origin main`). Vercel baut automatisch aus GitHub main und setzt beide Domains selbst um. **Kein** `npx vercel --prod` und kein manuelles `vercel alias set` mehr.
- Status prüfen: `npx vercel ls gutachtenprenzl` (neuestes Deployment muss „Ready“ sein), Domain-Zuordnung: `npx vercel inspect gutachtenprenzl.de`. Nach jedem Deploy prüfen:
  ```
  curl -s https://gutachtenprenzl.de | grep -o '<h1[^>]*>.\{0,80\}'
  curl -sI https://www.gutachtenprenzl.de | grep -i "^HTTP\|^location"
  ```

## Lokale Entwicklung
- Dev-Server: `npm run dev` → läuft auf Port 3001
- Projektpfad: `/Users/atakan/Claude/gutachtenprenzl-next`
