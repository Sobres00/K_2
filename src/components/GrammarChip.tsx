import React from 'react';
import { GrammarComponent } from '../types';

interface GrammarChipProps {
  component: GrammarComponent;
  size?: 'sm' | 'md' | 'lg';
}

export const GrammarChip: React.FC<GrammarChipProps> = ({ component, size = 'md' }) => {
  const getStyles = (type: GrammarComponent['type']) => {
    switch (type) {
      case 'subject':
        return {
          bg: 'bg-cyan-950/80',
          border: 'border-cyan-400/60',
          text: 'text-cyan-300',
          badge: 'bg-cyan-500 text-slate-950',
          glow: 'shadow-[0_0_12px_rgba(0,240,255,0.25)]',
          dot: 'bg-cyan-400'
        };
      case 'particle':
        return {
          bg: 'bg-fuchsia-950/80',
          border: 'border-fuchsia-400/60',
          text: 'text-fuchsia-300',
          badge: 'bg-fuchsia-500 text-white',
          glow: 'shadow-[0_0_12px_rgba(255,42,141,0.25)]',
          dot: 'bg-fuchsia-400'
        };
      case 'object':
        return {
          bg: 'bg-emerald-950/80',
          border: 'border-emerald-400/60',
          text: 'text-emerald-300',
          badge: 'bg-emerald-500 text-slate-950',
          glow: 'shadow-[0_0_12px_rgba(16,185,129,0.25)]',
          dot: 'bg-emerald-400'
        };
      case 'verb':
        return {
          bg: 'bg-amber-950/80',
          border: 'border-amber-400/60',
          text: 'text-amber-300',
          badge: 'bg-amber-500 text-slate-950',
          glow: 'shadow-[0_0_12px_rgba(245,158,11,0.25)]',
          dot: 'bg-amber-400'
        };
      case 'batchim':
      case 'tone':
        return {
          bg: 'bg-purple-950/80',
          border: 'border-purple-400/60',
          text: 'text-purple-300',
          badge: 'bg-purple-500 text-white',
          glow: 'shadow-[0_0_12px_rgba(168,85,247,0.25)]',
          dot: 'bg-purple-400'
        };
      case 'removal':
        return {
          bg: 'bg-rose-950/80',
          border: 'border-rose-400/60',
          text: 'text-rose-300',
          badge: 'bg-rose-500 text-white',
          glow: 'shadow-[0_0_12px_rgba(244,63,94,0.25)]',
          dot: 'bg-rose-400'
        };
    }
  };

  const style = getStyles(component.type);

  if (size === 'sm') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg border text-xs font-semibold ${style.bg} ${style.border} ${style.text} ${style.glow}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
        <span className="font-['Noto_Sans_KR'] font-bold">{component.text}</span>
        <span className="text-[10px] opacity-75 font-normal">[{component.label}]</span>
      </span>
    );
  }

  return (
    <div
      className={`p-3 rounded-2xl border transition-all ${style.bg} ${style.border} ${style.glow} flex flex-col justify-between gap-1.5`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${style.badge}`}>
          {component.label}
        </span>
        {component.subtext && (
          <span className="text-[10px] text-slate-400 italic">{component.subtext}</span>
        )}
      </div>

      <div className="flex items-baseline gap-2">
        <span className={`text-xl font-black font-['Noto_Sans_KR'] ${style.text}`}>
          {component.text}
        </span>
        {component.phonetic && (
          <span className="text-xs text-slate-300 font-mono">({component.phonetic})</span>
        )}
      </div>
    </div>
  );
};
