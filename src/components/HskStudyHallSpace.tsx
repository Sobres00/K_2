import React, { useState } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, Volume2, Sparkles, Layers, Maximize2 } from 'lucide-react';
import { HskTextbookPage } from '../types';
import { HSK_TEXTBOOK_PAGES } from '../data/dualCurriculum';
import { speakMandarin, playClickSound } from '../utils/audio';

interface HskStudyHallSpaceProps {
  onPreviewImage: (url: string) => void;
}

export const HskStudyHallSpace: React.FC<HskStudyHallSpaceProps> = ({ onPreviewImage }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [speakingWord, setSpeakingWord] = useState<string | null>(null);

  const page: HskTextbookPage = HSK_TEXTBOOK_PAGES[currentPageIndex];

  const handleSpeak = async (word: string) => {
    setSpeakingWord(word);
    await speakMandarin(word, 0.8);
    setSpeakingWord(null);
  };

  const handlePrev = () => {
    playClickSound();
    setCurrentPageIndex((prev) => (prev > 0 ? prev - 1 : HSK_TEXTBOOK_PAGES.length - 1));
  };

  const handleNext = () => {
    playClickSound();
    setCurrentPageIndex((prev) => (prev < HSK_TEXTBOOK_PAGES.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* 1. Header Banner */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-amber-950/80 via-[#1a0e28]/95 to-slate-950/95 border-2 border-amber-400/40 shadow-[0_0_35px_rgba(245,158,11,0.2)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-950/90 border border-amber-400/50 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.3)]">
              Espacio 5: Salón de Estudio Libro HSK 1 Oficial
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-950/80 border border-cyan-400/40 text-cyan-300">
              12 Páginas Integradas
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
            Material Didáctico Oficial: Beijing Language and Culture University
          </h2>

          <p className="text-xs text-slate-300 max-w-2xl">
            Inspecciona las 12 páginas originales de tu libro HSK 1 Standard Course con pronunciación de audio nativo, descomposición de trazos caligráficos y notas de evolución pictográfica.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-black/60 border border-amber-500/30 text-center shrink-0">
          <BookOpen className="w-6 h-6 text-amber-400 mx-auto mb-1" />
          <span className="text-xs font-bold text-amber-300 block">Pág. {page.pageNumber} de 12</span>
        </div>
      </div>

      {/* 2. Main Inspection Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: High-Res Book Page & Controller (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/40 bg-black shadow-2xl flex items-center justify-center group min-h-[460px]">
            <img
              src={page.imagePath}
              alt={page.title}
              className="w-full max-h-[70vh] object-contain rounded-2xl"
            />
            <button
              type="button"
              onClick={() => onPreviewImage(page.imagePath)}
              className="absolute bottom-4 right-4 px-3.5 py-2 rounded-xl bg-black/85 hover:bg-black text-xs font-bold text-amber-300 border border-amber-400/50 backdrop-blur-md flex items-center gap-2 shadow-xl group-hover:scale-105 transition-transform"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Ver en Pantalla Completa</span>
            </button>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-slate-900/90 border border-white/10 shadow-lg">
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center gap-1.5 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Página Anterior</span>
            </button>

            <span className="text-xs font-black text-amber-300 font-['Outfit']">
              Página Oficial {page.pageNumber} ({currentPageIndex + 1} / {HSK_TEXTBOOK_PAGES.length})
            </span>

            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-95 text-xs font-black text-slate-950 flex items-center gap-1.5 transition-all shadow-md"
            >
              <span>Siguiente Página</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Thumbnails Filmstrip */}
          <div className="flex items-center gap-2.5 overflow-x-auto py-1 px-1">
            {HSK_TEXTBOOK_PAGES.map((p, idx) => (
              <button
                key={p.pageNumber}
                type="button"
                onClick={() => {
                  playClickSound();
                  setCurrentPageIndex(idx);
                }}
                className={`w-14 h-20 rounded-xl overflow-hidden border shrink-0 transition-all ${
                  idx === currentPageIndex
                    ? 'border-amber-400 ring-2 ring-amber-400/60 scale-105 shadow-md'
                    : 'border-white/15 opacity-55 hover:opacity-100'
                }`}
              >
                <img src={p.imagePath} alt={`Pág ${p.pageNumber}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Academic Annotations & Audio Vocabulary (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Page Title & Focus Topics */}
          <div className="p-5 rounded-3xl bg-slate-900/80 border border-white/10 space-y-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
              {page.lessonNumber}
            </span>
            <h3 className="text-base sm:text-lg font-black text-white font-['Outfit']">
              {page.title}
            </h3>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {page.focusTopics.map((topic, i) => (
                <span
                  key={i}
                  className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-950/70 border border-amber-500/30 text-amber-200 font-semibold"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Dra. Li Wei Cátedra Note */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-indigo-950/40 to-purple-950/50 border border-purple-500/30 space-y-2 shadow-lg">
            <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Nota de Cátedra de la Dra. Li Wei:</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              {page.professorNotes}
            </p>
          </div>

          {/* Core Characters Pictographic Evolution (if present) */}
          {page.coreCharacters && page.coreCharacters.length > 0 && (
            <div className="p-5 rounded-3xl bg-slate-900/80 border border-amber-500/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Evolución Pictográfica de Caracteres:</span>
              </div>

              <div className="space-y-2.5">
                {page.coreCharacters.map((c) => (
                  <div
                    key={c.char}
                    className="p-3 rounded-2xl bg-black/40 border border-white/5 flex items-start gap-3"
                  >
                    <button
                      type="button"
                      onClick={() => handleSpeak(c.char)}
                      className="w-12 h-12 rounded-xl bg-amber-950/70 border border-amber-400/50 flex flex-col items-center justify-center shrink-0 hover:scale-105 transition-transform"
                      title="Escuchar pronunciación"
                    >
                      <span className="text-xl font-black text-amber-300 font-['Noto_Sans_SC']">
                        {c.char}
                      </span>
                      <span className="text-[9px] text-amber-200">{c.pinyin}</span>
                    </button>

                    <div className="text-xs space-y-0.5">
                      <div className="text-slate-200">
                        <strong className="text-amber-400">Origen: </strong>
                        {c.pictogramOrigin}
                      </div>
                      <div className="text-slate-400 text-[11px]">
                        <strong>Trazos: </strong>
                        {c.evolution}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Audio Vocabulary Practice for this Page */}
          <div className="p-5 rounded-3xl bg-slate-900/80 border border-cyan-400/30 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-cyan-300">
              <div className="flex items-center gap-1.5">
                <Volume2 className="w-4 h-4 text-cyan-400" />
                <span>Vocabulario con Audio Nativo de esta Página:</span>
              </div>
              <span className="text-[10px] text-slate-400">Toca para escuchar</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {page.audioVocab.map((item) => (
                <button
                  key={item.word}
                  type="button"
                  onClick={() => handleSpeak(item.word)}
                  className="p-2.5 rounded-2xl bg-slate-800/70 hover:bg-cyan-950/60 border border-white/10 hover:border-cyan-400/50 text-left flex items-center justify-between gap-2 transition-all group"
                >
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-base font-bold text-white font-['Noto_Sans_SC'] group-hover:text-cyan-300">
                        {item.word}
                      </span>
                      <span className="text-xs text-cyan-400 font-medium">{item.pinyin}</span>
                    </div>
                    <div className="text-[11px] text-slate-400">{item.spanish}</div>
                  </div>

                  <Volume2
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      speakingWord === item.word ? 'text-cyan-400 scale-125 animate-pulse' : 'text-slate-500'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
