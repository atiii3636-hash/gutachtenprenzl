---
name: wochenfall
description: Sucht neue Gutachtenaufträge in iCloud, macht daraus anonymisierte Fallberichte für das Fallarchiv unter /faelle und legt sie auf einem Branch zur Freigabe ab. Nutze diesen Skill, wenn Atakan sagt "Wochenfall", "neuen Fall für die Website", "Fallarchiv aktualisieren", "gibt es neue Fälle für die Seite" oder wenn der wöchentliche Zeitplan ihn auslöst.
---

# Wochenfall

Aus echten Gutachten werden Seiten unter `/faelle`. Ein neuer Fall pro Woche,
dazu ein bis zwei aus dem Altbestand, bis der Ordner aufgearbeitet ist.

Niemals live deployen. Ergebnis ist immer ein Commit auf `faelle-auto`, den
Atakan liest, bevor etwas online geht.

## Die Regeln, die über allem stehen

Diese vier Punkte sind der Grund, warum der Ablauf so umständlich ist. Wenn
einer davon im Weg steht: Fall überspringen und im Bericht vermerken. Ein
ausgelassener Fall kostet nichts, ein falscher kostet Atakan seinen Ruf.

1. **Nichts erfinden.** Jede Zahl, jedes Bauteil, jeder Ort stammt aus dem
   Gutachten-PDF. Steht eine Zahl nicht drin, kommt sie nicht auf die Seite.
   Ein ausgedachter Praxisfall ist nach UWG irreführende Werbung.
2. **Anonym.** Keine Namen, keine Kennzeichen, keine VIN, keine Hausnummer,
   kein Tagesdatum, keine Versicherungs- oder Schadennummer, kein Anwalt,
   keine Werkstatt. Erlaubt: Monat und Jahr, Straße ohne Hausnummer, Ortsteil,
   Fahrzeugmodell, Erstzulassungsjahr, gerundeter Kilometerstand.
3. **Bilder ohne Hinweise.** Kein lesbares Kennzeichen, keine Person, kein
   Dokument, kein Hausnummernschild, kein Firmenschild im Hintergrund.
4. **Keine Personenschäden.** Fälle mit Verletzten oder mit Todesfolge bleiben
   draußen, egal wie anonym. Ebenso Fälle, bei denen im Ordner ein laufendes
   Strafverfahren oder ein Streit um die Haftung erkennbar ist.

## Ablauf

### 1. Stand ermitteln

```bash
cd /Users/atakan/Claude/gutachtenprenzl-next
git checkout main && git pull 2>/dev/null
grep -o 'quelle: "[^"]*"' lib/faelle.ts
```

Die `quelle`-Werte sind die bereits verarbeiteten Auftragsnummern. Alles, was
dort steht, wird nicht noch einmal angefasst — auch nicht, wenn es damals
übersprungen wurde (dann steht eine Notiz in `docs/wochenfall-log.md`).

Auftragsordner liegen unter:

```
~/Library/Mobile Documents/com~apple~CloudDocs/Arbeit/Gutachten/Aufträge/Privat
```

Ordnernamen haben die Form `GA-2609-016_B-OS 5217_Renato Beganovic`, also
Auftragsnummer, Kennzeichen, Name. Die Nummer ist der Schlüssel, der Rest des
Ordnernamens ist personenbezogen und taucht nirgends in der Ausgabe auf.

Auswahl pro Durchlauf:

- **ein neuer Fall**: der jüngste Ordner, der noch nicht in `lib/faelle.ts` steht
- **ein bis zwei aus dem Altbestand**: die ältesten unverarbeiteten Ordner

Bevorzuge Fälle, deren Bezirk noch wenig Fälle im Archiv hat, und Schadenarten,
die noch nicht vertreten sind. Zehn Auffahrunfälle hintereinander bringen
weniger als zehn verschiedene Schadenbilder.

### 2. Gutachten lesen

Im Ordner liegt `Gutachten/Gutachten *.pdf`. Das ist die Quelle. Die
`Rechnung`-, `Abtretung`-, `Einwilligung`- und `Widerrufs`-PDFs enthalten nur
personenbezogene Daten und werden nicht gelesen.

Lies das PDF und zieh daraus:

| Feld | Quelle im Gutachten |
|---|---|
| `monat` | Unfall-/Besichtigungsdatum, **nur Monat und Jahr** |
| `ort` | Unfallort, Hausnummer streichen, Ortsteil ergänzen |
| `fahrzeug` | Modell, Erstzulassung, Laufleistung auf 1.000 gerundet |
| `unfallart` | Hergang in drei bis fünf Wörtern |
| `ergebnis` | Reparaturkosten, Wertminderung, WBW, Restwert, Nutzungsausfall, Reparaturdauer — nur die Positionen, die im Gutachten wirklich stehen, mit Centbetrag wie dort |

Bezirk zuordnen: Ortsteil auf einen Slug aus `lib/bezirk-content.ts` mappen.
Liegt der Unfall außerhalb Berlins, `bezirkSlug` und `bezirk` weglassen.

### 3. Text schreiben

Das `schadenbild` ist der eigentliche Wert der Seite. Maßstab ist der Pankow-Fall
in `lib/faelle.ts`, die ausführliche Anleitung steht in `PRAXISFAELLE-VORLAGE.md`.

Drei Absätze, jeder mit einer konkreten Feststellung:

1. **Was zu sehen war** — und was der Laie daraus geschlossen hätte.
2. **Was nicht zu sehen war** — der Befund nach Demontage, Messung oder
   Lackschichtmessung. Das ist der Absatz, der die Seite von jeder anderen
   unterscheidet, und der Grund, warum KI-Systeme sie zitieren.
3. **Was die Zahlen bedeuten** — 130-Prozent-Grenze, Wertminderung trotz
   Reparatur, Restwertangebot, Nutzungsausfall. Eine Aussage, keine Aufzählung.

Nicht: "wir konnten dem Kunden helfen", "professionell und schnell", "Ihr
starker Partner". Kein Werbesatz im Fallbericht, der Werbeteil steht ohnehin
unten auf der Seite.

`titel` beschreibt den Fall, nicht die Leistung: "Eine Tür, die den Wagen zum
Totalschaden macht" — nicht "Kfz-Gutachten in Karow". `teaser` fasst in ein bis
zwei Sätzen zusammen und dient zugleich als Meta-Description, also unter 155
Zeichen halten.

Danach **den `humanizer`-Skill auf schadenbild, teaser und fazit anwenden.**

### 4. Bilder

```bash
ls "<Auftragsordner>/Bilder"
```

Sieh dir die Bilder an, bevor du eines auswählst — mit dem Read-Tool, das zeigt
sie dir. Suche drei bis vier: eine Ansicht, die das Fahrzeug zeigt, und zwei bis
drei Detailaufnahmen der Schadenstelle.

**Auswahlregel:** In Frage kommen nur Aufnahmen, auf denen du kein Kennzeichen,
keine Person, kein Dokument und kein Hausnummernschild siehst. Detailaufnahmen
der Schadenstelle erfüllen das fast immer, Totalen fast nie.

Ist die beste Totale nur wegen des Kennzeichens unbrauchbar, gibt es zwei Wege:

- Balken selbst setzen: `--balken x,y,b,h` als Anteile des Bildes. Danach das
  Ergebnis mit dem Read-Tool ansehen und prüfen, dass das Kennzeichen wirklich
  vollständig verdeckt ist. Sitzt der Balken daneben, korrigieren oder Bild
  verwerfen — nicht "wird schon passen".
- Oder im Bericht als Vorschlag notieren und ohne Totale veröffentlichen.

Verarbeiten, nie einfach kopieren (die Originale tragen GPS-Koordinaten des
Unfallorts im EXIF):

```bash
python3 scripts/fall-bild.py "<Quelle>/Bilder/IMG_1234.JPG" public/faelle/<slug>-1.jpg
python3 scripts/fall-bild.py "<Quelle>/Bilder/IMG_1235.JPG" public/faelle/<slug>-2.jpg --balken 0.42,0.71,0.2,0.07
```

`alt`-Texte beschreiben, was zu sehen ist, inklusive Fahrzeug und Bauteil. Kein
Keyword-Stapeln.

### 5. Eintragen

Neues Objekt **oben** in das `faelle`-Array in `lib/faelle.ts`. `veroeffentlicht`
ist das heutige Datum, `quelle` die Auftragsnummer ohne Namen und Kennzeichen,
also `GA-2609-016`.

Danach:

```bash
npx tsc --noEmit
```

Kein `npm run build` — das zerstört einen laufenden Dev-Server auf Port 3001.

### 6. Gegenlesen

Bevor committet wird, die fertigen Einträge noch einmal gegen diese Liste
prüfen. Im Zweifel den Fall wieder herausnehmen.

- [ ] Kein Name, kein Kennzeichen, keine VIN, keine Hausnummer im Text
- [ ] Kein Tagesdatum, nur Monat und Jahr
- [ ] Keine Versicherung, kein Anwalt, keine Werkstatt namentlich
- [ ] Jede Zahl im `ergebnis` steht so im PDF
- [ ] Auf jedem Bild: kein Kennzeichen, keine Person, kein Dokument
- [ ] Bilder durch `fall-bild.py` gelaufen, nicht kopiert
- [ ] Kein Personenschaden, kein erkennbarer Haftungsstreit
- [ ] `npx tsc --noEmit` ohne Fehler

### 7. Ablegen

```bash
git checkout -B faelle-auto main
git add lib/faelle.ts public/faelle docs/wochenfall-log.md
git commit -m "faelle: <Titel des Falls>"
git push -u origin faelle-auto
```

Nicht deployen, nicht nach `main` mergen.

In `docs/wochenfall-log.md` eine Zeile je Durchlauf anhängen: Datum, welche
Auftragsnummern verarbeitet wurden, welche übersprungen und warum.

### 8. Bericht

Kurz, in dieser Form:

```
Wochenfall 21.09.2026

Neu:        GA-2609-016 → /faelle/<slug>
Altbestand: GA-2601-004 → /faelle/<slug>
Übersprungen: GA-2609-012 (Personenschaden im Polizeibericht)

Branch faelle-auto steht. Zum Freigeben:
  git checkout main && git merge faelle-auto && npm run deploy
```

Wenn in einer Woche kein Fall die Prüfung besteht: das so berichten, nichts
committen. Eine Woche ohne Eintrag ist ein gültiges Ergebnis.
