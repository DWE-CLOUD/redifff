"use client";

import React, { useState } from "react";
import {
  Shield,
  Server,
  Cloud,
  Lock,
  Cpu,
  CheckCircle2,
  Activity,
  HardDrive,
} from "lucide-react";

export function HeroNetworkGraphic() {
  const [activeNode, setActiveNode] = useState<string>("cloud");

  const nodes = [
    {
      id: "cloud",
      title: "Cloud Infrastructure",
      status: "Synchronized",
      detail: "M365, Azure & Multi-Tenant IAM",
      icon: Cloud,
      x: "15%",
      y: "22%",
    },
    {
      id: "security",
      title: "Cyber Defense",
      status: "Threats Blocked",
      detail: "EDR & Zero-Trust Perimeter",
      icon: Lock,
      x: "82%",
      y: "22%",
    },
    {
      id: "network",
      title: "Network Core",
      status: "Dual-WAN Active",
      detail: "Managed Switches & Auto-Failover",
      icon: Server,
      x: "18%",
      y: "75%",
    },
    {
      id: "backup",
      title: "Continuity & Backup",
      status: "Daily Snapshots",
      detail: "Air-Gapped Immutable Storage",
      icon: HardDrive,
      x: "80%",
      y: "75%",
    },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none aspect-[4/3] sm:aspect-[16/11] rounded-2xl border border-white/10 bg-[#0C1424] p-5 sm:p-7 overflow-hidden shadow-2xl">
      {/* Precision Grid lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Subtle radial depth gradient - deep slate navy */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header status bar */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-semibold text-slate-200 uppercase tracking-wider text-[11px] font-display">
            Live System Topology
          </span>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-[11px]">
          <Activity className="w-3.5 h-3.5 text-blue-400" />
          <span>Redifff Managed Node Network</span>
        </div>
      </div>

      {/* SVG Connecting Circuit Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3978F6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3978F6" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Diagonal and Cross Links */}
        <line x1="28%" y1="32%" x2="50%" y2="50%" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="72%" y1="32%" x2="50%" y2="50%" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="30%" y1="70%" x2="50%" y2="50%" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="70%" y1="70%" x2="50%" y2="50%" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Peripheral perimeter connections */}
        <line x1="28%" y1="32%" x2="72%" y2="32%" stroke="#1E293B" strokeWidth="1" />
        <line x1="28%" y1="70%" x2="70%" y2="70%" stroke="#1E293B" strokeWidth="1" />
      </svg>

      {/* Central Redifff Hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
        <div className="relative group cursor-default">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-2 border-blue-500/60 p-3 flex flex-col items-center justify-center shadow-xl shadow-blue-900/30">
            <Cpu className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400 mb-1" />
            <span className="text-[10px] sm:text-xs font-bold text-white tracking-wider uppercase font-display">
              REDIFFF
            </span>
            <span className="text-[9px] text-blue-300 font-mono">Central Core</span>
          </div>
          {/* Subtle pulse ring */}
          <div className="absolute -inset-1 rounded-2xl border border-blue-400/30 animate-pulse pointer-events-none" />
        </div>
      </div>

      {/* 4 Connected Nodes */}
      {nodes.map((node) => {
        const IconComponent = node.icon;
        const isSelected = activeNode === node.id;

        return (
          <button
            key={node.id}
            type="button"
            onClick={() => setActiveNode(node.id)}
            style={{ left: node.x, top: node.y }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 text-left p-3 rounded-xl border transition-all duration-200 ${
              isSelected
                ? "bg-slate-900 border-blue-400 shadow-lg shadow-blue-950 scale-105"
                : "bg-slate-900/80 border-white/10 hover:border-slate-600 hover:bg-slate-900"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <div
                className={`p-1.5 rounded-md ${
                  isSelected ? "bg-blue-600 text-white" : "bg-slate-800 text-blue-400"
                }`}
              >
                <IconComponent className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-100 whitespace-nowrap">
                  {node.title}
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {node.status}
                </div>
              </div>
            </div>
            <div className="hidden sm:block text-[10px] text-slate-400 max-w-[140px] truncate">
              {node.detail}
            </div>
          </button>
        );
      })}

      {/* Footer telemetry bar */}
      <div className="absolute bottom-3 left-4 right-4 z-10 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
          <span>Zero-Disruption Maintenance Active</span>
        </div>
        <span className="font-mono text-slate-300">SLA: Enterprise Ready</span>
      </div>
    </div>
  );
}
