# Bewertungen systematisch sammeln

Stand 28.09.2026: **91 Bewertungen, 5,0 Sterne** (21.08.: 84). Stärkster Berliner Wettbewerber laut SEO-Audit vom 28.09.: kfz-unfallgutachter.berlin mit 452.

Zum Vergleich, aus derselben Berliner Suche gezogen:

| Wettbewerber | Bewertungen |
|---|---:|
| Sécrit GmbH | 606 |
| ihr-gutachten.com GmbH | 234 |
| Kfz Sachverständiger Ay | 63 |
| PLT Gutachten | 41 |
| Kfz-Gutachter Andre Seyer | 22 |

Sie liegen bei der Bewertung ganz oben, bei der Menge im Mittelfeld. Für den Kartenblock zählt beides, und die Menge ist der Teil, der sich nur über Zeit aufbauen lässt. Entscheidend ist nicht ein einmaliger Schub, sondern ein stetiger Zufluss: eine Bewertung pro Woche über ein Jahr wirkt stärker als zwanzig in einer Woche und dann nichts mehr.

## Ihr Bewertungslink

```
https://gutachtenprenzl.de/bewerten
```

Kurzlink auf der eigenen Domain, leitet weiter auf `https://g.page/r/CefSgT78ivVGEAE/review` (eingerichtet in `next.config.js`). Wirkt in WhatsApp vertrauenswürdiger als ein fremder Link und passt auf Rechnung und Visitenkarte. Der Link öffnet direkt das Bewertungsformular, ohne Umweg über die Profilseite. Im Google-Unternehmensprofil liegt unter „Mehr Rezensionen erhalten" auch ein QR-Code dazu, den Sie ausdrucken und ins Büro hängen können.

## Vorlage: E-Mail beim Versand des Gutachtens

Anhängen, wenn das fertige Gutachten rausgeht. Das ist der Moment mit der höchsten Bereitschaft, weil die Leistung frisch und sichtbar ist.

> Anbei Ihr Gutachten. Die Unterlagen gehen wie besprochen auch direkt an die Versicherung.
>
> Falls Sie zufrieden waren: Eine kurze Bewertung bei Google hilft uns sehr. Zwei Sätze reichen völlig.
>
> https://gutachtenprenzl.de/bewerten
>
> Und falls etwas nicht rund lief, schreiben Sie mir das lieber direkt. Dann kümmere ich mich darum.

Der letzte Satz ist kein Beiwerk. Er fängt Unzufriedene ab, bevor sie öffentlich schreiben, und ist gleichzeitig zulässig, weil Sie niemanden von einer Bewertung abhalten, sondern nur einen zweiten Kanal anbieten.

## Vorlage: WhatsApp, ein bis zwei Tage nach Abschluss

Kürzer halten als in der Mail, sonst wirkt es aufdringlich.

> Hallo Herr/Frau [Name], ist bei der Regulierung alles durchgelaufen?
>
> Wenn Sie zufrieden waren, würde ich mich über eine kurze Google-Bewertung freuen: https://gutachtenprenzl.de/bewerten

## Auf Bewertungen antworten

Sie antworten bereits auf Bewertungen, das ist gut und sollte so bleiben. Zwei Punkte, die dabei zusätzlich helfen:

Nennen Sie in der Antwort den Bezirk oder die Leistung, um die es ging. Antworten werden mitindexiert, und „Freut uns, dass es in Weißensee so schnell ging" ist ein Ortssignal, das sonst nirgends steht. Erzwingen Sie es aber nicht: eine Antwort, die sich wie eine Keyword-Liste liest, schadet mehr als sie nützt.

Antworten Sie auch auf die kurzen Fünf-Sterne-Bewertungen ohne Text. Google bewertet die Antwortquote, nicht die Länge der Antwort.

## Was rechtlich nicht geht

Keine Gegenleistung für Bewertungen, also kein Rabatt, kein Gutschein, keine Verlosung. Das verstößt gegen Googles Richtlinien und kann das Profil kosten. Fragen dürfen Sie so oft Sie wollen, bezahlen nicht.

Keine Bewertungen im eigenen Namen oder über Bekannte, die nie Kunde waren. Google erkennt das inzwischen zuverlässig über Gerätemuster und Kontohistorie.

Auf der Website dürfen die echten Google-Bewertungen sichtbar eingebunden werden, das ist bereits umgesetzt. Seit 20.09.2026 steht zusätzlich `aggregateRating` im JSON-LD (`app/layout.tsx`), damit KI-Suchmaschinen die Zahl belegt vorfinden. Sterne im Suchergebnis erzeugt das bei der eigenen Domain nicht, schadet laut SEO-Audit vom 28.09. aber auch nicht, solange die Zahlen echt sind. `REVIEW_COUNT` in `lib/contact.ts` deshalb nur mit echten Werten aus dem Google-Profil hochsetzen.
