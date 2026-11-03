import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Volume2, BookOpen, Sparkles, Layers, Maximize2 } from 'lucide-react';
import { HskTextbookPage } from '../types';
import { HSK_TEXTBOOK_PAGES } from '../data/dualCurriculum';
import { speakMandarin, playClickSound } from '../utils/audio';

interface HskTextbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPreviewImage: (url: string) => void;
}

export const HskTextbookModal: React.FC<HskTextbookModalProps> = ({
  isOpen,
  onClose,
  onPreviewImage
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [speakingWord, setSpeakingWord] = useState<string | null>(null);

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-gradient-to-b from-[#0f0b24] via-[#0b081c] to-[#060410] border border-cyan-400/40 rounded-3xl shadow-[0_0_50px_rgba(0,240,255,0.3)] overflow-hidden my-auto flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#120c2e]/90 border-b border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-red-500 p-0.5 shadow-md flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-extrabold text-white font-['Outfit']">
                  Libro Oficial HSK 1 Standard Course (北京语言大学)
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 border border-cyan-400/50 text-cyan-300 font-bold">
                  Página {page.pageNumber} de {HSK_TEXTBOOK_PAGES.length}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Páginas originales integradas con fonética de audio, trazos pictográficos y notas de cátedra
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-800/80 border border-white/15 text-slate-300 hover:text-white hover:bg-rose-950/60 hover:border-rose-500 flex items-center justify-center transition-all"
            title="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: High-Res Textbook Page Image (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-400/30 bg-black/90 shadow-2xl flex items-center justify-center group">
              <img
                src={page.imagePath}
                alt={page.title}
                className="w-full max-h-[58vh] object-contain rounded-xl"
              />
              <button
                type="button"
                onClick={() => onPreviewImage(page.imagePath)}
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-black/80 hover:bg-black text-xs font-bold text-cyan-300 border border-cyan-400/50 backdrop-blur-md flex items-center gap-1.5 shadow-lg group-hover:scale-105 transition-transform"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Ver en Pantalla Completa</span>
              </button>
            </div>

            {/* Page Navigation Controller */}
            <div className="flex items-center justify-between gap-2 p-2 rounded-2xl bg-slate-900/80 border border-white/10">
              <button
                type="button"
                onClick={handlePrev}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center gap-1 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Página Anterior</span>
              </button>

              <span className="text-xs font-extrabold text-cyan-300">
                Pág. {page.pageNumber} ({currentPageIndex + 1} / {HSK_TEXTBOOK_PAGES.length})
              </span>

              <button
                type="button"
                onClick={handleNext}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:opacity-90 text-xs font-bold text-white flex items-center gap-1 transition-all shadow-md"
              >
                <span>Siguiente Página</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Thumbnail Strip */}
            <div className="flex items-center gap-2 overflow-x-auto py-1 px-1">
              {HSK_TEXTBOOK_PAGES.map((p, idx) => (
                <button
                  key={p.pageNumber}
                  type="button"
                  onClick={() => {
                    playClickSound();
                    setCurrentPageIndex(idx);
                  }}
                  className={`w-12 h-16 rounded-lg overflow-hidden border shrink-0 transition-all ${
                    idx === currentPageIndex
                      ? 'border-cyan-400 ring-2 ring-cyan-400/50 scale-105'
                      : 'border-white/15 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={p.imagePath} alt={`Pág ${p.pageNumber}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Breakdown & Audio Words (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Title & Lesson Header */}
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/10 space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-fuchsia-400">
                {page.lessonNumber}
              </span>
              <h4 className="text-base font-bold text-white font-['Outfit']">{page.title}</h4>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {page.focusTopics.map((topic, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 font-medium"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Professor Note */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-purple-950/50 border border-purple-500/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Nota de Cátedra de la Dra. Li Wei:</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">{page.professorNotes}</p>
            </div>

            {/* Core Characters Evolution (if present on this page) */}
            {page.coreCharacters && page.coreCharacters.length > 0 && (
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-amber-500/30 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-amber-300">
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-amber-400" />
                    <span>Evolución Pictográfica de Caracteres:</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {page.coreCharacters.map((c) => (
                    <div
                      key={c.char}
                      className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3"
                    >
                      <button
                        type="button"
                        onClick={() => handleSpeak(c.char)}
                        className="w-12 h-12 rounded-xl bg-amber-950/60 border border-amber-400/50 flex flex-col items-center justify-center shrink-0 hover:scale-105 transition-transform"
                        title="Tocar para escuchar pronunciación"
                      >
                        <span className="text-xl font-black text-amber-300 font-['Noto_Sans_SC']">{c.char}</span>
                        <span className="text-[9px] text-amber-200">{c.pinyin}</span>
                      </button>

                      <div className="text-[11px] space-y-0.5">
                        <div className="text-slate-200">
                          <strong className="text-amber-400">Origen: </strong>
                          {c.pictogramOrigin}
                        </div>
                        <div className="text-slate-400">
                          <strong>Trazos: </strong>
                          {c.evolution}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Audio Vocabulary Practice List */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-cyan-400/30 space-y-2">
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
                    className="p-2.5 rounded-xl bg-slate-800/70 hover:bg-cyan-950/60 border border-white/10 hover:border-cyan-400/50 text-left flex items-center justify-between gap-2 transition-all group"
                  >
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base font-bold text-white font-['Noto_Sans_SC'] group-hover:text-cyan-300">
                          {item.word}
                        </span>
                        <span className="text-[11px] text-cyan-400 font-medium">{item.pinyin}</span>
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
    </div>
  );
};
