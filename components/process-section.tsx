"use client";
import { Phone, Calendar, Car, FileCheck, CheckCircle } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const processData = [
  {
    id: 1,
    title: "Unfall melden",
    date: "Schritt 1",
    content:
      "Rufen Sie uns an oder schreiben Sie per WhatsApp. Wir beraten Sie kostenlos und sofort – 24 Stunden am Tag, 7 Tage die Woche.",
    category: "Kontakt",
    icon: Phone,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Termin vereinbaren",
    date: "Schritt 2",
    content:
      "Wir vereinbaren schnellstmöglich einen Termin – bei Ihnen zu Hause, am Arbeitsplatz, in der Werkstatt oder bei uns.",
    category: "Termin",
    icon: Calendar,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 80,
  },
  {
    id: 3,
    title: "Begutachtung",
    date: "Schritt 3",
    content:
      "Unser TÜV-zertifizierter Sachverständiger begutachtet Ihr Fahrzeug sorgfältig und erfasst alle sichtbaren und versteckten Schäden.",
    category: "Gutachten",
    icon: Car,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Gutachten fertig",
    date: "Schritt 4",
    content:
      "Innerhalb von 24 Stunden erhalten Sie das fertige Gutachten. Wir leiten es direkt an die zuständige Versicherung weiter.",
    category: "Dokument",
    icon: FileCheck,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 40,
  },
  {
    id: 5,
    title: "Versicherung zahlt",
    date: "Ergebnis",
    content:
      "Bei unverschuldetem Unfall zahlen Sie nichts. Die Kosten trägt die Haftpflichtversicherung des Unfallverursachers vollständig.",
    category: "Abrechnung",
    icon: CheckCircle,
    relatedIds: [4],
    status: "pending" as const,
    energy: 20,
  },
];

export default function ProcessSection() {
  return (
    <section id="ablauf" className="py-24 px-5 bg-[#090E18]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 text-[#E11D2F] text-[11px] font-semibold uppercase tracking-widest mb-4">
            <span className="w-5 h-px bg-[#E11D2F]" />
            Ablauf
            <span className="w-5 h-px bg-[#E11D2F]" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            In 5 Schritten zu Ihrem Gutachten
          </h2>
          <p className="text-white/45 text-[15px] max-w-lg mx-auto leading-relaxed">
            Klicken Sie auf einen Schritt im Orbit, um Details zu sehen.
            Einfach, schnell und ohne Stress.
          </p>
        </div>

        {/* Orbital Timeline */}
        <RadialOrbitalTimeline timelineData={processData} />

        {/* Mobile fallback list */}
        <div className="md:hidden mt-8 space-y-3">
          {processData.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex gap-4 bg-[#0C1420] border border-white/6 rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-[#E11D2F]/10 border border-[#E11D2F]/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={17} className="text-[#E11D2F]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[13px] font-bold text-[#E11D2F]">{step.date}</span>
                  </div>
                  <p className="font-bold text-white text-[16px] mb-1.5">{step.title}</p>
                  <p className="text-white/55 text-[14px] leading-relaxed">{step.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
