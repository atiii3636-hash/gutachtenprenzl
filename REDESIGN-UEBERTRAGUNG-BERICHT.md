# Bericht: Übertragung des neuen Designs auf die Live-URLs

**Datum:** 20.08.2026
**Stand:** Lokal fertig und geprüft. **Noch nicht deployt.**

---

## Kurzfassung

Das neue Design liegt jetzt auf den echten Adressen. **Keine einzige bisherige URL wurde entfernt oder umbenannt.** Alle 33 Adressen, die heute live sind, funktionieren nach der Umstellung unverändert weiter, geprüft mit einem automatisierten Durchlauf.

Für deine Google Ads bedeutet das: **kein Handlungsbedarf, keine Anzeige läuft ins Leere.**

---

## 1. Was gesichert wurde

| Sicherung | Wo | Wie zurückholen |
|---|---|---|
| Alter Code-Stand (Git) | Tag `backup/alte-website-vor-redesign` | `git checkout backup/alte-website-vor-redesign` |
| Kompletter Arbeitsstand vor Übertragung | Commit `6f116b6` | `git reset --hard 6f116b6` |
| **Live-Version bei Vercel** | Deployment `gutachtenprenzl-next-li5g5mtc9…` | Alias zurücksetzen, dauert Sekunden |

Der dritte Punkt ist der wichtigste: Vercel behält jedes alte Deployment. Selbst wenn nach dem Livegang etwas auffällt, ist die alte Seite mit einem Befehl wieder da:

```
npx vercel alias set gutachtenprenzl-next-li5g5mtc9-atiii3636-2452s-projects.vercel.app gutachtenprenzl.de
```

**Hinweis:** `leads_output.csv` (205 Geschäftskontakte mit Namen, E-Mails, Telefonnummern) habe ich bewusst vom Git ausgeschlossen und in `.gitignore` eingetragen. Solche Daten gehören nicht in ein Code-Repository.

---

## 2. Was sich geändert hat

### Gleiche URL, neues Design (3 Seiten)
- `/` — Startseite
- `/ueber-uns`
- `/kontakt`

### Neu dazugekommen (9 URLs)
`/leistungen` · `/schadengutachten` · `/wertgutachten` · `/wertminderung` · `/restwertermittlung` · `/standorte` · `/flotten-partner` · `/partner-werden` · `/ratgeber`

### Unverändert geblieben (30 URLs)
Alle Bezirksseiten, alle Service-Landingpages, Blog, Impressum, Datenschutz. Diese Seiten behalten vorerst ihr bisheriges Design.

---

## 3. Google Ads: Risikoprüfung

### Wichtige Einschränkung
Ich habe **keinen Zugang zu deinem Google-Ads-Konto und zur Search Console**. Die dafür nötigen Verbindungen sind in dieser Sitzung nicht freigeschaltet. Die folgende Bewertung stützt sich auf den Quellcode der Seite und auf dein eigenes Dokument `landing-page-qualitaetsfaktor-audit.md` vom 17.06.2026.

### Welche Seiten deine Anzeigen ansteuern
Laut deinem Audit wird **ausschließlich für Schadengutachten** geworben, mit diesen Landingpages:

- `/unfallgutachten-berlin`
- `/heckauffahrunfall-berlin`
- `/parkschaden-gutachten-berlin`
- `/totalschaden-gutachten-berlin`
- `/kfz-gutachter-berlin`
- `/kfz-sachverstaendiger-berlin`
- `/kfz-sachverstaendiger-berlin-pankow` und weitere Bezirksseiten

**Keine einzige davon wird durch die Umstellung angefasst.** Sie behalten Adresse, Inhalt, Überschriften und Design exakt wie bisher. Damit bleiben auch Anzeigenrelevanz und Qualitätsfaktor für die beworbenen Keywords unverändert.

### Geprüfte Punkte

| Prüfung | Ergebnis |
|---|---|
| Alle 33 bisherigen URLs erreichbar | ✅ 0 Fehler von 33 |
| Anzeigen-Landingpages angefasst? | ✅ Nein, alle unverändert |
| Google-Ads-Tag (AW-18025620294) aktiv | ✅ Vorhanden |
| Conversion-Tracking eingebunden | ✅ Unverändert |
| Telefon-Links für Anruf-Conversions | ✅ 7 auf der Startseite |
| Schadenformular unter `/#schaden` | ✅ Anker vorhanden |
| Verweise `/#schaden` aus Serviceseiten | ✅ Alle 10 funktionieren |
| Interne Links auf Bezirksseiten | ✅ Alle 15 erhalten |
| Interne Links auf Service-Landingpages | ✅ Alle 4 erhalten |
| Weiterleitungen nötig? | ✅ Nein, keine URL entfernt |

---

## 4. Search Console: was zu erwarten ist

Da keine URL wegfällt, sind **keine 404-Fehler und keine Weiterleitungsketten** zu erwarten. Normal und unkritisch sind nach dem Livegang:

1. **Neue Seiten werden entdeckt.** Die neun neuen Adressen tauchen nach und nach unter „Gefunden, zurzeit nicht indexiert" auf und wandern dann in den Index. Das dauert typischerweise Tage bis wenige Wochen.
2. **Drei Seiten werden neu bewertet.** Startseite, Über uns und Kontakt haben neuen Inhalt. Google crawlt sie neu, Rankings können kurzzeitig schwanken.
3. **Sitemap wächst von 33 auf 42 URLs.**

### Was du nach dem Livegang tun solltest
- In der Search Console die Sitemap neu einreichen: `https://gutachtenprenzl.de/sitemap.xml`
- Für die Startseite eine erneute Indexierung anfordern
- Nach etwa einer Woche unter „Seiten" prüfen, ob die neun neuen URLs indexiert wurden

---

## 5. Offene Punkte

1. **Deployment steht aus.** Ich habe bewusst nicht live geschaltet, das ist deine Entscheidung.
2. **Designbruch bei den Serviceseiten.** Die 30 unveränderten Seiten sehen noch nach dem alten Design aus. Funktional kein Problem, optisch ein Bruch, wenn jemand von der neuen Startseite dorthin klickt. Das wäre der nächste sinnvolle Schritt.
3. **Ads-Konto ungeprüft.** Ich konnte die tatsächlich hinterlegten Final-URLs nicht auslesen. Falls du dort URLs eingetragen hast, die nicht in deinem Audit stehen, solltest du sie einmal gegen die Liste der 33 bestehenden URLs abgleichen.

---

## 6. Livegang

```
npx vercel --prod
npx vercel alias set <neue-deployment-url> gutachtenprenzl.de
npx vercel alias set <neue-deployment-url> www.gutachtenprenzl.de
```

Beide Alias-Befehle sind laut Projektnotizen zwingend, sonst zeigen die Domains weiterhin auf das alte Deployment.

Danach zur Kontrolle:

```
curl -s https://gutachtenprenzl.de | grep -o '<h1[^>]*>.\{0,80\}'
curl -sI https://www.gutachtenprenzl.de | grep -i "^HTTP\|^location"
```
