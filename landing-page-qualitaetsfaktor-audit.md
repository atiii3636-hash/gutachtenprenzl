# Qualitätsfaktor-Audit — gutachtenprenzl.de
**Analyse-Datum:** 2026-06-17
**Fokus:** Landing-Page-Experience & Anzeigenrelevanz für Google-Ads-Qualitätsfaktor (QS), Schwerpunkt Keywords
**Methodik:** Code-Audit aller Landingpages + Tracking-Setup. (Echte Core-Web-Vitals-Werte bitte zusätzlich per PageSpeed Insights gegenprüfen — siehe Punkt „Speed".)

> **Hinweis:** Domain ist `gutachtenprenzl.de` (ohne zweites „e" — nicht „gutachtenpren**ze**l.de"). Final-URL der Anzeigen muss exakt zur angezeigten Domain passen, sonst Ablehnung.

---

## TL;DR — Gesamtnote: **B+ (≈ 84/100)**

> **Scope (Stand 2026-06-17):** Es wird **nur für Schadengutachten** geworben (Unfall-/Haftpflichtschaden), **nicht** für Wertgutachten/Oldtimer. Damit ist die Landingpage-Abdeckung für die beworbenen Keywords **vollständig** — alle Ad-Themen haben eine passende Seite.

Die Seite ist für lokale Verhältnisse **überdurchschnittlich gut** auf den QS vorbereitet. Es gibt dedizierte Landingpages pro Keyword-Thema, die H1 matcht das Keyword exakt, Consent Mode v2 + Conversion-Tracking laufen sauber, Mobile ist stark. Was noch QS kostet (= höhere Klickpreise):

1. 🔴 **Dünne & fast identische Service-Seiten** — `kfz-sachverstaendiger-berlin` und `kfz-gutachter-berlin` sind nahezu Duplikate; die Sachverständiger-Seite hat fast keinen Fließtext. Google bewertet dünne/doppelte Inhalte schwächer.
2. 🟡 **Formular nur auf Startseite** — Service-Seiten springen zum Absenden auf `/#schaden`; kostet Conversions + keyword-passenden Kontext.

> ⚠️ **Konsequenz für die Negativliste:** `google-ads-kampagnen-optimierung.md` (Teil A) empfiehlt, ~14 Wertgutachten-/Oldtimer-Negatives zu **entfernen**. Das galt für die Annahme „Wertgutachten/Oldtimer wird beworben". Da du **nur Schadengutachten** bewirbst, gilt das Gegenteil: diese Negatives **drinlassen** (bzw. wieder aufnehmen), sonst zahlst du für Klicks, die du gar nicht willst.

---

## Wie der Qualitätsfaktor funktioniert (kurz)

QS wird **pro Keyword** gemessen aus 3 Teilen:

| Komponente | Was es ist | Beeinflusst durch |
|---|---|---|
| **Erwartete CTR** | Klickwahrscheinlichkeit der Anzeige | Anzeigentext, Erweiterungen (nicht Website) |
| **Anzeigenrelevanz** | Passt Keyword zum Anzeigentext | Anzeige + Keyword im Seiteninhalt |
| **Landingpage-Experience** | Erfahrung nach dem Klick | **← deine Website** |

Die Website beeinflusst direkt **Landingpage-Experience** und indirekt **Anzeigenrelevanz** (Keyword muss auf der Zielseite vorkommen). Höherer QS = besserer Anzeigenrang bei **niedrigerem CPC**. Faustregel: QS von 5 → 8 kann den Klickpreis grob halbieren.

**Wichtig:** Die größten verbleibenden Hebel für deinen *Konto-QS* sind teils nicht die Website, sondern Kontostruktur (Gebotsstrategie, Standort „Anwesenheit", Anruf-Conversions) — die stehen schon in `google-ads-kampagnen-optimierung.md`. Dieses Audit deckt die **Website-Seite** ab.

---

## Scorecard (typische Service-Landingpage)

```
Message Match (Keyword↔Seite):  █████████░  88/100   stark
Page Speed:                     ████████░░  82/100   gut (live gegenprüfen)
Mobile:                         █████████░  90/100   stark
Trust-Signale:                  ███████░░░  75/100   ok, nicht auf jeder Seite
Formular / Lead-Erfassung:      ██████░░░░  62/100   Formular fehlt auf Unterseiten
```

---

## Was bereits sehr gut ist ✅

- **Dedizierte Landingpages pro Thema** (`unfallgutachten-berlin`, `kfz-sachverstaendiger-berlin`, `kfz-gutachter-berlin`, `heckauffahrunfall-berlin`, `parkschaden-gutachten-berlin`, `totalschaden-gutachten-berlin`) + 14 Bezirksseiten. Das ist die Grundlage für guten QS — fast alle lokalen Wettbewerber schicken alles auf die Startseite.
- **H1 = Keyword, wörtlich.** „Unfallgutachten Berlin", „KFZ Sachverständiger Berlin" usw. Das ist der mit Abstand wichtigste On-Page-Faktor für Message-Match. Sehr gut umgesetzt.
- **Angebot „above the fold":** 0 € bei Fremdverschulden, 24h, TÜV, 5,0★ — direkt im Hero. CTA (Anrufen) sofort sichtbar.
- **Consent Mode v2 korrekt** (Default „denied", Update bei Einwilligung, `wait_for_update`). Erhält Conversion-Modellierung trotz Ablehnern.
- **Conversion-Tracking vollständig:** Formular-Absenden (mit Enhanced Conversions / Telefonnummer), plus globales Klick-Tracking auf `tel:`- und WhatsApp-Links. Füttert Smart Bidding mit echten Anruf-Signalen.
- **Mobile stark:** feste Anrufen/WhatsApp-Leiste, `tel:`-Links, volle Button-Breite, `viewport` mit Zoom erlaubt (max-scale 5 = barrierefrei).
- **Trust & Transparenz:** TÜV-Zertifikat mit ID + Gültigkeit, Schema.org (LocalBusiness, Person, FAQ, Breadcrumb), Impressum + Datenschutz verlinkt. Google QS belohnt Transparenz.
- **Speed-Fundament:** Next.js Image (AVIF/WebP), `priority` aufs Hero-Bild, `preconnect`, 1-Jahr-Cache-Header, Kompression an.

---

## Kritische Befunde (was QS kostet) 🔴

### 1. Dünne / doppelte Service-Seiten
- `kfz-sachverstaendiger-berlin`: Hero + 4 Benefit-Kacheln + CTA. **Kein Fließtext, keine FAQ.** Für Google = dünn.
- `kfz-gutachter-berlin`: praktisch dieselbe Seite, aber **mit** Relevanz-Absatz (der Kommentar „Relevanz-Text für QS" zeigt, dass du es schon richtig gedacht hast — nur auf einer Seite umgesetzt).
- Beide nutzen dasselbe Bild, dieselben 4 Kacheln, denselben CTA → Near-Duplicate-Risiko.
**→ Fix:** Den keyword-reichen Relevanz-Absatz **auf alle** Ad-Landingpages bringen (jeweils mit dem eigenen Keyword), plus 3–4 FAQ pro Seite (wie bei `unfallgutachten-berlin` vorbildlich gelöst). So wird jede Seite eigenständig und keyword-relevant.

### 2. Formular nur auf der Startseite
Die Unterseiten haben kein Inline-Formular — der Sekundär-CTA „Schaden online melden" springt nach `/#schaden` (Startseite). Jeder Seitenwechsel kostet Conversions, und du verlierst den keyword-passenden Kontext.
**→ Fix:** `DamageFormSection` direkt in die Service-Landingpages einbauen (es ist bereits eine eigenständige Komponente). Anrufen/WhatsApp bleiben primär, aber das Lead-Formular sollte auf der Zielseite stehen.

---

## Kleinere Befunde 🟡

- **Inkonsistente Bewertungszahl:** Hero „45+", Service-Seiten „47", Bezirk „40". Schema sagt `reviewCount: 47`. Vereinheitlichen (eine Wahrheit) — Konsistenz = Trust.
- **Cookie-Banner vs. Sticky-Leiste (Mobile):** Beide sind `fixed bottom-0` mit `z-50`. Beim ersten Laden können sich Banner und Anrufen/WhatsApp-Leiste überlappen. Live auf dem Handy prüfen; Banner ggf. über der Leiste positionieren (`bottom` um Leistenhöhe erhöhen).
- **Foto-Großdateien:** `inhaber2.jpg` (2,1 MB), `foto2.jpg` (2,1 MB) etc. liegen roh in `/public`. Sofern sie über `next/image` ausgegeben werden, werden sie optimiert — **prüfen**, dass die Galerie wirklich `next/image` nutzt und nicht `<img src>`.
- **Schriftgewichte:** Karla (5) + Saira (5) = 10 Font-Dateien. Über `next/font` self-hosted, also ok — bei Bedarf Gewichte ausdünnen (je 3 reichen meist) für minimal schnelleres Rendern.
- **Self-serving `aggregateRating` im Schema:** technisch erlaubt auf LocalBusiness, aber Google ignoriert eigenbewertete Sterne zunehmend für Rich Results. Kein QS-Problem, nur keine Sternchen-Garantie in der organischen Suche.

---

## Keyword → Landingpage Mapping (so sollten die Anzeigengruppen zeigen)

| Anzeigengruppe / Keyword-Thema | Final-URL |
|---|---|
| kfz sachverständiger berlin | `/kfz-sachverstaendiger-berlin` |
| kfz gutachter berlin | `/kfz-gutachter-berlin` |
| unfallgutachten berlin | `/unfallgutachten-berlin` |
| auffahrunfall / heckschaden | `/heckauffahrunfall-berlin` |
| parkschaden | `/parkschaden-gutachten-berlin` |
| totalschaden | `/totalschaden-gutachten-berlin` |
| Bezirk (z. B. „gutachter pankow") | `/kfz-sachverstaendiger-berlin-pankow` etc. |

> Nur Schadengutachten wird beworben → **keine** Wertgutachten-/Oldtimer-Seite nötig. Wert-/Oldtimer-Suchbegriffe per Negativliste blockiert lassen.

**Regel:** Anzeigengruppe pro Thema → Anzeigentext enthält das Keyword → Final-URL ist die passende Seite → H1 der Seite = Keyword. Dieser Dreiklang (Keyword ↔ Anzeige ↔ Seite) ist der Kern eines hohen QS. **Nie aufs generische Startseiten-Ziel schicken.**

---

## Priorisierte Maßnahmen

| # | Maßnahme | Aufwand | QS-/Umsatz-Wirkung |
|---|---|---|---|
| 1 | **Anzeigengruppen auf passende Final-URLs** zeigen lassen (Mapping oben) | klein | 🔥🔥🔥 |
| 2 | **Relevanz-Absatz + FAQ auf alle Service-Seiten** (gegen dünn/Duplikat) | mittel | 🔥🔥🔥 |
| 3 | **`DamageFormSection` inline** auf die Service-Landingpages | klein | 🔥🔥 |
| 4 | **Live PageSpeed Insights** (Mobile) je Landingpage prüfen, LCP < 2,5s | klein | 🔥🔥 |
| 5 | **Bewertungszahl vereinheitlichen** (überall 47) | klein | 🔥 |
| 6 | **Cookie-Banner/Sticky-Overlap auf Mobile** fixen | klein | 🔥 |
| 7 | **Galerie-Bilder via `next/image`** sicherstellen | klein | 🔥 |
| 8 | **Wert-/Oldtimer-Negatives drinlassen** (Korrektur zu `google-ads-kampagnen-optimierung.md` Teil A) | klein | 🔥🔥 |

---
*Erstellt für gutachtenprenzl.de · Ergänzt `google-ads-kampagnen-optimierung.md` (Kontostruktur) um die Website-/Landingpage-Seite des Qualitätsfaktors.*
