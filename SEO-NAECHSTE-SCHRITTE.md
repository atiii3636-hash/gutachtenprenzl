# Was Sie nach dem Deploy noch selbst tun müssen

Alles Technische ist umgesetzt (siehe [SEO-AUDIT-2026-08.md](SEO-AUDIT-2026-08.md) für die Analyse dahinter). Die folgenden Schritte kann ich nicht für Sie erledigen, weil sie Zugänge brauchen, die außerhalb des Codes liegen. Sie stehen in der Reihenfolge, in der sie sich lohnen.

---

## Schritt 1: Deployen und beide Domains prüfen

```bash
npx vercel --prod
```

Danach beide Domains neu verknüpfen. Das ist bei diesem Projekt praktisch immer nötig:

```bash
npx vercel alias set <neue-deployment-url> gutachtenprenzl.de
```

```bash
npx vercel alias set <neue-deployment-url> www.gutachtenprenzl.de
```

Kontrolle, ob es gegriffen hat:

```bash
curl -s https://gutachtenprenzl.de/sitemap.xml | grep -c "<loc>"
```

Da müssen jetzt **48** URLs stehen (vorher 44). Und die Weiterleitungen prüfen:

```bash
curl -sI https://gutachtenprenzl.de/kfz-gutachter-berlin | grep -i "^HTTP\|^location"
```

Erwartet: `308` und `location: /`.

---

## Schritt 2: Google Business Profil (der größte Hebel)

Das ist wichtiger als alles andere in dieser Liste. Bei „kfz gutachter berlin" liegt die Klickrate auf den organischen Positionen 6 bis 10 bei 0,09 Prozent. Die Klicks gehen an die drei Kartenergebnisse darüber. In der Search Console taucht das nicht auf, weil Maps-Klicks dort nicht gezählt werden.

Gehen Sie auf [business.google.com](https://business.google.com) und prüfen Sie der Reihe nach:

**Kategorien.** Primärkategorie muss „Kfz-Gutachter" oder „Sachverständiger" sein, nicht „Autowerkstatt" oder etwas Allgemeines. Als Zusatzkategorien passen „Gutachter" und „Sachverständigenbüro". Die Primärkategorie entscheidet mit darüber, bei welchen Suchen Sie überhaupt in Frage kommen.

**Servicegebiet.** Tragen Sie die Bezirke einzeln ein, für die Sie jetzt Seiten haben: Pankow, Prenzlauer Berg, Weißensee, Mitte, Friedrichshain, Lichtenberg, Marzahn, Hellersdorf, Treptow, Köpenick, Neukölln, Kreuzberg, Schöneberg, Tempelhof, Steglitz, Zehlendorf, Charlottenburg, Spandau, Reinickendorf.

**Leistungen.** Legen Sie einzelne Leistungen mit Beschreibungstext an: Schadengutachten, Unfallgutachten, Wertgutachten, Wertminderung, Restwertermittlung, Kurzgutachten. Verlinken Sie bei jeder die passende Unterseite.

**Fotos.** Mindestens 15 bis 20 echte Bilder: Büro von außen und innen, Sie bei der Arbeit am Fahrzeug, Messtechnik, Fahrzeug auf der Hebebühne. Keine Stockfotos. Google gewichtet Profile mit regelmäßig neuen Fotos höher.

**Öffnungszeiten und Telefonnummer** müssen exakt mit dem Impressum und der Website übereinstimmen. Schon eine abweichende Schreibweise der Adresse kostet Sichtbarkeit.

**Beiträge.** Alle ein bis zwei Wochen ein kurzer Beitrag. Das muss nichts Aufwendiges sein: ein abgeschlossener Fall in zwei Sätzen, ein Hinweis zur 130-Prozent-Regel, ein Foto von einem Schadensbild.

---

## Schritt 3: Bewertungen sammeln, systematisch

Die Anzahl und Aktualität der Google-Bewertungen ist einer der stärksten Faktoren dafür, ob Sie im Kartenblock erscheinen. Entscheidend ist nicht nur die Menge, sondern der stetige Zufluss. Zwanzig Bewertungen aus einer Woche vor zwei Jahren wirken schwächer als eine pro Woche über ein Jahr.

Was praktisch funktioniert: Wenn Sie das fertige Gutachten verschicken, hängen Sie einen Satz an die Mail und den Kurzlink zum Bewertungsformular. Den Link finden Sie im Business-Profil unter „Rezensionen erhalten".

Antworten Sie auf jede Bewertung, auch auf die guten. Das ist selbst ein Rankingsignal, und die Antworten werden mitindexiert. Wenn in der Antwort ein Bezirksname vorkommt („Freut uns, dass es in Weißensee so schnell ging"), hilft das zusätzlich.

---

## Schritt 4: Search Console, neue URLs anstoßen

Ohne diesen Schritt dauert es Wochen, bis Google die neuen Seiten überhaupt ansieht.

In der [Search Console](https://search.google.com/search-console) unter „URL-Prüfung" nacheinander eingeben und jeweils „Indexierung beantragen" klicken:

```
https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-weissensee
https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-hellersdorf
https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-treptow
https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-zehlendorf
https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-lichtenberg
https://gutachtenprenzl.de/kurzgutachten-berlin
https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-prenzlauer-berg
https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-pankow
https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin-mitte
```

Die letzten drei stehen mit drauf, weil ihr Inhalt deutlich gewachsen ist und Google die neue Fassung sehen soll.

Danach unter „Sitemaps" die `sitemap.xml` einmal neu einreichen.

---

## Schritt 5: erledigt, und die Frage ist beantwortet

**Korrektur zu dem, was hier ursprünglich stand.** Ich hatte angenommen, es gäbe nur eine Apex-Property, weil der Export-Ordner so hieß. Tatsächlich existierte längst eine **Domain-Property `gutachtenprenzl.de`**, die apex und www zusammen abdeckt. Die zusätzliche www-Property, die ich am 21.08.2026 angelegt habe, war also überflüssig.

Der Vergleich beantwortet dafür die offene Frage aus dem Audit:

| Property | Klicks | Impressionen |
|---|---:|---:|
| Domain (apex + www) | 218 | 39.902 |
| Nur Apex | 218 | 39.900 |

Differenz: **zwei Impressionen.** Das falsche www-Zertifikat hat in der Suche also praktisch nichts gekostet, weil Google ohnehin fast ausschließlich die Hauptdomain ausgespielt hat. Damit ist der Punkt vom Tisch.

**Für die tägliche Arbeit** nehmen Sie die Property `gutachtenprenzl.de` ohne `https://` davor. Die deckt alles ab. Die beiden URL-Präfix-Properties darunter zeigen jeweils nur einen Ausschnitt.

---

## Schritt 6: Eine Entscheidung, die ich Ihnen nicht abnehmen kann

Wertgutachten und Oldtimer sind organisch Ihr zweitgrößtes Themenfeld: 1.845 Impressionen bei durchschnittlich Position 7,5. In den Google Ads haben Sie das bewusst über Negativ-Keywords ausgeschlossen.

Beides gleichzeitig ergibt keinen Sinn. Entweder Sie wollen die Anfragen, dann lohnt es sich, die Seite `/wertgutachten` auszubauen (aktuell 622 Wörter, die dünnste Leistungsseite überhaupt) und eine eigene Oldtimer-Seite anzulegen. Oder Sie wollen sie nicht, dann können Sie das Feld organisch ignorieren.

Sagen Sie mir, wie Sie sich entscheiden, dann setze ich es um.

---

## Schritt 7: In vier Wochen nachschauen

Ab etwa dem 20.09.2026 lohnt der erste Blick. Vergleichen Sie in der Search Console unter „Leistung" den Zeitraum der letzten 28 Tage mit dem davor und achten Sie auf:

**Die neuen Bezirke.** Erscheinen `weissensee`, `hellersdorf`, `treptow` und `zehlendorf` unter „Seiten" mit eigenen Impressionen? Wenn ja, greift die Struktur. Wenn nach sechs Wochen nichts kommt, sind die Seiten nicht indexiert, dann noch einmal Schritt 4.

**Prenzlauer Berg.** Die Anfrage „kfz gutachter prenzlauer berg" stand bei Position 4,8 mit 1.365 Impressionen. Bewegt sie sich Richtung 3, kommen die Klicks. Bleibt sie bei 4 bis 5 stehen, reicht der Inhalt allein nicht und es geht über das Business-Profil weiter.

**Die Position, nicht die Klickrate.** Die Klickrate wird durch die vielen themenfremden Long-Tail-Einblendungen auf Position 15 und tiefer verwässert. Ein Absinken der Gesamt-Klickrate ist kein Alarmsignal, solange die Zahl der Klicks steigt. Schauen Sie auf absolute Klicks und auf die Position der zehn wichtigsten Suchanfragen.
