# SEO-Umsetzungsplan — gutachtenprenzl.de

**Erstellt:** 20.04.2026
**Für:** Atakan Arslan
**Basis:** Code-Audit + SEO-Review der Next.js-Codebase

---

## TEIL A: Was schon erledigt ist (zur Info)

Diese Punkte sind bereits live im Code und müssen nicht mehr angefasst werden:

1. **WhatsApp-Nummer in Navbar korrigiert** — vorher 4915566166533, jetzt 4915560003661 (`components/navbar.tsx`)
2. **Adresse vereinheitlicht** — Prenzlauer Allee 88, 10405 Berlin in JSON-LD (`app/layout.tsx`) und Footer (`components/footer.tsx`)
3. **Canonical-Tags auf Landingpages** — `kfz-sachverstaendiger-berlin` und `kfz-gutachter-lichtenberg`
4. **Google Search Console komplett eingerichtet** — Property hinzugefügt, via DNS verifiziert, Sitemap eingereicht (Status: Erfolgreich, 22 Seiten)
5. **FAQ-Single-Source-of-Truth** — `lib/faqs.ts` (sichtbare FAQ und JSON-LD immer synchron)
6. **Alt-Tags auf allen 16 Hero-Bildern** — bezirksspezifisch für Image-SEO

---

## TEIL B: Prioritätsliste — was noch zu tun ist

Sortiert nach Wichtigkeit UND Aufwand. Die ersten Punkte sind Quick Wins (wenig Aufwand, großer Impact). Weiter unten kommen die strategischen Dinge.

---

### PRIO 1 — Quick Wins (je 5–10 Min, heute noch machbar)

#### Schritt 1: Orphan-Files löschen (Aufwand: 2 Minuten)

**Problem:** Im Projekt-Root liegen 4 Dateien, die nicht mehr verwendet werden, aber TypeScript-Errors verursachen und den Build beeinträchtigen:

- `/layout-fix.tsx` (importiert nicht existierendes `BezirkFooter`)
- `/sitemap-fix.ts`
- `/metadata-alle-seiten.ts`
- `/BezirkFooter.tsx`

**So umsetzen:**

1. Öffne dein Terminal im Projekt-Ordner `gutachtenprenzl-next`
2. Führe aus:
   ```bash
   rm layout-fix.tsx sitemap-fix.ts metadata-alle-seiten.ts BezirkFooter.tsx
   ```
3. Verifizieren: `npx tsc --noEmit` sollte jetzt ohne Fehler durchlaufen
4. `git add -A && git commit -m "chore: remove orphan files"` → pushen

**Warum wichtig:** Entfernt TypeScript-Errors, verkleinert Deployment-Bundle minimal, hält Repo sauber.

---

#### Schritt 2: Keyword-Stuffing-Block entfernen (Aufwand: 3 Minuten)

**Problem:** In `app/kfz-sachverstaendiger-berlin-prenzlauer-berg/page.tsx` Zeile 123–125 steht ein Absatz, der nichts anderes ist als gestapelte Keywords:

```tsx
<p className="text-white/20 text-[11px] mt-4">
  kfz sachverständiger prenzlauer berg · kfz gutachter prenzlauer berg · unfallgutachten prenzlauer berg · gutachter schönhauser allee
</p>
```

Google's Spam-Algorithmus (Helpful Content Update) erkennt sowas als manipulativ. Schlechter Score → kann die ganze Seite abstrafen.

**So umsetzen:**

1. Öffne `app/kfz-sachverstaendiger-berlin-prenzlauer-berg/page.tsx`
2. Lösche die Zeilen 123–125 komplett (den kompletten `<p>`-Block)
3. Speichern, commit, push

**Warum wichtig:** Google's Spam-Filter kann die komplette Domain abstrafen. Der SEO-Wert dieses Blocks ist eh null — die Keywords stehen bereits natürlich im Fließtext darüber.

---

#### Schritt 3: Domain-Check bei Google Search Console (Aufwand: 5 Minuten, passiv)

**Was tun:** In den nächsten 2–3 Tagen regelmäßig in GSC reinschauen:

1. Gehe zu `https://search.google.com/search-console`
2. Linke Sidebar → **Seiten**: Hier siehst du welche URLs indexiert werden und wo Probleme auftauchen
3. Linke Sidebar → **Statistiken**: Hier siehst du Impressionen und Klicks
4. Linke Sidebar → **Leistung**: Nach 7 Tagen erste Suchbegriffe sichtbar

**Was beobachten:**
- Erscheinen alle 22 Seiten unter "Indexiert"?
- Gibt es "Nicht indexiert"-Warnungen? Falls ja — Ursache prüfen
- Welche Keywords bringen erste Impressionen?

---

### PRIO 2 — Google Business Profile optimieren (Aufwand: 30–60 Min, SEHR hoher Impact)

**Warum wichtig:** Lokales SEO läuft für KFZ-Gutachter zu 70% über den Google Business Profile (früher Google My Business). Ohne GBP-Optimierung bleibst du unter "ferner liefen".

**So umsetzen:**

1. Gehe zu `https://business.google.com`
2. Prüfe oder erstelle deinen Eintrag für "Gutachten Prenzl"
3. **Pflicht-Felder ausfüllen:**
   - Name: exakt wie im JSON-LD → "Gutachten Prenzl – KFZ Sachverständiger Berlin"
   - Kategorie (primär): "KFZ-Sachverständiger"
   - Kategorie (sekundär): "Gutachter", "Schadensachverständiger"
   - Adresse: Prenzlauer Allee 88, 10405 Berlin (exakt wie auf Website!)
   - Telefon: 0155 60003661
   - Website: https://gutachtenprenzl.de
   - Öffnungszeiten: 24/7 (falls wirklich Notfall-Hotline) oder präzise Geschäftszeiten
4. **Fotos hochladen** (mindestens 10):
   - Logo
   - Außenansicht des Büros
   - Dich bei der Arbeit (Begutachtung am Fahrzeug)
   - TÜV-Zertifikat (abfotografiert)
   - Beispiel-Gutachten (anonymisiert!)
5. **Dienstleistungen eintragen** (nutze die gleichen Namen wie im JSON-LD):
   - Unfallgutachten Berlin
   - Haftpflichtschaden Gutachten
   - Kaskoschaden Gutachten
   - Wertgutachten Fahrzeug
   - Schadensregulierung Berlin
6. **Beschreibung** (750 Zeichen) — nutze die Keywords natürlich:
   > "TÜV Rheinland zertifizierter KFZ Sachverständiger in Berlin. Unfallgutachten in 24 Stunden, kostenlos bei Fremdverschulden. Wir kommen zu Ihnen nach Hause, in die Werkstatt oder zum Unfallort — in ganz Berlin und Umland. Spezialisiert auf Haftpflichtschäden, Kaskoschäden und Wertgutachten. Anerkannt von allen Versicherungen."
7. **Erste 3–5 echte Kunden** um eine Google-Rezension bitten (per WhatsApp-Link: Profil → "Rezension schreiben"-Link kopieren)

**Warum wichtig:** GBP-Einträge ranken im "Local Pack" (die 3 Ergebnisse mit Karte) — das sind 44% der Klicks bei lokalen Suchen. Die sichtbare 5,0-Bewertung auf deiner Website muss mit GBP konsistent sein.

---

### PRIO 3 — Landingpages einzigartig machen (Aufwand: 2–4 Stunden, hoher Impact)

**Problem:** Deine 15 Bezirks-Landingpages (Mitte, Charlottenburg, Friedrichshain…) sind strukturell fast identisch. Google erkennt das als "Doorway Pages" und kann sie alle gleichzeitig abwerten. Außerdem rankt nur eine davon pro Suchanfrage.

**So umsetzen (pro Seite ~15 Min):**

Füge auf jeder Bezirks-Seite einen einzigartigen Abschnitt ein mit:

1. **Bezirks-spezifische Einleitung** (3–4 Sätze, unterschiedlich pro Bezirk)
   - Beispiel Mitte: "Im Berliner Zentrum passieren besonders viele Unfälle rund um den Alexanderplatz, Unter den Linden und die Friedrichstraße. Als KFZ-Gutachter für Berlin Mitte kennen wir die lokalen Risiken — vom dichten Verkehr in der Torstraße bis zu Parkremplern in den Seitenstraßen von Rosenthaler."
   - Beispiel Pankow: "Pankow ist Berlins einwohnerreichster Bezirk — von Weißensee über Buch bis nach Französisch Buchholz. Unfälle auf der Schönhauser Allee, der Berliner Straße oder am Vinetaplatz gehören zu unseren häufigsten Einsätzen."

2. **Anfahrtsinfo / lokale Referenz** (1–2 Sätze)
   - "Unser Standort in der Prenzlauer Allee 88 ist nur 8 Autominuten von [Bezirkszentrum] entfernt."

3. **Lokale Straßen- oder Verkehrsknotenpunkt-Erwähnung**
   - Jede Bezirksseite nennt 2–3 große Straßen/Plätze des Bezirks

**Template für den neuen Abschnitt** (füge ihn nach dem Benefits-Block ein):

```tsx
{/* Bezirks-Content */}
<section className="bg-white px-5 py-14 border-t">
  <div className="max-w-3xl mx-auto">
    <h2 className="font-display font-black text-2xl md:text-3xl text-[#080D14] uppercase mb-4">
      KFZ Gutachter in Berlin [BEZIRK]
    </h2>
    <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
      [3–4 Sätze Einleitung mit lokalen Bezügen]
    </p>
    <p className="text-gray-600 text-[15px] leading-relaxed">
      [1–2 Sätze Anfahrtsinfo]
    </p>
  </div>
</section>
```

**Warum wichtig:** Einzigartiger Content = Google rankt jede Seite für ihre eigene Keyword-Kombination. Pankow-Seite für "kfz gutachter pankow", Mitte-Seite für "kfz gutachter mitte" usw.

**Priorisierung innerhalb dieses Punkts:** Starte mit den 4 einwohnerstärksten Bezirken — Pankow, Mitte, Friedrichshain-Kreuzberg, Neukölln. Die bringen die meiste Traffic-Perspektive.

---

### PRIO 4 — OG-Image prüfen + erstellen falls fehlt (Aufwand: 20 Min)

**Problem:** In `app/layout.tsx` Zeile 76 wird `/og-image.jpg` referenziert. Wenn das Bild nicht existiert oder unpassend ist, sehen Social-Media-Shares kaputt aus (LinkedIn, WhatsApp, Facebook).

**So umsetzen:**

1. Prüfe ob `public/og-image.jpg` existiert und min. 1200x630px groß ist
2. Falls nicht: Erstelle in Canva/Figma ein Bild mit:
   - Roter Akzent (#E11D2F)
   - Dunkler Hintergrund (#080D14)
   - Headline: "KFZ Sachverständiger Berlin"
   - Subline: "Unfallgutachten in 24h · TÜV-zertifiziert"
   - Logo
   - Telefonnummer
3. Speichere als `/public/og-image.jpg`
4. Teste unter `https://www.opengraph.xyz/` — hier deine URL eingeben, Vorschau checken

**Warum wichtig:** Jeder WhatsApp-Link zu deiner Site sieht damit seriöser aus. Höhere Klickrate bei Empfehlungen.

---

### PRIO 5 — Reviews-Flywheel starten (Aufwand: 15 Min Setup, dann passiv)

**Problem:** Im JSON-LD stehen `reviewCount: 47` und `ratingValue: 5.0`. Google prüft das inzwischen gegen den echten GBP-Eintrag. Wenn deine echten Google-Rezensionen deutlich davon abweichen, gibt's eine Abmahnung im Strukturdaten-Bericht.

**So umsetzen:**

1. In GBP den Review-Link holen (Business-Profil → "Rezension schreiben" → Link kopieren)
2. Den Link als QR-Code drucken (`https://www.qrcode-monkey.com`)
3. QR-Code auf Visitenkarten / im Gutachten-PDF / per SMS nach Abschluss
4. **Nach jedem Gutachten** per WhatsApp schicken:
   > "Hallo [Name], danke für das Vertrauen! Falls alles gepasst hat — eine kurze Google-Bewertung hilft uns sehr: [LINK]. Danke dir! 🙏"
5. Sobald echte Reviews ≥50 erreicht sind, aktualisiere die Zahl in `app/layout.tsx` Zeile 153

**Warum wichtig:** Reviews sind DER #1 Ranking-Faktor im Local Pack. Ein Konkurrent mit 80 Reviews (auch wenn nur 4,6★) schlägt dich mit 47 Reviews locker.

---

### PRIO 6 — Backlink-Basis aufbauen (Aufwand: 2–3h initial, dann 30 Min/Woche)

**Problem:** Ohne Backlinks rankt keine Seite. Du brauchst mindestens 10–20 Einträge.

**So umsetzen — in dieser Reihenfolge:**

1. **Branchenverzeichnisse (1h):**
   - gelbeseiten.de
   - dasoertliche.de
   - meinestadt.de (für Berlin)
   - 11880.com
   - yelp.de
   - Werkenntdenbesten.de
   - Kennstdueinen.de
   - *Jeder Eintrag muss exakt die gleiche NAP-Info haben:* Gutachten Prenzl, Prenzlauer Allee 88, 10405 Berlin, 0155 60003661

2. **Kfz-spezifische Verzeichnisse (1h):**
   - kfz-auskunft.de
   - autogutachter-berlin-brandenburg.de (falls lokaler Verband)
   - Eintrag bei TÜV Rheinland Partner-Verzeichnis (falls möglich — prüfen!)
   - Sachverständigen-Verband BVSK (Mitgliedschaft prüfen)

3. **Kooperationen (fortlaufend):**
   - 3–5 Berliner Kfz-Werkstätten anschreiben, ob sie dich auf ihrer "Partner"-Seite verlinken (gegen Gegenverlinkung)
   - 2–3 Berliner Autohäuser
   - Anwälte für Verkehrsrecht in Berlin

**Warum wichtig:** Ohne Backlinks keine Autorität. Google traut einer Seite erst dann die Top-Positionen zu, wenn andere Seiten auf sie zeigen.

---

### PRIO 7 — Content-Flywheel / Blog starten (Aufwand: 1h/Woche)

**Problem:** Deine Site hat nur statische Seiten. Google liebt frischen Content.

**So umsetzen:**

1. Unter `app/` einen neuen Ordner `blog/` erstellen
2. Pro Monat 2–3 Artikel mit je 800–1.500 Wörtern zu Themen wie:
   - "Was tun nach einem Unfall in Berlin? Die 7 wichtigsten Schritte"
   - "Gutachten oder Kostenvoranschlag? Wann Sie was brauchen"
   - "130%-Regel: Wann lohnt sich die Reparatur noch?"
   - "Fiktive Abrechnung — so funktioniert's"
   - "Wie hoch ist der Nutzungsausfall in Berlin?"
3. Jeder Artikel muss:
   - Eine Hauptfrage beantworten
   - Intern verlinken auf Landing-Pages
   - Eine Klare Call-to-Action haben (Telefonnummer + WhatsApp)

**Warum wichtig:** Artikel ranken für Long-Tail-Keywords ("was kostet ein kfz gutachten in berlin"). Die Leads sind günstiger und oft qualifizierter.

---

## TEIL C: Checkliste zum Abhaken

### Diese Woche
- [ ] Orphan-Files löschen (Schritt 1) — 2 Min
- [ ] Keyword-Stuffing entfernen (Schritt 2) — 3 Min
- [ ] GSC täglich checken — je 5 Min
- [ ] OG-Image prüfen/erstellen (Prio 4) — 20 Min

### Nächste 2 Wochen
- [ ] Google Business Profile vollständig ausfüllen (Prio 2) — 60 Min
- [ ] 5 Branchenverzeichnisse eintragen (Prio 6, Teil 1) — 60 Min
- [ ] Review-Anfrage-Template erstellen (Prio 5) — 15 Min

### Nächster Monat
- [ ] 4 priorisierte Bezirks-Seiten mit Unique-Content ergänzen (Prio 3) — 60 Min
- [ ] 5 weitere Branchenverzeichnisse + Kfz-spezifische (Prio 6, Teil 2) — 60 Min
- [ ] Erster Blog-Artikel (Prio 7) — 90 Min
- [ ] Mindestens 10 neue echte Google-Reviews sammeln (Prio 5)

### Laufend
- [ ] Monatlich GSC-Leistungsbericht reviewen
- [ ] Quartalsweise: neue Bezirks-Seite mit Unique-Content
- [ ] Alle 2 Wochen: 1 Blog-Artikel

---

## TEIL D: Was ich jetzt direkt für dich erledigen kann

Wenn du willst, übernehme ich im Code direkt:

1. **Orphan-Files löschen** (Schritt 1) — 1 Klick, sofort erledigt
2. **Keyword-Stuffing-Block entfernen** (Schritt 2) — 1 Klick, sofort erledigt
3. **Unique-Content-Template auf 4 priorisierte Bezirks-Seiten setzen** (Prio 3) — ~20 Min mit deinem OK zu den Texten
4. **OG-Image-Check** (Prio 4) — ich prüfe ob's existiert und richtig verlinkt ist

Was du selbst machen musst, weil's nicht im Code liegt:
- Google Business Profile pflegen
- Branchenverzeichnis-Einträge
- Review-Sammlung
- Blog-Artikel schreiben (Code-Gerüst kann ich, Inhalte müssen von dir kommen)

Sag einfach "los" und ich fange mit Punkten 1 + 2 + 3 + 4 an.
