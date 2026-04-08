"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) newState[parseInt(key)] = false;
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => { newPulseEffect[relId] = true; });
        setPulseEffect(newPulseEffect);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }
      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: ReturnType<typeof setInterval>;
    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => Number(((prev + 0.25) % 360).toFixed(3)));
      }, 50);
    }
    return () => { if (rotationTimer) clearInterval(rotationTimer); };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 190;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.35, Math.min(1, 0.35 + 0.65 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusLabel = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed": return "Abgeschlossen";
      case "in-progress": return "In Bearbeitung";
      case "pending": return "Ausstehend";
    }
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed": return "text-white bg-[#E11D2F] border-[#E11D2F]";
      case "in-progress": return "text-white bg-[#1E3A5F] border-[#2563EB]";
      case "pending": return "text-white/60 bg-white/5 border-white/20";
      default: return "text-white/60 bg-white/5 border-white/20";
    }
  };

  return (
    <div
      className="w-full h-[600px] flex flex-col items-center justify-center overflow-hidden relative"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Subtle center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-[#E11D2F]/5 blur-3xl" />
      </div>

      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* Center core */}
          <div className="absolute w-14 h-14 rounded-full flex items-center justify-center z-10">
            <div className="absolute w-14 h-14 rounded-full border border-[#E11D2F]/30 animate-ping opacity-40" />
            <div className="absolute w-20 h-20 rounded-full border border-[#E11D2F]/15 animate-ping opacity-20" style={{ animationDelay: "0.7s" }} />
            <div className="w-12 h-12 rounded-full bg-black border-2 border-[#E11D2F]/60 flex items-center justify-center shadow-lg shadow-[#E11D2F]/20 overflow-hidden p-1.5">
              <Image
                src="/logos/logo-icon.png"
                alt="GP"
                width={96}
                height={74}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Orbit ring */}
          <div className="absolute w-[380px] h-[380px] rounded-full border border-white/8" />

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                }}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
              >
                {/* Pulse glow behind node */}
                {isPulsing && (
                  <div
                    className="absolute rounded-full animate-pulse"
                    style={{
                      background: "radial-gradient(circle, rgba(225,29,47,0.25) 0%, transparent 70%)",
                      width: `${item.energy * 0.4 + 48}px`,
                      height: `${item.energy * 0.4 + 48}px`,
                      left: `-${(item.energy * 0.4 + 48 - 40) / 2}px`,
                      top: `-${(item.energy * 0.4 + 48 - 40) / 2}px`,
                    }}
                  />
                )}

                {/* Node circle */}
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                    ${isExpanded
                      ? "bg-[#E11D2F] border-[#E11D2F] scale-150 shadow-lg shadow-[#E11D2F]/40"
                      : isRelated
                      ? "bg-[#E11D2F]/20 border-[#E11D2F] animate-pulse"
                      : "bg-[#0F172A] border-white/25 hover:border-white/50"
                    }
                  `}
                >
                  <Icon size={15} className={isExpanded ? "text-white" : "text-white/80"} />
                </div>

                {/* Label */}
                <div
                  className={`
                    absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap
                    text-xs font-semibold tracking-wide transition-all duration-300
                    ${isExpanded ? "text-white scale-110" : "text-white/60"}
                  `}
                >
                  {item.title}
                </div>

                {/* Expanded card */}
                {isExpanded && (
                  <Card className="absolute top-16 left-1/2 -translate-x-1/2 w-60 bg-[#0E1520]/95 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50 overflow-visible">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-px h-2 bg-[#E11D2F]/60" />
                    <CardHeader className="pb-2 pt-4 px-4">
                      <div className="flex justify-between items-center gap-2">
                        <Badge className={`px-2 py-0.5 text-[10px] ${getStatusStyles(item.status)}`}>
                          {getStatusLabel(item.status)}
                        </Badge>
                        <span className="text-[10px] font-mono text-white/40">{item.date}</span>
                      </div>
                      <CardTitle className="text-sm mt-2 text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-white/70 px-4 pb-4">
                      <p className="leading-relaxed">{item.content}</p>

                      <div className="mt-3 pt-3 border-t border-white/8">
                        <div className="flex justify-between items-center text-xs mb-1.5">
                          <span className="flex items-center gap-1 text-white/50">
                            <Zap size={9} />Priorität
                          </span>
                          <span className="font-mono text-white/50">{item.energy}%</span>
                        </div>
                        <div className="w-full h-0.5 bg-white/8 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#E11D2F] to-[#E11D2F]/50 rounded-full"
                            style={{ width: `${item.energy}%` }}
                          />
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-white/8">
                          <div className="flex items-center gap-1 mb-2">
                            <Link size={9} className="text-white/40" />
                            <span className="text-[10px] uppercase tracking-wider text-white/40">Nächster Schritt</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const related = timelineData.find((i) => i.id === relatedId);
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="h-6 px-2 py-0 text-[10px] rounded border-white/15 bg-transparent hover:bg-white/8 text-white/60 hover:text-white transition-all"
                                  onClick={(e) => { e.stopPropagation(); toggleItem(relatedId); }}
                                >
                                  {related?.title}
                                  <ArrowRight size={8} className="ml-1 text-white/40" />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
