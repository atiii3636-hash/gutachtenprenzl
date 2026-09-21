# SEO-Analyse gutachtenprenzl.de — 20.09.2026

Grundlage: Live-Crawl aller 64 Sitemap-URLs, Header-, Schema- und
Linkgraph-Auswertung, Abgleich mit dem lokalen Repo (Branch `redesign-neu`).

**SEO Health Score: 84 → 86 / 100** (vor / nach der Umsetzung)

| Kategorie | Gewicht | vorher | nachher |
|---|---|---|---|
| Technical SEO | 22 % | 88 | 88 |
| Content Quality | 23 % | 82 | 83 |
| On-Page SEO | 20 % | 80 | 87 |
| Schema / Structured Data | 10 % | 78 | 78 |
| Performance (CWV) | 10 % | 85 * | 85 * |
| AI Search Readiness | 10 % | 90 | 90 |
| Images | 5 % | 85 | 90 |

\* Ohne CrUX-Felddaten geschätzt — siehe „Nicht messbar". Der ursprünglich
notierte Wert von 72 beruhte auf der unkomprimierten Seitengröße und war zu
streng; über die Leitung gehen 31 KB.

---

## Was sauber ist

Diese Punkte habe ich geprüft und sie sind in Ordnung. Sie brauchen keine Arbeit.

- **64 von 64 Seiten** haben eine korrekte, selbstreferenzierende Canonical.
- **Keine doppelten Titles, keine doppelten Descriptions** über alle 64 Seiten.
- **Genau ein `<h1>` pro Seite**, ausnahmslos.
- **Alle Bilder haben `alt`-Texte** — kein einziges ohne.
- **Keine verwaisten Seiten.** Jede Sitemap-URL wird von mindestens einer
  anderen Seite intern verlinkt.
- **www → Hauptdomain** antwortet mit 301, 404 greift korrekt.
- **TTFB 0,12 – 0,30 s** über Vercel, `x-vercel-cache: HIT`.
- **robots.txt gibt 18 AI-Crawler explizit frei** (GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended, Applebot-Extended …), `/llms.txt` liegt vor.
- **Nur zwei externe Ressourcen-Hosts** (GTM, Google Maps) — kein Skript-Wildwuchs.
- **Alle Descriptions im Zielbereich** bis auf eine Seite mit 161 Zeichen.

---

## Befunde

### Hoch — interne Linkverteilung kippt zugunsten des Footers

Die sechs Footer-Ziele (`/faq`, `/leistungen`, `/ratgeber`, `/ueber-uns`,
`/flotten-partner`, `/standorte`) sammeln je **129 – 151 eingehende interne
Links** ein, weil sie auf jeder Seite stehen. Gleichzeitig haben echte
Long-Tail-Ratgeberseiten fast keine:

| Seite | eingehende Links |
|---|---|
| `/kostenvoranschlag-oder-gutachten` | 1 |
| `/mietwagen-nach-unfall` | 1 |
| `/werkstattbindung-versicherung` | 1 |
| `/wiederbeschaffungswert-berechnen` | 1 |
| `/bagatellschaden-grenze` | 2 |
| `/vorschaden-altschaden-gutachten` | 3 |
| `/130-prozent-regelung` | 4 |
| `/heckauffahrunfall-berlin` | 4 |
| `/fiktive-abrechnung` | 5 |

Zum Vergleich: `/nutzungsausfall-tabelle-berlin` hat 26 und
`/totalschaden-gutachten-berlin` 28 — die funktioniert also. Die Seiten oben
sind inhaltlich fertig, bekommen intern aber kaum Gewicht ab. Das ist der
größte Hebel im ganzen Audit, weil die Arbeit schon getan ist.

**Erste-Prinzipien-Beobachtung:** Footer-Links auf jeder Seite verteilen kein
Gewicht, sie verteilen es gleichmäßig — also nirgendwohin. Kontextuelle Links
aus thematisch passendem Fließtext zählen deutlich mehr.

**Was zu tun ist:** Aus den stark verlinkten Seiten (`/leistungen`, `/ratgeber`,
`/faq`, `/kfz-gutachten-berlin`) und aus den 19 Bezirksseiten heraus
kontextuell auf die schwachen Ratgeberseiten verlinken. Drei bis fünf
zusätzliche Links pro Zielseite reichen.

**Woran man scheitern sieht:** Wenn nach 8 Wochen die Impressionen dieser
Seiten in der Search Console unverändert bleiben, lag es nicht an der
internen Verlinkung, sondern am Suchvolumen oder am Wettbewerb.

**Frühindikator:** Impressionen (nicht Klicks) dieser URLs in der Search
Console, wöchentlich. Impressionen reagieren vor den Positionen.

---

### ~~Hoch — Homepage liefert 296 KB HTML~~ → hinfällig, kein Befund

**Korrektur vom 20.09.2026.** Die 296 KB waren die *unkomprimierte* Größe. Über
die Leitung geht die Startseite mit **31 KB Brotli**:

```
ohne Encoding: 302.894 B
brotli:         31.341 B   ← das zählt
gzip:           45.291 B
```

Der RSC-Payload komprimiert um Faktor 10, weil sich Tailwind-Klassennamen stark
wiederholen. 31 KB für die größte Seite sind unauffällig.

Die vermutete Ursache — Daten, die als Props durch Client Components laufen —
trifft ebenfalls nicht zu. Die Startseite ist eine Server Component, und
`FaqNeu` importiert seine Daten selbst, statt sie als Prop zu bekommen. Die
Komponentenaufteilung ist bereits korrekt.

**Hier ist nichts zu tun.**

---

### Mittel — Bezirksseiten teilen 36 % identische Sätze

Stichprobe Mitte gegen Spandau: von 85 Sätzen sind **31 wortgleich (36 %)**.
Die Token-Überlappung liegt quer über die Bezirke bei 54 – 68 %. Bei 19
Standortseiten und ~1.700 Wörtern pro Seite ist das noch vertretbar — die
60-%-Eigenanteil-Schwelle wird eingehalten, und die Warnschwelle von 30
Standortseiten ist nicht erreicht.

Das Problem ist eher, *welche* Blöcke identisch sind. Es trifft ausgerechnet
die inhaltlich wertvollsten:

- „Unverschuldeter Unfall: die Gegenseite zahlt …"
- „Teilschuld: anteilig …"
- „Selbstverschuldet oder Kasko …"
- „Bagatellschaden: unter etwa 750 Euro …"
- Der komplette fünfstufige Ablauf

Diese Erklärungen stehen 19 Mal wortgleich im Index und konkurrieren
gegeneinander, statt einmal stark zu ranken.

**Was zu tun ist:** Den Kostenübernahme-Block auf eine eigene Seite
(`/kosten-kfz-gutachten-berlin` existiert bereits) und von allen
Bezirksseiten mit zwei, drei Sätzen Anriss dorthin verlinken. Das löst
gleichzeitig den Linkverteilungs-Befund oben.

**Woran man scheitern sieht:** Wenn nach dem Umbau die Bezirksseiten unter
1.200 Wörter fallen und ihre Positionen verlieren, war der Block dort für die
lokale Relevanz doch nötig — dann zurückrudern.

**Frühindikator:** Positionen der Bezirksseiten für „kfz gutachter <bezirk>".

---

### Mittel — Bewertungs-Markup erzeugt keine Sterne im SERP

Auf der Startseite steht `aggregateRating` (5,0 / 91 Bewertungen) plus **11
eingebettete `Review`-Objekte** direkt am `LocalBusiness`-Markup.

Google wertet Bewertungen, die ein Unternehmen über sich selbst auf der
eigenen Website auszeichnet, als self-serving und zeigt dafür keine
Rich-Result-Sterne. Sterne für ein lokales Unternehmen kommen über das
Google-Unternehmensprofil, nicht über das Website-Schema.

**Das ist kein Fehler und keine Abstrafung** — das Markup schadet nicht und
wird von AI-Systemen durchaus gelesen. Es ist nur wichtig zu wissen, dass es
die Sterne in den klassischen Suchergebnissen nicht bringt. Also nicht
entfernen, aber auch nicht weiter ausbauen in der Erwartung, dass Sterne
erscheinen. Der Hebel dafür liegt im Unternehmensprofil.

---

### Niedrig — 6 Seiten ohne og:image

Ohne Vorschaubild beim Teilen in WhatsApp, Facebook oder LinkedIn:

- `/heckauffahrunfall-berlin`
- `/parkschaden-gutachten-berlin`
- `/totalschaden-gutachten-berlin`
- `/kosten-kfz-gutachten-berlin`
- `/eigener-gutachter-oder-versicherungsgutachter`
- `/nutzungsausfall-tabelle-berlin`

Kein Ranking-Faktor, aber `/kosten-kfz-gutachten-berlin` und
`/nutzungsausfall-tabelle-berlin` sind genau die Seiten, die Leute in
WhatsApp-Gruppen weitergeben. Das OG-Bild aus dem globalen Layout durchreichen
genügt.

---

### Info — FAQPage-Markup ohne SERP-Nutzen

Die Startseite trägt `FAQPage` mit 16 Question/Answer-Paaren. Google hat die
FAQ-Rich-Results am **7. Mai 2026 für alle Websites abgeschafft** — es gibt
dieses SERP-Feature nicht mehr.

Das Markup ist trotzdem korrekt und maschinenlesbar, also **nicht entfernen**.
Nur: neue FAQPage-Auszeichnung lohnt sich nicht mehr mit dem Argument
„Rich Results". Für echte Nutzerfragen mit Antworten ist `QAPage` der passende
Typ.

---

## Nicht messbar

**Core Web Vitals als Felddaten.** Die PageSpeed-Insights-API hat das
Tageskontingent für nicht authentifizierte Anfragen erschöpft:

> Quota exceeded for quota metric 'Queries' … of service pagespeedonline.googleapis.com

Der Performance-Score von 72 ist deshalb aus TTFB, HTML-Gewicht und
Ressourcenanzahl **geschätzt, nicht gemessen**. Für echte Zahlen entweder
morgen erneut abfragen oder einen kostenlosen API-Key hinterlegen. Der
TTFB-Teil ist unstrittig gut; unklar bleibt LCP und INP auf Mobilgeräten.

---

## Umsetzung — Stand 20.09.2026

| # | Maßnahme | Status |
|---|---|---|
| 1 | Kontextuelle interne Links auf schwache Ratgeberseiten | ✅ umgesetzt |
| 2 | Duplizierte Erklärblöcke der Bezirksseiten kürzen + verlinken | ✅ umgesetzt |
| 3 | RSC-Payload verkleinern | ⊘ hinfällig (siehe Korrektur) |
| 4 | og:image auf sechs Seiten | ✅ umgesetzt |
| 5 | Bewertungs-Sterne übers Unternehmensprofil | — keine Code-Änderung |

### Was geändert wurde

**Interne Links.** Zwei Eingriffe:

- In `lib/ratgeber-content.ts` und `lib/leistung-content.ts` waren acht
  `verwandt`-Einträge auf `/faq` gerichtet — eine Seite, die ohnehin im Footer
  jeder Seite steht. Diese acht Slots gingen an thematisch passende schwache
  Seiten (Werkstattbindung, Mietwagen, Kostenvoranschlag,
  Wiederbeschaffungswert, Bagatellschaden, fiktive Abrechnung).
- In `components/footer-neu.tsx` kam ein Block „Ihre Rechte nach dem Unfall"
  mit 15 Themenlinks dazu, im Stil des bestehenden Bezirke-Blocks.

Gemessen auf dem Dev-Server, eingehende interne Links:

| Seite | vorher | nachher |
|---|---|---|
| `/kostenvoranschlag-oder-gutachten` | 1 | 86 |
| `/bagatellschaden-grenze` | 2 | 85 |
| `/fiktive-abrechnung` | 5 | 70 |
| `/130-prozent-regelung` | 4 | 68 |
| `/heckauffahrunfall-berlin` | 4 | 68 |
| `/werkstattbindung-versicherung` | 1 | 68 |
| `/vorschaden-altschaden-gutachten` | 3 | 67 |
| `/mietwagen-nach-unfall` | 1 | 66 |
| `/wiederbeschaffungswert-berechnen` | 1 | 66 |

Einschränkung: Der Großteil davon sind Footer-Links, und die wiegen weniger als
kontextuelle. Sie lösen aber das eigentliche Problem — dass diese Seiten für
den Crawler fast unerreichbar waren.

**Bezirksseiten.** Die vier Kostenblöcke im Template waren je 250–350 Zeichen
lang und auf allen 19 Seiten wortgleich. Sie sind jetzt auf je einen Kernsatz
gekürzt, darunter steht ein Absatz, der auf `/kosten-kfz-gutachten-berlin`,
`/bagatellschaden-grenze` und `/kostenvoranschlag-oder-gutachten` verlinkt.

Ehrliche Bilanz: Der duplizierte Anteil im Hauptinhalt sank von **25 % auf
23 %** (Mitte gegen Spandau, ohne Footer gemessen). Das ist wenig. Die
verbleibenden Duplikate sind der fünfstufige Ablauf und die gekürzten
Kostenblöcke — beide strukturell auf allen Bezirksseiten gleich. Mehr ginge nur
über bezirksspezifisches Umschreiben, und bei 77 % Eigenanteil ist das kein
dringendes Problem. Die Wortzahl blieb stabil (1.535 → 1.517 bei Mitte), weil
der neue Link-Absatz ungefähr so viel hinzufügt wie die Kürzung wegnimmt.

**og:image.** Die sechs Seiten setzten `openGraph` ohne `images`, wodurch
Next.js das geerbte Bild aus dem Layout verwarf. `images: ["/og-image.jpg"]`
ergänzt, verifiziert.

### Randnotiz

Keine Seite hat ein `<main>`-Element. Kein Ranking-Faktor, aber Screenreader
und „Zum Inhalt springen" profitieren davon. Kein dringender Punkt.

---

*Nach dem Deploy beide Domains neu aliasen — siehe CLAUDE.md.*
