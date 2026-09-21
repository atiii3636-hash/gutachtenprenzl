#!/usr/bin/env python3
"""Prueft einen Fall-Eintrag auf Daten, die nicht veroeffentlicht werden duerfen.

Der Ordnername eines Auftrags enthaelt genau das, was nie auf die Website darf:
Auftragsnummer, Kennzeichen und Klarname, z. B.

    GA-2609-016_B-OS 5217_Renato Beganovic

Daraus baut dieses Skript eine Sperrliste und sucht sie im erzeugten Eintrag.
Dazu kommen Muster, die unabhaengig vom Ordnernamen nichts auf der Seite zu
suchen haben: Kennzeichen, Fahrgestellnummern, Tagesdaten, Hausnummern.

Das ist die Bremse vor dem automatischen Deploy. Sie urteilt nicht darueber,
ob ein Text gut ist — sie sucht nach Zeichenketten. Genau deshalb ist auf sie
Verlass, auch wenn beim Schreiben etwas durchgerutscht ist.

Aufruf:
    python3 scripts/fall-pruefen.py <slug> "<Ordnername>" [weitere Ordnernamen]

Rueckgabe 0 = sauber, 1 = Fund. Bei einem Fund nicht veroeffentlichen.

Selbsttest:  python3 scripts/fall-pruefen.py --test
"""

import json
import re
import subprocess
import sys
from pathlib import Path

WURZEL = Path(__file__).resolve().parent.parent

# Deutsche Kennzeichen: 1-3 Buchstaben, Trenner, 1-2 Buchstaben, 1-4 Ziffern,
# optional E oder H. Der Trenner ist mal Bindestrich, mal Leerzeichen, mal nichts.
KENNZEICHEN = re.compile(r"\b[A-ZÄÖÜ]{1,3}[\s\-–]{0,2}[A-ZÄÖÜ]{1,2}[\s\-–]{0,2}\d{1,4}\s?[EH]?\b")

# Fahrgestellnummer: 17 Stellen, ohne I, O, Q.
VIN = re.compile(r"\b[A-HJ-NPR-Z0-9]{17}\b")

# Tagesdatum in jeder gaengigen Schreibweise. Erlaubt ist nur "Monat Jahr".
TAGESDATUM = re.compile(r"\b(\d{1,2}\.\s?\d{1,2}\.\s?\d{2,4}|\d{4}-\d{2}-\d{2}|\d{1,2}\.\s?(Januar|Februar|März|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember))\b")

# Hausnummer: Strassenname, dann Zahl. "Prenzlauer Allee 88" ja, "Karow" nein.
HAUSNUMMER = re.compile(r"\b(straße|strasse|str\.|allee|weg|damm|platz|chaussee|ufer|ring|gasse)\s+\d{1,4}\s?[a-zA-Z]?\b", re.IGNORECASE)

# Worte aus Ordnernamen, die kein Personenname sind und nicht gesperrt werden.
KEINE_NAMEN = {
    "gmbh", "ug", "ag", "kg", "ohg", "mbh", "co", "und", "der", "die", "das",
    "herr", "frau", "familie", "firma", "pflegedienst", "transport", "service",
    "neuer", "ordner", "kopie", "final", "neu", "alt",
}

# Felder des Eintrags, die auf der Website sichtbar werden. `quelle` steht
# bewusst nicht dabei: dort gehoert die Auftragsnummer hin, sie wird nicht
# gerendert (siehe lib/faelle.ts).
SICHTBARE_FELDER = (
    "slug", "titel", "teaser", "monat", "ort", "fahrzeug", "unfallart",
    "schadenbild", "bauteile", "ergebnis", "fazit", "bilder", "bezirk",
)


def sperrliste(ordnernamen):
    """Baut aus Ordnernamen die Liste der Zeichenketten, die nicht vorkommen duerfen."""
    begriffe = set()
    for name in ordnernamen:
        # Auftragsnummer raus, der Rest ist Kennzeichen und Name.
        rest = re.sub(r"GA[-_ ]?\d{2,4}[-_ ]?\d{0,3}", " ", name, flags=re.IGNORECASE)
        # Unterstriche zu Leerzeichen: sie zaehlen als Wortzeichen, sonst
        # greift das \b im Kennzeichenmuster bei "_B-OS 5217" nicht.
        rest = rest.replace("_", " ")

        for treffer in KENNZEICHEN.finditer(rest.upper()):
            roh = treffer.group()
            begriffe.add(roh.strip())
            # Auch ohne Trenner suchen: "B-OS 5217" taucht als "BOS5217" auf.
            begriffe.add(re.sub(r"[\s\-–]", "", roh))

        for wort in re.split(r"[^A-Za-zÄÖÜäöüß]+", rest):
            if len(wort) >= 3 and wort.lower() not in KEINE_NAMEN and not wort.isupper():
                begriffe.add(wort)

    return {b for b in begriffe if len(b) >= 3}


def eintrag_text(slug):
    """Holt den Eintrag zum Slug aus lib/faelle.ts und gibt seine sichtbaren Texte zurueck.

    Gelesen wird ueber den TypeScript-Compiler statt per Regex: so gilt genau
    das, was Next.js spaeter auch rendert, und ein Tippfehler im Feldnamen
    faellt auf, statt die Pruefung stillschweigend leerlaufen zu lassen.
    """
    skript = (
        "const { faelle } = require('./lib/faelle.ts');"
        f"const f = faelle.find(x => x.slug === {json.dumps(slug)});"
        "if (!f) { console.error('SLUG_FEHLT'); process.exit(3); }"
        "console.log(JSON.stringify(f));"
    )
    lauf = subprocess.run(
        ["npx", "--yes", "tsx", "-e", skript],
        cwd=WURZEL, capture_output=True, text=True,
    )
    if lauf.returncode != 0:
        raise SystemExit(f"Eintrag {slug!r} nicht lesbar:\n{lauf.stderr.strip()[:800]}")
    return json.loads(lauf.stdout.strip().splitlines()[-1])


def texte_einsammeln(wert):
    """Zieht rekursiv alle Zeichenketten aus einem Feldwert."""
    if isinstance(wert, str):
        return [wert]
    if isinstance(wert, list):
        return [t for e in wert for t in texte_einsammeln(e)]
    if isinstance(wert, dict):
        return [t for v in wert.values() for t in texte_einsammeln(v)]
    return []


def pruefen(eintrag, begriffe):
    """Gibt eine Liste von Beanstandungen zurueck. Leer heisst sauber."""
    funde = []

    texte = []
    for feld in SICHTBARE_FELDER:
        if feld in eintrag:
            texte += [(feld, t) for t in texte_einsammeln(eintrag[feld])]

    for feld, text in texte:
        for begriff in sorted(begriffe):
            if re.search(rf"\b{re.escape(begriff)}\b", text, re.IGNORECASE):
                funde.append(f"{feld}: Begriff aus dem Auftragsordner gefunden — {begriff!r}")

        for muster, was in (
            (KENNZEICHEN, "sieht aus wie ein Kennzeichen"),
            (VIN, "sieht aus wie eine Fahrgestellnummer"),
            (TAGESDATUM, "Tagesdatum (erlaubt ist nur Monat und Jahr)"),
            (HAUSNUMMER, "Hausnummer"),
        ):
            for treffer in muster.finditer(text):
                funde.append(f"{feld}: {was} — {treffer.group().strip()!r}")

    return funde


def test():
    """Prueft, dass die Sperre greift und Erlaubtes nicht faelschlich anschlaegt."""
    ordner = ["GA-2609-016_B-OS 5217_Renato Beganovic"]
    begriffe = sperrliste(ordner)
    assert "Renato" in begriffe and "Beganovic" in begriffe, begriffe
    assert any("OS" in b and "5217" in b for b in begriffe), begriffe

    sauber = {
        "titel": "Eine Tür, die den Wagen zum Totalschaden macht",
        "monat": "Juni 2026",
        "ort": "Schwanebecker Chaussee, Karow",
        "fahrzeug": "VW Polo, Erstzulassung 2002, rund 274.000 km",
        "unfallart": "Anstoß an der Fahrertür",
        "schadenbild": ["Die Fahrertür war verformt, die Zierleiste beschädigt."],
        "bauteile": ["Fahrertür — Ersatz statt Instandsetzung"],
        "ergebnis": [{"label": "Reparaturkosten brutto", "wert": "2.556,74 €"}],
        "quelle": "GA-2609-016",
    }
    assert pruefen(sauber, begriffe) == [], pruefen(sauber, begriffe)

    faelle = [
        ({"schadenbild": ["Frau Beganovic meldete den Schaden."]}, "Name"),
        ({"ort": "Unfall am B-OS 5217 aufgenommen"}, "Kennzeichen aus dem Ordner"),
        ({"fahrzeug": "VW Polo, WVWZZZ6RZBY123456"}, "VIN"),
        ({"monat": "18.06.2026"}, "Tagesdatum"),
        ({"ort": "Prenzlauer Allee 88, Pankow"}, "Hausnummer"),
        ({"unfallart": "Anstoss durch B-KR 4457"}, "fremdes Kennzeichen"),
    ]
    for eintrag, was in faelle:
        assert pruefen(eintrag, begriffe), f"nicht erkannt: {was} — {eintrag}"

    # Die Auftragsnummer selbst darf im Feld `quelle` stehen, ohne Alarm.
    assert pruefen({"quelle": "GA-2609-016"}, begriffe) == []

    print("ok — Sperrliste greift, erlaubte Angaben loesen nicht aus")


def main(argv):
    if "--test" in argv:
        test()
        return 0

    if len(argv) < 2:
        print(__doc__)
        return 2

    slug, ordnernamen = argv[0], argv[1:]
    begriffe = sperrliste(ordnernamen)
    funde = pruefen(eintrag_text(slug), begriffe)

    if funde:
        print(f"GESPERRT — {slug}: {len(funde)} Beanstandung(en)")
        for f in funde:
            print(f"  · {f}")
        print("\nNicht veroeffentlichen. Eintrag korrigieren und erneut pruefen.")
        return 1

    print(f"sauber — {slug}: keine Beanstandung ({len(begriffe)} Begriffe geprueft)")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
