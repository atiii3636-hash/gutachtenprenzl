#!/usr/bin/env python3
"""Ein Gutachtenfoto webfertig machen: verkleinern, Metadaten weg, optional Balken.

Warum nicht einfach kopieren: Die Aufnahmen kommen vom iPhone und tragen EXIF mit
GPS-Koordinaten des Unfallorts. Die Adresse des Geschaedigten liesse sich daraus
auf ein paar Meter genau auslesen — auf einer Seite, die ausdruecklich
anonymisiert sein soll. Dieses Skript schreibt nur die Bildpunkte neu, damit
faellt jeder EXIF-Block weg.

Aufruf:
    python3 scripts/fall-bild.py QUELLE ZIEL --balken x,y,b,h [--breite 1600]
    python3 scripts/fall-bild.py QUELLE ZIEL --ohne-kennzeichen

--balken deckt einen Bereich schwarz ab, Angaben als Anteil der Bildbreite bzw.
-hoehe zwischen 0 und 1 (z. B. 0.42,0.71,0.2,0.07 fuer ein Kennzeichen).
Mehrfach angebbar. Den Balken grosszuegig setzen, lieber 15 Prozent zu gross
als einen Millimeter zu klein.

--ohne-kennzeichen ist die Zusicherung, dass auf dieser Aufnahme ueberhaupt
kein Kennzeichen, keine Person und kein Dokument zu sehen ist — typisch bei
Detailaufnahmen der Schadenstelle.

Eine der beiden Angaben ist Pflicht. Ohne sie bricht das Skript ab, und zwar
mit Absicht: beim automatischen Veroeffentlichen darf es keinen Weg geben,
auf dem ein Bild versehentlich unbesehen durchrutscht. Die Entscheidung muss
fuer jede einzelne Aufnahme fallen.

Selbsttest:  python3 scripts/fall-bild.py --test
"""

import sys
from PIL import Image, ImageDraw

MAX_BREITE = 1600


def balken_parsen(text):
    teile = text.split(",")
    if len(teile) != 4:
        raise ValueError(f"--balken braucht vier Werte x,y,b,h — bekommen: {text!r}")
    werte = [float(t) for t in teile]
    for w in werte:
        if not 0.0 <= w <= 1.0:
            raise ValueError(f"--balken erwartet Anteile zwischen 0 und 1 — bekommen: {text!r}")
    return tuple(werte)


def aufbereiten(quelle, ziel, balken=(), max_breite=MAX_BREITE):
    """Verkleinern, drehen, Metadaten verwerfen, Balken zeichnen. Gibt (b, h) zurueck."""
    with Image.open(quelle) as bild:
        # Hochkantaufnahmen vom iPhone liegen als Querformat plus EXIF-Drehflag
        # vor. Erst drehen, dann das EXIF verwerfen, sonst steht das Bild kopf.
        from PIL import ImageOps

        bild = ImageOps.exif_transpose(bild)
        bild = bild.convert("RGB")

        if bild.width > max_breite:
            hoehe = round(bild.height * max_breite / bild.width)
            bild = bild.resize((max_breite, hoehe), Image.LANCZOS)

        if balken:
            stift = ImageDraw.Draw(bild)
            for x, y, b, h in balken:
                stift.rectangle(
                    [
                        (round(x * bild.width), round(y * bild.height)),
                        (round((x + b) * bild.width), round((y + h) * bild.height)),
                    ],
                    fill=(0, 0, 0),
                )

        # Neues, leeres Bild: so wandert garantiert kein EXIF-Block mit.
        sauber = Image.new("RGB", bild.size)
        sauber.paste(bild)
        sauber.save(ziel, "JPEG", quality=82, optimize=True, progressive=True)
        return sauber.size


def test():
    """Prueft die beiden Punkte, bei denen ein Fehler teuer waere: EXIF weg, Balken deckt ab."""
    import os
    import tempfile

    with tempfile.TemporaryDirectory() as tmp:
        quelle = os.path.join(tmp, "q.jpg")
        ziel = os.path.join(tmp, "z.jpg")

        original = Image.new("RGB", (2400, 1800), (200, 30, 30))
        exif = Image.Exif()
        exif[0x8825] = {}          # GPSInfo-Tag
        exif[0x010F] = "Apple"     # Make
        original.save(quelle, "JPEG", exif=exif)
        assert Image.open(quelle).getexif(), "Testbild haette EXIF tragen muessen"

        b, h = aufbereiten(quelle, ziel, balken=[(0.0, 0.0, 0.5, 0.5)])

        with Image.open(ziel) as ergebnis:
            assert not dict(ergebnis.getexif()), "EXIF ist noch im Bild"
            assert (b, h) == (1600, 1200), f"falsche Groesse: {(b, h)}"
            assert ergebnis.getpixel((100, 100)) == (0, 0, 0), "Balken deckt nicht ab"
            r, g, bl = ergebnis.getpixel((1500, 1100))
            assert r > 150 and g < 80, "Balken deckt zu viel ab"

        # Ohne Zusicherung kein Bild: das ist die Bremse vor dem Autodeploy.
        assert main([quelle, ziel]) == 2, "Aufruf ohne Zusicherung haette abbrechen muessen"
        assert main([quelle, ziel, "--ohne-kennzeichen"]) == 0
        assert main([quelle, ziel, "--balken", "0,0,0.3,0.2"]) == 0

    print("ok — EXIF entfernt, Groesse angepasst, Balken sitzt, Zusicherung erzwungen")


def main(argv):
    if "--test" in argv:
        test()
        return 0

    balken = []
    breite = MAX_BREITE
    ohne_kennzeichen = False
    pfade = []

    i = 0
    while i < len(argv):
        if argv[i] == "--balken":
            balken.append(balken_parsen(argv[i + 1]))
            i += 2
        elif argv[i] == "--breite":
            breite = int(argv[i + 1])
            i += 2
        elif argv[i] == "--ohne-kennzeichen":
            ohne_kennzeichen = True
            i += 1
        elif argv[i].startswith("--"):
            print(f"Unbekannte Option: {argv[i]}")
            return 2
        else:
            pfade.append(argv[i])
            i += 1

    if len(pfade) != 2:
        print(__doc__)
        return 2

    if not balken and not ohne_kennzeichen:
        print(
            "Abbruch: weder --balken noch --ohne-kennzeichen angegeben.\n"
            "Fuer jede Aufnahme muss entschieden werden, ob ein Kennzeichen\n"
            "abgedeckt werden muss. Ein stilles Durchreichen gibt es hier nicht."
        )
        return 2

    b, h = aufbereiten(pfade[0], pfade[1], balken, breite)
    print(f"{pfade[1]}  {b}x{h}  EXIF entfernt  Balken: {len(balken)}")
    return 0


if __name__ == "__main__":
    # --balken/--breite nehmen ihren Wert als naechstes Argument, deshalb geht
    # die volle argv-Liste rein, die Pfade werden separat herausgefiltert.
    sys.exit(main(sys.argv[1:]))
