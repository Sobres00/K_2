import React, { useState } from 'react';
import { Volume2, Sparkles, ChevronDown, ChevronUp, Layers, Award, Gauge } from 'lucide-react';
import { AtomicLesson, DetailedExample } from '../types';
import { GrammarChip } from './GrammarChip';
import { speakKorean, speakMandarin, playClickSound, playChimeSound } from '../utils/audio';

interface AtomicExamplesSpaceProps {
  lesson: AtomicLesson;
}

export const AtomicExamplesSpace: React.FC<AtomicExamplesSpaceProps> = ({ lesson }) => {
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const [activeSpeaking, setActiveSpeaking] = useState<string | null>(null);
  const [speechSpeed, setSpeechSpeed] = useState<number>(0.85); // 0.85 normal, 0.65 didáctica

  const isKorean = lesson.language === 'korean';

  const handleSpeak = async (text: string, identifier: string) => {
    setActiveSpeaking(identifier);
    if (isKorean) {
      await speakKorean(text, speechSpeed);
    } else {
      await speakMandarin(text, speechSpeed);
    }
    setActiveSpeaking(null);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Space Header & Controls Bar */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#120a2e]/90 via-[#0d0822]/95 to-[#060414]/95 border-2 border-cyan-400/40 shadow-[0_0_35px_rgba(0,240,255,0.2)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-fuchsia-950/90 border border-fuchsia-400/50 text-fuchsia-300 shadow-[0_0_12px_rgba(255,42,141,0.3)]">
              Espacio 2: Galería de 16 Ejemplos Atómicos
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-950/80 border border-cyan-400/40 text-cyan-300">
              Desglose Trilingüe & Código de Color
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
            16 Modelos de Oración Analizados Pieza por Pieza
          </h2>

          <p className="text-xs text-slate-300 max-w-2xl">
            Cada ejemplo cuenta con su desglose de piezas anatómicas coloreadas, equivalencia entre Coreano, Chino y Español, fonética mexicana y audio.
          </p>
        </div>

        {/* Speed Control Toggle */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-black/60 border border-white/10 shrink-0 self-start md:self-auto">
          <div className="flex items-center gap-1.5 px-2 text-xs font-bold text-slate-400">
            <Gauge className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Velocidad:</span>
          </div>
          <button
            type="button"
            onClick={() => setSpeechSpeed(0.85)}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
              speechSpeed === 0.85
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_10px_#00f0ff]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Normal (0.85x)
          </button>
          <button
            type="button"
            onClick={() => setSpeechSpeed(0.65)}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
              speechSpeed === 0.65
                ? 'bg-fuchsia-500 text-white shadow-[0_0_10px_#ff2a8d]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Lenta Didáctica (0.65x)
          </button>
        </div>
      </div>

      {/* Grid of the 16 Detailed Atomic Examples */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {lesson.examples16.map((ex: DetailedExample) => {
          const isExpanded = expandedId === ex.id;
          const isSpeaking = activeSpeaking === `ex-${ex.id}`;

          return (
            <div
              key={ex.id}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                isExpanded
                  ? 'bg-slate-900/95 border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.25)] ring-1 ring-cyan-400/40'
                  : 'bg-slate-900/70 border-white/10 hover:border-fuchsia-500/40'
              }`}
            >
              {/* Card Header (Always visible) */}
              <div
                onClick={() => {
                  playClickSound();
                  setExpandedId(isExpanded ? null : ex.id);
                }}
                className="p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer select-none"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-black flex items-center justify-center shrink-0">
                    #{ex.id}
                  </span>

                  <div>
                    <div className="text-xl font-black text-white font-['Noto_Sans_KR']">
                      {ex.original}
                    </div>
                    <div className="text-xs text-cyan-300 font-bold">{ex.naturalSpanish}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSpeak(ex.audioText, `ex-${ex.id}`);
                    }}
                    className={`w-9 h-9 rounded-xl bg-slate-800 border border-white/10 hover:border-cyan-400 text-cyan-300 flex items-center justify-center transition-all ${
                      isSpeaking ? 'animate-pulse text-cyan-400 ring-2 ring-cyan-400' : ''
                    }`}
                    title="Escuchar pronunciación nativa"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>

                  <div className="text-slate-400 p-1">
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-cyan-400" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* Expanded Space with Full Color-Coded Breakdown */}
              {isExpanded && (
                <div className="px-4 sm:px-5 pb-5 pt-1 space-y-4 border-t border-white/10">
                  {/* Mexican Phonetic Guide */}
                  <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-xs space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 block">
                      🇲🇽 Guía Fonética de Pronunciación para Mexicanos:
                    </span>
                    <p className="text-slate-100 font-mono text-xs">{ex.phoneticGuide}</p>
                  </div>

                  {/* Anatomical Color Chips */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                      Desglose de Componentes Coloreados:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <GrammarChip
                        component={{
                          type: 'subject',
                          label: '1. Sujeto / Palabra',
                          text: ex.deconstruction.subjectOrPerson
                        }}
                      />
                      <GrammarChip
                        component={{
                          type: 'particle',
                          label: '2. Pegamento / Etiqueta',
                          text: ex.deconstruction.glueParticleOrLabel || 'Etiqueta activa',
                          subtext: ex.deconstruction.whyThisGlue
                        }}
                      />
                    </div>
                  </div>

                  {/* Literal Piece-by-Piece Assembly */}
                  <div className="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Ensamblaje Anatómico:
                    </span>
                    <div className="text-xs text-slate-200 font-medium">{ex.literalBreakdown}</div>
                  </div>

                  {/* Trilingual Equivalents if available */}
                  {(ex.chineseText || ex.koreanText) && (
                    <div className="p-3 rounded-2xl bg-[#0d0922] border border-cyan-400/30 space-y-1 text-xs">
                      <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">
                        Equivalente Trilingüe:
                      </span>
                      {ex.chineseText && (
                        <div className="text-slate-200">
                          🇨🇳 Chino: <strong className="font-['Noto_Sans_SC']">{ex.chineseText}</strong>{' '}
                          {ex.chinesePinyin && <span className="text-cyan-300">({ex.chinesePinyin})</span>}
                        </div>
                      )}
                      {ex.koreanText && (
                        <div className="text-slate-200">
                          🇰🇷 Coreano: <strong className="font-['Noto_Sans_KR']">{ex.koreanText}</strong>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Academic Cátedra Note */}
                  <div className="p-3.5 rounded-2xl bg-purple-950/30 border border-purple-500/30 text-xs text-slate-200 leading-relaxed">
                    <strong className="text-purple-300">Nota de Cátedra: </strong>
                    {ex.academicNote}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
