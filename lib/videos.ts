/**
 * Die YouTube-Shorts des Kanals, eingebettet auf den passenden Seiten.
 *
 * Warum das hier steht und nicht nur auf YouTube: Ein Video auf YouTube bringt
 * Aufrufe, ein eingebettetes Video mit VideoObject-Auszeichnung bringt der
 * Seite zusätzlich Sichtbarkeit in der Google-Suche — Videovorschau im
 * Treffer, längere Verweildauer, ein weiteres Signal für Themenrelevanz.
 * Deshalb hängt jedes Video an genau der Unterseite, die dasselbe Thema
 * behandelt.
 *
 * Neues Video eintragen: ID aus der YouTube-URL, Titel und Beschreibung wie
 * dort, Dauer in Sekunden, und den Slug der Seite, auf der es erscheinen soll.
 */

export interface Video {
  /** ID aus der YouTube-URL, z. B. youtube.com/shorts/EZcgZ-rvsCk */
  id: string;
  /** Wie auf YouTube — beide Titel sollten übereinstimmen. */
  titel: string;
  /** Zwei bis drei Sätze. Wird als description im Schema ausgegeben. */
  beschreibung: string;
  /** Laufzeit in Sekunden. Wird zu ISO-8601 (PT14S) umgerechnet. */
  sekunden: number;
  /** Veröffentlichungsdatum, ISO. */
  datum: string;
  /**
   * Slugs der Seiten, auf denen das Video erscheint. Der erste Eintrag ist die
   * Hauptseite — dort steht es oben, auf den übrigen als Ergänzung.
   */
  seiten: string[];
}

export const VIDEOS: Video[] = [
  {
    id: "OX9YmlQE7J4",
    titel: "Dieser Radlauf sah harmlos aus – bis das Kontrastpulver draufkam",
    beschreibung:
      "Auf den ersten Blick ein Kratzer am Radlauf. Unter Kontrastpulver zeigt sich, wie weit die Verformung wirklich geht — der Unterschied zwischen Kostenvoranschlag und Gutachten.",
    sekunden: 29,
    datum: "2026-09-26",
    seiten: ["kostenvoranschlag-oder-gutachten"],
  },
  {
    id: "Nnfhcp1lAwc",
    titel: "Was ein Kfz-Sachverständiger im Kofferraum hat",
    beschreibung:
      "Messkoffer, Kamera, Schichtdickenmessgerät, Kontrastpulver, Prüflineal — die Ausrüstung für eine vollständige Schadenaufnahme vor Ort, ohne Werkstattbesuch.",
    sekunden: 46,
    datum: "2026-09-26",
    seiten: ["kfz-sachverstaendiger-berlin"],
  },
  {
    id: "DZxUgqLAVLg",
    titel: "Lkw übersieht Biker – warum dieser Anstoß teuer wird",
    beschreibung:
      "Eine KTM nach dem Kontakt mit einem Lkw. Verkleidungsteile sind teuer, und sicherheitsrelevante Bauteile wie Gabel oder Rahmen müssen nach einem Sturz immer geprüft werden.",
    sekunden: 14,
    datum: "2026-09-26",
    seiten: ["motorradgutachten-berlin"],
  },
  {
    id: "GBv_UoNKZUs",
    titel: "Heckschaden: Stoßstange gebrochen, Sensor defekt, Kofferraum verzogen",
    beschreibung:
      "Sobald Sensorik im Anstoßbereich sitzt, reicht Instandsetzen nicht mehr — geprüft, ausgelesen und meist ersetzt. Als freier Sachverständiger arbeite ich für den Geschädigten, nicht für die Versicherung.",
    sekunden: 40,
    datum: "2026-09-26",
    seiten: ["schadengutachten"],
  },
  {
    id: "c0XzSKpmQdc",
    titel: "Ein Tag als Kfz-Gutachter in Berlin",
    beschreibung:
      "Anfahrt, Schadenaufnahme, weiter zum nächsten Termin — wir kommen dorthin, wo das Fahrzeug steht, gerade bei nicht fahrbereiten Fahrzeugen entscheidend.",
    sekunden: 44,
    datum: "2026-09-26",
    seiten: ["kfz-sachverstaendiger-berlin"],
  },
  {
    id: "gX9GoUEaFh0",
    titel: "Frontschaden am Mercedes – Aufnahme Zone für Zone",
    beschreibung:
      "Stoßfänger, Grill und Scheinwerferbereich einzeln aufgenommen. Erst nach der Aufnahme mit Kontrastpulver zeigt sich, ob auch Träger und Halter betroffen sind.",
    sekunden: 22,
    datum: "2026-09-26",
    seiten: ["schadengutachten"],
  },
  {
    id: "cIPGYvxLw3M",
    titel: "Totalschaden: Warum Altschäden ins Gutachten gehören",
    beschreibung:
      "Der Wiederbeschaffungswert entscheidet über die Auszahlung — und in den fließen Altschäden mit ein. Per Schichtdickenmessung wird geprüft, ob bereits nachlackiert wurde.",
    sekunden: 32,
    datum: "2026-09-26",
    seiten: ["restwertermittlung"],
  },
  {
    id: "9zOCdYxiStE",
    titel: "Auch die unsichtbaren Schäden gehören ins Gutachten",
    beschreibung:
      "Heckstoßstange nach einem Anstoß: für das Auge fast nichts, unter Pulver ein durchgehender Verlauf. Verformter Kunststoff wird ersetzt, nicht instand gesetzt.",
    sekunden: 14,
    datum: "2026-09-26",
    seiten: ["parkschaden-gutachten-berlin"],
  },
  {
    id: "ffF2KaBpJjk",
    titel: "Schadenaufnahme an der Fahrzeugseite – Schritt für Schritt",
    beschreibung:
      "Verlauf abtasten, Kontrastpulver auftragen, jede Zone einzeln dokumentieren. Was hier nicht auffällt, taucht später auch in keiner Abrechnung auf.",
    sekunden: 25,
    datum: "2026-09-26",
    seiten: ["kfz-sachverstaendiger-berlin"],
  },
  {
    id: "Ur2r04PX6hg",
    titel: "Von einem Polizeifahrzeug im Einsatz angefahren – was jetzt gilt",
    beschreibung:
      "Auch bei Behördenfahrzeugen wird der Schaden reguliert, über die Haftpflicht des Dienstherrn — ein unabhängiges Gutachten ist genauso wichtig wie bei jedem anderen Unfallgegner.",
    sekunden: 13,
    datum: "2026-09-26",
    seiten: ["kfz-gutachten-berlin"],
  },
  {
    id: "5pwxBjcvoZg",
    titel: "Totalschaden: 12.000 Euro für den Kunden – so lief die Regulierung",
    beschreibung:
      "Schwerer Frontschaden, Reparatur wirtschaftlich nicht mehr sinnvoll. Die Differenz aus Wiederbeschaffungswert und Restwert entscheidet, wie viel am Ende ausgezahlt wird.",
    sekunden: 11,
    datum: "2026-09-26",
    seiten: ["restwertermittlung"],
  },
  {
    id: "jf8lho0g-Pw",
    titel: "BMW nach Frontschaden – die Schadensumme am Ende",
    beschreibung:
      "Reparaturkosten, Wiederbeschaffungswert, Restwert — erst diese drei Zahlen zusammen zeigen, ob repariert oder abgerechnet wird.",
    sekunden: 5,
    datum: "2026-09-26",
    seiten: ["restwertermittlung"],
  },
  {
    id: "0XakDOP_VKg",
    titel: "Jeden Schaden sichtbar machen – darum geht es im Gutachten",
    beschreibung:
      "Ein Streifschaden über die komplette Seite, jede Zone einzeln erfasst. Der Umfang im Gutachten entscheidet über die Höhe der Regulierung — nichts wird mitgeschätzt, alles belegt.",
    sekunden: 10,
    datum: "2026-09-26",
    seiten: ["kfz-gutachten-berlin"],
  },
  {
    id: "fWwC1qM-IyM",
    titel: "Was das Auge übersieht, zeigt das Kontrastpulver",
    beschreibung:
      "Heckschaden: Der Anstoß ist im Lack kaum zu erkennen, unter Pulver läuft er quer über die Stoßstange bis zur Leuchte. Halter, Träger und Sensorik werden regelmäßig mitbeschädigt.",
    sekunden: 12,
    datum: "2026-09-26",
    seiten: ["schadengutachten"],
  },
  {
    id: "mBj9QxzREBM",
    titel: "So werden Schadenfotos richtig gemacht",
    beschreibung:
      "Kamera, Prüflineal, Maßstab im Bild: Fotos für ein Gutachten sind Beweisdokumente und entscheiden später, wie schnell die Versicherung reguliert.",
    sekunden: 18,
    datum: "2026-09-26",
    seiten: ["beweissicherungsgutachten-berlin"],
  },
  {
    id: "EZcgZ-rvsCk",
    titel: "„Lohnt sich ein Gutachten überhaupt?“ – rechnen wir es durch",
    beschreibung:
      "Aus einer Schätzung von ein paar hundert Euro wurde nach vollständiger Aufnahme eine vierstellige Schadensumme. Bei unverschuldetem Unfall zahlt die gegnerische Versicherung das Gutachten.",
    sekunden: 14,
    datum: "2026-09-25",
    seiten: ["kosten-kfz-gutachten-berlin", "kfz-gutachten-berlin"],
  },
  {
    id: "nyIKMAtclnE",
    titel: "Vom Kratzer zum echten Schaden – was das Pulver sichtbar macht",
    beschreibung:
      "Die Front sah fast unbeschädigt aus. Nach dem Auftragen des Kontrastpulvers wird der Verlauf der Beschädigung sichtbar — und damit, dass es nicht bei einer Politur bleibt.",
    sekunden: 19,
    datum: "2026-09-25",
    seiten: ["schadengutachten"],
  },
  {
    id: "GmlrLf6pveY",
    titel: "Wer ist schuld? Schreib deine Einschätzung in die Kommentare",
    beschreibung:
      "Spurenlage, Anstoßhöhe und Schadenbild müssen zum geschilderten Hergang passen. Genau das prüft ein Sachverständiger bei der Beweissicherung.",
    sekunden: 14,
    datum: "2026-09-25",
    seiten: ["beweissicherungsgutachten-berlin"],
  },
  {
    id: "NmVl-PZmoJ0",
    titel: "Vorher – nachher: derselbe Schaden, einmal mit Kontrastpulver",
    beschreibung:
      "Derselbe Ausschnitt zweimal aufgenommen: einmal wie das Auge ihn sieht, einmal nach dem Kontrastpulver. Der Unterschied entscheidet, ob eine Beilackierung reicht oder ein Bauteil ersetzt werden muss.",
    sekunden: 16,
    datum: "2026-09-25",
    seiten: ["kfz-gutachten-berlin"],
  },
  {
    id: "-0Mvz5kDb8E",
    titel: "Geh nach einem Unfall nicht direkt zur Versicherung des Gegners",
    beschreibung:
      "Bei Fremdverschulden haben Sie das Recht auf einen eigenen, unabhängigen Sachverständigen — und die gegnerische Versicherung trägt die Kosten.",
    sekunden: 10,
    datum: "2026-09-25",
    seiten: ["eigener-gutachter-oder-versicherungsgutachter"],
  },
  {
    id: "DpTpu6aJeaI",
    titel: "Versicherung sagt 700 Euro, das Gutachten sagt mehr – warum?",
    beschreibung:
      "Geprüfte Bauteile, Arbeitswerte und Lackierstufen statt Schätzung nach Sichtprüfung. Dazu Wertminderung, Nutzungsausfall und verdeckte Schäden.",
    sekunden: 13,
    datum: "2026-09-25",
    seiten: ["eigener-gutachter-oder-versicherungsgutachter", "kosten-kfz-gutachten-berlin"],
  },
  {
    id: "gTtkuKEu3gM",
    titel: "Schwerer Frontschaden – Reparatur oder Totalschaden?",
    beschreibung:
      "Liegen die Reparaturkosten über dem Wiederbeschaffungswert, ist es ein wirtschaftlicher Totalschaden. Bis 130 Prozent kann unter Auflagen trotzdem repariert werden.",
    sekunden: 14,
    datum: "2026-09-25",
    seiten: ["130-prozent-regelung"],
  },
  {
    id: "p2TEeMI-UrA",
    titel: "Brandneue CF Moto 675 SR-R mit Sturzschaden",
    beschreibung:
      "Bei Motorrädern wird nach einem Sturz nicht nur die Verkleidung bewertet, sondern alles, was sicherheitsrelevant ist. Dazu kommt bei jungen Fahrzeugen die Wertminderung.",
    sekunden: 7,
    datum: "2026-09-25",
    seiten: ["motorradgutachten-berlin"],
  },
  {
    id: "TXloHvlSEUw",
    titel: "Dieser Kotflügel hat mehr abbekommen, als man sieht",
    beschreibung:
      "Ein Anstoß, der auf den ersten Blick nach Politur aussieht. Unter Kontrastpulver zeigt sich die Ausdehnung — und damit, dass Instandsetzen nicht ausreicht.",
    sekunden: 17,
    datum: "2026-09-25",
    seiten: ["schadengutachten"],
  },
  {
    id: "6TQX9csx5mw",
    titel: "Was würdest du für diesen Streifschaden schätzen?",
    beschreibung:
      "Lackierte Bauteile werden nicht nur lackiert, sondern demontiert, vorbereitet, angeglichen und wieder montiert. Die Arbeitszeit macht den größten Teil der Summe aus.",
    sekunden: 20,
    datum: "2026-09-25",
    seiten: ["kosten-kfz-gutachten-berlin"],
  },
  {
    id: "gzEgMFlclgY",
    titel: "„Da ist doch fast nichts“ – und dann kommt das Pulver",
    beschreibung:
      "Kleine Anstöße sind teuer geworden, seit in Stoßfängern Sensorik verbaut ist: Ein Parksensor im Anstoßbereich bedeutet Prüfung, oft Austausch und immer Fehlerspeicher auslesen.",
    sekunden: 12,
    datum: "2026-09-25",
    seiten: ["bagatellschaden-grenze"],
  },
  {
    id: "sgLtR99z1ZI",
    titel: "„Mir ist jemand reingefahren, aber man sieht nichts“",
    beschreibung:
      "Gerade bei dunklen Fahrzeugen verschwinden Schleifspuren im Reflex. Für die Regulierung sind sie trotzdem relevant.",
    sekunden: 11,
    datum: "2026-09-25",
    seiten: ["kfz-gutachten-berlin"],
  },
  {
    id: "8Xl6UtBVZ5s",
    titel: "Erst schätzen, dann rechnen – der Unterschied in Zahlen",
    beschreibung:
      "Verbringungskosten, Beilackierung, Ersatzteilzuschläge, Wertminderung: Positionen, die eine schnelle Schätzung nicht kennt.",
    sekunden: 13,
    datum: "2026-09-25",
    seiten: ["kosten-kfz-gutachten-berlin"],
  },
  {
    id: "Yrbi7b6oj94",
    titel: "Was ein Sachverständiger sieht, wenn der Kunde nichts sieht",
    beschreibung:
      "Ein Streifschaden, der im Sonnenlicht praktisch verschwindet. Nach der Aufnahme mit Kontrastpulver ist der Verlauf eindeutig.",
    sekunden: 9,
    datum: "2026-09-25",
    seiten: ["kfz-sachverstaendiger-berlin-prenzlauer-berg"],
  },
  {
    id: "5NZNTQTmd2s",
    titel: "An alle, die sagen, das Pulver bringt nichts",
    beschreibung:
      "Kontrastpulver ist kein Trick, sondern Standard in der Schadendokumentation — es macht Verformungen im Lack sichtbar, die sonst nur unter bestimmten Lichtwinkeln auffallen.",
    sekunden: 14,
    datum: "2026-09-25",
    seiten: ["schadengutachten"],
  },
];

/** Alle Videos, die auf einer bestimmten Seite erscheinen sollen. */
export function videosFuer(slug: string): Video[] {
  return VIDEOS.filter((v) => v.seiten.includes(slug));
}

/** Laufzeit im Format, das Google erwartet: PT1M4S. */
export function isoDauer(sekunden: number): string {
  const m = Math.floor(sekunden / 60);
  const s = sekunden % 60;
  return `PT${m ? `${m}M` : ""}${s}S`;
}

export const KANAL = "https://www.youtube.com/@gutachtenprenzl";
