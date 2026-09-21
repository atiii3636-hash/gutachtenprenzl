---
name: wochenfall
description: Sucht neue Gutachtenaufträge in iCloud, macht daraus anonymisierte Fallberichte für das Fallarchiv unter /faelle und legt sie auf einem Branch zur Freigabe ab. Nutze diesen Skill, wenn Atakan sagt "Wochenfall", "neuen Fall für die Website", "Fallarchiv aktualisieren", "gibt es neue Fälle für die Seite" oder wenn der wöchentliche Zeitplan ihn auslöst.
---

# Wochenfall

Aus echten Gutachten werden Seiten unter `/faelle`. Ein neuer Fall pro Woche,
dazu ein bis zwei aus dem Altbestand, bis der Ordner aufgearbeitet ist.

Ergebnis ist ein Commit auf dem Branch `faelle-auto`. Nicht selbst nach `main`
mergen und nicht deployen.

Alles hängt an den Prüfungen in Schritt 4 bis 6: sie sind nicht Beiwerk, sie
sind das, was zwischen einem Kundendatensatz und dem offenen Netz steht. Keine
davon darf übersprungen werden — auch nicht "nur dieses eine Mal", auch nicht,
wenn das Ergebnis offensichtlich sauber aussieht.

Schlägt eine Prüfung an: Fall verwerfen, nicht nachbessern, bis sie schweigt.
Eine Woche ohne neuen Fall ist ein gutes Ergebnis. Ein Kundenname auf der
Website ist keins.

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

**Den vollständigen Ordnernamen merken.** Er wird in Schritt 5 als Sperrliste
gebraucht: was dort steht, darf im fertigen Eintrag nicht vorkommen.

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
| `bauteile` | aus der Kalkulation: Bauteil plus Maßnahme |
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

**Bauteile beim Namen nennen.** Nicht "die Front war beschädigt", sondern
welcher Querträger, welcher Sensor, welche Aufnahme. Genau diese Begriffe
werden gesucht, und genau sie stehen in keinem Konkurrenztext, weil niemand
sonst dieses Fahrzeug auseinandergebaut hat. Fachbegriff und Alltagswort ruhig
beide verwenden, wenn es sich natürlich liest ("Querträger", "der Träger hinter
dem Stoßfänger"). Das ist keine Keyword-Pflege, sondern schlicht die genauere
Beschreibung — sie liest sich besser und rankt nebenbei.

Nicht: "wir konnten dem Kunden helfen", "professionell und schnell", "Ihr
starker Partner". Kein Werbesatz im Fallbericht, der Werbeteil steht ohnehin
unten auf der Seite.

### bauteile

Die Liste aus der Kalkulation, je Zeile Bauteil plus Maßnahme:
`"Querträger vorn — Ersatz"`, `"Abstandssensor — Ausbau und Kalibrierung"`.

Sie steht zusätzlich zum Fließtext, weil sie anders gefunden wird: Wer
"Abstandssensor nach Unfall kalibrieren Kosten" sucht, landet über eine solche
Zeile, nicht über einen erzählenden Absatz. KI-Systeme zitieren Listen zudem
leichter als Prosa.

Fünf bis zehn Einträge, die wichtigsten zuerst, keine Schrauben und
Kleinteile. Nur Positionen, die wirklich kalkuliert wurden — nichts ergänzen,
was fachlich naheliegt.

`titel` beschreibt den Fall, nicht die Leistung: "Eine Tür, die den Wagen zum
Totalschaden macht" — nicht "Kfz-Gutachten in Karow". `teaser` fasst in ein bis
zwei Sätzen zusammen und dient zugleich als Meta-Description, also unter 155
Zeichen halten.

Danach **den `humanizer`-Skill auf schadenbild, teaser und fazit anwenden.**

### 4. Bilder

```bash
ls "<Auftragsordner>/Bilder"
```

**Jedes Bild ansehen, bevor du es auswählst** — mit dem Read-Tool, das zeigt
sie dir. Gesucht sind drei bis vier: eine Ansicht, die das Fahrzeug zeigt, und
zwei bis drei Detailaufnahmen der Schadenstelle.

### Auswahl

In Frage kommt nur, worauf du **kein** Kennzeichen, **keine** Person, **kein**
Dokument und **kein** Hausnummernschild siehst. Detailaufnahmen der
Schadenstelle erfüllen das fast immer, Totalen fast nie.

Die Frage ist nicht "kann ich es lesen?", sondern "ist da eins?". Ein
Kennzeichen, das schräg steht, unscharf ist oder halb verdeckt wird, wird
abgedeckt wie jedes andere. Das gilt auch für Kennzeichen fremder Fahrzeuge im
Hintergrund — auf einem Parkplatz sind das schnell fünf.

### Verarbeiten

Nie kopieren, immer durch das Skript: die Originale tragen GPS-Koordinaten des
Unfallorts im EXIF. Es verlangt für jede Aufnahme eine ausdrückliche
Entscheidung und bricht ohne sie ab.

```bash
# Detailaufnahme, auf der nichts zu sehen ist:
python3 scripts/fall-bild.py "<Quelle>/Bilder/IMG_1234.JPG" \
  public/faelle/<slug>-1.jpg --ohne-kennzeichen

# Aufnahme mit Kennzeichen, Balken als Anteile x,y,breite,hoehe:
python3 scripts/fall-bild.py "<Quelle>/Bilder/IMG_1235.JPG" \
  public/faelle/<slug>-2.jpg --balken 0.42,0.71,0.22,0.09
```

Mehrere `--balken` sind erlaubt, für jedes sichtbare Kennzeichen eines.

**Balken großzügig setzen.** Lieber 15 Prozent zu groß als einen Millimeter zu
klein. Ein zu großer Balken sieht etwas grob aus, ein zu kleiner ist ein
Datenschutzvorfall.

### Nachkontrolle — diesen Schritt nicht auslassen

**Jede erzeugte Datei in `public/faelle/` noch einmal mit dem Read-Tool öffnen
und ansehen.** Nicht das Original, nicht die Erinnerung daran: die fertige
Datei, so wie sie ausgeliefert wird.

Prüfe an dieser einen Frage: Wäre darauf irgendetwas zu erkennen, wenn das
Bild morgen auf der Startseite stünde? Sitzt ein Balken daneben, spiegelt sich
etwas im Lack, steht ein fremdes Auto scharf im Hintergrund — Bild löschen und
ein anderes nehmen. Nicht den Balken nachjustieren und hoffen.

Dass die Aufnahme vorher unauffällig wirkte, ersetzt diesen Blick nicht:
Zuschnitt und Verkleinerung verändern, was am Ende sichtbar ist.

Bleiben am Ende nur Detailaufnahmen übrig, ist das in Ordnung. Die Falldarstellung
kommt ohne Totale aus.

`alt`-Texte beschreiben, was zu sehen ist, inklusive Fahrzeug und Bauteil. Kein
Keyword-Stapeln.

### 5. Eintragen und maschinell prüfen

Neues Objekt **oben** in das `faelle`-Array in `lib/faelle.ts`. `veroeffentlicht`
ist das heutige Datum, `quelle` die Auftragsnummer ohne Namen und Kennzeichen,
also `GA-2609-016`.

Danach beide Prüfungen, beide zwingend:

```bash
npx tsc --noEmit
python3 scripts/fall-pruefen.py <slug> "<vollständiger Ordnername aus Schritt 1>"
```

`fall-pruefen.py` baut aus dem Ordnernamen eine Sperrliste — Name und
Kennzeichen — und sucht sie im fertigen Eintrag. Dazu prüft es auf Muster, die
unabhängig davon nichts auf der Seite zu suchen haben: Kennzeichen,
Fahrgestellnummern, Tagesdaten, Hausnummern. Es urteilt nicht über die
Textqualität, es sucht Zeichenketten. Genau deshalb ist darauf Verlass.

**Bei jedem Fund: Fall verwerfen.** Nicht so lange umformulieren, bis die
Prüfung schweigt. Ein Treffer heißt, dass beim Schreiben etwas grundlegend
schiefgelaufen ist, und dann ist das Gefundene selten das Einzige. Eintrag und
Bilder wieder entfernen, im Protokoll vermerken, nächster Fall.

Kein `npm run build` — das zerstört einen laufenden Dev-Server auf Port 3001.

### 6. Gegenlesen

Bevor committet wird, die fertigen Einträge noch einmal gegen diese Liste
prüfen. Im Zweifel den Fall wieder herausnehmen.

- [ ] Kein Name, kein Kennzeichen, keine VIN, keine Hausnummer im Text
- [ ] Kein Tagesdatum, nur Monat und Jahr
- [ ] Keine Versicherung, kein Anwalt, keine Werkstatt namentlich
- [ ] Jede Zahl im `ergebnis` und jedes Bauteil steht so im PDF
- [ ] Jedes fertige Bild in `public/faelle/` wurde **nach** der Verarbeitung angesehen
- [ ] Bilder durch `fall-bild.py` gelaufen, nicht kopiert
- [ ] Kein Personenschaden, kein erkennbarer Haftungsstreit
- [ ] `npx tsc --noEmit` ohne Fehler
- [ ] `fall-pruefen.py` meldet "sauber"

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
