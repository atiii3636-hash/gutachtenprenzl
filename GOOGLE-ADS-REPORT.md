# Google Ads Audit – Gutachten Prenzl (158-363-2780)

Stand 23.10.2026 · Zeitraum "Gesamte Zeit" (18.3.–23.10.2026) · Quellen: Live-Konto per Chrome, Suchbegriffe-CSV vom 11.10.
Nicht prüfbar (nicht in der Oberfläche einsehbar): Enhanced-Conversions-Status, GA4-Verknüpfung, Landingpage-LCP, Standortoption "Präsenz". Diese Checks sind als "offen" markiert, der Score ist daher eine **Schätzung**.

## Health Score (geschätzt): ~37/100, Note D

| Bereich | Gewicht | Score |
|---|---|---|
| Conversion Tracking | 25 % | 30 |
| Wasted Spend | 20 % | 50 |
| Kontostruktur | 15 % | 30 |
| Keywords / QS | 15 % | 35 |
| Anzeigen / Assets | 15 % | 40 |
| Einstellungen | 10 % | 35 |

## Kennzahlen (alle Kampagnen im Konto, aktiv)
- Kosten 4.494 €, 688 Klicks, 21.750 Impr., CTR 3,16 %, Ø CPC 6,53 € (Warning), Conv.-Rate 9,45 %, 65 Conversions, **CPA 69 €**.
- Hauptkampagne "Suchkampagne mit Negativkeywords" (seit 27.6.): 4.442 €, 685 Klicks, 65 Conv., CPA 68 €. Status "Aktiv (eingeschränkt): nicht genug relevante Keywords".
- Drei neue Kampagnen (angelegt 16.–21.10. in der Google-Ads-App): zusammen 51 €, 93 Impr., 3 Klicks, 0 Conversions. Zu früh für Urteile.
- Impressionen sind seit August stark eingebrochen (Spitze Juli/August, danach nur noch wenige hundert pro Woche).

## 1. Conversion Tracking (kritisch)
- **18 Conversion-Aktionen**, davon 5 mit Status **"Falsch konfiguriert"**, darunter die eigenen "Anruf Website" und "WhatsApp Klick" (aus dem Code gefeuert). Alle übrigen "Warten auf Conversions" oder "Überprüfung erforderlich".
- **Müll-Conversions im Zielvorhaben**: "Route berechnen" 162, "Seitenaufrufe" 39, "Menüansichten" 4 (Google-gehostete Local Actions, teils als Primärziel). Bei "Klicks maximieren" egal, bei späterer Umstellung auf Smart Bidding würden sie das Gebot verfälschen.
- **Altlasten TechSol** (Formular, WhatsApp, Telefonnummer) als primär, ebenfalls falsch konfiguriert.
- Zählmethode "Alle" bei Anrufen/Click-to-Call, Werte 1 € statt echter Auftragswert (G49 FAIL).
- Doppelte Lead-Aktion: "Kontaktformular Anfrage" und "Kontaktformular Anfrage (1)".
- Gut: Tag AW-18025620294 und Consent Mode (Default "denied") sind auf der Website vorhanden. Ob Advanced Mode und Enhanced Conversions aktiv sind: offen.
- **Folge:** 65 Conversions und 68 € CPA sind nicht belastbar. Echte Leads (Anruf, WhatsApp, Formular) lassen sich nicht sauber trennen.

## 2. Wasted Spend
- **Suchbegriffe nur zu 30 % sichtbar** (1.216 € von 4.116 € Kampagnenkosten, "Sonstige Suchbegriffe" 2.900 €). G19 FAIL, Fehlbegriffe lassen sich für 70 % der Ausgaben gar nicht erkennen.
- Sichtbarer irrelevanter Anteil nur ~4 % (Namen, Logins), Marken-/Wettbewerberbegriffe ~31 €. Sichtbar also unkritisch, die Dunkelziffer bleibt.
- **10.032 Negativ-Keywords**, alle einzeln pro Kampagne (doppelt für "Suchkampagne" und "Broad 4km"), **keine Shared Lists**. Enthalten sind Müll wie `"1 2 34 6"` und `10315`. Auffällig: ein Negativ `"gutachter` (weitgehend passend), das jede Suche mit "gutachter" blocken kann. **Unbedingt prüfen**, ob es aktiv ist (Verdacht auf Zusammenhang mit dem Impressionen-Einbruch).
- Neue Kampagnen "Exact 5km Radius" / "Exact 5km Schöneweide" haben diese Negativ-Liste offenbar nicht.

## 3. Kontostruktur
- 4 Kampagnen, jede mit **einer Anzeigengruppe "Anzeigengruppe 1"** (G03/G02 FAIL), Benennung inkonsistent.
- Marke und Non-Brand gemischt (G05 FAIL).
- Kannibalisierung: `[kfz gutachter in der nähe]` liegt in zwei Kampagnen gleichzeitig, Radien überlappen (Prenzlauer Berg 5 km + 4 km).
- Budget **30 € pro Tag × 4 Kampagnen = 120 €/Tag möglich**, bei bisher ~20 €/Tag Realverbrauch. Prüfen, ob das gewollt ist.
- Nur Suche, kein Display/PMax (richtig für Lead-Gen-Start).

## 4. Keywords
- 38 Keywords (Exact/Phrase), keine Broad-Keywords.
- **Quality Score 3/10** bei "kfz gutachter in der nähe" und "kfz gutachter schöneweide": erwartete CTR unterdurchschnittlich, Landingpage-Erfahrung unterdurchschnittlich, Anzeigenrelevanz überdurchschnittlich. (G20/G21/G24 FAIL.)
- `[KFZ Gutachter Wedding]`: "selten ausgeliefert (niedriger Qualitätsfaktor)". Zwei Keywords wegen geringen Suchvolumens inaktiv.
- Viele Keywords mit 0 Impressionen (G-KW1 Warning).

## 5. Anzeigen & Assets
- 4 RSAs, alle mit **identischem Text** (Kampagnen-Radien ohne eigene Botschaft). Ad Strength: 3× "Durchschnittlich", 1× **"Schlecht"** (Schöneweide). G29 FAIL.
- Pro Anzeigengruppe nur 1 RSA (Warning).
- Bild-Assets vorhanden (gut, Bilder liefern teils 3,7 % Interaktionsrate), **keine manuellen Sitelinks, Callouts, Snippets** gefunden (Google meldet "in 1 Kampagne fehlen Erweiterungen").
- Landingpage: alle Anzeigen führen auf die Startseite `https://gutachtenprenzl.de/`, keine eigene Seite pro Thema/Bezirk (G60 Warning). **Anzeigen-Anzeigepfad zeigt `/unfallgutachten/berlin`, die URL gibt aber 404:** für Nutzer unsichtbar (nur Anzeigepfad), aber falls je als Final-URL genutzt, wäre es ein Fehler.

## 6. Einstellungen
- Gebotsstrategie überall **"Klicks maximieren"** (kein Conversion-Bidding, G47 Warning, bei kaputtem Tracking aber derzeit sinnvoll).
- Standort: 5 km um Prenzlauer Promenade 88; neue Kampagnen 5–6 km um Ostseestraße / Schöneweide. Sprachen Deutsch, Englisch, Türkisch. Kein Anzeigenzeitplan (ganztägig).
- Nur Suchnetzwerk, Google Suche (Display aus). Search Partners: offen.

## Top-Maßnahmen (nach Wirkung)
1. **Tracking aufräumen:** TechSol- und Doppel-Aktionen entfernen, "Route berechnen", "Seitenaufrufe", "Menüansichten" auf sekundär, "Anruf Website"/"WhatsApp Klick" per Tag Assistant prüfen und reparieren, echte Werte setzen (z. B. 80 € Anruf, 50 € WhatsApp, 100 € Formular).
2. **Negativ `"gutachter` prüfen/entfernen** und die 10.000 Negatives in 3–4 Shared Lists (Informationssuche, Jobs, Namen/Login, Wettbewerber) überführen.
3. **Kampagnen konsolidieren:** Eine Kampagne pro Ziel (Unfallgutachten Berlin), Radien als Standortziel, nicht als eigene Kampagnen. Doppelte Keywords entfernen. Marke separat.
4. **Anzeigengruppen thematisch splitten** und pro Gruppe eigene RSAs (Ziel: "Gut"+), Sitelinks, Callouts, Snippets anlegen.
5. **Landingpage:** Eigene Seite für "Kfz-Gutachter Berlin / Prenzlauer Berg" mit passendem H1, Telefon/WhatsApp oben, Mobile-LCP messen, QS-Komponente "Landingpage-Erfahrung" verbessern.
6. Nach 2–3 Wochen sauberem Tracking auf "Conversions maximieren" mit Ziel-CPA umstellen.
