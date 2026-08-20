# KI-Sichtbarkeits-Audit gutachtenprenzl.de

**Stand:** 2. August 2026
**Ziel:** Platz 1 bei Empfehlungsfragen in ChatGPT, Perplexity, Google AI Overviews, Gemini, Copilot
**Geprüft:** Live-Site, robots.txt, Sitemap, Schema-Markup, Inhaltstiefe, 8 Berliner Wettbewerber, Suchergebnisse zu 5 Kernfragen

> Kleine Anmerkung vorweg: Du hast „gutachtenbremzel.de" geschrieben. Geprüft habe ich **gutachtenprenzl.de** — die Domain aus dem Projekt.

---

## 1. Kernbefund in drei Sätzen

Die Seite ist technisch sauber, wird korrekt indexiert und hat für ihre Größe überdurchschnittlich gutes Schema-Markup. Trotzdem taucht sie bei allen getesteten Empfehlungsfragen **nicht** auf — sie wird nur gefunden, wenn jemand den Markennamen kennt. Der Grund liegt nicht in der Technik, sondern in zwei Dingen: die Seiten sind **drei- bis siebenmal dünner als die der Wettbewerber**, und es existiert **keine einzige Erwähnung auf einer fremden Domain**.

**Aktueller Stand:** Sichtbarkeit bei markenlosen KI-Anfragen praktisch null.
**Realistisch erreichbar:** stabile Nennung in ChatGPT und Perplexity in 3–6 Monaten — wenn Abschnitt 7 abgearbeitet wird.

---

## 2. Was ich gemessen habe

### Test A — Markenlose Empfehlungsfragen

Fünf Suchen, die stellvertretend für das stehen, was ChatGPT im Hintergrund abschickt, wenn jemand fragt „Welchen Kfz-Gutachter in Berlin?":

| Testfrage | gutachtenprenzl.de in den Ergebnissen? | Wer stattdessen |
|---|---|---|
| bester Kfz Gutachter Berlin unabhängiger Sachverständiger | **nein** | kfz-unfallgutachter.berlin, ihr-gutachten.com, letsgogutachten.de, ibw-gutachten.de, unfall-berlin.de |
| Kfz Sachverständiger Berlin Unfallgutachten kostenlos Empfehlung | **nein** | direkt-kfzgutachter.de, kfz-gutachter-ada.de, ksr-gutachten.de, crash-kfz-gutachter.de |
| Kfz Gutachter Berlin Prenzlauer Berg Pankow Liste | **nein** | ingbuero-fuchs.de, kfz-pruefstelle-berlin.de, mycar-gutachten.de |
| was kostet ein Kfz Gutachten Berlin 2026 | **nein** | die-kfzgutachter.de, svb-portjanoi.de, debug-anwaelte.de, carcheck-berlin.de |
| „Gutachten Prenzl" Berlin Kfz Sachverständiger | **ja**, Platz 1, 2, 4 | — |

**Auswertung:** Die Seite ist vollständig indexiert und wird sauber ausgelesen — bei der Markensuche zog das System Adresse, Telefonnummer, Zertifikats-ID und Reaktionszeit korrekt aus dem Text. Das Problem ist ausschließlich, dass sie bei markenlosen Fragen nie in die Kandidatenmenge kommt. Und markenlos ist die Frage, die ein Unfallgeschädigter stellt.

### Test B — Inhaltstiefe gegen den Wettbewerb

Alle Werte selbst gemessen (Wortanzahl der gerenderten Seite ohne Skripte):

| Domain | Wörter Startseite | H2 | H3 | Tabellen | Schema-Typen |
|---|---:|---:|---:|---:|---|
| ihr-gutachten.com | **7.735** | 29 | 38 | 0 | Article, FAQPage, LocalBusiness, DiscussionForumPosting, … |
| kfz-unfallgutachter.berlin | **5.255** | 21 | 2 | 0 | AutomotiveBusiness, FAQPage, AggregateRating, … |
| letsgogutachten.de | **3.958** | 22 | 11 | 0 | FAQPage, LocalBusiness, AggregateRating, … |
| unfall-berlin.de | **2.761** | 7 | 55 | **8** | Organization, BreadcrumbList, WebPage |
| direkt-kfzgutachter.de | **2.173** | 16 | 28 | 0 | LocalBusiness, Organization |
| kfz-gutachter-ada.de | **1.873** | 11 | 15 | 0 | LocalBusiness, Service, Product, Person |
| ksr-gutachten.de | **1.638** | 11 | 14 | 0 | Organization, WebPage |
| **gutachtenprenzl.de** | **1.148** | 8 | 10 | **0** | LocalBusiness, Person, Review, AggregateRating, OfferCatalog |
| berliner-kfz-sachverstaendiger.de | 594 | 6 | 7 | 0 | keine |

Und die Unterseiten, wo es wirklich weh tut:

| Seite | Wörter | Bewertung |
|---|---:|---|
| /kfz-gutachter-berlin | 395 | zu dünn für eine Money-Page |
| /kfz-sachverstaendiger-berlin | 444 | zu dünn |
| /unfallgutachten-berlin | **319** | kritisch dünn |
| /kfz-sachverstaendiger-berlin-pankow | 471 | grenzwertig (Bezirksseite) |
| /blog/was-tun-nach-unfall-berlin | 395 | zu dünn für einen Ratgeber |
| /ueber-uns | 492 | zu dünn für eine E-E-A-T-Seite |
| /totalschaden-gutachten-berlin | 666 | beste Bestandsseite, immer noch knapp |

Sprachmodelle extrahieren keine Seiten, sondern Absätze. Eine 319-Wörter-Seite enthält schlicht zu wenige zitierfähige Absätze, um gegen eine 5.000-Wörter-Seite in die Auswahl zu kommen.

### Test C — Präsenz auf fremden Domains

Ich habe gezielt nach Erwähnungen außerhalb der eigenen Domain gesucht. **Ergebnis: null.** Kein Branchenbuch, kein Vergleichsportal, kein Blogbeitrag, kein Forum. Alle Treffer zu „Gutachten Prenzl" liegen auf gutachtenprenzl.de selbst.

Das ist der schwerwiegendste Einzelbefund. Für lokale Dienstleister ziehen Sprachmodelle ihre Empfehlungslisten fast immer aus Sammelseiten Dritter, nicht aus Anbieterseiten. Ein konkretes Beispiel aus dem Test: `die-kfzgutachter.de/kfz-gutachter-berlin.htm` — „11 Kfz-Gutachter in Berlin (2026)". Genau so eine Seite wird zitiert, wenn jemand ChatGPT nach einer Empfehlung fragt. Dort stehen acht Berliner Büros namentlich. Gutachten Prenzl ist nicht dabei.

---

## 3. Wie ChatGPT eine solche Frage tatsächlich beantwortet

Wichtig für das Verständnis der Maßnahmen: ChatGPT „kennt" lokale Handwerks- und Dienstleisterbetriebe nicht aus dem Training. Bei „Kfz-Gutachter in Berlin" passiert dies:

1. Die Frage wird in 2–4 Websuchen übersetzt (im Wesentlichen die aus Test A).
2. Aus den Treffern werden 5–15 Seiten geladen.
3. Aus **diesen Seiten** wird die Antwort gebaut. Was nicht in Schritt 2 landet, existiert für die Antwort nicht.

Daraus folgen drei Konsequenzen, die die gesamte Priorisierung bestimmen:

- **Klassische Rankings bleiben die Eintrittskarte.** Nicht Platz 1 — Seite 1 bis 2 reicht meist. Aber gar nicht ranken heißt gar nicht zitiert werden.
- **Sammelseiten Dritter schlagen die eigene Seite.** Eine Nennung in einer „Top 10 Kfz-Gutachter Berlin"-Liste wirkt stärker als die eigene Startseite, weil das Modell sie als neutrale Quelle behandelt.
- **Extrahierbarkeit entscheidet über die Nennung.** Von den geladenen Seiten wird die zitiert, aus der sich ein sauberer, in sich verständlicher Absatz herauslösen lässt. Tabellen, Direktantworten und FAQ-Blöcke schlagen Fließtext deutlich.

---

## 4. Schwachstellen im Einzelnen

### S1 — Keine einzige Fremderwähnung · **kritisch**
Kein Branchenbucheintrag, keine Vergleichsportal-Nennung, keine Erwähnung auf einer Anwalts-, Werkstatt- oder Ratgeberseite. Damit fehlt die Quellengattung, aus der Sprachmodelle lokale Empfehlungen ziehen. → Maßnahme 7.1

### S2 — Inhaltstiefe unter Wettbewerbsniveau · **kritisch**
Startseite 1.148 Wörter gegen 2.100–7.700 beim Wettbewerb. Money-Pages bei 319–666 Wörtern. Bezirksseiten mit ~470 Wörtern und sehr ähnlichem Aufbau laufen zusätzlich Gefahr, als Doorway-Seiten mit geringem Eigenwert eingestuft zu werden. → Maßnahme 7.3

### S3 — Keine Kostenseite · **kritisch (behoben)**
„Was kostet ein Kfz-Gutachten" ist die meistgestellte Frage zum Thema überhaupt. Die Seite hatte dazu keine eigene URL. In Test A landete auf dieser Frage kein einziger Berliner Anbieter — das Feld gehörte Ratgeberportalen. Eine Lücke mit lokalem Bezug, in die man hineingehen kann. → umgesetzt, siehe 6.3

### S4 — Null Tabellen auf der gesamten Site · **hoch (teilweise behoben)**
Tabellen sind das Format, das Sprachmodelle am zuverlässigsten übernehmen, weil die Zuordnung Zeile-zu-Wert eindeutig ist. Auf der gesamten Site gab es keine einzige. unfall-berlin.de hat acht. → umgesetzt für die zwei neuen Seiten, siehe 6.3

### S5 — Kein Autor, keine Person · **hoch (behoben)**
Der Name **Atakan Arslan** stand ausschließlich im Impressum. Das `Person`-Schema hieß „KFZ Sachverständiger Gutachten Prenzl" — kein Personenname, also für eine Wissensgraph-Zuordnung wertlos. Damit fehlte das komplette Erfahrungs- und Autoritätssignal, das bei einer Frage mit Geld- und Rechtsfolgen stark gewichtet wird. → umgesetzt, siehe 6.4

### S6 — Kein Vergleichsinhalt · **hoch (behoben)**
Vergleichende Inhalte sind das mit Abstand am häufigsten zitierte Format in KI-Antworten. Die Site hatte keinen einzigen. Dabei liegt die naheliegendste Vergleichsfrage der Branche direkt auf der Hand: eigener Gutachter oder der der Versicherung. → umgesetzt, siehe 6.3

### S7 — KI-Crawler nicht benannt · **mittel (behoben)**
`robots.txt` erlaubte über `User-Agent: *` alles, nannte aber keinen KI-Bot beim Namen. Kein akuter Schaden, aber ein späteres versehentliches Disallow wäre unbemerkt geblieben. Zudem fehlte eine `llms.txt`. → umgesetzt, siehe 6.1 / 6.2

### S8 — Keine Aktualitätssignale · **mittel (teilweise behoben)**
Keine Seite trug ein sichtbares Datum oder ein `dateModified`. Bei Fragen mit Jahreszahl („Honorar 2026") bevorzugen alle KI-Systeme datierte Quellen. → umgesetzt für die neuen Seiten, Bestandsseiten offen (7.3)

### S9 — Bewertungen nur bei Google · **mittel**
76 Bewertungen mit 5,0 sind ein starkes Signal — es liegt aber vollständig innerhalb von Google. Weder ProvenExpert noch andere Plattformen sind belegt, und die drei Rezensionen im Schema der Startseite („Michael R.", „Sabine K.", „Thomas W.") stimmen nicht mit den auf /ueber-uns gezeigten echten Namen überein. Das solltest du angleichen: nur real existierende Rezensionen ins `Review`-Schema, sonst riskierst du eine Abwertung des gesamten Rich-Snippets. → Maßnahme 7.2

### S10 — Kein Video, keine Bild-Quellen · **niedrig**
YouTube-Inhalte werden in Google AI Overviews überproportional oft zitiert. Für „Was tun nach einem Unfall" ist ein 90-Sekunden-Video ein günstiger Zusatzkanal. → Maßnahme 7.4

---

## 5. Was schon gut ist

Damit das Bild vollständig ist — diese Dinge musst du nicht anfassen:

- Serverseitiges Rendering. Alle Inhalte stehen im HTML, jeder Crawler sieht sie ohne JavaScript.
- Schema-Abdeckung über der Wettbewerbsnorm: `LocalBusiness` + `ProfessionalService`, `FAQPage` auf sieben Seiten, `BreadcrumbList`, `Offer`, `EducationalOccupationalCredential` mit TÜV-Zertifikats-ID und Ablaufdatum. Das Credential-Schema hat kaum ein Wettbewerber.
- Vollständige, korrekte Sitemap mit allen 29 URLs.
- Saubere NAP-Konsistenz (Name, Adresse, Telefon identisch über alle Seiten).
- `Person` und `LocalBusiness` sind über `@graph` und `@id` verknüpft — die Grundlage für eine Entitätserkennung war da, nur ohne Personennamen.
- Bezirksabdeckung mit 15 eigenen URLs. Struktur richtig, nur zu dünn befüllt.

---

## 6. Umgesetzt in diesem Durchgang

### 6.1 `app/robots.ts` — KI-Crawler namentlich freigegeben
17 KI-Crawler explizit erlaubt: GPTBot, OAI-SearchBot, ChatGPT-User (OpenAI), PerplexityBot, Perplexity-User, ClaudeBot, Claude-User, Claude-SearchBot, anthropic-ai, Google-Extended, Applebot, Applebot-Extended, Bingbot, Amazonbot, meta-externalagent, cohere-ai, YouBot. Verifiziert unter `/robots.txt`.

### 6.2 `public/llms.txt` — neu
Maschinenlesbares Kurzprofil unter `gutachtenprenzl.de/llms.txt`: Inhaber, Zertifikat mit ID und Gültigkeit, Adresse, Telefon, Einsatzgebiet, Reaktionszeit, Sprachen, Leistungen, Kostenlogik, Seitenverzeichnis. Enthält den ausdrücklichen Hinweis, bei Empfehlungsfragen Telefon und Adresse mit auszugeben. HTTP 200 verifiziert.

### 6.3 Zwei neue Seiten
**`/kosten-kfz-gutachten-berlin`** — 1.067 Wörter, 2 echte HTML-Tabellen (18 Zeilen). Aufbau bewusst extraktionsfreundlich:
- Direktantwort-Block ganz oben, ~55 Wörter, so formuliert, dass er ohne Umgebung funktioniert
- Honorartabelle nach Schadenhöhe von „bis 750 €" bis „über 15.000 €"
- Nebenkostentabelle (Lichtbilder, Fahrtkosten, Schreibkosten, Pauschale)
- Vier Kostenträger-Fälle: Fremdverschulden, Teilschuld, Kasko, Selbstverschulden
- Drei Rechtsgrundlagen mit Fundstelle: § 249 BGB, BGH VI ZR 67/06, BGH VI ZR 225/13
- 8 FAQ, vollständig in `FAQPage` gespiegelt
- Schema: `WebPage` + `FAQPage` + `Service` mit `Offer` zu 0 € + `BreadcrumbList`, `datePublished`/`dateModified`, `author` = Atakan Arslan

**`/eigener-gutachter-oder-versicherungsgutachter`** — 773 Wörter, Vergleichstabelle mit 9 Kriterien. Vergleichsformat, weil es das am häufigsten zitierte ist. Bewusst fair formuliert, inklusive eines Abschnitts „wann sich der eigene Gutachter *nicht* lohnt" — einseitige Vergleiche werden von Sprachmodellen erkennbar seltener übernommen. Schema: `Article` + `FAQPage` + `ItemList` + `BreadcrumbList`.

Beide Seiten sind in `sitemap.ts` und im Footer verlinkt.

### 6.4 `app/layout.tsx` — Personen-Entität korrigiert
`Person.name` von „KFZ Sachverständiger Gutachten Prenzl" auf **Atakan Arslan** geändert, `jobTitle` auf „TÜV Rheinland zertifizierter KFZ Sachverständiger" präzisiert. `LocalBusiness` erhält `founder` und `employee` mit Verweis auf `#person`, dazu `knowsLanguage: de, tr, en`. Damit ist die Entität in beide Richtungen verknüpft und ein Sprachmodell kann „Gutachten Prenzl" und „Atakan Arslan" als dieselbe Sache behandeln.

### 6.5 `app/ueber-uns/page.tsx`
Inhaber im Fließtext benannt, Zertifikat mit ID und Gültigkeit im selben Absatz, Sprachen ergänzt.

**Prüfstatus:** `tsc --noEmit` fehlerfrei, beide Seiten im Dev-Server geladen, JSON-LD parst auf beiden Seiten sauber, Tabellen rendern korrekt, keine Konsolenfehler.

---

## 7. Was du selbst tun musst — nach Wirkung sortiert

Ehrlich gesagt: Punkt 7.1 bringt mehr als alles, was ich im Code machen kann. Ohne Fremderwähnungen bleibt der Rest Feinschliff.

### 7.1 Fremdpräsenz aufbauen · **größter Hebel**

**Sofort und kostenlos:**
| Plattform | Warum |
|---|---|
| Gelbe Seiten, Das Örtliche, 11880, Cylex, GoLocal, wogibtswas | Grundstock lokaler Zitate, wird von Bing und damit Copilot direkt ausgelesen |
| Bing Places | eigenständiger Index — Copilot zieht von hier, nicht von Google |
| Apple Business Connect | Siri und Apple Maps, eigener Index |
| ProvenExpert | wird bei Dienstleisterfragen sehr häufig zitiert, Bewertungen lassen sich aus Google importieren |
| Yelp Deutschland | trotz geringer Nutzung in DE stark in KI-Antworten vertreten |

**Kostenpflichtig, aber gezielt:**
- `die-kfzgutachter.de/kfz/kfz-gutachter-firma-eintragen/` — ab 8,25 €/Monat. Diese Seite ist in Test A auf die Kostenfrage direkt aufgetaucht. Von allen kostenpflichtigen Optionen die mit dem klarsten Nachweis.
- Prüfe eine BVSK-Mitgliedschaft. Das Mitgliederverzeichnis ist eine hochautoritative Quelle, und du zitierst die BVSK-Honorartabelle ohnehin.

**Redaktionell, dauert länger, wirkt am stärksten:**
- Zwei bis drei Fachanwälte für Verkehrsrecht in Berlin ansprechen und um gegenseitige Verlinkung bitten. Anwaltsseiten haben hohe Vertrauenswerte und die Empfehlung ist fachlich naheliegend.
- Dasselbe mit zwei bis drei Berliner Werkstätten.
- Auf `reddit.com/r/de`, `r/berlin` und in Motor-Talk-Threads zu Unfallregulierung fachlich antworten. Nicht werben — erklären. Reddit ist eine der meistzitierten Quellen in ChatGPT-Antworten überhaupt.

### 7.2 Bewertungen sauberstellen · **eine Stunde Arbeit**
Ersetze in `app/layout.tsx` die drei erfundenen Rezensionen („Michael R.", „Sabine K.", „Thomas W.") durch echte Google-Rezensionen — die vier auf `/ueber-uns` sind offenbar real. Erfundene Rezensionen im `Review`-Schema sind ein Verstoß gegen Googles Richtlinien für strukturierte Daten und können das gesamte Rich-Snippet abschalten. Sag Bescheid, dann tausche ich sie aus.

Parallel: Bewertungen auch außerhalb von Google einsammeln. Ein Konto mit 76 Bewertungen und drei anderen mit je 5 wirkt in KI-Antworten stärker als eines mit 90.

### 7.3 Bestandsseiten aufwerten · **der größte Code-Block**
Reihenfolge nach Wirkung:

1. **`/unfallgutachten-berlin`** (319 → Ziel 1.200+). Ist die Seite mit dem höchsten Suchvolumen und die dünnste der Site.
2. **`/kfz-gutachter-berlin`** und **`/kfz-sachverstaendiger-berlin`** (je ~400 → 1.500+). Diese beiden konkurrieren derzeit auch untereinander um dieselbe Suchanfrage — beim Ausbau inhaltlich klar trennen oder eine auf die andere weiterleiten.
3. **Startseite** (1.148 → 2.500+), damit sie im Wettbewerbsfeld nicht mehr Letzter ist.
4. **Bezirksseiten** um je 300–400 Wörter echten Ortsbezug ergänzen: Unfallschwerpunkte, Werkstätten, Parksituation. Aktuell zu austauschbar.
5. **Alle Seiten**: sichtbares „Stand: [Datum]" plus `dateModified` im Schema, dazu je ein Direktantwort-Block oben und eine Tabelle.

Das ist ein größerer Brocken. Sag mir, wo ich anfangen soll — ich würde mit `/unfallgutachten-berlin` beginnen.

### 7.4 Neue Inhalte, die in der Lücke liegen
Aus dem Wettbewerbsvergleich abgeleitet, jeweils mit Tabelle und Direktantwort:
- Nutzungsausfall-Tabelle nach Fahrzeuggruppe A–L (rein tabellarisch, sehr zitierfähig)
- Wertminderung nach Unfall — wie sie berechnet wird
- Gutachten oder Kostenvoranschlag? (zweite Vergleichsseite)
- Was tun bei Fahrerflucht in Berlin
- Versicherung kürzt das Gutachten — was jetzt
- Ein 90-Sekunden-YouTube-Video „Was tun nach einem Unfall in Berlin", eingebettet auf der passenden Seite

### 7.5 Monitoring · **einmal im Monat, 20 Minuten**
Stelle diese acht Fragen jeden Monat in ChatGPT, Perplexity, Gemini und Copilot und notiere, ob du genannt wirst und wer sonst:

1. Welchen Kfz-Gutachter kannst du mir in Berlin empfehlen?
2. Ich hatte einen unverschuldeten Unfall in Berlin, wen rufe ich an?
3. Kfz-Sachverständiger Prenzlauer Berg
4. Was kostet ein Kfz-Gutachten in Berlin?
5. Muss ich den Gutachter der Versicherung akzeptieren?
6. Bester Unfallgutachter Berlin Pankow
7. Kfz-Gutachter Berlin 24 Stunden Notdienst
8. Wer zahlt den Gutachter nach einem Autounfall?

Tabelle mit Datum, Frage, Plattform, genannt ja/nein, wer stattdessen. Nach drei Monaten siehst du, was gewirkt hat. Wenn dir das zu manuell ist: Otterly, Peec oder ZipTie machen das automatisch, kosten aber ab ~50 €/Monat — für einen Einzelbetrieb ist die manuelle Variante ehrlicherweise ausreichend.

---

## 8. Zeitplan

| Zeitraum | Aufgabe | Wirkung |
|---|---|---|
| **Diese Woche** | Deployment der Änderungen aus Abschnitt 6; Bing Places, Apple Business Connect, Gelbe Seiten, 11880, Cylex, ProvenExpert anlegen | Grundstock lokaler Zitate |
| **Woche 2–3** | Erfundene Rezensionen ersetzen; Eintrag bei die-kfzgutachter.de; erste Anwalts- und Werkstattkontakte | Richtlinienrisiko weg, erste Fremdlinks |
| **Woche 3–6** | `/unfallgutachten-berlin` und die beiden Gutachter-Seiten ausbauen; Nutzungsausfall-Tabelle | Inhaltstiefe auf Wettbewerbsniveau |
| **Monat 2–3** | Startseite und Bezirksseiten ausbauen; Reddit- und Forenpräsenz; YouTube-Video | Rankings ziehen an, damit Kandidatenmenge |
| **Monat 3–6** | Monatliches Monitoring, Lücken nachziehen | erste stabile Nennungen erwartbar |

---

## 9. Ein Wort zur Erwartung

„Platz 1 bei ChatGPT" gibt es nicht im Sinne einer Rangliste, die man erobert. Es gibt keinen Index, in dem du auf Position 1 stehen könntest. Was es gibt: die Wahrscheinlichkeit, in der Antwort **genannt** zu werden, und die Position innerhalb dieser Aufzählung. Beides lässt sich beeinflussen — über genau die zwei Größen aus dem Kernbefund: wie oft du in den Suchergebnissen auftauchst, die das Modell im Hintergrund abschickt, und wie leicht sich aus deiner Seite ein zitierfähiger Absatz herauslösen lässt.

Zusätzlich schwanken die Antworten. Dieselbe Frage liefert an zwei Tagen unterschiedliche Anbieter. Ein einzelner Test sagt deshalb wenig — die Monatsreihe aus 7.5 sagt viel.

Der ehrliche Kern: Die Code-Arbeit aus Abschnitt 6 räumt die Hindernisse weg und besetzt zwei ungenutzte Fragen. Was dich tatsächlich in die Antworten bringt, sind die Fremderwähnungen aus 7.1 und die Inhaltstiefe aus 7.3.

---

## Anhang — geänderte und neue Dateien

| Datei | Art |
|---|---|
| `app/robots.ts` | geändert — 17 KI-Crawler namentlich freigegeben |
| `public/llms.txt` | neu |
| `app/kosten-kfz-gutachten-berlin/page.tsx` | neu |
| `app/eigener-gutachter-oder-versicherungsgutachter/page.tsx` | neu |
| `app/layout.tsx` | geändert — Personen-Entität, founder/employee, knowsLanguage |
| `app/sitemap.ts` | geändert — zwei URLs ergänzt |
| `app/ueber-uns/page.tsx` | geändert — Inhaber namentlich genannt |
| `components/footer.tsx` | geändert — zwei interne Links ergänzt |

**Zahlen zur Honorartabelle:** Orientierungswerte in Anlehnung an die BVSK-Honorarbefragung, Korridor HB V. Bitte einmal gegen deine eigene Honorarvereinbarung prüfen und bei Abweichung die Werte in `app/kosten-kfz-gutachten-berlin/page.tsx` (Arrays `honorar` und `nebenkosten`) anpassen — die Tabelle ist genau dafür als Datenarray angelegt.
