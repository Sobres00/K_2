import React, { useState } from 'react';
import { Flame, Volume2, Sparkles, MessageCircle, MapPin, Award } from 'lucide-react';
import { AtomicLesson, RegionalSlangItem } from '../types';
import { speakKorean, speakMandarin, playChimeSound } from '../utils/audio';

interface RegionalSlangSpaceProps {
  lesson: AtomicLesson;
}

export const RegionalSlangSpace: React.FC<RegionalSlangSpaceProps> = ({ lesson }) => {
  const [activeSpeaking, setActiveSpeaking] = useState<string | null>(null);

  const isKorean = lesson.language === 'korean';

  const handleSpeak = async (text: string, id: string) => {
    setActiveSpeaking(id);
    if (isKorean) {
      await speakKorean(text, 0.85);
    } else {
      await speakMandarin(text, 0.85);
    }
    setActiveSpeaking(null);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* 1. Header Ribbon */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-purple-950/90 via-[#12082b]/95 to-slate-950/95 border-2 border-fuchsia-400/40 shadow-[0_0_35px_rgba(255,42,141,0.2)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-fuchsia-950/90 border border-fuchsia-400/50 text-fuchsia-300 shadow-[0_0_12px_rgba(255,42,141,0.3)]">
              Espacio 4: Bóveda de Jergas & Modismos Regionales
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-950/80 border border-cyan-400/40 text-cyan-300">
              Cultura Urbana Viva
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
            Palabras y Expresiones Exclusivas de Nativos
          </h2>

          <p className="text-xs text-slate-300 max-w-2xl">
            Lo que ningún libro tradicional enseña: modismos callejeros de Seúl e Itaewon, dialectos de provincias (Busan Satoori), jergas virales de WeChat/Douyin y acento de Beijing con sus equivalentes coloquiales en México.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-black/60 border border-fuchsia-500/30 text-center shrink-0">
          <Flame className="w-6 h-6 text-fuchsia-400 mx-auto mb-1 animate-pulse" />
          <span className="text-xs font-bold text-fuchsia-300 block">Autenticidad 100%</span>
        </div>
      </div>

      {/* 2. Grid of Regional Slangs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {lesson.regionalSlang.map((slang: RegionalSlangItem, idx: number) => {
          const isSpeaking = activeSpeaking === `slang-${idx}`;

          return (
            <div
              key={idx}
              className="rounded-3xl p-6 bg-slate-900/80 border border-white/10 hover:border-fuchsia-400/50 transition-all space-y-4 shadow-xl relative overflow-hidden group"
            >
              {/* Slang Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-fuchsia-950 border border-fuchsia-400/40 text-fuchsia-300 uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-fuchsia-400" />
                      <span>{slang.regionOrContext}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white font-['Noto_Sans_KR']">
                    {slang.term}
                  </h3>

                  <div className="text-xs text-cyan-300 font-mono">{slang.phonetic}</div>
                </div>

                <button
                  type="button"
                  onClick={() => handleSpeak(slang.term.split(' ')[0], `slang-${idx}`)}
                  className={`w-10 h-10 rounded-2xl bg-slate-800 border border-white/10 text-cyan-300 flex items-center justify-center hover:border-cyan-400 transition-all shadow-md ${
                    isSpeaking ? 'animate-pulse ring-2 ring-cyan-400 text-cyan-400' : ''
                  }`}
                  title="Escuchar pronunciación nativa"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              {/* Meaning & Mexican Equivalent */}
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-0.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Significado & Origen:
                  </span>
                  <p className="text-slate-200 font-medium leading-relaxed">{slang.meaning}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-300 font-bold text-xs flex items-center gap-2 shadow-sm">
                  <span className="text-base">🇲🇽</span>
                  <span>{slang.mexicanEquivalent}</span>
                </div>
              </div>

              {/* Real Life Dialogue Example */}
              <div className="p-4 rounded-2xl bg-[#090618] border border-white/10 space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Diálogo en la Vida Real:</span>
                  </span>
                </div>

                <div className="font-['Noto_Sans_KR'] text-sm text-slate-100 font-bold">
                  {slang.exampleDialogue.dialogue}
                </div>

                <div className="text-cyan-300 italic text-[11px]">
                  "{slang.exampleDialogue.spanish}"
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
