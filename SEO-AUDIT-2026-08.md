# SEO-Audit Gutachten Prenzl — Search-Console-Auswertung

**Datenbasis:** GSC-Export `gutachtenprenzl.de`, Suchtyp Web
**Zeitraum:** 19.04.2026 – 18.08.2026 (122 Tage — der Filter sagt „letzte 12 Monate", Daten gibt es aber erst ab dem 19.04.)
**Gesamt:** 238 Klicks · 45.593 Impressionen · CTR 0,52 % · Ø-Position 11,3

---

## 1. Der Befund, der alles andere erklärt

Impressionen nach Positionsbereich:

| Bereich | Impressionen | Anteil | Klicks | CTR |
|---|---:|---:|---:|---:|
| Top 3 | 2.574 | 6,5 % | 104 | **4,04 %** |
| Pos 4–5 | 4.924 | 12,4 % | 10 | 0,20 % |
| Pos 6–10 | 14.933 | 37,5 % | 14 | 0,09 % |
| Pos 11–20 | 12.368 | 31,1 % | 6 | 0,05 % |
| Pos 21–50 | 4.671 | 11,7 % | 0 | 0,00 % |

**6,5 % der Impressionen liefern 78 % der Klicks.** Alles ab Position 4 ist praktisch tot: 0,09 % CTR auf Position 6–10, wo der Benchmark bei 1,5–2 % liegt. Das ist Faktor 20 darunter.

Der Grund ist nicht die Seite, sondern die SERP. Bei lokalen Suchen wie „kfz gutachter berlin" stehen über den organischen Treffern: Google Ads, das Local Pack (Maps), oft eine AI Overview. Organische Position 6 heißt in der Praxis „drei Scrolls weit unten". Deshalb gibt es Suchanfragen mit Position 2,6 und **null** Klicks auf 374 Impressionen („kfz wertgutachten") — die Position ist real, sichtbar ist sie trotzdem nicht.

**Konsequenz für die Priorisierung:** Titel und Meta-Descriptions zu optimieren bringt auf Position 6–20 fast nichts. Es zahlt nur, was in die Top 3 oder ins Local Pack führt.

Zur Einordnung der 238 Klicks: 63 entfallen auf die kuriose Anfrage „gutachter deutschland" (Position 1,07, CTR 76 % — vermutlich eine einzelne Person, die wiederholt sucht), 34 auf die Marke „gutachten prenzl". Echter, nicht-markenbezogener Neukunden-Traffic sind rund **37 Klicks in vier Monaten**.

---

## 2. Quick Wins — sortiert nach Ertrag pro Aufwand

### QW1 — `/kfz-gutachter-berlin` hat null interne Links

Sitemap-weiter Crawl aller 44 URLs: die Seite wird von **keiner einzigen** anderen Seite verlinkt. Weder Navigation noch Footer noch Fließtext.

Sie zielt auf das mit Abstand größte Keyword im Konto:

| Keyword | Impressionen | Position |
|---|---:|---:|
| kfz gutachter berlin | 1.940 | 10,0 |

Gleichzeitig konkurrieren **drei Seiten** um denselben Begriff:

| URL | Title | Impr. | Interne Links |
|---|---|---:|---:|
| `/` | „Kfz Gutachter Berlin, kostenlos bei unverschuldetem Unfall" | 39.825 | — |
| `/kfz-gutachter-berlin` | „KFZ-Gutachter Berlin – Unfallgutachten in 24h" | 0 | **0** |
| `/kfz-sachverstaendiger-berlin` | „KFZ Sachverständiger Berlin – kostenlos, in 24h" | 1.207 (Pos 48) | 15 |

Die Startseite hat die gesamte Autorität und rankt bereits auf Position 9. Die verwaiste Seite kann nichts gewinnen, verwässert aber das Signal.

**Aufwand: 10 Minuten.** 301 von `/kfz-gutachter-berlin` auf `/`. Aus der Sitemap nehmen. `/kfz-sachverstaendiger-berlin` behalten (eigener Suchbegriff, 676 + 489 + 573 Impressionen auf „kfz sachverständiger …"), aber inhaltlich klar von der Startseite abgrenzen und aus dem Fließtext heraus verlinken.

---

### QW2 — Prenzlauer Berg steht auf 4,8 und ist der günstigste Weg in die Top 3

| Keyword | Impressionen | Position |
|---|---:|---:|
| kfz gutachter prenzlauer berg | 1.365 | 4,8 |
| kfz gutachter berlin pankow | 191 | 4,4 |
| auto gutachten pankow | 163 | 4,6 |
| kfz gutachten pankow | 578 | 7,5 |
| kfz gutachter pankow | 1.346 | 9,4 |

Pankow/Prenzlauer Berg ist der Heimatbezirk und damit der Bereich mit der besten lokalen Relevanz — 4.297 Impressionen gebündelt. Position 4,8 auf das Hauptkeyword ist ein Katzensprung.

**Aufwand: ein halber Tag.** Die Bezirksseiten laufen alle über dasselbe Template: rund 950 Wörter gerendert, davon nur **275–310 Wörter bezirksspezifisch** (gemessen in `lib/bezirk-content.ts`). Der Rest ist bei allen 15 Bezirken identisch. Für die zwei Kernbezirke lohnt es, den einzigartigen Anteil auf 700–900 Wörter zu heben: echte Straßen und Werkstätten, Unfallschwerpunkte, Bearbeitungszeiten für den Bezirk, zwei bis drei anonymisierte Fallbeispiele.

Wenn das trägt, dasselbe für Mitte (2.028 Impr., Ø-Pos 10,8).

---

### QW3 — Sechs Bezirke mit Nachfrage, aber ohne eigene Seite

| Bezirk | Impressionen | Ø-Position | Top-Anfrage |
|---|---:|---:|---|
| Hellersdorf | 588 | 23,0 | kfz gutachter hellersdorf (246) |
| Treptow | 460 | 16,8 | kfz gutachter treptow (162) |
| Zehlendorf | 295 | 18,8 | kfz gutachter zehlendorf (123) |
| Weißensee | 264 | 14,2 | kfz gutachter weißensee (254) |
| Moabit | 166 | 19,6 | kfz sachverständiger moabit (73) |
| Wedding | 99 | 37,0 | kfz gutachter wedding (60) |

Zusammen 1.872 Impressionen ohne passende Zielseite. Die Route `kfz-sachverstaendiger-berlin-koepenick` deckt Treptow-Köpenick nur halb ab, „treptow" taucht dort nicht als eigenes Signal auf.

**Aufwand: ein Tag für alle sechs.** Template existiert, es fehlt nur der Inhalt. Wichtig: nicht das Template kopieren und Ortsnamen tauschen — dünne Duplikate ziehen die ganze Domain runter. Lieber vier gute als sechs leere.

---

### QW4 — Lichtenberg: falsches URL-Muster, 1.346 Impressionen auf Position 20

Alle Bezirksseiten heißen `kfz-sachverstaendiger-berlin-<bezirk>`. Lichtenberg heißt `/kfz-gutachter-lichtenberg` — und rankt mit Ø-Position 20,2 deutlich schlechter als vergleichbare Bezirke.

Im Index liegen zusätzlich beide Varianten aus der alten WordPress-Zeit:

| URL | Impressionen | Position |
|---|---:|---:|
| `/kfz-gutachter-lichtenberg` | 1.391 | 22,9 |
| `/kfz-gutachter-lichtenberg/` | 36 | 9,9 |

Die Trailing-Slash-Variante rankt besser, hat aber fast keine Impressionen — die Signale sind auf zwei URLs verteilt. Next.js löst den Slash inzwischen sauber auf, die Altlast steht aber weiter in Googles Index.

**Aufwand: 20 Minuten.** Auf `/kfz-sachverstaendiger-berlin-lichtenberg` umziehen, 301 von der alten URL, Sitemap anpassen, in der Search Console neu indexieren lassen.

---

### QW5 — Keyword-Cluster ohne Seite, aber mit guter Position

| Cluster | Impressionen | Ø-Position | Beste Anfrage |
|---|---:|---:|---|
| Wertgutachten / Oldtimer | 1.845 | 7,5 | kfz wertgutachten (374, Pos 2,6) |
| „in der Nähe" | 741 | 7,0 | kfz gutachter in der nähe (383, Pos 8,8) |
| Kurzgutachten | 336 | 2,8 | kurzgutachten berlin (333, Pos 2,8) |
| LKW / Transporter | 200 | 4,5 | sachverständiger lkw (99, Pos 7) |
| Wohnmobil | 161 | 4,6 | sachverständiger für wohnmobile (77, Pos 2,6) |
| Beweissicherung | 102 | 4,1 | beweissicherung unfallgutachten berlin (80, Pos 3,1) |
| Motorrad | 129 | 9,9 | motorrad gutachter berlin (43, Pos 13) |

Kurzgutachten steht auf Position 2,8 ohne eigene Seite — das ist reine Startseiten-Relevanz. Eine eigene Seite mit Preis, Abgrenzung zum Vollgutachten und Anwendungsfall („Bagatellschaden unter 750 €") sollte dort stabil in die Top 3 gehen.

**Achtung Ads-Abgrenzung:** Wert- und Oldtimergutachten sind in den Google Ads bewusst als Negatives gesetzt. Organisch ist das Cluster mit 1.845 Impressionen und Ø-Position 7,5 aber das zweitgrößte im Konto. Vor dem Ausbau kurz entscheiden, ob das Geschäftsfeld gewollt ist — sonst wird Aufwand in Anfragen investiert, die nicht bedient werden sollen.

---

### QW6 — Immobilien-Anfragen: 1.208 Impressionen, vermutlich Fehlrelevanz

| Anfrage | Impressionen | Position |
|---|---:|---:|
| wohnungsgutachten berlin | 278 | 17,1 |
| immobilienbewertung verkehrswertgutachten berlin | 248 | 18,6 |
| verkehrswertgutachten berlin | 235 | 9,5 |

Die Seite rankt für Immobiliengutachten, obwohl sie ein Kfz-Sachverständigenbüro ist. 1.208 Impressionen, 0 Klicks. Das ist kein Schaden, aber es erklärt einen Teil des CTR-Verfalls: seit Juli sind die Impressionen von 8.650 auf 16.184 gestiegen, die Klicks von 140 auf 37 gefallen. Ein Gutteil des Zuwachses sind solche themenfremden Long-Tail-Einblendungen auf Position 15+.

Kein Handlungsbedarf, aber beim Lesen der CTR mitdenken: der Nenner ist aufgebläht.

---

## 3. Was die Zahlen nicht hergeben — und wo der eigentliche Hebel liegt

**Local Pack.** Bei „kfz gutachter berlin" gehen die meisten Klicks an die drei Maps-Einträge über den organischen Treffern. Der GSC-Export sagt dazu nichts, weil Maps-Klicks nicht darin auftauchen. Angesichts von 0,09 % CTR auf Position 6–10 ist das Google-Business-Profil mit hoher Wahrscheinlichkeit der größere Hebel als jede Onpage-Maßnahme in diesem Dokument — Kategorien, Leistungen, Fotos, kontinuierlich neue Bewertungen. Das gehört geprüft, bevor weitere Bezirksseiten gebaut werden.

**www-Zertifikat.** Laut Projektnotizen hing `www.gutachtenprenzl.de` 111 Tage am alten Vercel-Projekt und lieferte ein falsches Zertifikat. Behoben am 17.08.2026 — das aktuelle Zertifikat ist auf genau dieses Datum ausgestellt, die Weiterleitung auf die Hauptdomain steht (301, verifiziert). Dieser Export ist eine Apex-Property und enthält den www-Traffic nicht; ob dort separat Impressionen verloren gingen, lässt sich nur in einer eigenen www-Property sehen. Für die Zukunft erledigt.

**Redesign.** Der Umbau lief vom 19.–21.08. und liegt damit hinter dem Ende des Messzeitraums. Die Zahlen hier bilden ihn noch nicht ab. Erste Wirkung frühestens Mitte September beurteilbar.

---

## 4. Reihenfolge

| # | Maßnahme | Aufwand | Erwartung |
|---|---|---|---|
| 1 | Google-Business-Profil prüfen und ausbauen | 2 h | größter Hebel, nicht messbar in GSC |
| 2 | `/kfz-gutachter-berlin` per 301 auf `/` auflösen | 10 min | Kannibalisierung weg |
| 3 | Lichtenberg auf einheitliches URL-Muster umziehen | 20 min | +1.400 Impr. konsolidiert |
| 4 | Prenzlauer Berg + Pankow inhaltlich verdreifachen | 0,5 Tag | Pos 4,8 → Top 3, ca. +14 Klicks/Monat |
| 5 | Seite „Kurzgutachten Berlin" anlegen | 2 h | Pos 2,8 absichern |
| 6 | 4 fehlende Bezirke (Hellersdorf, Treptow, Zehlendorf, Weißensee) | 1 Tag | +1.600 Impr. mit Zielseite |
| 7 | Entscheidung Wertgutachten/Oldtimer: ausbauen oder ignorieren | — | 1.845 Impr. hängen daran |

Realistisches Ziel für Punkt 2–6: die Suchanfragen zwischen Position 3,5 und 8 mit ≥150 Impressionen summieren sich auf **+73 Klicks/Monat**, wenn sie die Top 3 erreichen. Heute liegt die Website bei rund 34 Klicks/Monat insgesamt.

---

## 5. Technisch geprüft und in Ordnung

Damit klar ist, wo *nicht* das Problem liegt:

- `robots.txt` sauber, alle relevanten Bots erlaubt, Sitemap referenziert
- Sitemap mit 44 URLs, alle kanonisch, keine Leichen
- Canonicals selbstreferenzierend, `robots: index, follow` auf allen geprüften Seiten
- Schema: `LocalBusiness` + `ProfessionalService`, FAQPage, BreadcrumbList, Service/Offer — vollständig serverseitig gerendert
- `aggregateRating` fehlt bewusst und richtig (Self-Serving-Reviews sind bei Google unzulässig)
- Trailing-Slash-Redirects greifen, alte WordPress-URLs sind weitergeleitet
- Interne Verlinkung dicht (40+ eingehende Links pro Bezirksseite) — mit der einen Ausnahme aus QW1
- Seitenumfang 820–1.100 Wörter pro Landingpage, serverseitig gerendert

Der Flaschenhals ist nicht die Technik. Es ist die Sichtbarkeit oberhalb von Position 4.
