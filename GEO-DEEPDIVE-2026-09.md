# Deep Dive KI-Sichtbarkeit und Klickverlust, Stand 19.09.2026

Grundlage: Google-Leitfaden "Website für generative KI-Funktionen in der Google Suche optimieren"
(developers.google.com, zuletzt aktualisiert 15.07.2026), die Search-Console-Exporte vom 19.09.2026
(Web und generative KI-Funktionen, jeweils letzte 3 Monate), die Indexierungs- und Linkberichte,
Live-SERPs für die wichtigsten Geldbegriffe sowie der ausgelieferte HTML-Code der Website.

Rohdaten liegen im Scratchpad dieser Session:
`gsc/web3m/` (Suchanfragen, Seiten, Länder, Geräte, Diagramm) und `gsc/ai/` (KI-Funktionen).

---

## 1. Die Zahlen

### 1.1 Gesamtbild Websuche, 17.06. bis 16.09.2026

| Kennzahl | Wert |
|---|---|
| Klicks | 246 |
| Impressionen | 57.900 |
| CTR | 0,4 % |
| Durchschnittsposition | 11,3 |
| Indexierte Seiten | 40 von 64 in der Sitemap |
| Externe verweisende Domains | 1 |

### 1.2 Der Verlauf ist das eigentliche Alarmsignal

| Zeitraum | Impressionen/Tag | Klicks/Tag | CTR | Position |
|---|---|---|---|---|
| Mitte Juni | ca. 300 | 3 bis 5 | ca. 1,2 % | 13 bis 14 |
| Mitte September | ca. 700 bis 900 | 0 bis 3 | ca. 0,2 % | 9 bis 10 |

Die Sichtbarkeit hat sich in drei Monaten verzweieinhalbfacht, die Position ist um vier Plätze besser
geworden, und trotzdem sind die Klicks pro Tag gefallen. Das ist kein Zufallsrauschen, sondern ein
strukturelles Muster: Die Seite gewinnt Reichweite in einem Bereich der Suchergebnisse, aus dem
niemand klickt.

### 1.3 Woher die 246 Klicks wirklich kommen

| Suchanfrage | Klicks | Impressionen | Position |
|---|---|---|---|
| gutachter deutschland | 63 | 84 | 1,1 |
| gutachten prenzl | 23 | 193 | 1,0 |
| gutachten deutschland | 5 | 9 | 1,6 |
| kfz gutachter berlin | 7 | 2.444 | 8,2 |
| gutachter berlin | 4 | 1.061 | 8,7 |
| kfz gutachter prenzlauer berg | 4 | 974 | 9,3 |

91 der 246 Klicks stammen aus Markenanfragen oder aus "gutachter deutschland", einem Begriff ohne
Kaufabsicht, bei dem die Seite zufällig auf Platz 1 steht. Bereinigt bleiben rund 30 Klicks aus
echter, nicht markengetriebener Nachfrage. In drei Monaten. Das ist der Punkt, an dem die Diskussion
über Rankings aufhören und die über Autorität anfangen muss.

### 1.4 Die Bezirksseiten sind der größte Einzelposten, und sie liefern nichts

136 Suchanfragen mit Bezirksbezug, 17.085 Impressionen, 6 Klicks. CTR 0,04 Prozent.

| Seite | Impressionen | Klicks | Position |
|---|---|---|---|
| kfz-sachverstaendiger-berlin-mitte | 2.694 | 2 | 13,5 |
| kfz-sachverstaendiger-berlin-pankow | 2.581 | 1 | 14,7 |
| kfz-sachverstaendiger-berlin-marzahn | 2.477 | 0 | 17,4 |
| kfz-gutachter-lichtenberg (alte URL) | 1.878 | 0 | 19,9 |
| kfz-sachverstaendiger-berlin-kreuzberg | 671 | 0 | 14,1 |
| 14 weitere Bezirksseiten | je 200 bis 630 | 0 | 12,7 bis 29,4 |

Knapp ein Drittel aller Impressionen der gesamten Domain entfällt auf diese Seitengruppe, und sie
erzeugt 2,4 Prozent der Klicks.

### 1.5 Schlagdistanz

78 Suchanfragen stehen auf Position 8 bis 25, haben mindestens 100 Impressionen und höchstens einen
Klick. Zusammen: 20.946 Impressionen, 4 Klicks. Die zehn größten:

| Suchanfrage | Impressionen | Position |
|---|---|---|
| kfz gutachter pankow | 1.154 | 8,4 |
| unfallgutachten berlin | 930 | 19,6 |
| kfz gutachter mitte | 745 | 10,2 |
| kfz gutachter lichtenberg | 717 | 19,8 |
| kfz sachverständiger berlin | 654 | 13,0 |
| unabhängiger kfz gutachter | 629 | 9,1 |
| kfz gutachter marzahn | 564 | 14,7 |
| kfz sachverständiger pankow | 546 | 12,2 |
| kfz gutachten | 461 | 8,1 |
| auto gutachter berlin | 442 | 8,9 |

### 1.6 Generative KI-Funktionen

338 Impressionen in drei Monaten, also 0,58 Prozent aller Impressionen. Klicks weist Google für
diesen Bericht nicht aus.

| Seite | KI-Impressionen |
|---|---|
| Startseite | 90 |
| nutzungsausfall-tabelle-berlin | 78 |
| fiktive-abrechnung | 75 |
| ueber-uns | 19 |
| kfz-sachverstaendiger-berlin-pankow | 14 |
| eigener-gutachter-oder-versicherungsgutachter | 12 |
| 130-prozent-regelung | 8 |
| kosten-kfz-gutachten-berlin | 8 |
| 18 weitere Seiten | je 1 bis 6 |

Zwei Beobachtungen dazu. Erstens: 72 Prozent der KI-Sichtbarkeit kommen aus drei Seiten, und zwei
davon sind Ratgeberseiten, keine Verkaufsseiten. Zweitens der Verlauf. Bis zum 15.08. lagen die
KI-Impressionen bei 0 bis 4 pro Tag. Vom 16.08. bis 28.08. sprangen sie auf 12 bis 21 pro Tag.
Seit Anfang September sind sie wieder auf 3 bis 8 zurückgefallen.

Der Sprung fällt exakt auf den Zeitraum, in dem die www-Weiterleitung repariert und der
Content-Ausbau live gegangen ist. Das ist ein guter Beleg dafür, dass die Richtung stimmt. Der
Rückfall danach zeigt, dass ein einmaliger Schub nicht trägt: Google hat die neuen Seiten getestet
und sie dann größtenteils wieder aus den KI-Antworten genommen.

### 1.7 KI-typische Suchanfragen tauchen bereits auf

In den Rohdaten stehen ganze Sätze als Suchanfrage. Das sind keine Tippfehler, sondern die
Folgeabfragen, die Google im KI-Modus selbst erzeugt (im Leitfaden "parallele Anfrageverarbeitung"):

| Suchanfrage | Impressionen | Position | Klicks |
|---|---|---|---|
| wie finde ich einen zuverlässigen gutachter für mein auto? | 116 | 4,5 | 0 |
| wer sind die führenden gutachter in der region? | 89 | 2,0 | 0 |
| wo finde ich einen guten sachverständigen für meinen kfz-unfall? | 6 | 4,5 | 0 |
| wo finde ich zertifizierten kfz sachverständigen in meiner nähe? | 3 | 2,0 | 0 |
| darf ich meinen kfz-gutachter selbst wählen? | 7 | 57,6 | 0 |

Für die ersten vier steht die Seite auf Position 2 bis 4,5 und bekommt null Klicks, was bei einer
KI-Antwort normal ist. Die fünfte ist der interessante Fall: Es gibt seit Monaten die Seite
`/blog/recht-auf-eigenen-gutachter` zu genau dieser Frage, und sie rankt auf Position 58.

### 1.8 Technische Befunde aus dem Indexierungsbericht

| Grund | Seiten | Betroffen |
|---|---|---|
| Gefunden, zurzeit nicht indexiert | 7 | /kontakt, /parkschaden-gutachten-berlin, /totalschaden-gutachten-berlin, /blog/parkschaden-was-tun, Neukölln, Reinickendorf, Tempelhof |
| Seite mit Weiterleitung | 8 | alte URL-Struktur, korrekt umgeleitet |
| Nicht gefunden (404) | 6 | Altlasten, zuletzt gecrawlt Mai bis Juli, inzwischen per Redirect erledigt |
| Gecrawlt, zurzeit nicht indexiert | 3 | |
| Durch noindex ausgeschlossen | 2 | /impressum und /impressum/, veralteter Stand vom 09.06.2026, siehe Befund 8 |
| Duplikat ohne eigenes Canonical | 1 | |

Dazu: Der Bericht "Darstellung in der Suche" ist komplett leer. Die Seite erzeugt aktuell kein
einziges Rich Result.

---

## 2. Warum die Klicks fehlen

Für "kfz gutachter berlin" steht über dem organischen Platz 8, auf dem die Startseite im Schnitt
liegt:

1. drei bezahlte Anzeigen mit Standorterweiterung (ihr-gutachten.com, Gutachter Seyer, kfz-sachverstaendiger-ay.de)
2. ein lokaler Kartenblock mit vier Einträgen
3. ein Block "Weitere Fragen" mit vier aufklappbaren Antworten
4. ein zweiter lokaler Kartenblock mit drei weiteren Einträgen
5. erst danach die organischen Treffer

Die Bewertungszahlen der Betriebe, die in diesen Kartenblöcken stehen: 516, 373, 259, 237, 146,
136, 132, 65, 49, 41, 23. Gutachten Prenzl hat 91 bei 5,0 Sternen.

Daraus folgt der eigentliche Befund: Bei lokalen Dienstleistungsanfragen in Berlin ist organisch
Platz 8 keine schlechte Position, sondern eine Position ohne Klickpotenzial. Der Klick fällt im
Kartenblock oder bei den Anzeigen. Ein Vorrücken von Platz 8 auf Platz 5 würde daran fast nichts
ändern.

Gleichzeitig zeigen zwei Gegenbeispiele, wo es funktioniert:

- Für "was kostet ein kfz gutachten berlin" steht `/kosten-kfz-gutachten-berlin` auf Platz 1
  organisch, ohne Kartenblock darüber. Diese Seite hat 3,2 Prozent CTR.
- `/nutzungsausfall-tabelle-berlin` hat 2,3 Prozent CTR bei Position 10,6 und ist gleichzeitig die
  zweitstärkste Seite in den KI-Funktionen.

Beide sind Ratgeberseiten mit Informationsabsicht. Genau dort gibt es keinen Kartenblock, keine
Anzeigenflut und trotzdem Nachfrage von Leuten, die gerade einen Schaden haben.

---

## 3. Was der Google-Leitfaden dazu sagt

Der Leitfaden ist in einem Punkt ungewöhnlich deutlich: Google bestreitet, dass es eine eigene
Disziplin "GEO" oder "AEO" gibt. Die generativen Funktionen greifen auf dieselben Ranking-Systeme
zu wie die normale Suche. Was Google ausdrücklich als wirkungslos bezeichnet:

- llms.txt und ähnliche maschinenlesbare Zusatzdateien werden ignoriert. Die Datei unter
  `public/llms.txt` schadet nicht, bringt bei Google aber nachweislich nichts.
- Inhalte in kleine Häppchen zerlegen ist unnötig.
- Texte speziell für KI-Systeme umschreiben ist unnötig.
- Künstlich erzeugte Erwähnungen im Netz helfen nicht.
- Strukturierte Daten sind für KI-Funktionen nicht erforderlich.

Was Google als wirksam benennt: einzigartige, nicht alltägliche Inhalte mit eigener Perspektive,
saubere Technik und Crawlbarkeit, gute Bilder und Videos, und gepflegte Angaben zum lokalen
Unternehmen über das Unternehmensprofil.

Eine Passage ist für diese Website besonders relevant. Google warnt ausdrücklich davor, für jede
denkbare Suchvariante eine eigene Seite anzulegen, und ordnet das unter "Missbrauch von in großem
Umfang generierten Inhalten" ein. Genau das beschreibt die aktuelle Bezirksstruktur.

---

## 4. Befunde im Einzelnen

### Befund 1: Die Bezirksseiten sind zu 60 Prozent Kopien voneinander

Gemessen an den ausgelieferten Seiten: Zwischen Neukölln und Tempelhof sind 60,4 Prozent aller
Sechs-Wort-Folgen identisch. Zwischen Neukölln und Pankow ebenfalls 60,4 Prozent. Von etwa 840
Wörtern sichtbarem Text pro Seite sind rund 330 bis 340 eigener Inhalt, der Rest ist Vorlage.

Nur drei der 19 Bezirke haben einen eigenen Vertiefungstext (`deepDive` in `lib/bezirk-content.ts`):
Pankow, Prenzlauer Berg, Mitte. Und genau diese drei sind die einzigen Bezirksseiten, die überhaupt
Klicks oder nennenswerte KI-Impressionen bekommen haben.

Die drei dünnsten Bezirke, Neukölln, Reinickendorf und Tempelhof, sind die drei, die Google unter
"Gefunden, zurzeit nicht indexiert" führt. Google kennt die URLs, hat sie aber bis heute nicht
abgeholt. Das ist Googles Art zu sagen, dass sich das Crawl-Budget nicht lohnt.

**Was zu tun ist:** Keine neuen Bezirksseiten. Stattdessen die bestehenden zusammenführen und
vertiefen. Konkret:

- Die fünf Bezirke mit den meisten Impressionen (Mitte 2.694, Pankow 2.581, Marzahn 2.477,
  Lichtenberg 1.878 plus 423, Kreuzberg 671) bekommen jeweils einen `deepDive` im Umfang der
  Pankow-Seite, also 400 bis 600 zusätzliche eigene Wörter.
- Der Vertiefungstext muss Dinge enthalten, die nur jemand schreiben kann, der dort arbeitet:
  welche Kreuzung welchen Schadentyp produziert, wie die Parkraumbewirtschaftung die Schadenlage
  verändert, welche Werkstätten im Bezirk welche Stundensätze aufrufen, wie lange die Anfahrt
  tatsächlich dauert und warum. Die Pankow-Seite macht das bereits richtig, das ist die Messlatte.
- Die zehn schwächsten Bezirke werden zu drei bis vier Regionalseiten zusammengelegt
  (zum Beispiel Berlin Südwest für Steglitz, Zehlendorf, Tempelhof, Schöneberg). Die alten URLs
  werden per 301 auf die neue Seite geleitet. Weniger Seiten mit mehr Substanz schlagen 19 Seiten
  mit je 330 eigenen Wörtern.

Erwarteter Effekt: Die Impressionen sinken, die Klicks steigen. Das ist kein Rückschritt.
17.000 Impressionen ohne Klicks sind für Google ein negatives Nutzersignal.

### Befund 2: Ein einziger externer Link

Der Linkbericht der Search Console weist genau eine verweisende Domain aus: kfzgutachternetz.de.
Intern zählt Google 42 Links auf der gesamten Domain.

Für die Kernfunktion, die Google im Leitfaden beschreibt (Retrieval-Augmented Generation: Die
KI holt sich die relevantesten Seiten aus dem normalen Suchindex), ist das der größte Bremsklotz.
Die Ranking-Systeme, aus denen die KI ihre Quellen zieht, bewerten Autorität, und diese Domain hat
praktisch keine.

**Was zu tun ist**, in dieser Reihenfolge:

1. Branchenverzeichnisse, die bei den eigenen Geldbegriffen bereits auf Seite 1 stehen und damit
   doppelt wirken (Link plus Sichtbarkeit in der Liste): gelbeseiten.de, unfallgiganten.de,
   die-kfzgutachter.de, kfz-gutachtercheck.de (dort existiert bereits ein Eintrag),
   kfz-gutachter.berlin. Die Datei `verzeichnis-tracker.csv` im Projekt ist dafür der richtige Ort.
2. Regionale Verzeichnisse und Kammern: IHK Berlin, Berlin.de-Branchenbuch, Handelsregister-
   Verknüpfungen, BVSK oder vergleichbare Sachverständigenverbände, falls eine Mitgliedschaft
   besteht oder möglich ist.
3. Kooperationspartner mit eigener Website: Werkstätten, Anwaltskanzleien für Verkehrsrecht,
   Mietwagenfirmen. Die Flottenkunden aus dem Mietwagengeschäft (FM RideCars, GoodCab, Harmony,
   Prime 24, TF Fahrdienst) sind hier der naheliegendste Ansatz. Eine Seite "Partnerwerkstätten"
   oder ein gegenseitiger Eintrag ist ein sauberer, echter Link.
4. Lokale Presse und Fachportale: Ein konkreter Datenbeitrag (siehe Befund 5) ist der einzige
   Hebel, der ohne Betteln Links erzeugt.

Was nicht zu tun ist: gekaufte Links, Gastbeiträge auf themenfremden Blogs, künstliche
Erwähnungen. Google nennt das im Leitfaden explizit als wirkungslos, und bei einer Domain mit
einem einzigen natürlichen Link fällt ein plötzlicher Linkaufbau sofort auf.

### Befund 3: Von 91 Bewertungen standen 3 auf der Website, gekürzt (erledigt 19.09.2026)

Korrektur zur ersten Fassung dieses Berichts: Dort stand, die Bewertungen würden clientseitig
geladen und seien für KI-Crawler unsichtbar. Das war falsch. Die Prüfung lief über Wörter wie
"empfehlen" und "sehr zufrieden", die in den drei angezeigten Bewertungen zufällig nicht vorkamen
oder von der Kürzung abgeschnitten wurden. Die Texte standen serverseitig im HTML.

Der tatsächliche Befund war ein anderer. Startseite und `/ueber-uns` zeigten beide
`FALLBACK_REVIEWS.slice(0, 3)`, also dieselben drei Bewertungen, jeweils nach 220 beziehungsweise
200 Zeichen abgeschnitten. Von 91 Bewertungen standen drei auf der Website, und bei den längeren
fehlte genau die zweite Hälfte, in der die konkreten Aussagen stehen.

Dazu zwei Stück toter Code: `components/google-reviews-section.tsx` enthielt eine vollständige
serverseitige Abruflogik, wurde aber nirgends gerendert, und `app/api/reviews/route.ts` wurde von
keiner Stelle aufgerufen.

**Umgesetzt am 19.09.2026:**

- Bewertungsdaten liegen jetzt in `lib/reviews.ts`, erweitert von 8 auf 11 Einträge. Die drei
  neuen (Arda, Tarik Aslan, Berat Esrefoglu) wurden aus dem Maps-Profil ergänzt.
- Statt relativer Angaben ("vor 3 Tagen", eingefroren am 02.08.2026) steht jetzt ein Monat pro
  Bewertung. Relative Daten veralten still und werden mit der Zeit schlicht falsch.
- Die Kürzung ist weg. Der Volltext steht im HTML, die Anzeige wird per `line-clamp-[9]` optisch
  gekappt. Crawler lesen alles, das Kartenraster bleibt gleich hoch.
- Die Startseite zeigt die Bewertungen 1 bis 6, `/ueber-uns` die Bewertungen 7 bis 9. Damit stehen
  9 verschiedene Bewertungen auf der Domain statt dreimal derselben drei.
- `components/google-reviews-section.tsx` und `app/api/reviews/route.ts` sind gelöscht.

**Offen:** Live-Abruf der Bewertungstexte. Der vorhandene Places-Key liefert `rating` und
`userRatingCount`, aber `reviews` kommt leer zurück (geprüft am 19.09.2026, auch mit `reviews` als
einzigem Feld im FieldMask). Das Feld gehört zum SKU "Place Details Enterprise + Atmosphere" und
ist im Cloud-Projekt nicht freigeschaltet. Zusätzlich ist der Key auf den Referrer
`gutachtenprenzl.de` beschränkt, was serverseitig nur über einen mitgeschickten Referrer-Header
funktioniert und jederzeit brechen kann. Für einen Live-Abruf wären nötig: ein zweiter Key ohne
Referrer-Beschränkung, nur für serverseitige Aufrufe, plus Freischaltung des Atmosphere-SKU. Bei
einem Abruf pro Tag liegt das im kostenlosen Kontingent.

**Revidiert am 20.09.2026:** Hier stand zuvor "kein `aggregateRating` im JSON-LD, Google untersagt
selbst ausgezeichnete Bewertungen". Das war für Google richtig gedacht, aber zu weit gefasst.
Zutreffend ist: Bewertungen, die ein Betrieb über sich selbst auf der eigenen Domain auszeichnet,
sind für Review-Rich-Results nicht zulässig — Google spielt keine Sterne aus und ignoriert den
Block. Ein Verbot mit Risiko einer manuellen Maßnahme ist das bei wahrheitsgemäßen Angaben nicht.

Maßgeblich ist der zweite Kanal: Perplexity, ChatGPT Search und AI Overviews lesen JSON-LD direkt
und sind an Googles Rich-Result-Regeln nicht gebunden. Dort entscheidet die Auszeichnung darüber,
ob "5,0 aus 91 Bewertungen" als belegte Aussage vorliegt oder überhaupt nicht.

`aggregateRating` und `review` stehen deshalb seit dem 20.09.2026 im `@graph` in `app/layout.tsx`,
gespeist aus `lib/reviews.ts` und `REVIEW_COUNT`/`REVIEW_RATING`. Die Bedingung, an der die ganze
Entscheidung hängt: Die Zahlen müssen den echten Werten im Google-Profil entsprechen.

### Befund 4: Kein einziges Video auf der Website

Der Leitfaden nennt Bilder und Videos ausdrücklich als Weg, über den eine Website in KI-Antworten
auftauchen kann, auch ohne dass ein Webseitenlink angezeigt wird.

Die Startseite enthält elf Bilder (zwei ohne Alt-Text) und null Videos. Gleichzeitig existiert auf
TikTok Material, das nachweislich funktioniert: der Puder-Test am Scheinwerfer mit etwa 1.250
Aufrufen, das Zertifikatsvideo mit etwa 2.400 Aufrufen.

**Was zu tun ist:**

- Drei bis fünf dieser Videos als selbst gehostete MP4 oder als YouTube-Einbettung auf die
  passenden Seiten legen: Der Scheinwerfer-Puder-Test gehört auf `/schadengutachten`, das
  Zertifikatsvideo auf `/ueber-uns`, ein Video "Was passiert bei der Besichtigung" auf
  `/unfallgutachten-berlin`.
- Jedes Video bekommt `VideoObject`-Markup mit `name`, `description`, `thumbnailUrl`,
  `uploadDate`, `duration` und `contentUrl`. Der `JsonLd`-Baustein in `components/neu/json-ld.tsx`
  kann das ohne Änderung ausgeben.
- Unter jedes Video ein Transkript als Fließtext. Das ist der Teil, den KI-Crawler lesen können,
  und es ist Inhalt, den kein Wettbewerber hat.
- Die beiden Bilder ohne Alt-Text auf der Startseite ergänzen.

### Befund 5: Die eigenen Daten liegen ungenutzt herum

Das ist der Punkt mit der größten Hebelwirkung und der einzige, den kein Wettbewerber kopieren
kann.

Im Cockpit und in den Excel-Dateien liegen die Daten aus mehreren hundert echten Berliner
Gutachten: Schadenhöhen, Fahrzeugklassen, Bezirke, Unfalltypen, Reparaturdauern, wie oft die
Versicherung gekürzt hat und um wie viel. Auf der Website steht davon nichts.

Google beschreibt im Leitfaden den Unterschied zwischen alltäglichem Inhalt ("7 Tipps für
Erstkäufer") und nicht alltäglichem Inhalt ("Warum wir auf die Inspektion verzichtet und Geld
gespart haben"). Eine Nutzungsausfalltabelle, die jeder abschreibt, ist das erste. Eine Auswertung
der eigenen Fälle ist das zweite.

**Was zu tun ist:** Ein jährlich aktualisierter Datenbeitrag, zum Beispiel unter
`/schadenreport-berlin`:

- Durchschnittliche Schadenhöhe nach Bezirk, aus den eigenen Gutachten
- Häufigste Unfallorte und Schadentypen, nach Bezirk
- Wie oft die gegnerische Versicherung das Gutachten gekürzt hat, um welche Positionen und um
  welchen Betrag im Mittel
- Wie lange die Regulierung im Schnitt gedauert hat, aufgeschlüsselt nach Versicherer
- Anteil der Fälle, in denen die 130-Prozent-Regel griff

Anonymisiert, aggregiert, mit Fallzahl und Zeitraum. Das ist der einzige Beitrag auf dieser
Website, den eine KI zitieren muss, weil die Zahl sonst nirgendwo steht. Und es ist der einzige
realistische Weg, an Links von Presse, Fachportalen und Anwaltsseiten zu kommen, ohne darum zu
bitten.

Zweiter Datenpunkt, der sofort verfügbar ist: die Werkstatt-Stundenverrechnungssätze in Berlin.
Die kennt das Büro aus jedem Gutachten. Eine gepflegte Übersicht "Stundenverrechnungssätze Berlin
[Jahr]" ist genau die Art Seite, die in KI-Antworten zur Frage "wird mein Gutachten gekürzt"
landet.

### Befund 6: Rechner statt Ratgebertext

In den Daten stehen mehrere Suchanfragen nach Werkzeugen, bei denen die Seite auf Position 69 bis
93 liegt:

| Suchanfrage | Impressionen | Position |
|---|---|---|
| 130 prozent regel | 27 | 69,6 |
| 130 prozent regelung | 20 | 69,5 |
| 130-prozent-regel rechner | 16 | 83,5 |
| 130 regelung rechner | 14 | 88,9 |
| 130 prozent regel rechner | 13 | 83,2 |

Es gibt die Seite `/130-prozent-regelung`, und sie rankt trotzdem auf Seite 7 bis 9. Die Suchenden
wollen rechnen, nicht lesen.

**Was zu tun ist:** Zwei Rechner, beide serverseitig gerendert mit sichtbarer Beispielrechnung im
HTML, damit sie auch ohne JavaScript Inhalt haben:

- 130-Prozent-Rechner: Wiederbeschaffungswert, Reparaturkosten, Restwert rein, Ergebnis plus
  Erklärung raus. Auf `/130-prozent-regelung` integrieren, nicht als neue URL.
- Nutzungsausfall-Rechner: Fahrzeugmodell und Alter rein, Gruppe nach Sanden/Danner/Küppersbusch
  und Tagessatz raus. Auf `/nutzungsausfall-tabelle-berlin`, der Seite mit der zweitbesten CTR und
  der zweitbesten KI-Sichtbarkeit.

Beide Rechner brauchen unter dem Ergebnis eine ausgeschriebene Beispielrechnung mit echten Zahlen.
Das ist der Teil, den eine KI zitiert.

### Befund 7: Sieben Seiten sind gar nicht im Index, darunter die Kontaktseite

/kontakt wird von Google als "Gefunden, zurzeit nicht indexiert" geführt. Die Seite hat 361 Wörter
und die Überschrift "Direkt zu Ihrem Sachverständigen." Für ein lokales Unternehmen ist die
Kontaktseite eine der Seiten, aus denen Google und KI-Systeme die Identität des Betriebs ableiten.

Ebenfalls nicht indexiert: /parkschaden-gutachten-berlin und /totalschaden-gutachten-berlin,
zwei Leistungsseiten, die in der Angebotsstruktur im JSON-LD sogar namentlich aufgeführt sind.

**Was zu tun ist:**

- /kontakt inhaltlich ausbauen: vollständige Anschrift als Text, Anfahrtsbeschreibung mit ÖPNV,
  Parkmöglichkeiten, Erreichbarkeitszeiten im Klartext, was beim ersten Anruf gebraucht wird,
  wie der Ablauf danach aussieht. 361 Wörter sind zu wenig, um indexiert zu werden.
- Interne Verlinkung erhöhen. Jede Bezirksseite und jede Leistungsseite sollte im Fließtext, nicht
  nur in der Navigation, auf die passenden Nachbarseiten verlinken. Der interne Linkbericht zeigt
  42 Links auf der ganzen Domain. Das ist zu wenig, um 64 Seiten zu tragen.
- Nach dem Ausbau die drei Seiten einzeln über die URL-Prüfung zur Indexierung anmelden.

### Befund 8: Das Impressum ist längst freigegeben, Google hat es nur nicht gemerkt

Korrektur zur ersten Fassung: Dort stand, /impressum sei per noindex ausgeschlossen und der Tag
müsse raus. Der Tag ist längst raus. Ich hatte die Angabe aus dem Indexierungsbericht übernommen,
ohne auf das Crawl-Datum daneben zu schauen.

Live geprüft am 19.09.2026:

```
meta robots      index, follow
meta googlebot   index, follow, max-image-preview:large, max-snippet:-1
X-Robots-Tag     keiner
canonical        https://gutachtenprenzl.de/impressum
/impressum/      308 auf /impressum
```

Im gesamten Projekt gibt es genau ein `index: false`, in `lib/seo.ts` hinter `DRAFT_MODE`, und das
steht auf `false`. `app/impressum/page.tsx` benutzt `pageMetadata()` ohnehin nicht. Entfernt wurde
der Tag vermutlich in Commit `b1148ba`.

Der Grund für die Meldung steht in der URL-Prüfung: **Letztes Crawling 09.06.2026.** Google
arbeitet seit über drei Monaten mit dem alten Stand.

**Was zu tun ist:** Nichts am Code. Nur ein Recrawl anstoßen, über URL-Prüfung und "Indexierung
beantragen". Versuch am 19.09.2026 abgelehnt mit "Kontingent überschritten", das Tageslimit für
Indexierungsanfragen war bereits aufgebraucht. Am Folgetag wiederholen.

### Befund 9: Die Entität ist unscharf

Zwei Muster in den Daten zeigen, dass Google nicht sicher weiß, was dieses Unternehmen macht.

Erstens ranken Immobilien- und Brandschutzanfragen: "wohnungsgutachten berlin" (254 Impressionen,
Position 16), "verkehrswertgutachten berlin" (252, Position 9), "immobilienbewertung
verkehrswertgutachten berlin" (232, Position 17), dazu mehrere Anfragen nach Sachverständigen für
Sprinkleranlagen und Feuerlöschanlagen auf Position 1,3 bis 10. Zusammen rund 1.260 Impressionen
ohne jeden Klick, weil die Suchenden etwas völlig anderes wollen.

Zweitens die eigenen Kanäle: Auf Instagram und TikTok steht "deutschlandweit für Sie im Einsatz".
Das ist genau das Gegenteil des Signals, das ein lokaler Betrieb aussenden sollte, und es erklärt
vermutlich auch die kuriose Position 1,1 für "gutachter deutschland".

**Was zu tun ist:**

- Auf allen Kanälen dieselbe Beschreibung führen: Kfz-Sachverständigenbüro in Berlin, Einsatzgebiet
  Berlin und Umland. "Deutschlandweit" aus den Social-Profilen streichen.
- Der Begriff "Gutachten" allein ist mehrdeutig. In Titeln, Überschriften und der ersten
  Textzeile jeder Seite sollte "Kfz" oder "Fahrzeug" stehen. Auf der Startseite steht im H1
  "Kfz Gutachten Berlin", das ist richtig, aber im Seitentitel und in der Markenangabe taucht
  regelmäßig nur "Gutachten Prenzl" auf.
- In `app/layout.tsx` beim LocalBusiness zusätzlich `additionalType` mit
  `https://www.wikidata.org/wiki/Q3320353` (Kfz-Sachverständiger) oder alternativ
  `"@type": ["LocalBusiness","ProfessionalService","AutomotiveBusiness"]` setzen. Das kostet zwei
  Minuten und schärft die Kategorie.
- Die `knowsAbout`-Liste der Person um die Begriffe erweitern, die tatsächlich gesucht werden:
  Nutzungsausfallentschädigung, 130-Prozent-Regelung, fiktive Abrechnung, Wiederbeschaffungswert,
  Restwertermittlung, Werkstattbindung.

### Befund 10: Das Unternehmensprofil ist der eigentliche Klickkanal

Das ist die unbequeme Wahrheit dieser Analyse. Die Website kann noch so gut werden, bei "kfz
gutachter berlin" entscheidet der Kartenblock über den Klick, und dort entscheiden Bewertungen,
Kategorien, Nähe und Aktivität.

Die Konkurrenz steht bei 516, 373, 259, 237, 146, 136 und 132 Bewertungen. Gutachten Prenzl bei 91.
Bei fünf Sternen. Das ist die einzige Zahl in dieser ganzen Analyse, die sich mit vorhandenen
Mitteln kurzfristig verdoppeln lässt.

**Was zu tun ist:**

- Ein fester Prozess nach jedem abgeschlossenen Gutachten: Bewertungslink per WhatsApp, am selben
  Tag, mit Namen des Sachverständigen im Text. Bei 20 bis 30 Gutachten im Monat und einer
  Rücklaufquote von 30 Prozent sind das 70 bis 100 zusätzliche Bewertungen im Jahr. Die Vorlagen
  in `BEWERTUNGEN-VORLAGEN.md` sind dafür schon da.
- Wöchentlich ein Beitrag im Unternehmensprofil, am besten mit einem echten Fall
  (anonymisiert, mit Foto). Aktivität ist ein Ranking-Faktor im Kartenblock.
- Die Fragen-und-Antworten-Sektion des Profils selbst befüllen. Die zehn häufigsten Fragen aus
  `lib/faq-katalog.ts` dort eintragen und beantworten.
- Leistungen und Produkte im Profil pflegen, mit derselben Benennung wie im `hasOfferCatalog` der
  Website.
- Fotos: mindestens 20, davon mehrere vom Büro von außen und innen, vom Fahrzeug, von der
  Messtechnik. Profile mit vielen aktuellen Fotos ranken im Kartenblock messbar besser.

### Befund 11: Die Inhalte für KI-Antworten sind zu allgemein formuliert

Die Seiten, die KI-Impressionen bekommen, haben eine Gemeinsamkeit: Sie beantworten eine konkrete
Frage mit einer konkreten Zahl. Die Nutzungsausfalltabelle nennt Tagessätze. Die Kostenseite nennt
250 bis 1.250 Euro.

Die Seiten ohne KI-Impressionen erklären Sachverhalte, ohne sie zu beziffern.

**Was zu tun ist**, auf jeder Ratgeberseite:

- Die Kernaussage muss im ersten Absatz stehen, mit Zahl, und zwar als vollständiger Satz, der auch
  ohne Kontext funktioniert. Nicht "Die Höhe hängt von mehreren Faktoren ab", sondern "Ein
  Kfz-Gutachten kostet in Berlin bei einem Schaden von 5.000 Euro rund 780 Euro brutto."
- Jede Zahl bekommt ein Datum und eine Quelle. KI-Systeme bevorzugen datierte Angaben, weil sie
  Aktualität prüfen können. Die `lastmod`-Pflege über `scripts/gen-lastmod.mjs` ist gut, aber im
  sichtbaren Text steht das Datum meist nicht.
- Jede Ratgeberseite endet mit einem Abschnitt, der ausdrücklich die eigene Erfahrung nennt:
  "In unseren Gutachten aus [Zeitraum] lag der Wert bei ...". Das ist die "einzigartige
  Perspektive", die der Leitfaden meint.

---

## 5. Was nicht zu tun ist

- Keine weiteren Bezirks- oder Stadtteilseiten anlegen. Die Seitenzahl ist nicht das Problem.
- Keine Arbeit mehr in `public/llms.txt` stecken. Google ignoriert die Datei nachweislich, und die
  anderen Anbieter werten sie ebenfalls nicht systematisch aus. Sie kann bleiben, sie kostet nichts.
- Kein `aggregateRating` im JSON-LD. Die bestehende Entscheidung ist richtig.
- Keine FAQ-Rich-Results erwarten. Google spielt FAQ-Snippets seit 2023 nur noch für Behörden und
  medizinische Einrichtungen aus. Das FAQPage-Markup darf bleiben, es hilft beim Verständnis der
  Seite, aber es erzeugt keine Sternchen im Suchergebnis.
- Keine Texte speziell für KI umschreiben. Der Leitfaden sagt ausdrücklich, dass das nichts bringt.

---

## 6. Reihenfolge

### Diese Woche

1. ~~noindex vom Impressum entfernen~~ war schon entfernt. Stattdessen: Recrawl über die
   URL-Prüfung anstoßen, sobald das Tageskontingent wieder frei ist (Versuch am 19.09. lief ins
   Limit). Siehe Befund 8.
2. ~~Bewertungen im HTML ausbauen~~ erledigt 19.09.2026, siehe Befund 3.
3. Bewertungsprozess nach jedem Gutachten einführen. Ziel: 91 auf 150 bis zum Jahresende.
4. "Deutschlandweit" aus Instagram und TikTok streichen.
5. /kontakt auf 800 bis 1.000 Wörter ausbauen, danach zur Indexierung anmelden.

### Diesen Monat

6. `deepDive` für Mitte, Marzahn, Lichtenberg und Kreuzberg schreiben, im Umfang der Pankow-Seite.
7. Die zehn schwächsten Bezirksseiten zu drei Regionalseiten zusammenlegen, alte URLs per 301
   weiterleiten.
8. Drei TikTok-Videos mit Transkript und `VideoObject`-Markup auf die passenden Leistungsseiten.
9. Interne Verlinkung im Fließtext auf allen Leistungs- und Bezirksseiten nachziehen.
10. Verzeichniseinträge: die fünf Portale aus Befund 2, dokumentiert in `verzeichnis-tracker.csv`.

### Dieses Quartal

11. 130-Prozent-Rechner und Nutzungsausfall-Rechner, serverseitig gerendert.
12. `/schadenreport-berlin` mit den eigenen aggregierten Gutachtendaten.
13. Übersicht der Berliner Werkstatt-Stundenverrechnungssätze.
14. Alle Ratgeberseiten auf das Muster aus Befund 11 umstellen: Zahl im ersten Absatz, Datum,
    eigener Erfahrungsabschnitt am Ende.

---

## 7. Woran sich der Erfolg messen lässt

Die Gesamtzahl der Impressionen ist die falsche Kennzahl. Sie ist in den letzten drei Monaten
gestiegen, während die Klicks gefallen sind. Sinnvoller sind:

| Kennzahl | Heute | Ziel in 6 Monaten |
|---|---|---|
| Klicks aus Nicht-Marken-Anfragen | ca. 30 pro Quartal | 150 pro Quartal |
| CTR gesamt | 0,4 % | 1,5 % |
| Impressionen in KI-Funktionen | 338 pro Quartal | 1.500 pro Quartal |
| Seiten mit KI-Impressionen > 10 | 6 | 20 |
| Indexierte Seiten | 40 | über 90 % der Sitemap |
| Verweisende Domains | 1 | 15 |
| Google-Bewertungen | 91 | 200 |
| Seiten mit CTR über 2 % | 2 | 10 |

Der KI-Bericht unter Leistung, generative KI-Funktionen, liefert keine Suchanfragen, nur Seiten,
Länder, Geräte und Tage. Die beste verfügbare Kontrolle ist deshalb: Welche Seiten tauchen dort
auf, und wächst diese Liste. Monatlich exportieren und den Verlauf führen.
